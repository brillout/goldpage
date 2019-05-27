const config = require('@brillout/reconfig');
const assert = require('@brillout/reassert');
const HapiAdapter = require('@universal-adapter/hapi');

config.GoldSSR.serverAdapters = config.GoldSSR.serverAdapters || {};
config.GoldSSR.serverAdapters.hapi = (
  new HapiAdapter(() => {
    const {StaticAssets, ServerRendering} = config.GoldSSR;
    assert.internal(StaticAssets);
    assert.internal(ServerRendering);
    return [
      ServerRendering,
      StaticAssets,
    ];
  })
);
