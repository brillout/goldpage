const React = require('react');
const ReactDOM = require('react-dom');
const {BrowserRouter} = require('react-router-dom');

module.exports = renderToDom;

async function renderToDom({pageConfig, initialProps, CONTAINER_ID}) {
  console.log('sb', BrowserRouter);

  ReactDOM.hydrate(
    React.createElement(
      BrowserRouter,
      null,
      React.createElement(pageConfig.view, initialProps)
    ),
    document.getElementById(CONTAINER_ID)
  );
}
