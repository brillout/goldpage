import React from 'react';

export default {
  route: '/org/:org',
  view: ({org}) => (
    <div>
     Org {org} page.
    </div>
  ),
  renderToHtml: true,
};
