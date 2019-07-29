const vueLoader = require.resolve('vue-loader');
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = webpackNodejsConfig;

function webpackNodejsConfig({config, setRule}) {
  /*
  const assert = require('@brillout/reassert');
  if( !config.plugins.find(plugin => isVuePlugin(plugin)) ) {
    const plugin = new VueLoaderPlugin();
    assert.internal(isVuePlugin(plugin));
    config.plugins.push(new VueLoaderPlugin());
  }
  function isVuePlugin(thing) {
    return thing instanceof VueLoaderPlugin;
  }
  */

  config.plugins = config.plugins || [];
  config.plugins.push(new VueLoaderPlugin());

  setRule(config, '.vue', {use: [vueLoader]});

  return config;
}
