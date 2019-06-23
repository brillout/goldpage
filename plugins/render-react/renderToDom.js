const React = require('react');
const ReactDOM = require('react-dom');

module.exports = renderToDom;

async function renderToDom({page, initialProps, CONTAINER_ID}) {
  ReactDOM.hydrate(
    React.createElement(page.view, initialProps),
    document.getElementById(CONTAINER_ID)
  );
}
