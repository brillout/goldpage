const config = require('@brillout/reconfig');
const assert = require('@brillout/reassert');
const KoaAdapter = require('@universal-adapter/koa');

config.ssrCoin.serverAdapters = config.ssrCoin.serverAdapters || {};
config.ssrCoin.serverAdapters.koa = (
  new KoaAdapter(() => {
    const {StaticAssets, ServerRendering} = config.ssrCoin;
    assert.internal(StaticAssets);
    assert.internal(ServerRendering);
    return [
      ServerRendering,
      StaticAssets,
    ];
  })
);
