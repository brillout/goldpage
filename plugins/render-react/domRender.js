import React from 'react';
import ReactDOM from 'react-dom';

export default domRender;

async function domRender({page, initialProps, CONTAINER_ID}) {
  ReactDOM.hydrate(
    React.createElement(page.view, initialProps),
    document.getElementById(CONTAINER_ID)
  );
}
