require('@ssr-coin/hapi');
const serverFile = require.resolve('./server');

const config = require('@brillout/reconfig');

config.ssrCoin.serverEntryFile = serverFile;

config.ssrCoin.defaultPageConfig = config.ssrCoin.defaultPageConfig || {};
config.ssrCoin.defaultPageConfig.renderHtmlAtBuildTime = true;
