import React from 'react';
import ReactDOM from 'react-dom';

export default renderToDom;

async function renderToDom({page, initialProps, CONTAINER_ID}) {
  ReactDOM.hydrate(
    React.createElement(page.view, initialProps),
    document.getElementById(CONTAINER_ID)
  );
}
