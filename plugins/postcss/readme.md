<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/postcss/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/postcss/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/postcss/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/postcss/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/postcss/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->

Goldpage + PostCSS = :heart:

# `@goldpage/postcss`

Use Goldpage with PostCSS.

### Usage

Install `@goldpage/postcss`.

~~~shell
$ npm install @goldpage/postcss
~~~

The `ssr-coin/postcss` plugin is automatically loaded.

Configure PostCSS:

~~~js
module.exports = {
  // All options defined here are passed down as options for `postcss-loader`.
  // Thus, this is where you add PostCSS plugins, a PostCSS parser, etc.
  postcss: {
    plugins: [
      require('postcss-cssnext')()
    ],
    parser: 'sugarss',
  },
};
~~~

### Example

~~~sugarss
// ./example/pages/landing.css

:root
  --red: #f88
  --blue: #88f

.red-on-blue
  background-color: var(--blue)
  color: var(--red)

.blue-on-red
  background-color: var(--red)
  color: var(--blue)

.red-on-blue,
.blue-on-red
  font-size: 2em
  width: 300px
  padding: 20px
  margin: 10px
~~~

~~~js
// ./example/pages/landing.page.js

import React from 'react';
import './landing.css';

const LandingComponent = () => (
  <div>
    <div className="blue-on-red">
      Blue on red.
    </div>
    <div className="red-on-blue">
      Red on blue.
    </div>
  </div>
);

const LandingPage = {
  route: '/',
  view: LandingComponent,
  doNotRenderInBrowser: true,
};

export default LandingPage;
~~~

~~~js
// ./example/ssr-coin.config.js

module.exports = {
  // All options defined here are passed down as options for `postcss-loader`.
  // Thus, this is where you add PostCSS plugins, a PostCSS parser, etc.
  postcss: {
    plugins: [
      require('postcss-cssnext')()
    ],
    parser: 'sugarss',
  },
};
~~~

<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/postcss/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/postcss/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/postcss/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/postcss/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/postcss/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->
