!MENU_LINK /../../
!OUTPUT ../readme.md
!INLINE ./snippets/header.md --hide-source-path

!VAR WHAT What is `ssr-coin`
!VAR WHY Why `ssr-coin`

!VAR GETTING_STARTED Getting Started

!VAR CSS_AND_ASSETS CSS & Static Assets
!VAR ASYNC_DATA Async Data: `getInitialProps`
!VAR CONTROL_RENDERING Rendering
!VAR SERVER_SIDE Server-Side: Transpalition & Autoreload
!VAR CONTROL_HTML HTML Meta Tags: `index.html`, `<title/>`, `<meta/>`, `<link/>`, ...
!VAR PERFORMANCE_TUNING Performance: `doNotRenderInBrowser` & `renderHtmlAtBuildTime`

!VAR PROVIDERS Providers: Redux / React Router / GraphQL Apollo / Relay / ...
!VAR LANGUAGES Transpalition: Babel / TypeScript /  ES6 / ...
!VAR CSS_PRE_PROCESSORS CSS pre-processors: PostCSS / Sass / Less / ...
!VAR ROUTING Routing: React Router / ...
!VAR FRONTEND_LIBRARIRES Frontend Libraries: Google Analytics / jQuery / Bootstrap / Semantic UI / ...
!VAR SERVER_FRAMEWORKS Server Frameworks: Express / Koa / Hapi / Fastify / ...
!VAR PROCESS_MANAGERS Process managers: Docker / systemd / PM2 / ...
!VAR PLUGINS Plugins
!VAR PLUGINS_SERVER Server plugins
!VAR PLUGINS_RENDER Render plugins

!INLINE li-1 !VAR|LINK WHAT
!INLINE li-1 !VAR|LINK WHY
!INLINE li-1 !VAR|LINK PLUGINS
!INLINE li-1 Usage
!INLINE li-2 !VAR|LINK GETTING_STARTED
!INLINE li-2-header Basics
!INLINE li-2 !VAR|LINK CSS_AND_ASSETS
!INLINE li-2 !VAR|LINK ASYNC_DATA
!INLINE li-2 !VAR|LINK CONTROL_RENDERING
!INLINE li-2 !VAR|LINK CONTROL_HTML
!INLINE li-2 !VAR|LINK SERVER_SIDE
!INLINE li-2 !VAR|LINK PERFORMANCE_TUNING
!INLINE li-2-header Recipes
!INLINE li-2 !VAR|LINK PROVIDERS
!INLINE li-2 !VAR|LINK LANGUAGES
!INLINE li-2 !VAR|LINK CSS_PRE_PROCESSORS
!INLINE li-2 !VAR|LINK ROUTING
!INLINE li-2 !VAR|LINK FRONTEND_LIBRARIRES
!INLINE li-2 !VAR|LINK SERVER_FRAMEWORKS
!INLINE li-2 !VAR|LINK PROCESS_MANAGERS

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

`ssr-coin` is about making SSR easy and flexible.


###### Easy

All you need to get started is:
 - Install `ssr-coin`, a server plugin and a render plugin.
 - Add the `ssr-coin` middleware to your server.
 - Add the `ssr-coin` scripts to your `package.json`
 - Define your pages.

That's it.

For example, all you need for a React & Express stack is:

~~~json
{
  "dependencies": {
    "@ssr-coin/react": "~0.3.2",
    "@ssr-coin/express": "~0.3.2",
    "ssr-coin": "~0.3.2"
  },
  "scripts": {
    "dev": "ssr-coin dev ./path/to/your/server.js",
    "prod": "npm run build && npm run start",
    "build": "ssr-coin build ./path/to/your/server.js",
    "start": "export NODE_ENV='production' && node ./.build/nodejs/server"
  }
}
~~~

~~~js
// server.js

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

You can now run `npm run dev` (/ `yarn dev`) then go to `/hello/jon` and see your first SSR page.


###### Freedom

`ssr-coin` takes care of SSR and SSR only:
the rest of your stack is entirely up to you and you can use:

- Any view libray: **React**, **Vue**, **React Native Web**, etc.
- Any server framework: **Express**, **Koa**, **Hapi**, etc.
- Any language: **ES6**, **TypeScript**, **PostCSS**, etc.
- Any provider: **Redux**, **GraphQL Apollo**, **Relay**, etc.
- Any process manager: **Docker**, **systemd**, **PM2**, etc.
- etc.


###### Batteries included

`ssr-coin` comes with nifty features out of the box, such as browser autoreload, server autoreload, page based code splitting and HTTP caching.




## !VAR GETTING_STARTED

This getting started is about adding `ssr-coin` to an exisiting app.
If you want to start from scratch
then use a Reframe starter instead.

0. Install `ssr-coin`.

   ~~~shell
   npm install ssr-coin
   ~~~

   Install a [render plugin](!VAR|ANCHOR PLUGINS_RENDER) such as `@ssr-coin/vue` or `@ssr-coin/react`.
   ~~~shell
   npm install @ssr-coin/react
   ~~~

   Install a [server plugin](!VAR|ANCHOR PLUGINS_SERVER) such as `@ssr-coin/hapi` or `@ssr/express`.
   ~~~shell
   npm install @ssr-coin/express
   ~~~

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

2. Create your first page.

   Create the `pages/` directory.
   ~~~shell
   cd path/to/your/project/dir/ && mkdir pages/
   ~~~

   Create a file
   at `pages/hello.page.js`.

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
       "dev": "ssr-coin dev ./path/to/your/server.js",
       "prod": "npm run build && npm run start",
       "build": "ssr-coin build ./path/to/your/server.js",
       "start": "export NODE_ENV='production' && node ./.build/nodejs/server"
     }
   }
   ~~~

You can now run `npm run dev` (/ `yarn dev`) and go to your newly created page `/hello/jon`.

## !VAR CSS_AND_ASSETS

To load CSS, simply import it:

~~~js
import './path/to/style.css';
~~~

Importing static assets such as images, fonts, or videos
returns a URL:

~~~js
import imageUrl from './path/to/image.png';
// `imageUrl` is the URL serving `image.png`.
// Do something with imageUrl, e.g. `await fetch(imageUrl)` or `<img src={imageUrl}/>`.
~~~

You can also reference static assets in CSS:

~~~css
.logo {
    /* Your file's path on your disk `./path/to/image.png`
       will automatically be replaced with the URL serving `image.png` */
    background-image: url('./path/to/image.png');
}
@font-face {
    font-family: 'MyAwesomeFont';
    /* Your file's path on your disk `./path/to/my-awesome-font.ttf`
       will automatically be replaced with the URL serving `my-awesome-font.ttf` */
    src: url('./path/to/my-awesome-font.ttf') format('truetype');
}
~~~

Example of a page that uses all kinds of static assets:
 - [/examples/static-assets/](/examples/static-assets/)



## !VAR ASYNC_DATA

You can load and render data by adding a `getInitialProps` function to your page config:

~~~js
!INLINE /examples/async-data/pages/got/html.page.js
~~~

Alternatively, you can fetch data in a stateful component.
But then your data is rendered only to the DOM (and not to HTML).

We further explain the difference between both at:
 - [/examples/async-data/](/examples/async-data/)


## !VAR CONTROL_RENDERING

You can control how your pages are rendered
by adding `renderToHtml` and `renderToDom` to your `ssr-coin.config.js`:

Example of adding React Router to a React app:

~~~js
!INLINE /examples/react-router/render/renderToDom.js
~~~

~~~js
!INLINE /examples/react-router/render/renderToHtml.js
~~~

~~~js
!INLINE /examples/react-router/ssr-coin.config.js
~~~

The example's entire source code is at:
- [/examples/react-router](/examples/react-router)

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

To set HTML meta tags for all pages, create a `index.html` file:
~~~html
!INLINE /examples/html-meta-tags/index.html
~~~

To set HTML meta tags for one page only, use the page's config:
~~~js
!INLINE /examples/html-meta-tags/pages/landing.page.js
~~~
~~~js
!INLINE /examples/html-meta-tags/pages/about.page.js
~~~

See [`@brillout/index-html`'s documentation](https://github.com/brillout/index-html) for the list of all options.

Example:
 - [/examples/html-meta-tags](/examples/html-meta-tags)


## !VAR PERFORMANCE_TUNING

By default,
a page is rendered twice:
the page is first rendered to HTML on the server and then is rendered again to the DOM in the browser (aka hydration).


By setting `doNotRenderInBrowser: true` to a page config,
you tell `ssr-coin` to not render the page in the browser.








With `doNotRenderInBrowser` and `renderHtmlAtBuildTime` you can determine when your pages are rendered.

###### `doNotRenderInBrowser`

With `doNotRenderInBrowser` you control whether your page is rendered in the browser.

- `doNotRenderInBrowser: false` (default value)
  - Slower Performance
    <br/>
    The page's views (e.g. your page's React components) and view libraries (e.g. React) need are loaded and executed in the browser.
    This can be slow on mobile devices.
  - Interactive views
    <br/>
    Because your page is rendered to the browser's DOM, your page can contain views that are stateful.
    If your page needs to be interactive, then you'll need stateful views and you'll need to render your page in the browser.

  The page is rendered in the browser.
  <br/>
  The page's code (e.g. React components) and the view library (e.g. React) are loaded in the browser.
  <br/>
  The page is rendered to the DOM.
  <br/>
  The DOM may change.
  <br/>
  The page can have statefull views
  The page can have interactive views

- `doNotRenderInBrowser: true`
  - Increased performance
    <br/>
    The page's views (e.g. your page's React components) and view libraries (e.g. React) need are not loaded nor executed in the browser.
    This means that considerably less JavaScript is loaded/executed in the browser.
    This performance gain is substantial on mobile devices.
  - No interactive views
    <br/>
    Because your page is not rendered to the browser's DOM, your page connot contain stateful views.
    You cannot 

In a nutshell:
If your page needs to be interactive then you'll have to rendered it to the browser and `doNotRenderInBrowser` needs to be `false`.
But if your page isn't interactive then you can set `doNotRenderInBrowser` to `true` for increased performance (which is considerable on mobile devices).

  <br/>
  The page is not rendered in the browser.
  <br/>
  No JavaScript is loaded nor executed in the browser.
  (Or much less JavaScript.)
  <br/>
  The page is not rendered to the DOM.
  (The page is rendered to HTML only.)
  <br/>
  The DOM will not change.
  <br/>
  The page is stateless
  <br/>
  The page can have interactive views

By default,
your page is rendered in the browser so that it can have interactive views.
(A like button, an interactive graph, a To-Do list, etc.).

Setting `doNotRenderInBrowser: true` makes your page considerably faster.
If your page has no interactive views,
then you should set `doNotRenderInBrowser: true`.
(More precisely, you should set `doNotRenderInBrowser: true` when your page's view components are all stateless.)

By setting `doNotRenderInBrowser: true` to all your pages,
you remove browser-side JavaScript.
In other words,
you remove the frontend,
and the view library
(React/Vue/etc.)
is only used on the server as an HTML template engine.

###### `renderHtmlAtBuildTime`

Your pages are always rendered to HTML.
(Modern view libraries, such as React and Vue, can render components to HTML.)

The page config option `renderHtmlAtBuildTime` allows you to control whether the page's HTML is
rendered statically at build-time or
dynamically at request-time.

 - `renderHtmlAtBuildTime: false` (default value)
   <br/>
   The page is rendered to HTML at request-time.
   <br/>
   The page is (re-)rendered to HTML every time the user requests the page.
 - `renderHtmlAtBuildTime: true`
   <br/>
   The page is rendered to HTML at build-time.
   <br/>
   The page is rendered to HTML only once, when Reframe is building and transpiling your app.

By default,
a page is rendered to HTML at request-time.
But if the page's content is static
(a landing page, an about page, a blog post, a personal homepage, etc.)
it is wasteful to re-render its HTML on every page request.

By setting `renderHtmlAtBuildTime: true` to all your pages,
you effectively remove the need for a Node.js server.
You can then deploy your app to a static host such as Netlify or GitHub Pages.

If you don't want to render your page to HTML,
then do something like that:
~~~jsx
const Loading = require('./path/to/your/loading/component');
const Search = require('./path/to/your/search/component');

const SearchPageConfig = {
  title: 'Search products',
  route: '/search',
  view: SearchPage,
  // We render <Loading> to HTML at build-time
  renderHtmlAtBuildTime: true,
  // We render <Search> to the DOM
  doNotRenderInBrowser: false,
};

export default SearchPageConfig;

function SearchPage(props) {
  if( props.isNodejs ) {
    return <Loading/>;
  } else {
    return <Search {...props}/>;
  }
}
~~~




## !VAR PROVIDERS

By controlling the rendering of your pages you can add any providers for Redux, GraphQL, etc.

See !VAR|LINK CONTROL_RENDERING for how to take over control of the rendering of your pages.

Example of adding the React Router providers:
at [/examples/react-router](/examples/react-router)

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

To load a frontend library hosted on a cdn, add `<script>` and `<style>` tags to your HTML, see !VAR|LINK CONTROL_HTML.

To load a frontend library saved on your disk, use a file that is loaded by all your pages:

~~~js
!INLINE /examples/frontend-libraries/pages/commons.js
~~~
~~~js
!INLINE /examples/frontend-libraries/pages/landing.page.js
~~~
~~~js
!INLINE /examples/frontend-libraries/pages/about.page.js
~~~

## !VAR SERVER_FRAMEWORKS

To use `ssr-coin` with `express`, `koa` or `hapi`, use the corresponding [server plugin](!VAR|ANCHOR PLUGINS_SERVER).

To use `ssr-coin` with another server framework, open a GitHub issue.
`ssr-coin` can be used with any server framework
but there is no documentation for this (yet).

## !VAR PROCESS_MANAGERS

In production, you can start your server with any process manager.

For example with `pm2`:

~~~bash
# if you transpile your server code (you run `ssr-coin build ./path/to/your/server.js`)
pm2 start ./.build/nodejs/server
~~~
~~~bash
# if you don't transpile your server code (you run `ssr-coin build`)
pm2 start ./path/to/your/server.js
~~~


## !VAR PLUGINS

###### !VAR PLUGINS_SERVER

###### !VAR PLUGINS_RENDER
