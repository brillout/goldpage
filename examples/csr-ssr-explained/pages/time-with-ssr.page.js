import Time from './Time';

export default {
  route: '/time-with-ssr',
  view: Time,

  // We do SSR:
  renderToDom: false,
  renderToHtml: true,
};
