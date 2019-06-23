const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = renderToHtml;

async function renderToHtml({page, initialProps}) {
  return (
    ReactDOMServer.renderToStaticMarkup(
      React.createElement(page.view, initialProps)
    )
  );
}
