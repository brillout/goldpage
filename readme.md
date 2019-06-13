<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/readme.template.md` instead.






-->
<p align="center">
  <a href="/../../#readme">
    <img align="center" src="https://github.com/brillout/ssr-coin/raw/master/docs/ssr-coin.min.svg?sanitize=true" width=96 height=96 style="max-width:100%;" alt="ssr-coin"/>
  </a>
</p>

<h1>
  <p align="center">
    <code>ssr-coin</code>
  </p>
</h1>

<p align="center">
Add SSR to your app.
</p>






<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#what-is-ssr-coin>What is `ssr-coin`</a>
<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#why-ssr-coin>Why `ssr-coin`</a>
<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp; Usage
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#getting-started>Getting Started</a>
<sub>
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Basics
</sub>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#css--static-assets>CSS & Static Assets</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#async-data-getinitialprops>Async Data: `getInitialProps`</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#control-app-rendering>Control `<App>` Rendering</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#control-indexhtml-html-head-title-meta-namedescription->Control `index.html`: `<html>`, `<head/>`, `<title/>`, `<meta name="description"/>`, ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#performance-tuning-donotrenderinbrowser--renderhtmlatbuildtime>Performance Tuning: `doNotRenderInBrowser` & `renderHtmlAtBuildTime`</a>
<sub>
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
API
</sub>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#page-config-pagejs>Page Config `*.page.js`</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#global-config-ssr-coinconfigjs>Global Config `.ssr-coin.config.js`</a>
<sub>
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
How-to
</sub>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#disableenable-server-side-autoreload>Disable/enable Server-side Autoreload</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#disableenable-server-side-code-transpalition>Disable/enable server-side Code transpalition</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#control-transpalition-babel-config>Control Transpalition: Babel Config</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#languages-typescript--coffeescript-->Languages: TypeScript / Coffeescript / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#providers-for-redux--react-router--graphql-apollo--relay-->Providers for Redux / React Router / GraphQL Apollo / Relay / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#css--static-assets>CSS & Static Assets</a>_PRE_PROCESSORS
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#control-routing--dynamic-routing>Control Routing & Dynamic Routing</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#frontend-libraries-jquery--bootstrap--semantic-ui-->Frontend Libraries: jQuery / Bootstrap / Semantic UI / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#server-frameworks-express--koa--hapi--fastify-->Server Frameworks: Express / Koa / Hapi / Fastify / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#control-scripts-custom-dev-server--custom-build--custom-cli>Control scripts: Custom Dev Server & Custom Build & Custom CLI</a>
<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#plugins>Plugins</a>

<br/>

## What is `ssr-coin`

`ssr-coin` is a library that adds server-side rendering (SSR) to your Node.js server.

You define your pages
and `ssr-coin` takes care of the rest:
It transpiles, bundles, routes, renders, and serves your pages.

You can add `ssr-coin` to your existing app.

~~~js
// pages/hello.page.js

// `ssr-coin` supports any view library such as Vue
import React, {useState} from 'react';

export default {
  route: '/hello/:name',
  view: ({name}) => {
    <div>
      Welcome, <b>{name}</b> to <code>ssr-coin</code>.
      <Counter/>
    </div>
  },
  title: ({name}) => 'Hi '+name,
};

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
~~~






## Why `ssr-coin`

`ssr-coin` is about making SSR as easy as possible yet flexible.


###### Easy

All you need to get started is:
 - Install `ssr-coin` and `ssr-coin` plugins
 - Add the `ssr-coin` middleware to your server
 - Define your pages

That's it.

For example, for a React & Express stack:

~~~json
{
  "dependencies": {
    "@ssr-coin/react": "~0.3.2",
    "@ssr-coin/express": "~0.3.2",
    "ssr-coin": "~0.3.2"
  }
}
~~~

~~~js
const express = require('express');
const ssr = require('ssr-coin');

const app = express();

// Add the `ssr-coin` middleware
app.use(ssr.express);

app.listen(3000);
~~~

~~~js
// pages/hello.page.js

import React from 'react';

export default {
 route: '/hello/:name',
 view: ({name}) => {
   <div>
     Hello <b>{name}</b>.
     Welcome to <code>ssr-coin</code>.
   </div>
 },
};
~~~


###### Freedom

`ssr-coin` takes care of SSR and SSR only:
the rest of your stack is entirely up to you and you can use:

- Any view libray: **React**, **Vue**, **React Native Web**, etc.
- Any server framework: **Express**, **Koa**, **Hapi**, etc.
- Any language: **ES6**, **TypeScript**, **PostCSS**, etc.
- Any provider: **Redux**, **GraphQL Apollo**, **Relay**, etc.
- Any process manager: **Docker**, **systemd**, **PM2**, etc.
- etc.

You can configure when a page is rendered:
- You can configure your page's HTML to be rendered at build-time or at request-time.
- You can configure whether your page is rendered to the DOM or not (aka hydration).

This allows you to build all kinds of apps:
- Frontend-only app (aka **static website**).
- Backend-only app (aka **old-school** app with **plain old HTML**).
- Frontend + backend app (aka full-stack **SSR** app).
- Hybrid app (where some pages are static and some dynamic).


###### Batteries included

- [DX] Zero-config / Minimal-config
- [DX] Browser-side autoreload
- [DX] Server-side autoreload
- [Flexibility] Controlable Rendering
- [Flexibility] Controlable CLI
- [Flexibility] Controlable Transpalition
- [Performance] Page based code spliting
- [Performance] Optimal HTTP caching
- [Performance] [DOM-static pages]()
- [Performance] [HTML-static pages]()





## Providers for Redux / React Router / GraphQL Apollo / Relay / ...

~~~js
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

const store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
)
~~~js


## Getting Started


------
The `github:brillout/ssr-coin-starter` starter 

1. Clone the starter repo.
  ~~~shell
  git clone git@github.com:brillout/ssr-coin-starter
  ~~~

2. Install dependencies.
  ~~~shell
  cd ssr-coin-starter && npm install
  ~~~

3. Start the dev server.
  ~~~shell
  npm run dev
  ~~~

In the `ssr-coin-starter/package.json` you can see the used plugins. Try to change the 

If you want to add SSR to your existing app then read the next section.
------



0. Install.

   `ssr-coin`:
   ~~~shell
   npm install ssr-coin
   ~~~

   A [render plugin]() such as `@ssr-coin/vue` or `@ssr-coin/react`:
   ~~~shell
   npm install @ssr-coin/react
   ~~~

   And a [server integration plugin]() such as `@ssr-coin/hapi` or `@ssr/express`:
   ~~~shell
   npm install @ssr-coin/express
   ~~~

   Note that plugins
   listed in the `dependencies` list of your `package.json`
   are automatically loaded.


1. Add `ssr-coin` to your Node.js server.

   With Express:
   ~~~js
   const express = require('express');
   const ssr = require('ssr-coin');

   const app = express();
   app.use(ssr.express);
   ~~~

   <details>
   <summary>
   With Hapi
   </summary>

   ~~~js
   const Hapi = require('hapi');
   const ssr = require('ssr-coin');

   (async ()=>{
     const server = Hapi.Server();
     await server.register(ssr.hapi);
   })();
   ~~~
   </details>

   <details>
   <summary>
   With Koa
   </summary>

   ~~~js
   const Koa = require('koa');
   const ssr = require('ssr-coin');

   const app = new Koa();
   app.use(ssr.koa);
   ~~~
   </details>

   <details>
   <summary>
   With other server frameworks
   </summary>

   `ssr-coin` can be used with any server framework.
   But there is no documentation for this (yet).
   Open a GitHub issue
   if you want to use `ssr-coin` with a server framework other than
   Express, Koa, or Hapi.
   </details>

2. Create a page.

   Create the `pages/` directory.
   ~~~shell
   cd path/to/your/project/dir/ && mkdir pages/
   ~~~

   Create a file
   at `pages/test.page.js`.

   With React:
   ~~~js
   export default {
     route: 'hello/:name',
     view: ({data, name}) => (
       <div>
         Your name: <span>{name}</span><br/>
         Loaded data: <span>{data}</span>
       </div>
     ),
     tittle: ({name}) => 'Hi '+name,
     getInitialProps: async () => {
       await sleep(0.3);
       return {data: "This is some async data;"};
     },
   };
   function sleep(seconds) {
     let resolve;
     const p = new Promise(r => resolve=r);
     setTimeout(resolve, seconds*1000);
     return p;
   }
   ~~~

   <details>
   <summary>
   With Vue
   </summary>
   ~~~js
   const Hapi = require('hapi');
   const ssr = require('ssr-coin');

   (async ()=>{
     const server = Hapi.Server();
     await server.register(ssr.hapi);
   })();
   ~~~
   </details>

3. Add the `ssr-coin` scripts to your `package.json`:
   ~~~json
   {
     "scripts": {
       "dev": "ssr-coin dev",
       "prod": "npm run build && npm run start",
       "build": "export NODE_ENV='production' && ssr-coin build",
       "start": "export NODE_ENV='production' && node ./.build/nodejs/server"
     }
   }
   ~~~

That's it.
You can now run `npm run dev` / `yarn dev` and go to your newly created page `/ssr-test`.

Note that you have to use `ssr-coin`'s bundling step.
You can however take control over the building step.
More infos at [Config - Build]().

Beyond the zero-config setup you can also:
- Enable **server-side auto-reload** by letting `ssr-coin` build your server code.
(Browser-side auto-reload is already enabled in zero-config setup)
- **Transpile server code** by letting `ssr-coin` build your server code
- **Add Redux, GraphQL or other container** by taking control over how your pages are rendered
- **Improve browser-load performance** for your non-interactive pages by setting `doNoRenderInBrowser: true`.





## Disable/enable Server-side Autoreload

You can make `ssr-coin` build your server code.

If you want to
- transpile your server code (e.g. if you want to use TypeScript on the server), or
- enable auto-reload for your server
you can add make `ssr-coin` build your server code by setting the `serverStartFile` config in your `package.json`:

~~~json
{
  "ssr-coin": {
    "serverEntryFile": "./path/to/your/server/entry"
  },
}
~~~

3. Enable server-side auto-reload:
   Or if you don't want `ssr-coin` to auto-reload your server:
   ~~~json
   {
     "ssr-coin": {
       "doNotBuildServer": true
     },
   }
   ~~~
   Note that browser-side auto-reload will be enabled either way.




## CSS & Static Assets
## Async Data: `getInitialProps`
## Control `<App>` Rendering
## Control `index.html`: `<html>`, `<head/>`, `<title/>`, `<meta name="description"/>`, ...
## Performance Tuning: `doNotRenderInBrowser` & `renderHtmlAtBuildTime`

## Page Config `*.page.js`
## Global Config `.ssr-coin.config.js`

## Disable/enable Server-side Autoreload
## Disable/enable server-side Code transpalition
## Control Transpalition: Babel Config
## Languages: TypeScript / Coffeescript / ...
## Providers for Redux / React Router / GraphQL Apollo / Relay / ...
## CSS & Static Assets_PRE_PROCESSORS
## Control Routing & Dynamic Routing
## Frontend Libraries: jQuery / Bootstrap / Semantic UI / ...
## Server Frameworks: Express / Koa / Hapi / Fastify / ...
## Control scripts: Custom Dev Server & Custom Build & Custom CLI
## Plugins


<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/docs/readme.template.md` instead.






-->
