require('source-map-support/register');

const config = require('@brillout/reconfig');
const assert = require('@brillout/reassert');
const path = require('path');
const {projectDir, findFiles} = require('@brillout/project-files');

const {loadDependencies} = require('@brillout/autoload');

module.exports = create_ssr();

function create_ssr() {
  config.goldpage = {};

  require('@goldpage/core');
  require('@goldpage/browser');
  require('@goldpage/server-universal-middleware');
  require('@goldpage/path-to-regexp');
  require('@goldpage/webpack');

  const {packageJsonFile, loaded: loadedPlugins} = loadDependencies();

  config.goldpage.projectDir = projectDir;

  const ssr = new SSR();

  // Default values
  ssr.pagesDir = 'pages/';
  // ssr.serverEntryFile = 'server/';
  ssr.buildDir = '.build/';

  applyGoldpageConfig();

  return ssr;

  function SSR() {

    config.goldpage.getPageConfigFiles = () => {
      assert.usage(
        ssr.pagesDir,
        "You need to set `pagesDir`",
      );
      const pageConfigs = findFiles('*.page.*'/*, {within: ssr.pagesDir}*/);
      assert.usage(
        pageConfigs.length>=1,
        "No files with the `.page` suffix found in `"+ssr.pagesDir+"`.",
        "You need to define at least one page config file.",
      );
      return pageConfigs;
    };

    this.build = build;
    Object.assign(
      this,
      config.goldpage.serverAdapters,
      {build},
    );

    return new Proxy(this, {set, get});

    function set(ssr_obj, prop, value) {
      if( ['pagesDir', 'buildDir', 'serverEntryFile'].includes(prop) ){
        value = path.resolve(projectDir, value);
      }

      ssr_obj[prop] = value;

      /*
      if( prop==='log' ){
        config.goldpage.logOptions = config.goldpage.logOptions || {};
        prop = 'logOptions';
        return true;
      }
      */
      if( prop==='silent' ){
        config.goldpage.logOptions = config.goldpage.logOptions || {};
        config.goldpage.logOptions.onlyLogFailure = true;
        return true;
      }

      config.goldpage[prop] = value;

      return true;
    }

    function get(ssr_obj, prop) {
      const value = ssr_obj[prop];
      if( isServerMiddleware(prop) ){
        assert.usage(
          value,
          "The plugin `@goldpage/"+prop+"` needs to be listed in the `dependencies` list of "+packageJsonFile,
          "Did you `npm install @goldpage/"+prop+"`?",
          "Once `@goldpage/"+prop+"` is listed as dependency, it is automatically loaded and require('goldpage')."+prop+" available.",
        );
        autobuild();
      }
      return value;
    }
  }

  function applyGoldpageConfig() {
    assert.internal(projectDir);
    let goldpageConfigPath = path.resolve(projectDir, 'goldpage.config.js');
    try {
      goldpageConfigPath = require.resolve(goldpageConfigPath);
    } catch(err) {
      return;
    }
    const goldpageConfig = require(goldpageConfigPath);
    Object.assign(
      ssr,
      goldpageConfig,
    );
  }

  function isServerMiddleware(prop) {
    return ['express', 'koa', 'hapi'].includes(prop);
  }

  function autobuild() {
    /*
    process.nextTick(() => {
      if( isDev() && !config.goldpage.buildStarted && !process.env.ALREADY_BUILT ){
        build();
      }
    });
    */
  }

  async function build() {
    /*
    assert.usage(
      loadedPlugins.length>0,
      "No goldpage Plugins loaded. Add some to "+packageJsonFile,
    );
    */
    const isMissing = !!config.goldpage.runBuild;
    assert.usage(
      isMissing,
      {loadedPlugins},
      "A builder plugin is missing. Add one, such as `@goldpage/webpack`, to "+packageJsonFile,
    );
    await config.goldpage.runBuild();
  }

  /*
  function assert_reconfig() {
    assert_usage(
      config.goldpage.rend,
      {loadedPlugins},
      "A builder plugin is missing. Add one, such as `@goldpage/webpack`, to "+packageJsonFile,
    );
  }
  */
}

function isDev() {
  if( [undefined, 'development'].includes(process.env.NODE_ENV) ){
    return true;
  }
  return false;
}
