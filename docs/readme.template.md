!MENU_LINK /../../
!OUTPUT ../readme.md
!INLINE ./snippets/header.md --hide-source-path

!VAR WHAT_SSR_COIN What is `ssr-coin`
!VAR WHY_SSR_COIN Why `ssr-coin`

!VAR PLUGIN_LIST Plugins
!VAR PLUGINS_SERVER Server Plugins
!VAR PLUGINS_RENDER Render Plugins
!VAR PLUGINS_TRANSPILATION Transpilation Plugins

!VAR GETTING_STARTED Getting Started

!VAR CSS_AND_ASSETS CSS & Static Assets
!VAR ASYNC_DATA Async Data: `addInitialProps`
!VAR CONTROL_HTML HTML: `index.html`, `<head>`, `<meta>`, `<link>`, ...
!VAR CONTROL_RENDERING Control Rendering
!VAR SERVER_SIDE Server-Side Transpilation & Server-side Autoreload
!VAR PERFORMANCE_TUNING Performance: `doNotRenderInBrowser` & `renderHtmlAtBuildTime`

!VAR PAGE_CONFIG Page Config `*page.js`
!VAR SSR_COIN_CONFIG Global Config `ssr-coin.config.js`
!VAR CLI_REF CLI

!VAR ADD_PROVIDERS Providers: Redux / React Router / Vuex / Vue Router / GraphQL Apollo / Relay / ...
!VAR CONTROL_TRANSPILATION Transpilation: Babel / TypeScript /  ES6 / ...
!VAR CSS_IN_JS CSS-in-JS: Emotion / styled-components / ...
!VAR CSS_PRE_PROCESSORS CSS pre-processors: PostCSS / Sass / Less / ...
!VAR ROUTING Routing: Server-side Routing / Browser-side Routing / React Router / Vue Router / ...
!VAR FRONTEND_LIBRARIRES Frontend Libraries: Google Analytics / jQuery / Bootstrap / Semantic UI / ...
!VAR SERVER_FRAMEWORKS Server Frameworks: Express / Koa / Hapi / Fastify / ...
!VAR VIEW_LIBRARIES View Libraries: React / Vue / Preact / ...
!VAR PROCESS_MANAGERS Process Managers: Docker / systemd / PM2 / ...
!VAR STATIC_WEBSITES Generate Static Websites

!INLINE li-1 !VAR|LINK WHAT_SSR_COIN
!INLINE li-1 !VAR|LINK WHY_SSR_COIN
!INLINE li-1 !VAR|LINK PLUGIN_LIST
!INLINE li-1 Usage
!INLINE li-2 !VAR|LINK GETTING_STARTED
!INLINE li-2-header Basics
!INLINE li-2 !VAR|LINK CSS_AND_ASSETS
!INLINE li-2 !VAR|LINK ASYNC_DATA
!INLINE li-2 !VAR|LINK CONTROL_HTML
!INLINE li-2 !VAR|LINK CONTROL_RENDERING
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
!INLINE li-2 !VAR|LINK STATIC_WEBSITES

<br/>

## !VAR WHAT_SSR_COIN

`ssr-coin` is a library to add [server-side rendering (SSR)](https://github.com/brillout/awesome-universal-rendering#introduction) to your Node.js app.

It's a do-one-thing-do-it-well library: it takes care of SSR and SSR only and leaves the rest to you.

You define so-called page configs

~~~js
// A page config
export default {
  route: '/hello/:name',
  view: ({name}) => (
    <div>
      Hello {name}, welcome to ssr-coin.
    </div>
  ),
};
~~~

and `ssr-coin` takes care of SSR'ing your pages:
- It transpiles and bundles your pages' JavaScript, CSS, and other static assets (with Webpack)
- It routes your pages (with path-to-regexp)
- It servers your pages (with server middlewares for Express, Koa, Hapi, ...)

With `ssr-coin`, you can add SSR to your app with only a couple of lines.

**Example**

The following page showcases SSR:
- The page is interactive (as you can see in the video, the user can modify the state of the counter).
- The page is server-side rendered (as you can see in the video, the content of the page is rendered to HTML, such as "brillout/awesome-react-components").

<img align="right" src="https://github.com/reframejs/ssr-coin/raw/master/docs/ssr-coin_example_video.gif" width=336 height=706 style="max-width:100%;"/>

~~~js
!INLINE /examples/basics/pages/repos/repos.page.js
~~~

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR WHY_SSR_COIN

<br/>
:dove:&nbsp;&nbsp; <b>Freedom</b>

`ssr-coin` takes care of SSR and SSR only &mdash;
it is unopinionated about the rest of your stack
and works with:
- Any view libray: React, Vue, React Native Web, ...
- Any server framework: Express, Koa, Hapi, ...
- Any language: ES7, TypeScript, PostCSS, ...
- Any provider: Redux, React Router, Vuex, Vue Router, GraphQL Apollo, Relay, ...
- Any CSS-in-JS: Emotion, styled-components, ...
- Any process manager: Docker, systemd, PM2, ...

<br/>
:sparkles:&nbsp; <b>Easy</b>

We designed `ssr-coin` to be highly flexible with minimal configuration.
Resulting into what we believe to be the easiest SSR solution out there.

<br/>
:battery:&nbsp; <b>Batteries Included</b>

`ssr-coin` comes with lots of features.
Such as:
- Browser auto-reload
- Server auto-reload
- Fully controllable rendering (how & when your pages are rendered)
- Automatic code splitting
- Optimal HTTP caching

<br/>
:zap:&nbsp; <b>Blazing Fast Mobile Pages</b>

With the page config
`doNotRenderInBrowser` you control whether a page is loaded & rendered in the browser.
By setting `doNotRenderInBrowser: true`, the page has no (or very little) browser-side JavaScript.

For non-interactive pages, removing browser-side JavaScript is an effective way to achieve blazing fast performance on mobile.

<br/>
:mountain:&nbsp;&nbsp; <b>Future-proof & Rock-solid</b>

`ssr-coin` takes care of SSR and SSR only &mdash;
it is agnostic to the JavaScript ecosystem
and can easily adapt to the libraries of the future.
This makes it resilient and future-proof.

`ssr-coin` will likely survive a long time and will eventually become rock-solid.

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR GETTING_STARTED

This getting started is about adding `ssr-coin` to an exisiting app.
If you don't already have an app or if you just want to try out `ssr-coin`,
then use a [Reframe starter](https://github.com/reframejs/reframe#getting-started).

0. Install `ssr-coin`.

   ~~~shell
   npm install ssr-coin
   ~~~

   Install a [render plugin](!VAR|ANCHOR PLUGINS_RENDER), such as `@ssr-coin/react`:
   ~~~shell
   npm install @ssr-coin/react
   ~~~

   Install a [server plugin](!VAR|ANCHOR PLUGINS_SERVER), such as `@ssr-coin/express`:
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

   Create a `pages/` directory.
   ~~~shell
   cd path/to/your/project/ && mkdir pages/
   ~~~

   Create a file
   at `pages/hello.page.js`.

   With React:
   ~~~js
   // pages/hello.page.js

   !INLINE /examples/basics/pages/hello.page.js --hide-source-path
   ~~~

   <details>
   <summary>
   With Vue
   </summary>

   ~~~js
   // pages/hello.page.js

   !INLINE /examples/vue/pages/hello.page.js --hide-source-path
   ~~~
   ~~~js
   // pages/Hello.vue

   !INLINE /examples/vue/pages/Hello.vue --hide-source-path
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

That's it: you can now run `npm run dev` (`yarn dev`), go to [http://localhost:3000/hello/jon](http://localhost:3000/hello/jon), and start hacking.

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR CSS_AND_ASSETS

To load CSS, simply import it:

~~~js
import './path/to/style.css';
~~~

Importing static assets such as images, fonts, or videos
returns an URL:

~~~js
import imageUrl from './path/to/image.png';
// `imageUrl` is the URL that serves `./path/to/image.png`.
// Do something with imageUrl, e.g. `await fetch(imageUrl)` or `<img src={imageUrl}/>`.
~~~

You can also reference static assets in CSS:

~~~css
.logo {
    /* Your file's path on your disk `./path/to/image.png`
       will automatically be replaced with the URL that serves `./path/to/image.png` */
    background-image: url('./path/to/image.png');
}
@font-face {
    font-family: 'MyAwesomeFont';
    /* Your file's path on your disk `./path/to/my-awesome-font.ttf`
       will automatically be replaced with the URL that serves `./path/to/my-awesome-font.ttf` */
    src: url('./path/to/my-awesome-font.ttf') format('truetype');
}
~~~

Example of a page that uses all kinds of static assets:
 - [/examples/static-assets/](/examples/static-assets/)

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR ASYNC_DATA

You can load and render data by adding an `addInitialProps` function to your page config:

~~~js
!INLINE /examples/html/pages/product.page.js --hide-source-path
~~~

Alternatively, you can fetch data in a stateful component.
But the page's content is then rendered to the DOM only (and not to HTML).

We further explain the difference between using a stateful component and `addInitialProps` at:
 - [/examples/async-data/](/examples/async-data/)

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR CONTROL_HTML

To set the HTML meta tags of all your pages,
create an `index.html` file somewhere in your project's directory.
Your `index.html` needs to contain  `!HEAD` and `!BODY`:
~~~html
!INLINE /examples/html/index.html --hide-source-path
~~~

To set the HTML meta tags of only one page, use the page config:
~~~js
!INLINE /examples/html/pages/products.page.js
~~~
~~~js
!INLINE /examples/html/pages/about.page.js
~~~

See [`@brillout/html`'s documentation](https://github.com/brillout/html) for the list of all options.

Example:
 - [/examples/html](/examples/html)

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR CONTROL_RENDERING

You can control how your pages are rendered to HTML and the DOM.

For that,
save a `ssr-coin.config.js` file at your project's root directory and
add the `renderToHtml` and `renderToDom` configs:
~~~js
// ssr-coin.config.js

!INLINE /examples/react-router/ssr-coin.config.js --hide-source-path
~~~

Then create the `renderToDom` and `renderToHtml` files.

With React:

~~~js
// render/renderToDom.js

!INLINE /plugins/render-react/renderToDom.js --hide-source-path
~~~

~~~js
// render/renderToHtml.js

!INLINE /plugins/render-react/renderToHtml.js --hide-source-path
~~~

This allows you to add providers such as Redux's `<Provider store={store} />` or React Router's `<BrowserRouter />`.

<details>
<summary>
With Vue
</summary>

~~~js
// render/renderToDom.js

!INLINE /plugins/vue/renderToDom.js --hide-source-path
~~~

~~~js
// render/renderToHtml.js

!INLINE /plugins/vue/renderToHtml.js --hide-source-path
~~~

~~~js
// render/getVueInstance.js

!INLINE /plugins/vue/getVueInstance.js --hide-source-path
~~~

This allows you to add providers such as for Vuex or Vue Router.
</details>

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

Note that `ssr-coin` always transpiles and auto-reloads your browser code.

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR PERFORMANCE_TUNING

With `doNotRenderInBrowser` and `renderHtmlAtBuildTime` you can control when your pages are rendered.

By default,
a page is rendered twice:
it is first rendered to HTML on the server and then re-rendered to the DOM in the browser.
(Modern view libraries, such as React and Vue, are able to render views to the DOM as well as to HTML.
You can read an explanation of why rendering a page twice makes sense at [Awesome Universal Rendering](https://github.com/brillout/awesome-universal-rendering).)

###### doNotRenderInBrowser

With `doNotRenderInBrowser` you control whether your page is rendered in the browser.

- `doNotRenderInBrowser: false` (default value)
  - Slower Performance.
    <br/>
    The page's views (e.g. React components) and view libraries (e.g. React) are loaded, executed, and rendered in the browser.
    This can be very slow on mobile devices.
  - Interactive.
    <br/>
    Because your page is rendered to the browser's DOM, your page's views (e.g. React components) can be stateful and interactive.
- `doNotRenderInBrowser: true`
  - Increased performance.
    <br/>
    The page's views and view libraries are not loaded nor executed in the browser.
    Considerably less JavaScript is loaded/executed in the browser.
    A page that has (or very little) browser-side JavaScript is blazing fast on mobile.
  - Non-interactive.
    <br/>
    Because your page is not rendered to the browser's DOM, your page connot have stateful views / interacrive views.

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
  The page is rendered to HTML only once, when `ssr-coin` transpiles and builds your pages.

By default,
a page is rendered to HTML at request-time.
But if the page's content is static
(a landing page, an about page, a blog post, a personal homepage, etc.)
it is wasteful to re-render its HTML on every page request.

By setting `renderHtmlAtBuildTime: true` to all your pages,
you can remove the need for a Node.js server.
You can then deploy your app to a static host such as Netlify or GitHub Pages.

If you don't want to render your page to HTML at all,
then use a stateful component:
~~~jsx
import Loading from './path/to/your/loading/component';
import Search from './path/to/your/search/component';

// Rendering a search page to HTML doesn't make much sense.
// We render the search page only to the DOM.

const SearchPage = {
  title: 'Search products',
  route: '/search',
  view: SearchPage,
  // We render the <Loading> component to HTML at build-time
  renderHtmlAtBuildTime: true,
  // We render the <Search> component to the DOM
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

!INLINE /examples/html/pages/product-details.page.js --hide-source-path
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

  // Make `ssr-coin` silent in the terminal (but it will still prints errors).
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
    "ssr-coin": "^0.3.3",
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

Once Parcel v2 is released,
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

If there is a [transpilation plugin](!VAR|ANCHOR PLUGINS_TRANSPILATION) for the CSS pre-processor you want to use,
then simply use it.

If there isn't one,
then see [controlling transpilation](!VAR|ANCHOR CONTROL_TRANSPILATION).

Example:
 - [/examples/postcss](/examples/postcss)

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR ROUTING

On the web, there are two ways to do routing:
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
the browser terminates the current `/hello/jon` page and starts a new page at `/hello/alice`,
as if you would close your `/hello/jon` browser tab and open a new tab at `/hello/alice`.
It is the server that does the job of mapping URLs to pages and the browser is not involved in the routing process.

###### Browser-side Routing

HTML5 introduced a new browser API `history` that allows you to manipulate the browser URL history.
This enables browser-side routing:
when navigating from `/previous-page` to `/next-page`, instead of terminating the current page `/previous-page` and starting a new page at `/next-page`, the current page `/previous-page` is preserved, its URL changed to `/next-page` (with `history.pushState()`), and the content of `/next-page` is rendered to the DOM replacing the DOM of `/previous-page`.

Server-side routing is simpler than browser-side routing.
Whenever possible, server-side routing should be used instead of browser-side rendering.

But if server-side routing is not an option,
you can opt to do browser-side routing.
You can do browser-side routing by
[taking control over rendering](!VAR|ANCHOR CONTROL_RENDERING).

For example,
if you use React,
you can do browser-side rendering by taking control over rendering in order to add React Router:

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

To load a frontend library that is hosted on a cdn, add `<script>`/`<style>` tags to your HTML, see !VAR|LINK CONTROL_HTML.

To load a frontend library that is saved on disk, use a file that is loaded by all your pages:

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
then simply use it.

If there is no render plugin,
then [take control over rendering](!VAR|ANCHOR CONTROL_RENDERING).
That way you are able to use any view library.

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR PROCESS_MANAGERS

You can start your server with any process manager.

For example with `pm2`:

~~~bash
pm2 start ./.build/nodejs/server
~~~

If you don't transpile your server code (see !VAR|LINK),
then use your server entry file:

~~~bash
pm2 start ./path/to/your/server.js
~~~

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR STATIC_WEBSITES

If you set `renderHtmlAtBuildTime: true` to all your page configs,
then your entire browser-side code is generated at built-time.

This means that no Node.js server is required to serve your frontend.

If you don't need the Node.js server beyond serving your browser-side code then your app is essentially
just a collection of static assets for the browser.
Your app is then what is commonly called a "static website".

You can deploy a static website using a static host such as
[Netlify](https://www.netlify.com/),
[Amazon S3](https://aws.amazon.com/s3/), or
[GitHub Pages](https://pages.github.com/).

To deploy,
simply run `$ ssr-coin build`
(or better `npm run build` where `require('./package.json').scripts.build === 'ssr-coin build'`)
and copy the directory `.build/browser/`
(which is the directory that contains the browser assets)
to your static host.

!INLINE ./snippets/section-footer.md #readme --hide-source-path



## !VAR PLUGIN_LIST

#### !VAR PLUGINS_SERVER

Server integration plugins.

- [Express](/plugins/express)
- [Koa](/plugins/koa)
- [Hapi](/plugins/hapi)

#### !VAR PLUGINS_RENDER

View library integration plugins.

- [React](/plugins/react)
- [Vue](/plugins/vue)
- [React Native Web](/plugins/react-native-web)

#### !VAR PLUGINS_TRANSPILATION

Transpilation plugins to add languages.

- [TypeScript](/plugins/typescript)
- [PostCSS](/plugins/postcss)

#### Router Plugins

Plugins to (statically) route your pages.

- [`path-to-regexp`](/plugins/path-to-regexp)
- [Crossroads](/plugins/crossroads)

!INLINE ./snippets/section-footer.md #readme --hide-source-path



