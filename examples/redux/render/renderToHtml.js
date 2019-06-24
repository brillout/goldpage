const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {Provider} = require('react-redux');

module.exports = renderToHtml;

async function renderToHtml({page, initialProps, CONTAINER_ID}) {
  const {store} = initialProps;
  const viewHtml = (
    '<div id='+CONTAINER_ID+'>'+
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          Provider,
          {store},
          React.createElement(
            page.view,
            initialProps
          )
        )
      ) +
    '</div>'
  );

  // We provide the browser with the initial state
  const state = store.getState();
  const stateHtml = `
    <script>
    window.__PRELOADED_STATE__ = ${stringifyState(state)};
    </script>`;

  return {
    body: [
      stateHtml,
      viewHtml,
    ],
  };
}

function stringifyState(state) {
  return (
    JSON.stringify(state)
    .replace(/</g, '\\u003c')
  );
}
