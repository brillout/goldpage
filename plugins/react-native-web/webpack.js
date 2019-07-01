require('@ssr-coin/webpack-react');
const webpackBrowserConfig = require('./webpackBrowserConfig');
const webpackNodejsConfig = require('./webpackNodejsConfig');

const config = require('@brillout/reconfig');

config.ssrCoin.webpackBrowserConfig = config.ssrCoin.webpackBrowserConfig || [];
config.ssrCoin.webpackBrowserConfig.push(webpackBrowserConfig);

config.ssrCoin.webpackNodejsConfig = config.ssrCoin.webpackNodejsConfig || [];
config.ssrCoin.webpackNodejsConfig.push(webpackNodejsConfig);
