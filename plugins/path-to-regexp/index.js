const routerFile = require.resolve('./router');
const config = require('@brillout/reconfig');

config.GoldSSR.routerFile = routerFile;
config.GoldSSR.browserConfigs = config.GoldSSR.browserConfigs || [];
config.GoldSSR.browserConfigs.push('routerFile');
