<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/typescript/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/typescript/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/typescript/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/typescript/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/typescript/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->

`ssr-coin` + TypeScript = :heart:

# `@ssr-coin/typescript`

Use `ssr-coin` with TypeScript.

### Usage

Install `@ssr-coin/typescript`.

~~~shell
$ npm install @ssr-coin/typescript
~~~

The `ssr-coin/typescript` plugin is automatically loaded.

Configure TypeScript:

~~~js
module.exports = {
  typescript: {
    // Syntax transformation is done with `@babel/preset-typescript`
    // Options:
    babelPresetTypescript: {
      isTSX: true, // default value
      allExtensions: true, // default value
    },

    // Type checking is done with `fork-ts-checker-webpack-plugin`
    // Options:
    forkTsCheckerWebpackPlugin: {
      // To enable type checking set `enable: true`
      enable: true,
    },
  },
};
~~~

### Example

~~~tsx
// ./example/pages/hello.page.tsx

import * as React from "react";

interface HelloProps { compiler: string; framework: string; }

const Hello = (props: HelloProps) => <h3>Hello from {props.compiler} and {props.framework}!</h3>;

export default {
    route: '/',
    view: () => <Hello compiler="TypeScript" framework="React" />,
    doNotRenderInBrowser: true,
};
~~~

~~~js
// ./example/ssr-coin.config.js

module.exports = {
  typescript: {
    // Syntax transformation is done with `@babel/preset-typescript`
    // Options:
    babelPresetTypescript: {
      isTSX: true, // default value
      allExtensions: true, // default value
    },

    // Type checking is done with `fork-ts-checker-webpack-plugin`
    // Options:
    forkTsCheckerWebpackPlugin: {
      // To enable type checking set `enable: true`
      enable: true,
    },
  },
};
~~~

<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/typescript/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/typescript/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/typescript/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/typescript/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/plugins/typescript/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->
