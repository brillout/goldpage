const router = require.resolve('./router');
const config = require('@brillout/reconfig');

config.ssrCoin.router = router;
config.ssrCoin.browserConfigs = config.ssrCoin.browserConfigs || [];
config.ssrCoin.browserConfigs.push('router');
