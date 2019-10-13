import React from 'react';
import './404.css';

export default {
  route: '/:route',
  view: ({route}) => (
    <div className="pageContent">
      <h1>404</h1>
      Page <code>{route}</code> doesn't exist.
    </div>
  ),
  renderToHtml: true,
};
