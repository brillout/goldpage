require('@ssr-coin/html');

const webpackBrowserConfig = require('./webpackBrowserConfig');
const webpackNodejsConfig = require('./webpackNodejsConfig');

const renderToDom = require.resolve('./renderToDom');
const renderToHtml = require.resolve('./renderToHtml');

const config = require('@brillout/reconfig');

Object.assign(
  config.ssrCoin,
  {
    renderToHtml,
    renderToDom,
  },
);

config.ssrCoin.webpackBrowserConfig = config.ssrCoin.webpackBrowserConfig || [];
config.ssrCoin.webpackBrowserConfig.push(webpackBrowserConfig);

config.ssrCoin.webpackNodejsConfig = config.ssrCoin.webpackNodejsConfig || [];
config.ssrCoin.webpackNodejsConfig.push(webpackNodejsConfig);
