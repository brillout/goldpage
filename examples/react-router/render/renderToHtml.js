const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {StaticRouter} = require('react-router');

module.exports = htmlRender;

async function htmlRender({page, initialProps}) {
  const {pathname, search, hash} = initialProps;
  return (
    ReactDOMServer.renderToStaticMarkup(
      React.createElement(
        StaticRouter,
        {location: {pathname, search, hash, state: undefined}, context: {}},
        React.createElement(
          page.view,
          initialProps
        )
      )
    )
  );
}
