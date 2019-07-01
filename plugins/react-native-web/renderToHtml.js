const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {AppRegistry} = require('react-native-web');

module.exports = renderToHtml;

async function renderToHtml({page, initialProps, CONTAINER_ID}) {
  AppRegistry.registerComponent('App', () => () => React.createElement(page.view, initialProps));

  const { element, getStyleElement } = AppRegistry.getApplication('App', { initialProps });

  const viewHtml = ReactDOMServer.renderToStaticMarkup(element);

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
