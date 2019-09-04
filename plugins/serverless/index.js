require('@goldpage/server');

const config = require('@brillout/reconfig');

config.goldpage.defaultPageConfig = config.goldpage.defaultPageConfig || {};
config.goldpage.defaultPageConfig.renderHtmlAtBuildTime = true;
