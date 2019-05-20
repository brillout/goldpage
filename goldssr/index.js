const config = require('@brillout/reconfig');
const assert = require('reassert');
const path = require('path');
const ProjectFiles = require('@brillout/project-files');

config.GoldSSR = {};

const autoload = require('@brillout/autoload');
const {packageJsonFile, loaded: loadedPlugins} = autoload();

require('@goldssr/core');
require('@goldssr/browser');
require('@goldssr/server');
/*
require('@goldssr/react');
require('@goldssr/path-to-regexp');
require('@goldssr/webpack');
require('@goldssr/hapi');
//*/

module.exports = GoldSSR;

function GoldSSR({
  pagesDir='pages/',
  buildDir='.build/',
  log,
  ...opts
}={}) {

  const {projectDir, findProjectFiles} = new ProjectFiles();

  pagesDir = path.resolve(projectDir, pagesDir);
  buildDir = path.resolve(projectDir, buildDir);

  Object.assign(
    config.GoldSSR,
    {
      logOptions: log,
      pagesDir,
      buildDir,
      getPageConfigFiles: () => {
        const pageConfigs = findProjectFiles('*\.page-config\.*', {within: buildDir});
        assert.usage(
          pageConfigs.length>=1,
          "No files with the `.page-config.` suffix found in `"+pagesDir+"`.",
          "You need to define at least one page config file.",
        );
        return pageConfigs;
      },
    },
    opts,
  );

  Object.assign(
    this,
    config.GoldSSR.serverAdapters,
    {build},
  );
  Object.defineProperty(
    this,
    'hapi',
    {get: getHapiPlugin},
  )
}

async function build() {
  /*
  assert.usage(
    loadedPlugins.length>0,
    "No GoldSSR Plugins loaded. Add some to "+packageJsonFile,
  );
  */
  const buildConfigMissing = !config.GoldSSR.runBuild;
  assert.usage(
    buildConfigMissing,
    {loadedPlugins},
    "A builder plugin is missing. Add one, such as `@goldssr/webpack`, to "+packageJsonFile,
  );
  const runBuild = require(config.GoldSSR.runBuildFile);
  await runBuild();
}

function getHapiPlugin() {
  return config.GoldSSR.serverAdapters.getHapiPlugin();
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
