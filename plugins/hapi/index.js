const {reconfig} = require('@brillout/reconfig');

reconfig.serverAdapters = reconfig.serverAdapters || {};
reconfig.serverAdapters.getHapiPlugin = getHapiPlugin;
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
  const assert = require('reassert');

  if( !hapiPlugin ) {
    const HapiAdapter = require('@universal-adapter/hapi');

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
  assert.internal(hapiPlugin.name);
  assert.internal(hapiPlugin.register);
  return hapiPlugin;
}
