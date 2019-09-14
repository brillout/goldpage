import React from 'react';

export default {
  route: '/about',
  view: () => (
    <div>
      This a non-interactive & static about page.
    </div>
  ),

  // Static & non-interactive
  renderToDom: false,
  renderToHtml: true,
  renderHtmlAtBuildTime: true,
};
