const React = require('react');
const ReactDOM = require('react-dom');

module.exports = renderToDom;

async function renderToDom({pageConfig, initialProps, CONTAINER_ID}) {
  ReactDOM.hydrate(
    React.createElement(pageConfig.view, initialProps),
    document.getElementById(CONTAINER_ID)
  );
}
