const {reconfig} = require('@brillout/reconfig');
const HapiAdapter = require('@universal-adapter/hapi');
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

  assert(reconfig.ServerRenderingFile);
  assert(reconfig.StaticAssetsFile);
  const ServerRendering = require(reconfig.ServerRenderingFile);
  const StaticAssets = require(reconfig.StaticAssetsFile);
  assert(ServerRendering);
  assert(StaticAssets);

  const hapi = (
    new HapiAdapter([
      // Run `$ reframe eject server-rendering` to eject the server rendering code
      ServerRendering,
      // Run `$ reframe eject server-assets` to eject the static asset serving code
      StaticAssets,
    ])
  );

  Object.assign(
    this,
    {
      build,
      hapi,
    },
  );

  async function build() {
    const runBuild = require(reconfig.runBuildFile);
    await runBuild();
  }
}
