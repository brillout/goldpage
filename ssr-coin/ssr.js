require('source-map-support/register');

const config = require('@brillout/reconfig');
const assert = require('reassert');
const path = require('path');
const {projectDir, findFiles} = require('@brillout/project-files');

const {loadDependencies} = require('@brillout/autoload');

module.exports = create_ssr();

function create_ssr() {
  config.ssrCoin = {};

  require('@ssr-coin/core');
  require('@ssr-coin/browser');
  require('@ssr-coin/server');
  require('@ssr-coin/path-to-regexp');
  require('@ssr-coin/webpack');

  const {packageJsonFile, loaded: loadedPlugins} = loadDependencies();

  config.ssrCoin.projectDir = projectDir;

  const ssr = new SSR();

  // Default values
  ssr.pagesDir = 'pages/';
  // ssr.serverEntryFile = 'server/';
  ssr.buildDir = '.build/';

  applySsrCoinConfig();

  return ssr;

  function SSR() {

    config.ssrCoin.getPageConfigFiles = () => {
      assert.usage(
        ssr.pagesDir,
        "You need to set `pagesDir`",
      );
      const pageConfigs = findFiles('*.page.*'/*, {within: ssr.pagesDir}*/);
      assert.usage(
        pageConfigs.length>=1,
        "No files with the `.page.` suffix found in `"+ssr.pagesDir+"`.",
        "You need to define at least one page config file.",
      );
      return pageConfigs;
    };

    this.build = build;
    Object.assign(
      this,
      config.ssrCoin.serverAdapters,
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
        config.ssrCoin.logOptions = config.ssrCoin.logOptions || {};
        prop = 'logOptions';
        return true;
      }
      */
      if( prop==='silent' ){
        config.ssrCoin.logOptions = config.ssrCoin.logOptions || {};
        config.ssrCoin.logOptions.onlyLogFailure = true;
        return true;
      }

      config.ssrCoin[prop] = value;

      return true;
    }

    function get(ssr_obj, prop) {
      const value = ssr_obj[prop];
      if( isServerMiddleware(prop) ){
        assert.usage(
          value,
          "The plugin `@ssr-coin/"+prop+"` needs to be listed in the `dependencies` list of "+packageJsonFile,
          "Did you `npm install @ssr-coin/"+prop+"`?",
          "Once `@ssr-coin/"+prop+"` is listed as dependency, it is automatically loaded and require('ssr-coin')."+prop+" available.",
        );
        autobuild();
      }
      return value;
    }
  }

  function applySsrCoinConfig() {
    assert.internal(projectDir);
    let ssrCoinConfigPath = path.resolve(projectDir, 'ssr-coin.config.js');
    try {
      ssrCoinConfigPath = require.resolve(ssrCoinConfigPath);
    } catch(err) {
      return;
    }
    const ssrCoinConfig = require(ssrCoinConfigPath);
    Object.assign(
      ssr,
      ssrCoinConfig,
    );
  }

  function isServerMiddleware(prop) {
    return ['express', 'koa', 'hapi'].includes(prop);
  }

  function autobuild() {
    process.nextTick(() => {
      if( isDev() && !config.ssrCoin.buildStarted && !process.env.ALREADY_BUILT ){
        build();
      }
    });
  }

  async function build() {
    /*
    assert.usage(
      loadedPlugins.length>0,
      "No ssrCoin Plugins loaded. Add some to "+packageJsonFile,
    );
    */
    const isMissing = !!config.ssrCoin.runBuild;
    assert.usage(
      isMissing,
      {loadedPlugins},
      "A builder plugin is missing. Add one, such as `@ssr-coin/webpack`, to "+packageJsonFile,
    );
    await config.ssrCoin.runBuild();
  }

  /*
  function assert_reconfig() {
    assert_usage(
      config.ssrCoin.rend,
      {loadedPlugins},
      "A builder plugin is missing. Add one, such as `@ssr-coin/webpack`, to "+packageJsonFile,
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
