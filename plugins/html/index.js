const renderPageToDom = require.resolve('./renderPageToDom');
const renderPageToHtml = require.resolve('./renderPageToHtml');

const config = require('@brillout/reconfig');

Object.assign(
  config.goldpage,
  {
    renderPageToHtml,
    renderPageToDom,
  },
);

config.goldpage.browserConfigs = config.goldpage.browserConfigs || [];
config.goldpage.browserConfigs.push('renderPageToDom', 'domRender');
