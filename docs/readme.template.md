!MENU_ORDER 1
!MENU_LINK /../../
!OUTPUT ../readme.md
!INLINE ./snippets/header.md --hide-source-path

!VAR WHAT What is `ssr-coin`
!VAR WHY Why `ssr-coin`

!VAR START Getting Started

!VAR CSS_AND_ASSETS CSS & Static Assets
!VAR ASYNC_DATA Async Data: `getInitialProps`
!VAR CONTROL_RENDERING `<App>` Rendering
!VAR SERVER_SIDE Server-side Autoreload & Server-side Transpalition
!VAR CONTROL_HTML `index.html`: `<html>`, `<head/>`, `<title/>`, `<meta name="description"/>`, ...
!VAR PERFORMANCE_TUNING Performance Tuning: `doNotRenderInBrowser` & `renderHtmlAtBuildTime`

!VAR PAGE_CONFIG Page Config `*.page.js`
!VAR GLOBAL_CONFIG Global Config `.ssr-coin.config.js`
!VAR SSR_COIN_CONFIG Config `.ssr-coin.config.js`

!VAR PROVIDERS Providers for Redux / React Router / GraphQL Apollo / Relay / ...
!VAR LANGUAGES Transpalition & Babel Config & Languages: TypeScript / Coffeescript / ES6 / ...
!VAR CSS_PRE_PROCESSORS CSS pre-processors: PostCSS / Sass / Less / ...
!VAR ROUTING StaticRouting & Dynamic Routing & React Router
!VAR FRONTEND_LIBRARIRES Frontend Libraries: jQuery / Bootstrap / Semantic UI / ...
!VAR SERVER_FRAMEWORKS Server Frameworks: Express / Koa / Hapi / Fastify / ...
!VAR CONTROL_CLI CLI scripts: Dev Server & Build & Server Start
!VAR PLUGINS Plugins

!INLINE li-1 !VAR|LINK WHAT
!INLINE li-1 !VAR|LINK WHY
!INLINE li-1 Usage
!INLINE li-2 !VAR|LINK START
!INLINE li-2-header Basics
!INLINE li-2 !VAR|LINK CSS_AND_ASSETS
!INLINE li-2 !VAR|LINK ASYNC_DATA
!INLINE li-2 !VAR|LINK CONTROL_RENDERING
!INLINE li-2 !VAR|LINK CONTROL_HTML
!INLINE li-2 !VAR|LINK SERVER_SIDE
!INLINE li-2 !VAR|LINK PERFORMANCE_TUNING
!INLINE li-2-header API
!INLINE li-2 !VAR|LINK PAGE_CONFIG
!INLINE li-2 !VAR|LINK GLOBAL_CONFIG
!INLINE li-2-header Recipes
!INLINE li-2 !VAR|LINK PROVIDERS
!INLINE li-2 !VAR|LINK LANGUAGES
!INLINE li-2 !VAR|LINK CSS_PRE_PROCESSORS
!INLINE li-2 !VAR|LINK ROUTING
!INLINE li-2 !VAR|LINK FRONTEND_LIBRARIRES
!INLINE li-2 !VAR|LINK SERVER_FRAMEWORKS
!INLINE li-2 !VAR|LINK CONTROL_CLI
!INLINE li-1 !VAR|LINK PLUGINS

<br/>

## !VAR WHAT

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






## !VAR WHY

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




## !VAR START


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



## !VAR CSS_AND_ASSETS
## !VAR ASYNC_DATA
## !VAR CONTROL_RENDERING

## !VAR SERVER_SIDE


If you specify a path when calling `ssr-coin dev ./path/to/your/server.js` then:
 - `ssr-coin` transpiles your server code. Allowing you, for example, to use TypeScript for your server code.
 - `ssr-coin` auto-reloads the server whenever you make changes to your server code

Your `package.json`'s scripts would be:

~~~json
{
  "scripts": {
    "dev": "ssr-coin dev ./path/to/your/server.js",
    "prod": "npm run build && npm run start",
    "build": "ssr-coin build ./path/to/your/server.js",
    "start": "export NODE_ENV='production' && node ./.build/nodejs/server"
  }
}
~~~

By not specifying your server path `ssr-coin` doesn't transpile nor auto reloads your server,
and your `package.json`'s scripts would be:

~~~json
{
  "scripts": {
    "dev": "node ./path/to/your/server.js",
    "prod": "npm run build && npm run start",
    "build": "ssr-coin build",
    "start": "export NODE_ENV='production' && node .path/to/your/server.js"
  }
}
~~~

Note that `ssr-coin` always transpiles and auto-reloads your views and browser code.




## !VAR CONTROL_HTML
## !VAR PERFORMANCE_TUNING

## !VAR PAGE_CONFIG
## !VAR GLOBAL_CONFIG

## !VAR PROVIDERS

By taking control over the rendering of your `<App/>` (see !VAR|LINK CONTROL_RENDERING) you can add providers for Redux, GraphQL, etc.

For example, for a React with React Router app:

~~~js
~~~

## !VAR LANGUAGES

Make sure

`ssr-coin` currently uses webpack to transpile your code.
`ssr-coin` which means you may need to modify `ssr-coin` webpack's config.
If there is a plugin available.
For exampe, for TypeScript, simply use the [TypeScript plugin](/plugins/typescript).
If there is no plugin available then open a GitHub issue and we'll build a plugin together.

We will use Parcel instead of Webpack once Parcel v2 is released.
There will then be no need for transpalition plugins anymore (since parcel is zero-config).

## !VAR CSS_PRE_PROCESSORS




## !VAR ROUTING
## !VAR FRONTEND_LIBRARIRES
## !VAR SERVER_FRAMEWORKS
## !VAR CONTROL_CLI
## !VAR PLUGINS

padding

padding

padding

padding

padding

padding

padding

padding

padding

padding

padding

padding

padding

padding

padding

padding

padding

padding

padding

padding

padding

padding

padding

