const {reconfig} = require('@brillout/reconfig');
const assert = require('reassert');
const path = require('path');
const ProjectFiles = require('@brillout/project-files');

const autoload = require('@brillout/autoload');
//const {packageJsonFile, loaded: loadedPlugins} = autoload();
autoload();

require('@goldssr/core');
require('@goldssr/browser');
require('@goldssr/server');

module.exports = GoldSSR;

function GoldSSR({
  pagesDir='pages/',
  buildDir='.build/',
  log,
}={}) {

  const {projectDir, findProjectFiles} = new ProjectFiles();

  pagesDir = path.resolve(projectDir, pagesDir);
  buildDir = path.resolve(projectDir, buildDir);

  Object.assign(
    reconfig,
    {
      logOptions: log,
      pagesDir,
      buildDir,
      getPageConfigFiles: () => {
        const pageConfigs = findProjectFiles('*.page-config.js', {within: buildDir});
        assert.usage(
          pageConfigs.length>=1,
          "No files ending with `.page-config.js` found in `"+pagesDir+"`.",
          "You need to define at least one page config file.",
        );
        return pageConfigs;
      },
      /*
      projectFiles: {
        pagesDir,
        buildOutputDir: __dirname+'/dist',
      },
      getPageConfigFiles: () => {
        ({welciPagi: require.resolve('../example/pages/landing-page')}),
      },
      */
    }
  );

  Object.assign(
    this,
    reconfig.serverAdapters,
    {build},
  );
  Object.defineProperty(
    this,
    'hapi',
    {get: getHapiPlugin},
  )
}

async function build() {
  const runBuild = require(reconfig.runBuildFile);
  await runBuild();
}

function getHapiPlugin() {
  return reconfig.serverAdapters.getHapiPlugin();
}

/*
function assert_reconfig() {
  const buildConfigMissing = !reconfig.runBuild;
  const 
  assert_usage(
    loadedPlugins.length>0,
    "No GoldSSR Plugins loaded. Add some to "+packageJsonFile,
  );
  assert_usage(
    buildConfigMissing,
    {loadedPlugins},
    "A builder plugin is missing. Add one, such as `@goldssr/webpack`, to "+packageJsonFile,
  );
  assert_usage(
    reconfig.rend,
    {loadedPlugins},
    "A builder plugin is missing. Add one, such as `@goldssr/webpack`, to "+packageJsonFile,
  );
}
*/
