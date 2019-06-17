const {Glitter} = require('./views/Glitter');

const GlitterPage = {
  route: '/',
  title: 'Glamorous Page',
  view: Glitter,
  doNotRenderInBrowser: true,
};

module.exports = GlitterPage;
