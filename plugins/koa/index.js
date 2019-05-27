const config = require('@brillout/reconfig');
const assert = require('@brillout/reassert');
const KoaAdapter = require('@universal-adapter/koa');

config.GoldSSR.serverAdapters = config.GoldSSR.serverAdapters || {};
config.GoldSSR.serverAdapters.hapi = (
  new KoaAdapter(() => {
    const {StaticAssets, ServerRendering} = config.GoldSSR;
    assert.internal(StaticAssets);
    assert.internal(ServerRendering);
    return [
      ServerRendering,
      StaticAssets,
    ];
  })
);
