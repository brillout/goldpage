const Build = require('webpack-ssr/Build');
const watchDir = require('webpack-ssr/watchDir');
const assert = require('reassert');

const reconfig = require('@brillout/reconfig');

module.exports = runBuild;

let alreadyRun = false;

function runBuild() {
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
  } = reconfig.GoldSSR;

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
  });

  watchDir(pagesDir, () => {build()});

  return build();
}

let onBuildPromise;
let alreadyQueued;
async function onBuildDone(...args) {
  const {onBuild} = reconfig.GoldSSR;
  if( alreadyQueued ) return;
  if( onBuildPromise ) {
    alreadyQueued = true;
    await onBuildPromise;
    alreadyQueued = false;
  }
  if( onBuild ){
    onBuildPromise = onBuild(...args);
  }
}

// We assemble several webpack config modifiers into one supra modifier
function assemble_modifiers(modifier_name) {
    // `config` holds a webpack config
    let supra_modifier = ({config}) => config;

    const modifiers = reconfig.GoldSSR[modifier_name];

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
    const pathModule = require('path');

    const {
      pagesDir,
      getPageConfigFiles,
    } = reconfig.GoldSSR;
    const configFileNames = getPageConfigFiles();

    assert.usage(configFileNames.constructor===Array);
    const pageConfigFiles = {};

    configFileNames
    .filter(isNotDraft)
    .forEach(pageConfigFile => {
        assert.internal(pageConfigFile);
        const pageName = getPageName(pageConfigFile, pagesDir);
        assert.usage(
            !pageConfigFiles[pageName],
            "The page configs `"+pageConfigFiles[pageName]+"` and `"+pageConfigFile+"` have the same page name `"+pageName+"`.",
            "Rename one of the two page files."
        );
        assert.internal(pageName);
        pageConfigFiles[pageName] = pageConfigFile;
    });

    return pageConfigFiles;

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
