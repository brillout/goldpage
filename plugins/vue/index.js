require('@goldpage/html');

const config = require('@brillout/reconfig');


const domRender = require.resolve('./domRender');
const htmlRender = require.resolve('./htmlRender');

Object.assign(
  config.goldpage,
  {
    htmlRender,
    domRender,
  },
);


const webpackMod = require('./webpackMod');

config.goldpage.webpackBrowserConfig = config.goldpage.webpackBrowserConfig || [];
config.goldpage.webpackBrowserConfig.push(webpackMod);

config.goldpage.webpackNodejsConfig = config.goldpage.webpackNodejsConfig || [];
config.goldpage.webpackNodejsConfig.push(webpackMod);
