import React from 'react';

export default {
  route: '/:org/:repo',
  view: ({org, repo}) => (
    <div>
     Repo {org}/{repo} page.
    </div>
  ),
  renderToHtml: true,
};
