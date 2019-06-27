import React from 'react';

export default {
  route: '/hello/{name}',
  view: ({name}) => (
    <div>Hello {name}</div>
  ),
};
