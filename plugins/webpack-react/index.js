const webpackBrowserConfig = require('./webpackBrowserConfig');
const webpackNodejsConfig = require('./webpackNodejsConfig');

const config = require('@brillout/reconfig');

config.GoldSSR.webpackBrowserConfig = config.GoldSSR.webpackBrowserConfig || [];
config.GoldSSR.webpackBrowserConfig.push(webpackBrowserConfig);

config.GoldSSR.webpackNodejsConfig = config.GoldSSR.webpackNodejsConfig || [];
config.GoldSSR.webpackNodejsConfig.push(webpackNodejsConfig);
