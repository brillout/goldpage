let Vue = require('vue');
Vue = Vue.default || Vue;

module.exports = getViewInstance;

function getViewInstance(view, initialProps) {
  if( view instanceof Function ){
    return view(initialProps);
  } else {
    return (
      new Vue({
        render: createElement => createElement(view, {props: initialProps}),
      })
    );
  }
}
