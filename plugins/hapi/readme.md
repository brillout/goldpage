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

`ssr-coin` + Hapi = :heart:

# `@ssr-coin/hapi`

Use `ssr-coin` with [Hapi](https://github.com/hapijs/hapi).

### Usage

Install `@ssr-coin/hapi`.

~~~shell
$ npm install @ssr-coin/hapi
~~~

The plugin is automatically loaded and
a Hapi plugin is now available at `require('ssr-coin').hapi`.

### Example

~~~js
// ./example/server.js

const Hapi = require('hapi');
const ssr = require('ssr-coin');

startServer();

async function startServer() {
  const server = Hapi.Server({
    port: process.env.PORT || 3000,
    debug: {request: ['internal']},
  });

  server.route({
    method: 'GET',
    path: '/hapi-route',
    handler: (req, h) => h.response('heelo hr !!'),
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
