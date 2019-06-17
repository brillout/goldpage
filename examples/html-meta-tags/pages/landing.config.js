import './commons.js';
import React from 'react';

export default {
  // Add <title>Welcome</title>
  title: 'Welcome',

  // Add <meta name="description" content="A welcome page."/>
  description: 'A welcome page.',

  // Add <script src="https://example.org/awesome-lib.js" type="text/javascript"></script>
  scripts: [
    'https://example.org/awesome-lib.js',
  ],

  // Add <link href="https://example.org/awesome-lib.css" rel="stylesheet"/>
  styles: [
    'https://example.org/awesome-lib.css',
  ],

  // ssr-coin uses the package @brillout/index-html (https://github.com/brillout/index-html) to generate HTML.
  // All @brillout/index-html's options are avaible over the page config

  route: '/',
  view: () => <h1>Welcome</h1>,
};
