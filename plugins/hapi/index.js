const {reconfig} = require('@brillout/reconfig');

reconfig.serverAdapters = reconfig.serverAdapters || {};
Object.defineProperty(
  reconfig.serverAdapters,
  'hapi',
  {get: getHapiPlugin},
);
/*
Object.assign(
  reconfig,
  {
    serverAdapters: ObjectExtend({
      hapi: getHapiPlugin(),
    }),
  },
);
*/

let hapiPlugin;

function getHapiPlugin() {
  console.log('g', hapi);
  if( !hapiPlugin ) {
    const HapiAdapter = require('@universal-adapter/hapi');
    const assert = require('reassert');

    assert(reconfig.ServerRenderingFile);
    assert(reconfig.StaticAssetsFile);
    const ServerRendering = require(reconfig.ServerRenderingFile);
    const StaticAssets = require(reconfig.StaticAssetsFile);
    assert(ServerRendering);
    assert(StaticAssets);

    hapiPlugin = (
      new HapiAdapter([
        ServerRendering,
        StaticAssets,
      ])
    );
  }

  assert.internal(hapiPlugin);
  return hapiPlugin;
}
