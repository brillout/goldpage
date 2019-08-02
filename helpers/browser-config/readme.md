<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/helpers/browser-config/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/helpers/browser-config/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/helpers/browser-config/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/helpers/browser-config/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/helpers/browser-config/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->

# `@brillout/browser-config`

A 1-LOC package to have a global configuration object in the browser. (Works in Node.js too.)

### Usage

~~~js
// ./example/config.js

const browswerConfig = require('@brillout/browser-config'); // npm install @brillout/browser-config

browswerConfig.myNewConfig = 42;
~~~

~~~js
// ./example/run.js

require('./config');

const browswerConfig = require('@brillout/browser-config');

// This will print 42
console.log(browswerConfig.myNewConfig);
~~~

### How it works

It's trivial: The package simply exports a plain JavaScript object that acts as the global configuration object.

The source code is:

~~~js
// ./index.js

module.exports = window['@brillout/browser-config'] = window['@brillout/browser-config'] || {};
~~~

<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/helpers/browser-config/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/helpers/browser-config/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/helpers/browser-config/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/helpers/browser-config/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/helpers/browser-config/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->
