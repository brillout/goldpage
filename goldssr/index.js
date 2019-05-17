const {reconfig} = require('@brillout/reconfig');
const assert = require('reassert');

require('@goldssr/core');
require('@goldssr/browser');
require('@goldssr/server');
const autoload = require('@brillout/autoload');

autoload();

module.exports = GoldSSR;

function GoldSSR(options) {
  Object.assign(
    reconfig,
    {
      projectFiles: {
        pagesDir: __dirname+'/pages',
        buildOutputDir: __dirname+'/dist',
      },
      getPageConfigFiles: () => ({welciPagi: require.resolve('../example/pages/landing-page')}),
    }
  );

  Object.assign(
    this,
    reconfig.serverAdapters,
    {build},
  );
}

async function build() {
  const runBuild = require(reconfig.runBuildFile);
  await runBuild();
}
