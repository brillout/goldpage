import Time from './Time';

export default {
  route: '/time-with-sr',
  view: Time,

  // We do Static Rendering:
  renderToDom: false,
  renderToHtml: true,
  renderHtmlAtBuildTime: true,
};
