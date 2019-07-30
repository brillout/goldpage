import Vue from 'vue';
import getVueInstance from './getVueInstance';

export default renderToDom;

async function renderToDom({page, initialProps, CONTAINER_ID}) {
  const vm = getVueInstance(page.view, initialProps);

  vm.$mount('#'+CONTAINER_ID);
}
