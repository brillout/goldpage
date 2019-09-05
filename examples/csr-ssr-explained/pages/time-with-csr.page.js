import Time from './Time';

export default {
  route: '/time-with-csr',
  view: Time,

  // We do CSR:
  renderToDom: true,
  renderToHtml: false,
};
