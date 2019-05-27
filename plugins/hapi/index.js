const config = require('@brillout/reconfig');
const assert = require('@brillout/reassert');
const HapiAdapter = require('@universal-adapter/hapi');

config.ssrCoin.serverAdapters = config.ssrCoin.serverAdapters || {};
config.ssrCoin.serverAdapters.hapi = (
  new HapiAdapter(() => {
    const {StaticAssets, ServerRendering} = config.ssrCoin;
    assert.internal(StaticAssets);
    assert.internal(ServerRendering);
    return [
      ServerRendering,
      StaticAssets,
    ];
  })
);
