// We use Goldpage to create a page with SSR.

import React from 'react';

export default {
  route: '/ssr-example',
  view: SomeText,

  // SSR renders the page to HTML.
  renderToHtml: true,

  // We do SSR only: we don't render the page to the DOM.
  // (We could also do both SSR *and* CSR
  // which we explain later.)
  renderToDom: false,
};

function SomeText() {
  return (
   <div>
     <h1>Some Content</h1>
     Lorem ipsum dolor sit amet, consectetur adipiscing
     elit, sed do eiusmod tempor incididunt ut labore
     et dolore magna aliqua.  Ut enim ad minim veniam,
     quis nostrud exercitation ullamco laboris nisi ut
     aliquip ex ea commodo consequat. Duis aute irure
     dolor in reprehenderit in voluptate velit esse
     cillum dolore eu fugiat nulla pariatur. Excepteur
     sint occaecat cupidatat non proident, sunt in culpa
     qui officia deserunt mollit anim id est laborum.
   </div>
  );
};
