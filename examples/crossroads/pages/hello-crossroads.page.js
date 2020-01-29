import React from 'react';

export default {
  route: '/hello/{name}',
  view: ({name}) => (
    <div>
      <h1>Hello {name}</h1>
      Statically routed with Crossroads.
    </div>
  ),
  renderToHtml: true,
};
