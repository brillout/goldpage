const routerFile = require.resolve('./router');
const config = require('@brillout/reconfig');

config.ssrCoin.routerFile = routerFile;
config.ssrCoin.browserConfigs = config.ssrCoin.browserConfigs || [];
config.ssrCoin.browserConfigs.push('routerFile');
