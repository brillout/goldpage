const React = require('react');
const {AppRegistry} = require('react-native-web');

module.exports = renderToDom;

async function renderToDom({page, initialProps, CONTAINER_ID}) {
  AppRegistry.registerComponent('App', () => () => React.createElement(page.view, initialProps));

  AppRegistry.runApplication('App', {
    initialProps,
    rootTag: document.getElementById(CONTAINER_ID),
  });
}
