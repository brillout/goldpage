import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

export default domRender;

async function domRender({page, initialProps, CONTAINER_ID}) {
  ReactDOM.hydrate(
    <BrowserRouter>
      <page.view {...initialProps}/>
    </BrowserRouter>,
    document.getElementById(CONTAINER_ID)
  );
}
