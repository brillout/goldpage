import React from 'react';

export default {
  // Adds <title>Welcome</title>
  title: 'Welcome',

  // Adds <meta name="description" content="A welcome page."/>
  description: 'A welcome page.',

  // Adds <script src="https://example.org/awesome-lib.js" type="text/javascript"></script>
  scripts: [
    'https://example.org/awesome-lib.js',
  ],

  // Adds <link href="https://example.org/awesome-lib.css" rel="stylesheet"/>
  styles: [
    'https://example.org/awesome-lib.css',
  ],

  // ssr-coin uses the package @brillout/html (https://github.com/brillout/html) to generate HTML.
  // All @brillout/html's options are avaible over the page config

  route: '/',
  view: () => <h1>Welcome</h1>,
};
