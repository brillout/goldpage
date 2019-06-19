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
<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#plugins>Plugins</a>
<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp; Usage
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#getting-started>Getting Started</a>
<sub>
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Basics
</sub>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#css--static-assets>CSS & Static Assets</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#async-data-getinitialprops>Async Data: `getInitialProps`</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#control-rendering>Control Rendering</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#html-meta-tags-indexhtml-title-meta-link->HTML Meta Tags: `index.html`, `<title/>`, `<meta/>`, `<link/>`, ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#server-side-transpalition--server-side-autoreload>Server-Side Transpalition & Server-side Autoreload</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#performance-donotrenderinbrowser--renderhtmlatbuildtime>Performance: `doNotRenderInBrowser` & `renderHtmlAtBuildTime`</a>
<sub>
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Recipes
</sub>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#add-providers-redux--react-router--graphql-apollo--relay-->Add Providers: Redux / React Router / GraphQL Apollo / Relay / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#control-transpalition-babel--typescript---es6-->Control Transpalition: Babel / TypeScript /  ES6 / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#add-css-pre-processor-postcss--sass--less-->Add CSS pre-processor: PostCSS / Sass / Less / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#control-routing-static-routing--dynmaic-routing--react-router-->Control Routing: Static Routing / Dynmaic Routing / React Router / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#add-frontend-libraries-google-analytics--jquery--bootstrap--semantic-ui-->Add Frontend Libraries: Google Analytics / jQuery / Bootstrap / Semantic UI / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#use-server-framework-express--koa--hapi--fastify-->Use Server Framework: Express / Koa / Hapi / Fastify / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#use-process-manager-docker--systemd--pm2-->Use process manager: Docker / systemd / PM2 / ...</a>

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




## Getting Started

This getting started is about adding `ssr-coin` to an exisiting app.
If you want to start from scratch
then use a Reframe starter instead.

0. Install `ssr-coin`.

   ~~~shell
   npm install ssr-coin
   ~~~

   Install a [render plugin](#render-plugins) such as `@ssr-coin/vue` or `@ssr-coin/react`.
   ~~~shell
   npm install @ssr-coin/react
   ~~~

   Install a [server plugin](#server-plugins) such as `@ssr-coin/hapi` or `@ssr/express`.
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

## CSS & Static Assets

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



## Async Data: `getInitialProps`

You can load and render data by adding a `getInitialProps` function to your page config:

~~~js
// /examples/async-data/pages/got/html.page.js

import React from 'react';
import getCharacters from './data/getCharacters';
import CharacterList from './views/CharacterList';

export default {
  // Everything returned in `getInitialProps()` is passed to the props of the `view` component
  getInitialProps: async () => {
    const characters = await getCharacters();
    return {characters};
  },

  // Our data is available at `props.characters`
  view: props => <CharacterList characters={props.characters}/>,

  doNotRenderInBrowser: true,

  route: '/html',
};
~~~

Alternatively, you can fetch data in a stateful component.
But then your data is rendered only to the DOM (and not to HTML).

We further explain the difference between both at:
 - [/examples/async-data/](/examples/async-data/)


## Control Rendering

You can control how your pages are rendered
by adding `renderToHtml` and `renderToDom` to your `ssr-coin.config.js`:

Example of adding React Router to a React app:

~~~js
// /examples/react-router/render/renderToDom.js

const React = require('react');
const ReactDOM = require('react-dom');
const {BrowserRouter} = require('react-router-dom');

module.exports = renderToDom;

async function renderToDom({pageConfig, initialProps, CONTAINER_ID}) {
  ReactDOM.hydrate(
    React.createElement(
      BrowserRouter,
      null,
      React.createElement(pageConfig.view, initialProps)
    ),
    document.getElementById(CONTAINER_ID)
  );
}
~~~

~~~js
// /examples/react-router/render/renderToHtml.js

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {StaticRouter} = require('react-router');

module.exports = renderToHtml;

async function renderToHtml({pageConfig, initialProps, ...url}) {
  const location = {
      pathname: initialProps.route.url.pathname,
      search: initialProps.route.url.search,
      hash: initialProps.route.url.hash,
      state: undefined
  };

  return (
    ReactDOMServer.renderToStaticMarkup(
      React.createElement(
        StaticRouter,
        {location, context: {}},
        React.createElement(
          pageConfig.view,
          initialProps
        )
      )
    )
  );
}
~~~

~~~js
// /examples/react-router/ssr-coin.config.js

module.exports = {
  renderToHtml: './render/renderToHtml.js',
  renderToDom: './render/renderToDom.js',
};
~~~

The example's entire source code is at:
- [/examples/react-router](/examples/react-router)

## Server-Side Transpalition & Server-side Autoreload

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




## HTML Meta Tags: `index.html`, `<title/>`, `<meta/>`, `<link/>`, ...

To set HTML meta tags for all pages, create a `index.html` file:
~~~html
// /examples/html-meta-tags/index.html

<!DOCTYPE html>
<html>
  <head>
    <link rel="manifest" href="/manifest.json">
    !HEAD
  </head>
  <body>
    !BODY
    <script src="https://example.org/some-lib.js" type="text/javascript"></script>
  </body>
</html>
~~~

To set HTML meta tags for one page only, use the page's config:
~~~js
// /examples/html-meta-tags/pages/landing.page.js

import React from 'react';

export default {
  // Adds <title>Welcome</title>
  title: 'Welcome',

  // Adds <meta name="description" content="A welcome page."/>
  description: 'A welcome page.',

  // Adds <script src="https://example.org/awesome-lib.js" type="text/javascript"></script>
  scripts: [
    'https://example.org/awesome-lib.js',
  ],

  // Adds <link href="https://example.org/awesome-lib.css" rel="stylesheet"/>
  styles: [
    'https://example.org/awesome-lib.css',
  ],

  // ssr-coin uses the package @brillout/index-html (https://github.com/brillout/index-html) to generate HTML.
  // All @brillout/index-html's options are avaible over the page config

  route: '/',
  view: () => <h1>Welcome</h1>,
};
~~~
~~~js
// /examples/html-meta-tags/pages/about.page.js

import React from 'react';

export default {
  // `indexHtml` allows you to override the `index.html` file for a specific page:
  indexHtml: (
`<!DOCTYPE html>
<html>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <head>
    !HEAD
  </head>
  <body>
    !BODY
  </body>
</html>
`
  ),

  route: '/about',
  view: () => <h1>About Page</h1>,
};
~~~

See [`@brillout/index-html`'s documentation](https://github.com/brillout/index-html) for the list of all options.

Example:
 - [/examples/html-meta-tags](/examples/html-meta-tags)


## Performance: `doNotRenderInBrowser` & `renderHtmlAtBuildTime`

With `doNotRenderInBrowser` and `renderHtmlAtBuildTime` you can control when your pages are rendered.

By default,
a page is rendered twice:
it is first rendered to HTML on the server and then rendered again to the DOM in the browser.
(Modern view libraries, such as React and Vue, are able to render views to the DOM as well as to HTML.)
(You can read an explanation of why rendering a page twice makes sense at [Awesome Universal Rendering](https://github.com/brillout/awesome-universal-rendering).)
With `ssr-coin` you can choose whether your pages are rendered to the DOM and/or to HTML.

###### `doNotRenderInBrowser`

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

###### `renderHtmlAtBuildTime`

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




## Add Providers: Redux / React Router / GraphQL Apollo / Relay / ...

By controlling the rendering of your pages you can add any providers for Redux, GraphQL, etc.

See <a href=#control-rendering>Control Rendering</a> for how to take over control of the rendering of your pages.

Example of adding the React Router providers:
at [/examples/react-router](/examples/react-router)

## Control Transpalition: Babel / TypeScript /  ES6 / ...

Make sure

`ssr-coin` currently uses webpack to transpile your code.
`ssr-coin` which means you may need to modify `ssr-coin` webpack's config.
If there is a plugin available.
For exampe, for TypeScript, simply use the [TypeScript plugin](/plugins/typescript).
If there is no plugin available then open a GitHub issue and we'll build a plugin together.

We will use Parcel instead of Webpack once Parcel v2 is released.
There will then be no need for transpalition plugins anymore (since parcel is zero-config).

## Add CSS pre-processor: PostCSS / Sass / Less / ...




## Control Routing: Static Routing / Dynmaic Routing / React Router / ...
## Add Frontend Libraries: Google Analytics / jQuery / Bootstrap / Semantic UI / ...

To load a frontend library hosted on a cdn, add `<script>` and `<style>` tags to your HTML, see <a href=#html-meta-tags-indexhtml-title-meta-link->HTML Meta Tags: `index.html`, `<title/>`, `<meta/>`, `<link/>`, ...</a>.

To load a frontend library saved on your disk, use a file that is loaded by all your pages:

~~~js
// /examples/frontend-libraries/pages/commons.js

if(
  // Do not load the frontend libraries on the server
  isBrowser()
){
  require('../frontend/normalize.css');
  require('../frontend/style.css');
  require('../frontend/google-analytics.js');
}

function isBrowser() {
  return typeof window !== "undefined";
}
~~~
~~~js
// /examples/frontend-libraries/pages/landing.page.js

require('./commons.js');

import React from 'react';

export default {
  route: '/',
  view: () => <h1>Landing Page</h1>,
};
~~~
~~~js
// /examples/frontend-libraries/pages/about.page.js

require('./commons.js');

import React from 'react';

export default {
  route: '/about',
  view: () => <h1>About Page</h1>,
};
~~~

## Use Server Framework: Express / Koa / Hapi / Fastify / ...

To use `ssr-coin` with `express`, `koa` or `hapi`, use the corresponding [server plugin](#server-plugins).

To use `ssr-coin` with another server framework, open a GitHub issue.
`ssr-coin` can be used with any server framework
but there is no documentation for this (yet).

## Use process manager: Docker / systemd / PM2 / ...

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


## Plugins

###### Server plugins

###### Render plugins

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
