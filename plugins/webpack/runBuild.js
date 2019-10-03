const Build = require('webpack-ssr/Build');
const watchDir = require('webpack-ssr/watchDir');
const assert = require('reassert');
const pathModule = require('path');

const reconfig = require('@brillout/reconfig');

module.exports = runBuild;

let alreadyRun = false;

function runBuild() {
  reconfig.goldpage.buildStarted = true;
  assert.usage(
    alreadyRun===false,
    "You can start the build only once.",
  );

  const getWebpackBrowserConfig = ({config, ...utils}) => {
    const webpackBrowserConfigModifier = assemble_modifiers('webpackBrowserConfig');
    return webpackBrowserConfigModifier({config, ...utils});
  };
  const getWebpackNodejsConfig = ({config, ...utils}) => {
    const webpackNodejsConfigModifier = assemble_modifiers('webpackNodejsConfig');
    return webpackNodejsConfigModifier({config, ...utils});
  };
  const {
    logOptions,
    doNotWatchBuildFiles,
    pagesDir,
    buildDir: outputDir,
    getPageHtmlsFile,
    getPageBrowserEntriesFile,
    transpileServerCode,
    serverEntryFile,
    autoReloadPort=3128,
  } = reconfig.goldpage;

  const getPageHtmls = require(getPageHtmlsFile);
  const getPageBrowserEntries = require(getPageBrowserEntriesFile);
  const entryFileServer = transpileServerCode!==false && serverEntryFile;

  const build = new Build({
      outputDir,
      getPageFiles,
      getPageBrowserEntries,
      getPageHtmls,
      getWebpackBrowserConfig,
      getWebpackNodejsConfig,
      logOptions,
      doNotWatchBuildFiles,
      entryFileServer,
      onBuildDone,
      onBuildStart,
      autoReloadPort,
  });

  watchDir(pagesDir, () => {build()});

  return build();
}

let onBuildPromise;
let alreadyQueued;
async function onBuildDone(...args) {
  const {onBuildEnd} = reconfig.goldpage;
  if( alreadyQueued ) return;
  if( onBuildPromise ) {
    alreadyQueued = true;
    await onBuildPromise;
    alreadyQueued = false;
  }
  if( onBuildEnd ){
    onBuildPromise = onBuildEnd(...args);
    await onBuildPromise;
  }
}

function onBuildStart(...args) {
  if( reconfig.goldpage.onBuildStart ) {
    return reconfig.goldpage.onBuildStart(...args);
  }
}

// We assemble several webpack config modifiers into one supra modifier
function assemble_modifiers(modifier_name) {
    // `config` holds a webpack config
    let supra_modifier = ({config}) => config;

    const modifiers = reconfig.goldpage[modifier_name] || [];

    // We assemble all `configParts`'s config modifiers into one `supra_modifier`
    modifiers
    .forEach(modifier => {
        assert.usage(modifier instanceof Function, modifier);
        const previous_modifier = supra_modifier;
        supra_modifier = (
            args => {
                const config = previous_modifier(args);
                const config__new = modifier({...args, config});
                assert.usage(
                    config__new,
                    "A `"+modifier_name+"`" +
                    " is returning `"+config__new+"` but it should be returning a webpack config instead."
                );
                return config__new;
            }
        );
    });

    return supra_modifier;
}

function getPageFiles() {
    const {
      pagesDir,
      getPageConfigFiles,
    } = reconfig.goldpage;
    const configFilePaths = getPageConfigFiles();

    assert.usage(configFilePaths.constructor===Array);
    assert.usage(configFilePaths.every(filePath => pathModule.isAbsolute(filePath)));
    const pageFiles = {};

    stripSameSuffixAndPrefix(
      configFilePaths
      .filter(isNotDraft)
    )
    .forEach(({original, stripped}) => {
      const pageName = stripped;
      const pageConfigFile = original;
      assert.internal(pageName);
      assert.internal(pageConfigFile);
      pageFiles[pageName] = pageConfigFile;
    });

    return pageFiles;

  function isNotDraft(filePath) {
      // We filter out file names that contain a special character in their extension
      // In order to filter out draft files
      // E.g. VIM saves drafts with a `~` ending such as `/path/to/file.js~`
      const fileExtension = filePath.split('.').slice(-1)[0];
      return /^[a-zA-Z0-9]*$/.test(fileExtension);
  }

  function getPageName(pageConfigFile, pagesDir) {
      const endPath = pathModule.relative(pagesDir, pageConfigFile);
      assert.internal(!endPath.startsWith(pathModule.sep), endPath, pageConfigFile);
      assert.internal(!endPath.startsWith('.'), endPath, pageConfigFile);
      const pageName = endPath.split(pathModule.sep).slice(-1)[0].split('.')[0];
      assert.internal(pageName, endPath, pageConfigFile);
      return pageName;
  }
}

/*
Transform array, from:
  [
    '/path/to/pages/index.page.js'
    '/path/to/pages/landing/index.page.js'
    '/path/to/pages/hello.page.js'
  ]
to:
  [
    {
      original: '/path/to/pages/index.page.js',
      stripped: 'index',
    },
    {
      original: '/path/to/pages/landing/index.page.js',
      stripped: 'landing/index',
    },
    {
      original: 'hello',
      stripped: '/path/to/pages/hello.page.js',
    },
  ]
*/
function stripSameSuffixAndPrefix(arr) {
  assert_self();

  return doIt(arr);

  function assert_self() {
    const res = doIt(
      [
        '/path/to/pages/index.page.js',
        '/path/to/pages/landing/index.page.js',
        '/path/to/pages/hello.page.js',
      ]
    );
    assert.internal(res[0].original==='/path/to/pages/index.page.js');
    assert.internal(res[0].stripped==='index', res);
    assert.internal(res[1].stripped==='landing/index');
    assert.internal(res[2].stripped==='hello');

    assert.internal(doIt([]).length===0);

    assert.internal(doIt(['/path/to/pages/index.page.js'])[0].stripped==='index');
  }

  function doIt(arr) {
    assert.internal(isUnique(arr), {arr});
    assert.internal(arr.every(p => pathModule.isAbsolute(p)), {arr});
    if( arr.length===0 ){
      return arr;
    }

    const arrNew = [];

    const firstPath = arr[0];

    let prefix = pathModule.dirname(firstPath)+'/';
    let suffix = pathModule.basename(firstPath).split('.').map(s => '.'+s).slice(1).join('');

    // Assert edge case when there is only one page config
    assert.internal(firstPath.startsWith(prefix), {firstPath, prefix});
    assert.internal(firstPath.endsWith(suffix), {firstPath, suffix});
    assert.internal(removePrefixAndSuffix(firstPath, prefix, suffix).length>0, {firstPath, prefix, suffix});

    arr.forEach(filePath => {
      for(let i = 0; i<prefix.length; i++) {
        if( prefix[i]!==filePath[i] ){
          prefix = prefix.slice(0, i);
          break;
        }
      }
      for(let i = 0; i<suffix.length; i++) {
        if( suffix[suffix.length-1-i]!==filePath[filePath.length-1-i] ) {
          suffix = suffix.slice(suffix.length-i, suffix.length);
          break;
        }
      }
    });

    arr.forEach(filePath => {
      const stripped = removePrefixAndSuffix(filePath, prefix, suffix);
      assert.internal(stripped.length>0, {filePath, stripped});
      arrNew.push({
        original: filePath,
        stripped,
      });
    });

    assert.internal(isUnique(arrNew), {arr, arrNew});
    return arrNew;
  }

  function removePrefixAndSuffix(filePath, prefix, suffix) {
    const stripped = filePath.slice(prefix.length, filePath.length-suffix.length);
    return stripped;
  }
}

function isUnique(arr) {
  assert.internal(arr.constructor===Array);
  return arr.length===[...new Set(arr)].length;
}
