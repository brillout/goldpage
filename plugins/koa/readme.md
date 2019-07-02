<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/koa/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/koa/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/koa/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/koa/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/koa/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->

`ssr-coin` + Koa = :heart:

# `@ssr-coin/koa`

Use `ssr-coin` with [Koa](https://github.com/koajs/koa).

### Usage

Install `@ssr-coin/koa`.

~~~shell
$ npm install @ssr-coin/koa
~~~

The plugin is automatically loaded and
and a Koa middleware is now available at `require('ssr-coin').koa`.

### Example

~~~js
// ./example/server.js

const Koa = require('koa');
const ssr = require('ssr-coin');

const app = new Koa();
app.use(ssr.koa);
const server = app.listen(3000);

console.log('Server running');

module.exports = server;
~~~

<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/koa/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/koa/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/koa/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/koa/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/koa/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->
