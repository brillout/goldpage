import React from 'react';

export default {
  route: '/',
  view: () => (
    <div>
      This example exposes two ways to load & render data:
      <ul>
        <li>
          <a href="/dom">/dom</a> that renders the data to the DOM.
        </li>
        <li>
          <a href="/html">/html</a> that renders the data to HTML.
        </li>
      </ul>
    </div>
  ),
  renderToHtml: true,
};
