const {Glitter} = require('./views/Glitter');

const GlitterPage = {
  route: '/',
  title: 'Glamorous Page',
  view: Glitter,
  renderToDom: false,
  renderToHtml: true,
};

module.exports = GlitterPage;
