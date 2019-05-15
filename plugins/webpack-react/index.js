const renderToDomFile = require.resolve('./renderToDom');
const renderToHtmlFile = require.resolve('./renderToHtml');
const webpackBrowserConfig = require('./webpackBrowserConfig');
const webpackNodejsConfig = require('./webpackNodejsConfig');

const {config, AppendArray} = require('@brillout/reconfig');

Object.assign(
  config,
  {
    renderToHtmlFile,

    renderToDomFile,
    browserConfigs: AppendArray(['renderToDomFile']),

    webpackBrowserConfig: AppendArray([webpackBrowserConfig]),
    webpackNodejsConfig: AppendArray([webpackNodejsConfig]),
  },
);
