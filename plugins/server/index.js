const ServerRenderingFile = require.resolve('./ServerRendering');
const StaticAssetsFile = require.resolve('./StaticAssets');
const config = require('@brillout/reconfig');

Object.assign(
  config.GoldSSR,
  {
    ServerRenderingFile,
    StaticAssetsFile,
  },
);
