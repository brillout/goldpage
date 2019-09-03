const React = require('react');
const {AppRegistry} = require('react-native-web');

module.exports = domRender;

async function domRender({page, initialProps, CONTAINER_ID}) {
  const viewElement = React.createElement(page.view, initialProps);
  AppRegistry.registerComponent('App', () => () => viewElement);

  AppRegistry.runApplication('App', {
    initialProps,
    rootTag: document.getElementById(CONTAINER_ID),
  });
}
