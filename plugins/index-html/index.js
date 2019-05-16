const renderPageToDomFile = require.resolve('./renderPageToDom');
const renderPageToHtmlFile = require.resolve('./renderPageToHtml');

const {config, AppendArray} = require('@brillout/reconfig');

Object.assign(
  config,
  {
    renderPageToHtmlFile,
    renderPageToDomFile,
    browserConfigs: AppendArray(['renderPageToDomFile']),
    browserConfigs: AppendArray(['renderToDomFile']),
  },
);
