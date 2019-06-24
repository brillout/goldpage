import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

export default renderToDom;

async function renderToDom({page, initialProps, CONTAINER_ID}) {
  const {store} = initialProps;
  ReactDOM.hydrate(
    <Provider store={store}>
      <page.view {...initialProps}/>
    </Provider>,
    document.getElementById(CONTAINER_ID)
  );
}
