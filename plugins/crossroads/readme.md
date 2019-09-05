<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/crossroads/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/crossroads/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/crossroads/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/crossroads/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/crossroads/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->

Goldpage + Crossroads = :heart:

# `@goldpage/crossroads`

Routing with [Crossroads.js](https://github.com/millermedeiros/crossroads.js).

### Usage

Install `@goldpage/crossroads`.

~~~bash
$ npm install @goldpage/crossroads
~~~

The plugin is automatically loaded and
the `route` property of your page configs is now handled by Crossroads.

### Example

~~~js
// ./example/pages/hello-crossroads.page.js

import React from 'react';

export default {
  route: '/hello/{name}',
  view: ({name}) => (
    <div>
      <h1>Hello {name}</h1>
      Statically routed with Crossroads.
    </div>
  ),
  renderToHtml: true,
};
~~~

<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/crossroads/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/crossroads/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/crossroads/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/crossroads/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/crossroads/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->
