// This example uses Goldpage to create a CSR page.

import React from 'react';

export default {
  route: '/csr-example',
  view: SomeText,

  // We do CSR: we render the page to the DOM.
  renderToDom: true,

  // We do CSR only: we don't render the page to HTML.
  // (We could also do both CSR *and* SSR
  // which we explain later.)
  renderToHtml: false,
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
