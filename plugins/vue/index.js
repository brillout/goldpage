require('@ssr-coin/html');

const config = require('@brillout/reconfig');


const domRender = require.resolve('./domRender');
const htmlRender = require.resolve('./htmlRender');

Object.assign(
  config.ssrCoin,
  {
    htmlRender,
    domRender,
  },
);


const webpackMod = require('./webpackMod');

config.ssrCoin.webpackBrowserConfig = config.ssrCoin.webpackBrowserConfig || [];
config.ssrCoin.webpackBrowserConfig.push(webpackMod);

config.ssrCoin.webpackNodejsConfig = config.ssrCoin.webpackNodejsConfig || [];
config.ssrCoin.webpackNodejsConfig.push(webpackMod);
