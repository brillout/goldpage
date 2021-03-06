const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('@brillout/reconfig');

// The server doesn't load any CSS
// Thus we modify only the browser config and not the server config

config.goldpage.webpackBrowserConfig = config.goldpage.webpackBrowserConfig || [];
config.goldpage.webpackBrowserConfig.push(webpackMod);

function webpackMod({config: webpackConfig, setRule}) {
  const loaderOptions = config.goldpage.postcss;

  const use = [
    require.resolve('css-loader'),
    {
      loader: require.resolve('postcss-loader'),
      options: loaderOptions,
    },
  ];

  if( webpackConfig.plugins.find(plugin => plugin instanceof MiniCssExtractPlugin) ) {
    use.unshift(MiniCssExtractPlugin.loader);
  }

  setRule(webpackConfig, '.css', {use});

  return webpackConfig;
}
