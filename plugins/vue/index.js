require('@ssr-coin/html');

const config = require('@brillout/reconfig');


const renderToDom = require.resolve('./renderToDom');
const renderToHtml = require.resolve('./renderToHtml');

Object.assign(
  config.ssrCoin,
  {
    renderToHtml,
    renderToDom,
  },
);


const webpackMod = require('./webpackMod');

config.ssrCoin.webpackBrowserConfig = config.ssrCoin.webpackBrowserConfig || [];
config.ssrCoin.webpackBrowserConfig.push(webpackMod);

config.ssrCoin.webpackNodejsConfig = config.ssrCoin.webpackNodejsConfig || [];
config.ssrCoin.webpackNodejsConfig.push(webpackMod);
