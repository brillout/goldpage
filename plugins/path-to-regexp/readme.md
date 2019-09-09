<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/path-to-regexp/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/path-to-regexp/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/path-to-regexp/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/path-to-regexp/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/path-to-regexp/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->

Goldpage + `path-to-regexp` = :heart:

# `@goldpage/path-to-regexp`

Routing with [`path-to-regexp`](https://github.com/pillarjs/path-to-regexp).

(Note that `@goldpage/path-to-regexp` doesn't use the npm module `path-to-regexp` directly, but uses a modified version [`@brillout/path-to-regexp`](https://github.com/brillout/path-to-regexp).)

### Usage

Install `@goldpage/path-to-regexp`.

~~~bash
$ npm install @goldpage/path-to-regexp
~~~

The plugin is automatically loaded and
the `route` property of your page configs is now handled by `path-to-regexp`.

### Example

~~~js
// /examples/basics/pages/hello.page.js

import React, {useState} from 'react';

export default {
  route: '/hello/:name',
  addInitialProps,
  view: Hello,
  title,
  renderToHtml: true,
};

async function addInitialProps({name}) {
  // We simulate a network request delay
  await sleep(0.5);

  const nameReversed = name.split('').reverse().join('');
  return {nameReversed};
}

function Hello({name, nameReversed}) {
  const [isReversed, setReverse] = useState(false);

  return (
    <div>
      Hello <span>{isReversed ? nameReversed : name}</span>, welcome to Goldpage.
      <br/>
      <button onClick={() => setReverse(!isReversed)}>Reverse name</button>
    </div>
  );
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
    Instead, edit `/plugins/path-to-regexp/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/path-to-regexp/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/path-to-regexp/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/path-to-regexp/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/path-to-regexp/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->
