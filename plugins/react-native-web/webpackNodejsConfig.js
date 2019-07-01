const babelPresetReactNativeWebPath = require.resolve('babel-plugin-react-native-web');

module.exports = webpackNodejsConfig;

function webpackNodejsConfig({addBabelPlugin, config}) {
  addBabelPlugin(config, babelPresetReactNativeWebPath);
  return config;
}
