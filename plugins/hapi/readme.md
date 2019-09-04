<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/hapi/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/hapi/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/hapi/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/hapi/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/hapi/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->

Goldpage + Hapi = :heart:

# `@goldpage/hapi`

Use Goldpage with [Hapi](https://github.com/hapijs/hapi).

### Usage

Install `@goldpage/hapi`.

~~~shell
$ npm install @goldpage/hapi
~~~

The plugin is automatically loaded and
a Hapi plugin is now available at `require('goldpage').hapi`.

### Example

~~~js
// ./example/server.js

const Hapi = require('hapi');
const ssr = require('goldpage');

startServer();

async function startServer() {
  const server = Hapi.Server({
    port: process.env.PORT || 3000,
    debug: {request: ['internal']},
  });

  await server.register(ssr.hapi);

  await server.start();

  console.log('Server running');
}
~~~

<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/hapi/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/hapi/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/hapi/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/hapi/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/hapi/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->
