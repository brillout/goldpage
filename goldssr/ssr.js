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
  const {fileExport: userConfig} = loadFile('goldssr.config.js');
  Object.assign(
    ssr,
    userConfig,
  );
})();

module.exports = ssr;

function create_ssr() {
  config.GoldSSR = {};

  const {packageJsonFile, loaded: loadedPlugins} = loadDependencies();

  require('@goldssr/core');
  require('@goldssr/browser');
  require('@goldssr/server');
  /*
  require('@goldssr/react');
  require('@goldssr/path-to-regexp');
  require('@goldssr/webpack');
  require('@goldssr/hapi');
  //*/

  return new GoldSSR();

  function GoldSSR() {
    const {projectDir, findProjectFiles} = new ProjectFiles();

    config.GoldSSR.getPageConfigFiles = () => {
      assert.usage(
        ssr.pagesDir,
        "You need to set `pagesDir`",
      );
      const pageConfigs = findProjectFiles('*.page-config.*', {within: ssr.pagesDir});
      assert.usage(
        pageConfigs.length>=1,
        "No files with the `.page-config.` suffix found in `"+ssr.pagesDir+"`.",
        "You need to define at least one page config file.",
      );
      return pageConfigs;
    };

    this.build = build;
    Object.assign(
      this,
      config.GoldSSR.serverAdapters,
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

      config.GoldSSR[prop] = value;

      return true;
    }

    function get(ssr_obj, prop) {
      if( !(prop in ssr_obj) ) {
        const server_adapter_getter = config.GoldSSR.serverAdapters['get_'+prop];
        if( server_adapter_getter ) {
          return server_adapter_getter();
        }
      }

      return ssr_obj[prop];
    }
  }

  async function build() {
    /*
    assert.usage(
      loadedPlugins.length>0,
      "No GoldSSR Plugins loaded. Add some to "+packageJsonFile,
    );
    */
    const isMissing = !!config.GoldSSR.runBuild;
    assert.usage(
      isMissing,
      {loadedPlugins},
      "A builder plugin is missing. Add one, such as `@goldssr/webpack`, to "+packageJsonFile,
    );
    await config.GoldSSR.runBuild();
  }

  /*
  function assert_reconfig() {
    assert_usage(
      config.GoldSSR.rend,
      {loadedPlugins},
      "A builder plugin is missing. Add one, such as `@goldssr/webpack`, to "+packageJsonFile,
    );
  }
  */
}
