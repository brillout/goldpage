!MENU_LINK /../../
!OUTPUT ../readme.md
!INLINE ./snippets/header.md --hide-source-path

!VAR WHAT_SSR_COIN What is `ssr-coin`
!VAR WHY_SSR_COIN Why `ssr-coin`

!VAR PLUGIN_LIST Plugins
!VAR PLUGINS_SERVER Server plugins
!VAR PLUGINS_RENDER Render plugins
!VAR PLUGINS_TRANSPILATION Transpilation plugins

!VAR GETTING_STARTED Getting Started

!VAR CSS_AND_ASSETS CSS & Static Assets
!VAR ASYNC_DATA Async Data: `addInitialProps`
!VAR CONTROL_RENDERING Control Rendering
!VAR SERVER_SIDE Server-Side Transpilation & Server-side Autoreload
!VAR CONTROL_HTML HTML Meta Tags: `index.html`, `<title/>`, `<meta/>`, `<link/>`, ...
!VAR PERFORMANCE_TUNING Performance: `doNotRenderInBrowser` & `renderHtmlAtBuildTime`

!VAR PAGE_CONFIG Page Config `*page.js`
!VAR SSR_COIN_CONFIG Global Config `ssr-coin.config.js`
!VAR CLI_REF CLI

!VAR ADD_PROVIDERS Add Providers: Redux / React Router / GraphQL Apollo / Relay / ...
!VAR CONTROL_TRANSPILATION Control Transpilation: Babel / TypeScript /  ES6 / ...
!VAR CSS_IN_JS Add CSS-in-JS: Emotion / styled-components / ...
!VAR CSS_PRE_PROCESSORS Add CSS pre-processor: PostCSS / Sass / Less / ...
!VAR ROUTING Control Routing: Server-side Routing / Browser-side Routing / React Router / ...
!VAR FRONTEND_LIBRARIRES Add Frontend Libraries: Google Analytics / jQuery / Bootstrap / Semantic UI / ...
!VAR SERVER_FRAMEWORKS Use Server Framework: Express / Koa / Hapi / Fastify / ...
!VAR VIEW_LIBRARIES Use View Library: React / Vue / Preact / ...
!VAR PROCESS_MANAGERS Use process manager: Docker / systemd / PM2 / ...

!INLINE li-1 !VAR|LINK WHAT_SSR_COIN
!INLINE li-1 !VAR|LINK WHY_SSR_COIN
!INLINE li-1 !VAR|LINK PLUGIN_LIST
!INLINE li-1 Usage
!INLINE li-2 !VAR|LINK GETTING_STARTED
!INLINE li-2-header Basics
!INLINE li-2 !VAR|LINK CSS_AND_ASSETS
!INLINE li-2 !VAR|LINK ASYNC_DATA
!INLINE li-2 !VAR|LINK CONTROL_RENDERING
!INLINE li-2 !VAR|LINK CONTROL_HTML
!INLINE li-2 !VAR|LINK SERVER_SIDE
!INLINE li-2 !VAR|LINK PERFORMANCE_TUNING
!INLINE li-2-header API Reference
!INLINE li-2 !VAR|LINK PAGE_CONFIG
!INLINE li-2 !VAR|LINK SSR_COIN_CONFIG
!INLINE li-2 !VAR|LINK CLI_REF
!INLINE li-2-header Recipes
!INLINE li-2 !VAR|LINK ADD_PROVIDERS
!INLINE li-2 !VAR|LINK CONTROL_TRANSPILATION
!INLINE li-2 !VAR|LINK CSS_IN_JS
!INLINE li-2 !VAR|LINK CSS_PRE_PROCESSORS
!INLINE li-2 !VAR|LINK ROUTING
!INLINE li-2 !VAR|LINK FRONTEND_LIBRARIRES
!INLINE li-2 !VAR|LINK SERVER_FRAMEWORKS
!INLINE li-2 !VAR|LINK VIEW_LIBRARIES
!INLINE li-2 !VAR|LINK PROCESS_MANAGERS

<br/>

## !VAR WHAT_SSR_COIN

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

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR WHY_SSR_COIN

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

You can now run `npm run dev` (`yarn dev`) then go to `/hello/jon` and see your first SSR page.


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

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR PLUGIN_LIST

###### !VAR PLUGINS_SERVER

Server integration plugins.

- [/plugins/render-express](Express)
- [/plugins/render-koa](Koa)
- [/plugins/render-hapi](Hapi)

###### !VAR PLUGINS_RENDER

View library integration plugins.

- [/plugins/render-react](React)
- [/plugins/render-vue](Vue)
- [/plugins/render-react-native-web](React Native Web)

###### !VAR PLUGINS_TRANSPILATION

Transpilation plugins to add languages.

- [/plugins/typescript](TypeScript)
- [/plugins/postcss](PostCSS)

!INLINE ./snippets/section-footer.md #readme --hide-source-path



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
     addInitialProps: async () => {
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

You can now run `npm run dev` (`yarn dev`) and go to your newly created page `/hello/jon`.

!INLINE ./snippets/section-footer.md #readme --hide-source-path



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

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR ASYNC_DATA

You can load and render data by adding a `addInitialProps` function to your page config:

~~~js
!INLINE /examples/async-data/pages/got/html.page.js
~~~

Alternatively, you can fetch data in a stateful component.
But then your data is rendered only to the DOM (and not to HTML).

We further explain the difference between both at:
 - [/examples/async-data/](/examples/async-data/)

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR CONTROL_RENDERING

You can control how your pages are rendered to HTML and to the DOM
by create `renderToHtml` and `renderToDom` files:

~~~js
// ssr-coin.config.js

!INLINE /examples/react-router/ssr-coin.config.js --hide-source-path
~~~

~~~js
// render/renderToDom.js

!INLINE /plugins/render-react/renderToDom.js --hide-source-path
~~~

~~~js
// render/renderToHtml.js

!INLINE /plugins/render-react/renderToHtml.js --hide-source-path
~~~

Controlling the rendering of your app allows you to add providers for React libraries such as Redux.

Examples:
- [/examples/react-router](/examples/react-router)
- [/examples/redux](/examples/redux)
- [/examples/styled-components](/examples/styled-components)

!INLINE ./snippets/section-footer.md #readme --hide-source-path



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

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR CONTROL_HTML

To set HTML meta tags for all pages, create a `index.html` file:
~~~html
!INLINE /examples/html/index.html
~~~

To set HTML meta tags of a page, use the page's config:
~~~js
!INLINE /examples/html/pages/product.page.js
~~~
~~~js
!INLINE /examples/html/pages/about.page.js
~~~

See [`@brillout/html`'s documentation](https://github.com/brillout/html) for the list of all options.

Example:
 - [/examples/html](/examples/html)

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR PERFORMANCE_TUNING

With `doNotRenderInBrowser` and `renderHtmlAtBuildTime` you can control when your pages are rendered.

By default,
a page is rendered twice:
it is first rendered to HTML on the server and then rendered again to the DOM in the browser.
(Modern view libraries, such as React and Vue, are able to render views to the DOM as well as to HTML.)
(You can read an explanation of why rendering a page twice makes sense at [Awesome Universal Rendering](https://github.com/brillout/awesome-universal-rendering).)
With `ssr-coin` you can choose whether your pages are rendered to the DOM and/or to HTML.

###### doNotRenderInBrowser

With `doNotRenderInBrowser` you control whether your page is rendered in the browser.

- `doNotRenderInBrowser: false` (default value)
  - Slower Performance
    <br/>
    The page's views (e.g. the page's React components) and view libraries (e.g. React) are loaded, executed, and rendered in the browser.
    This can be slow on mobile devices.
  - Interactive
    <br/>
    Because your page is rendered to the browser's DOM, your page can be stateful and interactive.
- `doNotRenderInBrowser: true`
  - Increased performance
    <br/>
    The page's views and view libraries are not loaded nor executed in the browser.
    This means that considerably less JavaScript is loaded/executed in the browser.
    This performance gain is substantial on mobile devices.
  - Not interactive
    <br/>
    Because your page is not rendered to the browser's DOM, your page connot have stateful nor interactive views.

In a nutshell:
If your page needs to be interactive then you have to rendered it in the browser and set `doNotRenderInBrowser` to `false`.
But if your page isn't interactive then you can set `doNotRenderInBrowser` to `true` for increased performance and a blazing fast page on mobile devices.

###### renderHtmlAtBuildTime

With `renderHtmlAtBuildTime` you can control whether the page's HTML is
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
  The page is rendered to HTML only once, when your app is transpiled and built.

By default,
a page is rendered to HTML at request-time.
But if the page's content is static
(a landing page, an about page, a blog post, a personal homepage, etc.)
it is wasteful to re-render its HTML on every page request.

By setting `renderHtmlAtBuildTime: true` to all your pages,
you can remove the need for a Node.js server.
You can then deploy your app to a static host such as Netlify or GitHub Pages.

If you don't want to render your page to HTML at all,
then do something like that:
~~~jsx
import Loading from './path/to/your/loading/component';
import Search from './path/to/your/search/component';

// Rendering a search page to HTML doesn't make much sense.
// We render the search page only to the DOM.

const SearchPage = {
  title: 'Search products',
  route: '/search',
  view: SearchPage,
  // We render <Loading> to HTML at build-time
  renderHtmlAtBuildTime: true,
  // We render <Search> to the DOM
  doNotRenderInBrowser: false,
};

export default SearchPage;

function SearchPage(props) {
  if( props.isNodejs ) {
    return <Loading/>;
  } else {
    return <Search {...props}/>;
  }
}
~~~

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR PAGE_CONFIG

#### Contents

!VAR PAGE_CONFIGS Page Configs
!VAR INITIAL_PROPS Initial Props
!VAR HTML_CONFIGS HTML Configs

- !VAR|LINK PAGE_CONFIGS - List of all page configs.
- !VAR|LINK INITIAL_PROPS - List of all initial props.
- !VAR|LINK HTML_CONFIGS - List of HTML configs.

#### !VAR PAGE_CONFIGS

~~~js
// pages/*.page.js

!INLINE /examples/html/pages/products.page.js --hide-source-path
~~~

!INLINE ./snippets/section-footer.md #contents --hide-source-path

#### !VAR INITIAL_PROPS

~~~js
!INLINE /examples/html/pages/assert_initialProps.js --hide-source-path
~~~

!INLINE ./snippets/section-footer.md #contents --hide-source-path

#### !VAR HTML_CONFIGS

~~~js
!INLINE /examples/html/pages/getHtmlOptions.js --hide-source-path
~~~

!INLINE ./snippets/section-footer.md #contents --hide-source-path



## !VAR SSR_COIN_CONFIG

We try keep `ssr-coin` as zero-config as possible,
hence `ssr.config.js` has only few options.

~~~js
// ssr.config.js

module.exports = {
  // Control how pages are rendered. (See section "!VAR CONTROL_RENDERING").
  renderToHtml: require.resolve('./path/to/your/renderToHtml'),
  renderToDom: require.resolve('./path/to/your/renderToDom'),

  // Make `ssr-coin` log to the console only for errors.
  silent: true,
};
~~~

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR CLI_REF

`ssr-coin` has two commands:

- ~~~shell
  $ ssr-coin dev ./path/to/your/server.js
  ~~~
  The `dev` command starts your server with auto-reload:
  whenever you make a change to your code,
  your code is rebuilt and the pages open in your browser are reloaded.
  The `dev` command is meant to be used while you develop your app.

- ~~~shell
  $ ssr-coin build ./path/to/your/server.js
  ~~~
  The `build` command builds your code for production.
  (E.g. it minifies your browser-side code whereas the `dev` command doesn't.)
  Once `build` is finished you can repeatedly start and shut down your server.
  If your server-side code is written in JavaScript then you can call your server entry directly: `$ node ./path/to/your/server.js`.
  If not, then run the transpiled version which is located in the `.build` directory: `$ node ./build/nodejs/server.js`.

Do not install `ssr-coin` globally and do not call the `ssr-coin` CLI directly.
Use your `package.json`'s `scripts` instead:

~~~json
{
  "dependencies": {
    "ssr-coin": "^0.3.2",
  },
  "scripts": {
    "dev": "ssr-coin dev ./path/to/your/server.js",
    "prod": "npm run build && npm run start",
    "build": "ssr-coin build ./path/to/your/server.js",
    "start": "export NODE_ENV='production' && node ./.build/nodejs/server"
  }
}
~~~

You can then install a local `ssr-coin` copy (`$ npm install` / `$ yarn`) and
then call `$ npm run dev` (/ `$ yarn dev`).

A local install has couple of advantages over a global install:
 - Many projects can have many different `ssr-coin` versions.
 - Removing your project's directory also removes `ssr-coin`.

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR ADD_PROVIDERS

By controlling the rendering of your pages you can add providers for Redux, GraphQL, etc.

See !VAR|LINK CONTROL_RENDERING for how to take over control of the rendering of your pages.

Examples:
- [/examples/react-router](/examples/react-router)
- [/examples/redux](/examples/redux)
- [/examples/styled-components](/examples/styled-components)

!INLINE ./snippets/section-footer.md #readme --hide-source-path


## !VAR CONTROL_TRANSPILATION

You can configure Babel and the JavaScript transpilation by creating a `.babelrc` file.
See [/examples/babel](/examples/babel) for an example of configuring babel.

`ssr-coin` currently uses Webpack.
This means that for custom transpilations beyond babel, modifications to `ssr-coin`'s webpack config are required.
Instead of modifying `ssr-coin`'s webpack config yourself,
see if there is a [transpilation plugin](!VAR|ANCHOR PLUGINS_TRANSPILATION) [transpilation plugin]
that modifies `ssr-coin`'s webpack config for you.
For exampe, for TypeScript, you can use the [TypeScript plugin](/plugins/typescript).
If there is no plugin for what you need, then open a GitHub issue and we'll create one together.

Once Parcel v2's is released,
`ssr-coin` will use Parcel instead of Webpack.
Since Parcel is zero-config, most of your transpilation needs will then just work.
(Transpilation plugins will not be required anymore.)

Examples:
- [/examples/typescript](/examples/typescript)
- [/examples/babel](/examples/babel)

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR CSS_IN_JS

Some CSS-in-JS libraries,
such as [emotion](https://github.com/emotion-js/emotion),
work with SSR out of the box and no additional setup is required.

For some others,
such as [styled-components](https://github.com/styled-components/styled-components),
you make need to
[take control over rendering](!VAR|ANCHOR CONTROL_RENDERING).

Examples:
- [/examples/emotion](/examples/emotion)
- [/examples/styled-components](/examples/styled-components)

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR CSS_PRE_PROCESSORS

By [controlling transpilation](!VAR|ANCHOR CONTROL_TRANSPILATION) you can add CSS pre-processors such as PostCSS.

Example:
 - [/examples/postcss](/examples/postcss)

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR ROUTING

There are two ways to do routing on the web:
*server-side routing*
and
*browser-side routing*.

###### Server-side Routing

Routes defined in your page configs

~~~jsx
import React from 'react';

export default {
  route: '/hello/:name',
  view: ({name}) => (
    <div>
      Welcome {name}.
    </div>
  ),
};
~~~

are server-side routes:
when navigating from `/hello/jon` to `/hello/alice`
the browser terminates the current page `/hello/jon` and starts a new page at `/hello/alice`,
as if you would close the `/hello/jon` tab and open a new tab `/hello/alice`.
It is the server that does the job of mapping URLs to pages and the browser is not involved in the routing process.

###### Browser-side Routing

HTML5 introduced a new browser API `history` that allows to manipulate the browser URL history enabling browser-side routing:
when navigating from `/previous-page` to `/next-page`, instead of terminating the current page `/previous-page` and starting a new page at `/next-page`, the current page `/previous-page` is preserved, its URL changed to `/next-page` (with `history.pushState()`), and the content of `/next-page` is rendered to the DOM replacing the DOM of `/previous-page`.

Server-side routing is simpler than browser-side routing and server-side routing should be used when possible.
But if server-side routing is not an option,
you can opt to do browser-side routing.

You can do browser-side routing by
[taking control over rendering](!VAR|ANCHOR CONTROL_RENDERING).

Example of a React app doing browser-side routing with React Router:

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

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR FRONTEND_LIBRARIRES

To load a frontend library that is hosted on a cdn, add `<script>` and `<style>` tags to your HTML, see !VAR|LINK CONTROL_HTML.

To load a frontend library that is saved on your disk, use a file that is loaded by all your pages:

~~~js
!INLINE /examples/frontend-libraries/pages/commons.js
~~~
~~~js
!INLINE /examples/frontend-libraries/pages/landing.page.js
~~~
~~~js
!INLINE /examples/frontend-libraries/pages/about.page.js
~~~

!INLINE ./snippets/section-footer.md #readme --hide-source-path


## !VAR SERVER_FRAMEWORKS

To use `ssr-coin` with `express`, `koa` or `hapi`, use the corresponding [server plugin](!VAR|ANCHOR PLUGINS_SERVER).

To use `ssr-coin` with another server framework, open a GitHub issue.
`ssr-coin` can be used with any server framework
but there is no documentation for this (yet).

!INLINE ./snippets/section-footer.md #readme --hide-source-path


## !VAR VIEW_LIBRARIES

If there is a [render plugin](!VAR|ANCHOR PLUGINS_RENDER) for the view library you want to use,
then just install the plugin and that's it.

If there is no render plugin,
then [take control over rendering](!VAR|ANCHOR CONTROL_RENDERING).
That way you should be able to use any view library.

!INLINE ./snippets/section-footer.md #readme --hide-source-path


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

!INLINE ./snippets/section-footer.md #readme --hide-source-path



