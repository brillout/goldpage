<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->

Goldpage + React = :heart:

# `@goldpage/react`

Use Goldpage with [React](https://github.com/facebook/react).

### Usage

Install `@goldpage/react`.

~~~shell
$ npm install @goldpage/react
~~~

The plugin is automatically loaded and
the `view` property of your page configs is now rendered with React.

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
    Instead, edit `/plugins/react/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/react/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->
