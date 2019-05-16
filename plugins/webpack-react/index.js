const webpackBrowserConfig = require('./webpackBrowserConfig');
const webpackNodejsConfig = require('./webpackNodejsConfig');

const {config, AppendArray} = require('@brillout/reconfig');

Object.assign(
  config,
  {
    webpackBrowserConfig: AppendArray([webpackBrowserConfig]),
    webpackNodejsConfig: AppendArray([webpackNodejsConfig]),
  },
);
