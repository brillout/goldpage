const config = require('@brillout/reconfig');

config.goldpage.webpackBrowserConfig = config.goldpage.webpackBrowserConfig || [];
config.goldpage.webpackBrowserConfig.push(webpackMod);

config.goldpage.webpackNodejsConfig = config.goldpage.webpackNodejsConfig || [];
config.goldpage.webpackNodejsConfig.push(webpackMod);

function webpackMod({config: webpackConfig, setRule, addExtension}) {
  const use = [
    require.resolve('babel-loader'),
    require.resolve('@mdx-js/loader'),
  ];

  setRule(webpackConfig, '.mdx', {use});

  addExtension(webpackConfig, '.mdx');

  return webpackConfig;
}
