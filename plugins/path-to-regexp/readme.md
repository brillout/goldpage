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

`ssr-coin` + `path-to-regexp` = :heart:

# `@ssr-coin/path-to-regexp`

Routing with [`path-to-regexp`](https://github.com/pillarjs/path-to-regexp).

(Note that `@ssr-coin/path-to-regexp` doesn't use the npm module `path-to-regexp` directly, but uses React Router's wrapper `react-router/matchPath`.)

### Usage

Install `@ssr-coin/path-to-regexp`.

~~~bash
$ npm install @ssr-coin/path-to-regexp
~~~

The plugin is automatically loaded and
the `route` property of your page configs is now handled by `path-to-regexp`.

### Example

~~~js
// /examples/basics/pages/welcome.page.js

import React, {useEffect, useState} from 'react';

export default {
  route: '/',
  view: () => (
    <div>
      Welcome to ssr-coin.
      <Time/>
    </div>
  ),
};

function Time() {
  const getTime = () => new Date().toLocaleTimeString();

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const timeout = setInterval(() => setTime(getTime()), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      The time is: <span>{time}</span>
    </div>
  );
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
