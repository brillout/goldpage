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
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#async-data-addinitialprops>Async Data: `addInitialProps`</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#control-rendering>Control Rendering</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#html-meta-tags-indexhtml-title-meta-link->HTML Meta Tags: `index.html`, `<title/>`, `<meta/>`, `<link/>`, ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#server-side-transpilation--server-side-autoreload>Server-Side Transpilation & Server-side Autoreload</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#performance-donotrenderinbrowser--renderhtmlatbuildtime>Performance: `doNotRenderInBrowser` & `renderHtmlAtBuildTime`</a>
<sub>
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
API Reference
</sub>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#page-config-pagejs>Page Config `*page.js`</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#global-config-ssr-coinconfigjs>Global Config `ssr-coin.config.js`</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#cli>CLI</a>
<sub>
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Recipes
</sub>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#add-providers-redux--react-router--graphql-apollo--relay-->Add Providers: Redux / React Router / GraphQL Apollo / Relay / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#control-transpilation-babel--typescript---es6-->Control Transpilation: Babel / TypeScript /  ES6 / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#add-css-in-js-emotion--styled-components-->Add CSS-in-JS: Emotion / styled-components / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#add-css-pre-processor-postcss--sass--less-->Add CSS pre-processor: PostCSS / Sass / Less / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#control-routing-server-side-routing--browser-side-routing--react-router-->Control Routing: Server-side Routing / Browser-side Routing / React Router / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#add-frontend-libraries-google-analytics--jquery--bootstrap--semantic-ui-->Add Frontend Libraries: Google Analytics / jQuery / Bootstrap / Semantic UI / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#use-server-framework-express--koa--hapi--fastify-->Use Server Framework: Express / Koa / Hapi / Fastify / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#use-view-library-react--vue--preact-->Use View Library: React / Vue / Preact / ...</a>
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


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



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


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Plugins

###### Server plugins

Server integration plugins.

- [/plugins/render-express](/plugins/render-express)
- [/plugins/render-koa](/plugins/render-koa)
- [/plugins/render-hapi](/plugins/render-hapi)

###### Render plugins

View library integration plugins.

- [/plugins/render-react](/plugins/render-react)
- [/plugins/render-vue](/plugins/render-vue)
- [/plugins/render-react-native-web](/plugins/render-react-native-web)

###### Transpilation plugins

Transpilation plugins to add languages.

- [/plugins/typescript](/plugins/typescript)
- [/plugins/postcss](/plugins/postcss)


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



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


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



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


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Async Data: `addInitialProps`

You can load and render data by adding a `addInitialProps` function to your page config:

~~~js
// /examples/async-data/pages/got/html.page.js

import React from 'react';
import getCharacters from './data/getCharacters';
import CharacterList from './views/CharacterList';

export default {
  // `ssr-coin` calls `addInitialProps()` before rendering `view` to HTML or to the DOM.
  // Everything returned in `addInitialProps()` is passed to the `view`'s prop.
  addInitialProps: async () => {
    const characters = await getCharacters();
    return {characters};
  },

  // The `characters` returned by our `addInitialProps` is available at `props.characters`
  view: props => <CharacterList characters={props.characters}/>,

  doNotRenderInBrowser: true,

  route: '/html',
};
~~~

Alternatively, you can fetch data in a stateful component.
But then your data is rendered only to the DOM (and not to HTML).

We further explain the difference between both at:
 - [/examples/async-data/](/examples/async-data/)


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Control Rendering

You can control how your pages are rendered to HTML and to the DOM
by create `renderToHtml` and `renderToDom` files:

~~~js
// ssr-coin.config.js

module.exports = {
  renderToHtml: './render/renderToHtml.js',
  renderToDom: './render/renderToDom.js',
};
~~~

~~~js
// render/renderToDom.js

import React from 'react';
import ReactDOM from 'react-dom';

export default renderToDom;

async function renderToDom({page, initialProps, CONTAINER_ID}) {
  ReactDOM.hydrate(
    <page.view {...initialProps}/>,
    document.getElementById(CONTAINER_ID)
  );
}
~~~

~~~js
// render/renderToHtml.js

const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = renderToHtml;

async function renderToHtml({page, initialProps, CONTAINER_ID}) {
  const html = (
    ReactDOMServer.renderToStaticMarkup(
      React.createElement(page.view, initialProps)
    )
  );

  // Altnertively, you can return a `@brillout/html` options object
  // in order to have more control over the generated HTML. See all
  // html options at https://github.com/brillout/html
  // return {
  //   head: [
  //     '<style>body{background: blue;}</style>',
  //   ],
  //   body: [
  //     '<div>Some additional HTML</div>',
  //     '<div id='+CONTAINER_ID+'>'+html+'</div>',
  //   ]
  // };

  return html;
}
~~~

Controlling the rendering of your app allows you to add providers for React libraries such as Redux.

Examples:
- [/examples/react-router](/examples/react-router)
- [/examples/redux](/examples/redux)
- [/examples/styled-components](/examples/styled-components)


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Server-Side Transpilation & Server-side Autoreload

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


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## HTML Meta Tags: `index.html`, `<title/>`, `<meta/>`, `<link/>`, ...

To set HTML meta tags for all pages, create a `index.html` file:
~~~html
// /examples/html/index.html

<!DOCTYPE html>
<html>
  <head>
    !HEAD
  </head>
  <body>
    !BODY
    <script src="https://example.org/some-lib.js" type="text/javascript"></script>
  </body>
</html>
~~~

To set HTML meta tags of a page, use the page's config:
~~~js
// /examples/html/pages/product.page.js

import React from 'react';
import logoUrl from './logo.png';
import manifestUrl from './manifest.webmanifest';
import fetchProduct from './fetchProduct';

export default {
  route: '/product/:productId',
  view: () => <h1>Welcome</h1>,

  // ssr-coin uses the package @brillout/html (https://github.com/brillout/html) to generate HTML.
  // All @brillout/html's options are avaible over the page config

  // Adds <title>Welcome</title>
  title: 'Welcome',

  // Adds <link rel="shortcut icon" href="/logo.hash_85dcecf7a6ad1f1ae4d590bb3078e4b1.png">
  favicon: logoUrl,

  // Adds <meta name="description" content="A welcome page.">
  description: 'A welcome page.',

  // Adds <script src="https://example.org/awesome-lib.js" type="text/javascript"></script>
  scripts: [
    'https://example.org/awesome-lib.js',
  ],

  // Adds <link href="https://example.org/awesome-lib.css" rel="stylesheet">
  styles: [
    'https://example.org/awesome-lib.css',
  ],

  // Adds <link rel="manifest" href="/manifest.hash_bb5e0038d1d480b7e022aaa0bdce25a5.webmanifest">
  head: [
		'<link rel="manifest" href="'+manifestUrl+'"/>',
    // HTML in this array is added to <head>
    // Make sure that the HTML you inject is safe; escape all user generated content.
  ],

  body: [
    '<script>console.log("hello from injected script")</script>',
    // HTML in this array is added to <body>
    // Make sure that the HTML you inject is safe; escape all user generated content.
  ],

  // You can generate HTML dynamically.
  // E.g. to have page meta tags generatetd upon loaded data.
  addInitialProps: async ({productId}) => {
    const product = await fetchProduct(productId);
    return {product};
  },
  title: ({product, productId}) => product.name+' ('+productId+')',
  head: ({product}) => [
    // Open Graph tags
    '<meta property="og:title" content="'+product.name+'">',
    '<meta property="og:description" name="description" content="'+product.description+'">',
  ],
};
~~~
~~~js
// /examples/html/pages/about.page.js

import React from 'react';

export default {
  // `html` allows you to override the `index.html` file for a specific page:
  html: (
`<!DOCTYPE html>
<html>
  <head>
    <title>Title set over \`html\` option.</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
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

See [`@brillout/html`'s documentation](https://github.com/brillout/html) for the list of all options.

Example:
 - [/examples/html](/examples/html)


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Performance: `doNotRenderInBrowser` & `renderHtmlAtBuildTime`

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


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Page Config `*page.js`

#### Contents


- <a href=#page-configs>Page Configs</a> - List of all page configs.
- <a href=#initial-props>Initial Props</a> - List of all initial props.
- <a href=#html-configs>HTML Configs</a> - List of HTML configs.

#### Page Configs

~~~js
// pages/*.page.js

import React from 'react';
import fetchProduct from './fetchProduct';
// Definition of `getHtmlOptions` is shown below.
import getHtmlOptions from './getHtmlOptions';
// Definition of `assert_initialProps` is shown below.
import assert_initialProps from './assert_initialProps';

export default getPageConfig();

function getPageConfig() {
  return {
    // The url of the page.
    // The routing is done by `path-to-regexp` (https://github.com/pillarjs/path-to-regexp).
    route: '/products/:productId',

    // Add additional inital props, for example data loaded from an API.
    // `addInitialProps` can be async and `ssr-coin` awaits `addInitialProps` before
    // rendering `view` to the DOM / HTML.
    addInitialProps,

    // The content of your page.
    // `view` is rendered by the render plugin you installed.
    view,

    // Control when the page is rendered.
    // See section "Performance: `doNotRenderInBrowser` & `renderHtmlAtBuildTime`".
    doNotRenderInBrowser: false,
    renderHtmlAtBuildTime: false,

    ...getHtmlOptions()
  };
}

async function addInitialProps(initialProps) {
  // See the definition of `assert_initialProps` for
  // a full referance of what `initialProps` contains.
  assert_initialProps(initialProps);

  const {productId} = initialProps;
  const product = await fetchProduct(productId);
  return {product};
}

function view(initialProps) {
  assert_initialProps(initialProps);

  // The props returned by `addInitialProps` are available to `view`.
  const {product} = initialProps;

  return (
    <div>
      Product id: <b>{initialProps.productId}</b><br/>
      Product name: <b>{initialProps.product.name}</b><br/>
      Product description: <b>{initialProps.product.description}</b><br/>
    </div>
  );
}
~~~


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#contents"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>

#### Initial Props

~~~js
import assert from '@brillout/reassert';

export default assert_initialProps;

function assert_initialProps(initialProps){
  const {
    // Route arguments
    productId,

    // Query paramaters
    productColor,

    // Whether the code is being run in Node.js or in the browser
    isNodejs,

    // URL props
    url,
    origin,
    protocol,
    hostname,
    port,
    pathname,
    query,
    queryString,
    hash,

    // The request object is available here.
    // The page config as well.
    // See below.
    ...initialProps__rest
  } = initialProps;

  assert.internal(url.startsWith('http'));
  if( url==='http://localhost:3000/products/123?productColor=blue#reviews' ){
    // Url params
    assert(productId==='123');
    assert(productColor==='blue');

    // Url props
    assert(origin==='http://localhost:3000');
    assert(protocol==='http:');
    assert(hostname==='localhost');
    assert(port==='3000');
    assert(pathname==='/products/123');
    assert(query.productColor==='blue');
    assert(queryString==='?productColor=blue');
    assert(hash==='#reviews');
  }

  assert([true, false].includes(isNodejs));

  // The server framework's request object is also available.
  // For example, to get the HTTP request headers `req.headers`:
  const {headers} = initialProps__rest;

  // The page config is available at `initialProps`
  assert(initialProps__rest.route);
  assert(initialProps__rest.view);

  // Since all props are flat-merged into one object, there can be conflicts.
  // In case of a prop name conflict, you can access all props over `__sources`.
  const {__sources} = initialProps;
  // Props returned by `addInitialProps`
  assert(__sources.addInitialProps__result===null || __sources.addInitialProps__result.product);

  // The request object returned by your server framework (Express / Koa / Hapi / ...)
  assert(isNodejs===false || __sources.requestObject);
  assert(isNodejs===false || __sources.requestObject.headers);

  // The url props returned by `@brillout/parse-url` (https://github.com/brillout/parse-url)
  assert(__sources.urlProps);

  // The route params
  assert(__sources.routeArguments);
  assert(__sources.routeArguments.productId);

  // The page config
  assert(__sources.pageConfig);
  assert(__sources.pageConfig.route);
  assert(__sources.pageConfig.view);

  // Whether the code is running on the server or in the browser.
  assert(__sources.isNodejs===isNodejs);
}
~~~


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#contents"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>

#### HTML Configs

~~~js
import manifestUrl from './manifest.webmanifest';

export default getHtmlOptions;

function getHtmlOptions() {
  // ssr-coin uses `@brillout/html` (https://github.com/brillout/html) to generate HTML.
  // All `@brillout/html` options are available over the page config.

  return {
    // Adds <title>Title shown in browser tab.</title>
    title: 'Title shown in browser tab.',
    /* Altneratively:
    title: initialProps => {
      assert_initialProps(initialProps);
      // Props returned by `addInitialProps` are also available to the `@brillout/html` options
      return initialProps.product.product.name;
    },
    */

    // <meta name="description" content="Description of page shown in search engines.">
    description: 'Description of page shown in search engines.',
    /*
    // Not only `title` but all options can be dynmically generated with a function
    description: initialProps => initialProps.product.product.name,
    */

    // <link rel="shortcut icon" href="/logo.hash_85dcecf7a6ad1f1ae4d590bb3078e4b1.png">
    favicon: require('./logo.png'),

    head: [
      '<link rel="manifest" href="'+manifestUrl+'">',
    ],
    body: [
      '<script>console.log("hello from injected script")</script>',
    ],
    /* Again, we can use a function to dynammically generate HTML.
    body: initialProps => {
      return [
        '<script>console.log("hello from '+initialProps.product.productname+' page.")</script>',
      ];
    },
    */

    // You can fully control the HTML:
    html: (
`<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    !HEAD
  </head>
  <body>
    !BODY
  </body>
</html>
`
    ),
    /* Dynammically as well:
    html: initialProps => '...',
    */

    // See https://github.com/brillout/html for the list of all options
  };
}
~~~


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#contents"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Global Config `ssr-coin.config.js`

We try keep `ssr-coin` as zero-config as possible,
hence `ssr.config.js` has only few options.

~~~js
// ssr.config.js

module.exports = {
  // Control how pages are rendered. (See section "Control Rendering").
  renderToHtml: require.resolve('./path/to/your/renderToHtml'),
  renderToDom: require.resolve('./path/to/your/renderToDom'),

  // Make `ssr-coin` log to the console only for errors.
  silent: true,
};
~~~


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## CLI

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


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Add Providers: Redux / React Router / GraphQL Apollo / Relay / ...

By controlling the rendering of your pages you can add providers for Redux, GraphQL, etc.

See <a href=#control-rendering>Control Rendering</a> for how to take over control of the rendering of your pages.

Examples:
- [/examples/react-router](/examples/react-router)
- [/examples/redux](/examples/redux)
- [/examples/styled-components](/examples/styled-components)


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>


## Control Transpilation: Babel / TypeScript /  ES6 / ...

You can configure Babel and the JavaScript transpilation by creating a `.babelrc` file.
See [/examples/babel](/examples/babel) for an example of configuring babel.

`ssr-coin` currently uses Webpack.
This means that for custom transpilations beyond babel, modifications to `ssr-coin`'s webpack config are required.
Instead of modifying `ssr-coin`'s webpack config yourself,
see if there is a [transpilation plugin](#transpilation-plugins) [transpilation plugin]
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


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Add CSS-in-JS: Emotion / styled-components / ...

Some CSS-in-JS libraries,
such as [emotion](https://github.com/emotion-js/emotion),
work with SSR out of the box and no additional setup is required.

For some others,
such as [styled-components](https://github.com/styled-components/styled-components),
you make need to
[take control over rendering](#control-rendering).

Examples:
- [/examples/emotion](/examples/emotion)
- [/examples/styled-components](/examples/styled-components)


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Add CSS pre-processor: PostCSS / Sass / Less / ...

By [controlling transpilation](#control-transpilation-babel--typescript---es6--) you can add CSS pre-processors such as PostCSS.

Example:
 - [/examples/postcss](/examples/postcss)


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Control Routing: Server-side Routing / Browser-side Routing / React Router / ...

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
[taking control over rendering](#control-rendering).

Example of a React app doing browser-side routing with React Router:

~~~js
// /examples/react-router/render/renderToDom.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

export default renderToDom;

async function renderToDom({page, initialProps, CONTAINER_ID}) {
  ReactDOM.hydrate(
    <BrowserRouter>
      <page.view {...initialProps}/>
    </BrowserRouter>,
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

async function renderToHtml({page, initialProps}) {
  const {pathname, search, hash} = initialProps;
  return (
    ReactDOMServer.renderToStaticMarkup(
      React.createElement(
        StaticRouter,
        {location: {pathname, search, hash, state: undefined}, context: {}},
        React.createElement(
          page.view,
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


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Add Frontend Libraries: Google Analytics / jQuery / Bootstrap / Semantic UI / ...

To load a frontend library that is hosted on a cdn, add `<script>` and `<style>` tags to your HTML, see <a href=#html-meta-tags-indexhtml-title-meta-link->HTML Meta Tags: `index.html`, `<title/>`, `<meta/>`, `<link/>`, ...</a>.

To load a frontend library that is saved on your disk, use a file that is loaded by all your pages:

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


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>


## Use Server Framework: Express / Koa / Hapi / Fastify / ...

To use `ssr-coin` with `express`, `koa` or `hapi`, use the corresponding [server plugin](#server-plugins).

To use `ssr-coin` with another server framework, open a GitHub issue.
`ssr-coin` can be used with any server framework
but there is no documentation for this (yet).


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>


## Use View Library: React / Vue / Preact / ...

If there is a [render plugin](#render-plugins) for the view library you want to use,
then just install the plugin and that's it.

If there is no render plugin,
then [take control over rendering](#control-rendering).
That way you should be able to use any view library.


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>


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


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/ssr-coin/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users.
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>




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
