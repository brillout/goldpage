const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = renderToHtml;

async function renderToHtml({pageConfig, initialProps}) {
  return (
    ReactDOMServer.renderToStaticMarkup(
      React.createElement(pageConfig.view, initialProps)
    )
  );
}
