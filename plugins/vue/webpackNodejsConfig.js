const assert = require('@brillout/reassert');
const vueLoader = require.resolve('vue-loader');
//const VuePlugin = require('vue-loader/lib/plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = webpackNodejsConfig;

function webpackNodejsConfig({config, setRule}) {
//if( !config.plugins.find(plugin => isVuePlugin(plugin)) ) {
 // const plugin = new VuePlugin();
 // assert.internal(isVuePlugin(plugin));
    config.plugins = config.plugins || [];
  //console.log('pp', plugin);
    config.plugins.push(new VueLoaderPlugin());
//}

  console.log('vv',vueLoader);
  setRule(config, '.vue', {use: [vueLoader]});
//setRule(config, '.vue', {use: ['vue-loader']});

  return config;
}

/*
function isVuePlugin(thing) {
  return thing instanceof VuePlugin;
}
*/
