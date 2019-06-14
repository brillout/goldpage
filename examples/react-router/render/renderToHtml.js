const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {StaticRouter} = require('react-router');

module.exports = renderToHtml;

async function renderToHtml({pageConfig, initialProps, ...url}) {
  const location = {
      pathname: initialProps.route.url.pathname,
      search: initialProps.route.url.search,
      hash: initialProps.route.url.hash,
      state: undefined
  };

  return (
    ReactDOMServer.renderToStaticMarkup(
      React.createElement(
        StaticRouter,
        {location, context: {}},
        React.createElement(
          pageConfig.view,
          initialProps
        )
      )
    )
  );
}
