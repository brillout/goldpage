const React = require('react');
const ReactDOM = require('react-dom');
const {BrowserRouter} = require('react-router-dom');

module.exports = renderToDom;

async function renderToDom({page, initialProps, CONTAINER_ID}) {
  ReactDOM.hydrate(
    React.createElement(
      BrowserRouter,
      null,
      React.createElement(page.view, initialProps)
    ),
    document.getElementById(CONTAINER_ID)
  );
}
