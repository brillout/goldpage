const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');

module.exports = renderToDom;

async function renderToDom({page, initialProps, CONTAINER_ID}) {
  const {store} = initialProps;
  ReactDOM.hydrate(
    React.createElement(
      Provider,
      {store},
      React.createElement(page.view, initialProps)
    ),
    document.getElementById(CONTAINER_ID)
  );
}
