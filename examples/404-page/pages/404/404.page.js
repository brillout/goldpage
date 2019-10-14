import React from 'react';
import './404.css';

export default {
  route: '*',
  view: ({pathname}) => (
    <div className="pageContent">
      <h1>404</h1>
      Page <code>{pathname}</code> doesn't exist.
    </div>
  ),
  renderToHtml: true,
};
