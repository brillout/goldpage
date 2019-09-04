require('@goldpage/hapi');
const serverFile = require.resolve('./server');

const config = require('@brillout/reconfig');

config.goldpage.serverEntryFile = serverFile;

config.goldpage.defaultPageConfig = config.goldpage.defaultPageConfig || {};
config.goldpage.defaultPageConfig.renderHtmlAtBuildTime = true;
