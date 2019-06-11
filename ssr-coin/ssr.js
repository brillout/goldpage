const config = require('@brillout/reconfig');
const assert = require('reassert');
const path = require('path');
const ProjectFiles = require('@brillout/project-files');
const {loadDependencies, loadFile} = require('@brillout/autoload');

const ssr = create_ssr();

// Default values
ssr.pagesDir = 'pages/';
ssr.serverEntryFile = 'server/';
ssr.buildDir = '.build/';

(() => {
  const {fileExport: userConfig} = loadFile('ssr-coin.config.js');
  Object.assign(
    ssr,
    userConfig,
  );
})();

module.exports = ssr;

function create_ssr() {
  config.ssrCoin = {};

  require('@ssr-coin/core');
  require('@ssr-coin/browser');
  require('@ssr-coin/server');
  require('@ssr-coin/path-to-regexp');
  require('@ssr-coin/webpack');

  const {packageJsonFile, loaded: loadedPlugins} = loadDependencies();

  return new SSR();

  function SSR() {
    const {projectDir, findProjectFiles} = new ProjectFiles();

    config.ssrCoin.getPageConfigFiles = () => {
      assert.usage(
        ssr.pagesDir,
        "You need to set `pagesDir`",
      );
      const pageConfigs = findProjectFiles('*.page.*', {within: ssr.pagesDir});
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

      if( prop==='log' ){
        prop = 'logOptions';
      }

      config.ssrCoin[prop] = value;

      return true;
    }

    function get(ssr_obj, prop) {
      const value = ssr_obj[prop];
      assert.usage(
        !['express', 'koa', 'hapi'].includes(prop) || value,
        "The plugin `@ssr-coin/"+prop+"` needs to be listed in the `dependencies` list of "+packageJsonFile,
        "Did you `npm install @ssr-coin/"+prop+"`?",
        "Once `@ssr-coin/"+prop+"` is listed as dependency, it is automatically loaded and require('ssr-coin')."+prop+" available.",
      );
      return value;
    }
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
