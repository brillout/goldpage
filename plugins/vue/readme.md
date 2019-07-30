<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/vue/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/vue/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/vue/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/vue/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/vue/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->

`ssr-coin` + Vue = :heart:

# `@ssr-coin/vue`

Use `ssr-coin` with [Vue](https://github.com/vuejs/vue).

### Usage

Install `@ssr-coin/vue`.

~~~shell
$ npm install @ssr-coin/vue
~~~

The plugin is automatically loaded and
the `view` property of your page configs is now rendered with Vue.

### Example

~~~js
// ./example/pages/hello.page.js

import Hello from './Hello.vue';

export default {
  route: '/hello/:name',
  addInitialProps,
  view: Hello,
  title,
};

async function addInitialProps({name}) {
  // We simulate a network request delay
  await sleep(0.5);

  const nameReversed = name.split('').reverse().join('');
  return {nameReversed};
}

function title({name}) {
  return 'Hi '+name;
}

function sleep(seconds) {
  let resolve;
  const promise = new Promise(r => resolve=r);
  setTimeout(resolve, seconds*1000);
  return promise;
}
~~~

<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/vue/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/vue/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/vue/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/vue/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/vue/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->
