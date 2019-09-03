import Vue from 'vue';
import getVueInstance from './getVueInstance';

export default domRender;

async function domRender({page, initialProps, CONTAINER_ID}) {
  const vm = getVueInstance(page.view, initialProps);

  vm.$mount('#'+CONTAINER_ID);
}
