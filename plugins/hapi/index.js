const config = require('@brillout/reconfig');

config.GoldSSR.serverAdapters = config.GoldSSR.serverAdapters || {};
config.GoldSSR.serverAdapters.getHapiPlugin = getHapiPlugin;

let hapiPlugin;

function getHapiPlugin() {
  const assert = require('reassert');

  if( !hapiPlugin ) {
    const HapiAdapter = require('@universal-adapter/hapi');

    assert(config.GoldSSR.ServerRenderingFile);
    assert(config.GoldSSR.StaticAssetsFile);
    const ServerRendering = require(config.GoldSSR.ServerRenderingFile);
    const StaticAssets = require(config.GoldSSR.StaticAssetsFile);
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
