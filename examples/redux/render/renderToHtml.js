const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {Provider} = require('react-redux');

module.exports = renderToHtml;

async function renderToHtml({page, initialProps}) {
  const {store} = initialProps;
  return (
    ReactDOMServer.renderToStaticMarkup(
      React.createElement(
        Provider,
        {store},
        React.createElement(
          page.view,
          initialProps
        )
      )
    )
  );
}
