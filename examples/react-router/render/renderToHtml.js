const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {StaticRouter} = require('react-router');

module.exports = renderToHtml;

async function renderToHtml({pageConfig, initialProps, route}) {
  const location = {
      pathname: route.url.pathname,
      search: route.url.search,
      hash: route.url.hash,
      state: undefined
  };

  console.log('ss', StaticRouter);

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
