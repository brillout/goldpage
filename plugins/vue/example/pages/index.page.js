import Vue from 'vue';

export default {
  route: '/',
  view: () => new Vue({render: h => h('a', {attrs: {href: '/hello/jon'}}, '/hello/jon')}),
  renderToHtml: true,
};
