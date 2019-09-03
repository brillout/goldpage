const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {AppRegistry} = require('react-native-web');

module.exports = htmlRender;

async function htmlRender({page, initialProps, CONTAINER_ID}) {
  /*
  AppRegistry.registerComponent('App', () => page.view);
  /*/
  const viewElement = React.createElement(page.view, initialProps);
  AppRegistry.registerComponent('App', () => () => viewElement);
  //*/

  const { element, getStyleElement } = AppRegistry.getApplication('App', { initialProps });

  const viewHtml = ReactDOMServer.renderToStaticMarkup(element);

  // Bug: `styleHtml` doesn't inlcude user defined styles
  // Likely solution: make sure that all of react-native-web is compiled with webpack
  const styleHtml = ReactDOMServer.renderToStaticMarkup(getStyleElement());

  return {
    head: [
      styleHtml,
    ],
    body: [
      '<div id="'+CONTAINER_ID+'">'+viewHtml+'</div>',
    ]
  };
}
