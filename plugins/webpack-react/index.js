const webpackBrowserConfig = require('./webpackBrowserConfig');
const webpackNodejsConfig = require('./webpackNodejsConfig');

const config = require('@brillout/reconfig');

config.goldpage.webpackBrowserConfig = config.goldpage.webpackBrowserConfig || [];
config.goldpage.webpackBrowserConfig.push(webpackBrowserConfig);

config.goldpage.webpackNodejsConfig = config.goldpage.webpackNodejsConfig || [];
config.goldpage.webpackNodejsConfig.push(webpackNodejsConfig);
