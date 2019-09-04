const router = require.resolve('./router');
const config = require('@brillout/reconfig');

config.goldpage.router = router;
config.goldpage.browserConfigs = config.goldpage.browserConfigs || [];
config.goldpage.browserConfigs.push('router');
