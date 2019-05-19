const renderPageToDomFile = require.resolve('./renderPageToDom');
const renderPageToHtmlFile = require.resolve('./renderPageToHtml');

const config = require('@brillout/reconfig');

Object.assign(
  config.GoldSSR,
  {
    renderPageToHtmlFile,
    renderPageToDomFile,
  },
);

config.GoldSSR.browserConfigs = config.GoldSSR.browserConfigs || [];
config.GoldSSR.browserConfigs.push('renderPageToDomFile', 'renderToDomFile');
