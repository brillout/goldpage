import React from 'react';

export default {
  // `html` allows you to override the `index.html` file for a specific page:
  html: (
`<!DOCTYPE html>
<html>
  <head>
    <title>Title set over \`html\` option.</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    !HEAD
  </head>
  <body>
    !BODY
  </body>
</html>
`
  ),

  route: '/about',
  view: () => <h1>About Page</h1>,
  renderToHtml: true,
};
