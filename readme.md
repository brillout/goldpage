<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->
<p align="center">
  <a href="/../../#readme">
    <img align="center" src="/docs/assets/logo-with-text.svg" height=96 style="max-width:100%;" alt="Goldpage"/>
  </a>
</p>











<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#what-is-goldpage>What is Goldpage</a>
<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#how-it-works>How it Works</a>
<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#learn-more>Learn More</a>
<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp; Usage
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#getting-started>Getting Started</a>
<br/>
<sub>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Basics
</sub>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#css--static-assets>CSS & Static Assets</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#async-data-addinitialprops>Async Data: `addInitialProps`</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#html-indexhtml-head-meta-link->HTML: `index.html`, `<head>`, `<meta>`, `<link>`, ...</a>
<br/>
<sub>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Render Control
</sub>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#where--when-rendertodom-rendertohtml--renderhtmlatbuildtime>Where & when: `renderToDom`, `renderToHtml` & `renderHtmlAtBuildTime`</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#how-htmlrender--domrender>How: `htmlRender` & `domRender`</a>
<br/>
<sub>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
App Types
</sub>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#spa--mpa>SPA & MPA</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#ssr>SSR</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#static-website>Static Website</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#mixed-apps--bfa>Mixed Apps & BFA</a>
<br/>
<sub>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
API Reference
</sub>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#page-config-pagejs>Page Config `*.page.js`</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#goldpage-config-goldpageconfigjs>Goldpage Config `goldpage.config.js`</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#cli>CLI</a>
<br/>
<sub>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Recipes
</sub>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#providers-redux--react-router--vuex--vue-router--graphql-apollo--relay-->Providers: Redux / React Router / Vuex / Vue Router / GraphQL Apollo / Relay / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#transpilation-babel--typescript---es6-->Transpilation: Babel / TypeScript /  ES6 / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#css-in-js-emotion--styled-components-->CSS-in-JS: Emotion / styled-components / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#css-pre-processors-postcss--sass--less-->CSS pre-processors: PostCSS / Sass / Less / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#routing-server-side-routing--browser-side-routing--react-router--vue-router-->Routing: Server-side Routing / Browser-side Routing / React Router / Vue Router / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#frontend-libraries-google-analytics--jquery--bootstrap--semantic-ui-->Frontend Libraries: Google Analytics / jQuery / Bootstrap / Semantic UI / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#server-express--koa--hapi--fastify-->Server: Express / Koa / Hapi / Fastify / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#view-libraries-react--vue--preact-->View Libraries: React / Vue / Preact / ...</a>
<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp; <a href=#process-managers-docker--systemd--pm2-->Process Managers: Docker / systemd / PM2 / ...</a>

<br/>



## What is Goldpage

Goldpage makes it easy to create a modern frontend.

You define pages:

~~~jsx
// A page config
export default {
  route: '/hello/:name',
  view: ({name}) => (
    <div>
      Hello {name}, welcome to Goldpage.
    </div>
  ),
};
~~~

The Goldpage CLI takes care of the rest:

~~~shell
$ goldpage build
~~~

Your pages are built at `.build/browser/`.
If your pages are static, deploy `.build/browser/` to a static host such as Netlify and you are done.

For server-side rendering, use a Node.js server and add the Goldpage middleware:

~~~js
// Goldpage can be used with any Node.js server framework (Express, Koa, Hapi, ...)
const express = require('express');
const goldpage = require('goldpage');

const app = express();

// Our Goldpage middleware serves your pages.
app.use(goldpage.express);
~~~

Goldpage is a tiny do-one-thing-do-it-well library (~4K LOCs) with a simple interface. Yet it is powerful:
- **Render Control** -
  You can choose when and where your pages are rendered:
  one page can be rendered to both HTML and the DOM (classic SSR),
  another page can be rendered to HTML only (good old plain HTML like in the 90s!),
  and a third page can be rendered to the DOM only (classic SPA).
- **Any view tool** -
  Goldpage can be used with
  any view framework (React, Vue, RNW, Svelte, ...) and
  any view library (Redux, Vuex, GraphQL, ...).
- **HTML-only for mobile** -
  You can choose to render a page to HTML only with
  no browser-side JavaScript.
  Removing browser-side JavaScript is an effective
  way to achieve high performance on mobile.
- **Any app type** -
  Goldpage supports all app types
  (SPA, SSR, Static Website, ...)
  and switching from one app type to another is easy;
  you can start writing a prototype and decide later which app type is right for you.
  No more endless research whether you should go for a static website or SSR!
- **Backend First Apps** -
  Goldpage introduces a new app type &mdash; the [Backend First App (BFA)](/docs/bfa.md#readme).
  A BFA uses the view framework (React, Vue, ...) primarly as an HTML template engine
  and only secondarily to implement interactive views.


## How it Works

Goldpage uses Webpack to transpile and bundle your pages. Its Webpack config is minimal allowing you to easily modify and extend it.

Goldpage is designed to give you full control over how and where your pages are rendered.

You control where a page is rendered with two page configs:
- `renderToDom` - If set to true, your page is rendered to the DOM (browser).
- `renderToHtml` - If set to true, your page is rendered to HTML (Node.js).

If you want to add SSR to a page you set `renderToHtml: true` and `renderToDom: true`.
If you want a page to be an SPA, you set `renderToDom: true` and `renderToHtml: false`.
You can also set `renderToHtml: true` and `renderToDom: false` for a page
to be rendered only to HTML with zero browser-side JavaScript.
(Good old plain HTML like in the 90s!)

You can control how your pages are rendered by defining the render functions `htmlRender` and `domRender`:

~~~js
// We can use any view framework here (React, Vue, RNW, ...)

import React from 'react';
import ReactDOM from 'react-dom';

export default domRender;

async function domRender({page, initialProps, CONTAINER_ID}) {
  const element = React.createElement(page.view, initialProps);
  const container = document.getElementById(CONTAINER_ID);
  if( page.renderToHtml ){
    ReactDOM.hydrate(element, container);
  } else {
    ReactDOM.render(element, container);
  }
}
~~~

~~~js
const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = htmlRender;

async function htmlRender({page, initialProps, CONTAINER_ID}) {
  const el = React.createElement(page.view, initialProps);
  const html = ReactDOMServer.renderToStaticMarkup(el);
  return html;
}
~~~

Goldpage's render control enables you to:
- Build any app type. (SPA, SSR, static website, ...)
- Build new kinds of apps, such as [Backend First Apps](/docs/bfa.md#readme).
- Use any view framework. (React, Vue, RNW, ...)
- Use any view library. (React Router, Vuex, GraphQL, ...)

For server-side rendering, we provide a server middleware that can be used with any server framework. (Express, Koa, Hapi, ...)


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Learn More

Learning material.

- [Backend First App (BFA)](/docs/bfa.md#readme)
  <br/>
  Introduction to BFAs.
  A BFA uses the view framework (React, Vue, ...) primarly as an HTML template engine
  and only secondarily to implement interactive views.
  Increasing productivity and performance.
- [Goldpage VS Others (CRA, Next.js, Nuxt.js, Gatsby, Vue CLI, etc.)](/docs/goldpage-vs-others.md#readme)
  <br/>
  Explains what makes Goldpage different from other tools (CRA, Next.js, Nuxt.js, Gatsby, Vue CLI, etc.)
- [CSR & SSR Explained](/docs/csr-and-ssr-explained.md#readme)
  <br/>
  Explains what CSR and SSR are.
- [Client-side Rendering (CSR) VS Server-side Rendering (SSR)](/docs/csr-vs-ssr.md#readme)
  <br/>
  Helps you choose between CSR and SSR.
- [Plugins](/plugins#readme)
  <br/>
  List of Goldpage plugins.


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Getting Started

This getting started adds Goldpage to an exisiting app.
If you don't have an app yet or if you just want to try out Goldpage,
then use a [Goldpage starter](https://github.com/topics/goldpage-starter).

0. Install Goldpage.

   ~~~shell
   npm install goldpage
   ~~~

   Install a [render plugin](/plugins#render-plugins), such as `@goldpage/react`:
   ~~~shell
   npm install @goldpage/react
   ~~~

   Install a [server plugin](/plugins#server-plugins), such as `@goldpage/express`:
   ~~~shell
   npm install @goldpage/express
   ~~~

1. Add Goldpage to your Node.js server.

   With Express:
   ~~~js
   const express = require('express');
   const ssr = require('goldpage');

   const app = express();
   app.use(ssr.express);
   ~~~

   <details>
   <summary>
   With Hapi
   </summary>

   ~~~js
   const Hapi = require('hapi');
   const ssr = require('goldpage');

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
   const ssr = require('goldpage');

   const app = new Koa();
   app.use(ssr.koa);
   ~~~
   </details>

   <details>
   <summary>
   With other server frameworks
   </summary>

   Goldpage can be used with any server framework.
   But there is no documentation for this (yet).
   Open a GitHub issue
   if you want to use Goldpage with a server framework other than
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

   import React, {useState} from 'react';

   export default {
     route: '/hello/:name',
     addInitialProps,
     view: Hello,
     title,
     renderToHtml: true,
   };

   async function addInitialProps({name}) {
     // We simulate a network request delay
     await sleep(0.5);

     const nameReversed = name.split('').reverse().join('');
     return {nameReversed};
   }

   function Hello({name, nameReversed}) {
     const [isReversed, setReverse] = useState(false);

     return (
       <div>
         Hello <span>{isReversed ? nameReversed : name}</span>, welcome to Goldpage.
         <br/>
         <button onClick={() => setReverse(!isReversed)}>Reverse name</button>
       </div>
     );
   }

   function title({name}) {
     return 'Hi '+name;
   }

   function sleep(seconds) {
     let resolve;
     const promise = new Promise(r => resolve=r);
     setTimeout(resolve, seconds*1000);
     return promise;
   }
   ~~~

   <details>
   <summary>
   With Vue
   </summary>

   ~~~js
   // pages/hello.page.js

   import Hello from './Hello.vue';

   export default {
     route: '/hello/:name',
     addInitialProps,
     view: Hello,
     title,
     renderToHtml: true,
   };

   async function addInitialProps({name}) {
     // We simulate a network request delay
     await sleep(0.5);

     const nameReversed = name.split('').reverse().join('');
     return {nameReversed};
   }

   function title({name}) {
     return 'Hi '+name;
   }

   function sleep(seconds) {
     let resolve;
     const promise = new Promise(r => resolve=r);
     setTimeout(resolve, seconds*1000);
     return promise;
   }
   ~~~
   ~~~js
   // pages/Hello.vue

   <template>
     <div>
       Hello {{isReversed?nameReversed:name}}, welcome to <code>Goldpage</code>.
       <br/>
       <button v-on:click="toggleReverse">Reverse name</button>
     </div>
   </template>

   <script>
   import Vue from "vue";

   export default {
     props: ['name', 'nameReversed'],
     data() {
       return {
         isReversed: false,
         bundler: "Parcel"
       };
     },
     methods: {
       toggleReverse: function() {
         this.isReversed = !this.isReversed;
       },
     },
   };
   </script>

   <style scoped>
   code {
     color: gold;
   }
   </style>
   ~~~
   </details>

3. Add the Goldpage scripts to your `package.json`:
   ~~~json
   {
     "scripts": {
       "dev": "goldpage dev ./path/to/your/server.js",
       "prod": "npm run build && npm run start",
       "build": "goldpage build ./path/to/your/server.js",
       "start": "export NODE_ENV='production' && node ./.build/nodejs/server"
     }
   }
   ~~~

   > :information_source:
   > Goldpage also builds your server's source code
   > so that you can use the same language,
   > for example TypeScript,
   > for browser-side code as well as for server-side code.

That's it: you can now run `npm run dev` (`yarn dev`) and go to [http://localhost:3000/hello/jon](http://localhost:3000/hello/jon).


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## CSS & Static Assets

To load a CSS file, simply import it:

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


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Async Data: `addInitialProps`

You can load and render data by adding an `addInitialProps` function to your page config:

~~~js
import React from 'react';
import fetchProduct from './fetchProduct';
import Product from './Product';

export default {
  route: '/product/:productId',

  // Goldpage calls `addInitialProps()` before rendering `view` to HTML or to the DOM.
  // Alls props returned in `addInitialProps()` are passed to the `view`'s props.
  addInitialProps: async ({productId}) => {
    const product = await fetchProduct(productId);
    return {product};
  },

  // The `product` returned by `addInitialProps` is available to `view`.
  view: initialProps => {
    const {product} = initialProps;
    return (
      <Product product={product}/>
    );
  },

  // The initial props are also available for generating HTML code.
  title: initialProps => {
    const {product, productId} = initialProps;
    return (
      product.name+' ('+productId+')'
    );
  },

  renderToHtml: true,
};
~~~

Alternatively, you can fetch data in a stateful component.
But the page's content is then rendered to the DOM only (and not to HTML).

We further explain the difference between using a stateful component and `addInitialProps` at:
 - [/examples/async-data/](/examples/async-data/)


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## HTML: `index.html`, `<head>`, `<meta>`, `<link>`, ...

To set the HTML meta tags of all your pages,
create an `index.html` file somewhere in your project's directory.
Your `index.html` needs to contain  `!HEAD` and `!BODY`:
~~~html
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

To set the HTML meta tags of only one page, use the page config:
~~~js
// /examples/html/pages/products.page.js

import React from 'react';
import logoUrl from './logo.png';
import manifestUrl from './manifest.webmanifest';
import fetchProduct from './fetchProduct';
import Product from './Product';

export default {
  view: Product,

  // Goldpage uses the package @brillout/html (https://github.com/brillout/html) to generate HTML.
  // All @brillout/html's options are available over the page config.

  // Adds <title>Welcome</title>
  title: 'Product Page',

  // Adds <link rel="shortcut icon" href="/logo.hash_85dcecf7a6ad1f1ae4d590bb3078e4b1.png">
  favicon: logoUrl,

  // Adds <meta name="description" content="A welcome page.">
  description: 'Describes a product',

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
    // All HTML in this array are added to `<head>`.
    // Make sure that the HTML you inject here is safe and escape all user generated content.
  ],

  body: [
    '<script>console.log("hello from injected script")</script>',
    // All HTML in this array are added to `<body>`.
    // Make sure that the HTML you inject here is safe and escape all user generated content.
  ],

  // You can also generate HTML dynamically:
  route: '/products/:productId',
  addInitialProps: async ({productId}) => {
    const product = await fetchProduct(productId);
    return {product};
  },
  title: ({product, productId}) => product.name+' ('+productId+')',
  description: ({product}) => product.description,
  head: ({product}) => [
    // Open Graph tags
    '<meta property="og:title" content="'+product.name+'">',
    '<meta property="og:description" name="description" content="'+product.description+'">',
  ],

  renderToHtml: true,
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
  renderToHtml: true,
};
~~~

See [`@brillout/html`'s documentation](https://github.com/brillout/html) for the list of all options.

Example:
 - [/examples/html](/examples/html)


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## SPA & MPA

> :information_source: You can use Goldpage without reading this section.

> :warning: This section is meant for readers that know what SPAs and MPAs are.

If what you want is an MPA
then you don't have to do anything:
Goldpage's default app type is an MPA.
- By default, your pages are rendered only in the browser. (That is: `renderToDom: true` and `renderToHtml: false`. We explain `renderToHtml` and `renderToDom` at <a href=#where--when-rendertodom-rendertohtml--renderhtmlatbuildtime>Where & when: `renderToDom`, `renderToHtml` & `renderHtmlAtBuildTime`</a>.)
- By default, your pages are routed on the server-side. (We explain what "server-side routing" means at <a href=#routing-server-side-routing--browser-side-routing--react-router--vue-router-->Routing: Server-side Routing / Browser-side Routing / React Router / Vue Router / ...</a>.)

If what you want is an SPA
then:
- Create a single page with a catch-all route. (That is, create only one page config with `route: '/:param*` to have all URLs routed to this single page.)
- Use a browser-side routing library such as React Router. (We elaborate more at <a href=#routing-server-side-routing--browser-side-routing--react-router--vue-router-->Routing: Server-side Routing / Browser-side Routing / React Router / Vue Router / ...</a>.)

Note that an MPA is usually better than an SPA.
You most likely want an MPA instead of an SPA.
(An MPA is basically the same as an SPA but with server-side routing and code-splitting.)

FYI, an SPA is what you get when you use create-react-app, vue-cli, Webpack, or Parcel.


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## SSR

> :information_source: You can use Goldpage without reading this section.

> :warning: This section is meant for readers that know what an SSR app is.

If you want an SSR app,
then:
- Set `renderToHtml: true` and `renderToDom: true` to all your page configs. (We explain `renderToHtml` and `renderToDom` at <a href=#where--when-rendertodom-rendertohtml--renderhtmlatbuildtime>Where & when: `renderToDom`, `renderToHtml` & `renderHtmlAtBuildTime`</a>.)

(FYI, an SSR app is what you get when you use Next.js or Nuxt.js.)


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Static Website

> :information_source: You can use Goldpage without reading this section.

> :warning: This section is meant for readers that know what a static website is.

If you want a static website,
then:
- Set `renderHtmlAtBuildTime: true` to all your page configs. (We explain `renderHtmlAtBuildTime` at <a href=#where--when-rendertodom-rendertohtml--renderhtmlatbuildtime>Where & when: `renderToDom`, `renderToHtml` & `renderHtmlAtBuildTime`</a>.)

By setting `renderHtmlAtBuildTime: true` to all your page configs,
all browser-side code and assets are generated at built-time.

This means that no Node.js server is required to serve your frontend and
you can deploy your frontend using a static host such as
[Netlify](https://www.netlify.com/),
[Amazon S3](https://aws.amazon.com/s3/), or
[GitHub Pages](https://pages.github.com/).

To deploy,
simply run `$ goldpage build`
(or better: `npm run build` while `require('./package.json').scripts.build === 'goldpage build'`)
and deploy the directory `.build/browser/`
(this is the directory that contains all browser assets)
to your static host.

(FYI, a static website is what you get when you use Gastby.)


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Mixed Apps & BFA

> :information_source: You can use Goldpage without reading this section.

> :warning: **Prerequisite Knowledge**
> <br/>
> For this section you need to know:
> <br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp;
> CSR & SSR
> <br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp;
> `renderToDom` & `renderToHtml`
> <br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp;
> Interactive VS non-interactive
> <br/>
> You can learn all this
> at [CSR & SSR Explained](/docs/csr-and-ssr-explained.md#readme).

Tools usually implement CSR and SSR in an all-or-nothing way:
either all your pages are CSR'd or all your pages are SSR'd.

Our `renderToHtml`/`renderToDom` interface gives you a fine grain control &mdash;
you can mix CSR and SSR:
one page can be CSR'd (`renderToDom: true` & `renderToHtml: false`) while another page can be SSR'd (`renderToDom: false` & `renderToHtml: true`).

For example,
if your app is non-interactive with the exception of one interactive page, then
you can set CSR for that interactive page (`renderToDom: true` and `renderToHtml: false`) and set SSR for all your other pages (`renderToDom: false` and `renderToHtml: true`).

This mixing enables a whole new range of app types that where previously not possible to achieve.

For example,
what we call a *BFA (Backend First App)*.
The idea of a BFA is to
use React (or Vue)
primarily as an HTML template engine and
only secondarily to implement interactive views.
To achieve:
- Fast mobile pages
- High development speed
- Reliable SEO
More at [BFA](/docs/bfa.md#readme).


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Where & when: `renderToDom`, `renderToHtml` & `renderHtmlAtBuildTime`

> :information_source: You can use Goldpage without reading this section.

> :warning: **Prerequisite Knowledge**
> <br/>
> This section requires you to know what CSR and SSR are (which we explain at
> [CSR & SSR Explained](/docs/csr-and-ssr-explained.md#readme)).

There are three page configs that allow you to control when your page is rendered:
- `renderToDom` - If set to true, your page is rendered in the browser (to the DOM).
- `renderToHtml` - If set to true, your page is rendered to HTML (in Node.js).
- `renderHtmlAtBuildTime` - Whether your page is rendered to HTML at request-time or at build-time.

The default values are `renderToDom: true` and `renderToHtml: false`,
which means that by default your page is rendered only in the browser.

Configuring these three page configs are about achieving improvements in:

- Search Engines
  <br/>
  All search engines other than Google (Bing, Baidu, Yandex, DuckDuckGo, ...) cannot crawl content rendered to the DOM.
  If you want your pages to appear in these search engines,
  then you need to render them to HTML.
- Google Search
  <br/>
  Google is capable of crawling content rendered to the DOM but with limitations.
  Rendering your pages to HTML can still be beneficial.
- Social Sharing Previews
  <br/>
  When your page is shared on a social site (Facebook, Twitter, ...) then a little preview (title, description, and image) of your page is shown.
  To have a correct preview the meta data of your page needs to be rendered to HTML.
  (No social site can crawl meta data rendered dynamically to the DOM.)
- Performance
  <br/>
  Your page's performance can vastly differ depending on whether your page is rendered to the DOM and/or to HTML.
- Mobile Performance
  <br/>
  Browser-side JavaScript is a performance killer for low-end devices such as mobile phones.
  On mobile,
  rendering your page to HTML is drastically faster then rendering it to the DOM.

At
[Client-side Rendering (CSR) VS Server-side Rendering (SSR)](/docs/csr-vs-ssr.md#readme),
we elaborate how to set `renderToHtml`, `renderToDom` and `renderHtmlAtBuildTime`
in order to achieve improvements in the above points.
But before you learn more about these page configs and what you can achieve with them,
we recommend that you first implement a prototype and learn more only after you need improvements in the above mentioned points.


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## How: `htmlRender` & `domRender`

You can control how your pages are rendered
to HTML and the DOM.

For that,
save a `goldpage.config.js` file at your project's root directory
(the directory that contains your `package.json`)
and add the `htmlRender` and `domRender` configs:
~~~js
// goldpage.config.js

module.exports = {
  htmlRender: './render/htmlRender.js',
  domRender: './render/domRender.js',
};
~~~

Then create the `domRender` and `htmlRender` files.

With React:

~~~js
// render/domRender.js

import React from 'react';
import ReactDOM from 'react-dom';

export default domRender;

async function domRender({page, initialProps, CONTAINER_ID}) {
  const element = React.createElement(page.view, initialProps);
  const container = document.getElementById(CONTAINER_ID);
  if( page.renderToHtml ){
    ReactDOM.hydrate(element, container);
  } else {
    ReactDOM.render(element, container);
  }
}
~~~

~~~js
// render/htmlRender.js

const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = htmlRender;

async function htmlRender({page, initialProps, CONTAINER_ID}) {
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
  //     '<div id="'+CONTAINER_ID+'">'+html+'</div>',
  //   ]
  // };

  return html;
}
~~~

This allows you to add providers such as Redux's `<Provider store={store} />` or React Router's `<BrowserRouter />`.

<details>
<summary>
With Vue
</summary>

~~~js
// render/domRender.js

import Vue from 'vue';
import getVueInstance from './getVueInstance';

export default domRender;

async function domRender({page, initialProps, CONTAINER_ID}) {
  const vm = getVueInstance(page.view, initialProps);

  vm.$mount('#'+CONTAINER_ID);
}
~~~

~~~js
// render/htmlRender.js

const VueServerRenderer = require('vue-server-renderer');
const getVueInstance = require('./getVueInstance');

module.exports = htmlRender;

async function htmlRender({page, initialProps}) {
  const renderer = VueServerRenderer.createRenderer();

  const vm = getVueInstance(page.view, initialProps);

  const html = await renderer.renderToString(vm);

  return html;
}
~~~

~~~js
// render/getVueInstance.js

let Vue = require('vue');
Vue = Vue.default || Vue;

module.exports = getViewInstance;

function getViewInstance(view, initialProps) {
  if( view instanceof Function ){
    return view(initialProps);
  } else {
    return (
      new Vue({
        render: createElement => createElement(view, {props: initialProps}),
      })
    );
  }
}
~~~

This allows you to add providers such as for Vuex or Vue Router.
</details>

Examples:
- [/examples/react-router](/examples/react-router)
- [/examples/redux](/examples/redux)
- [/examples/styled-components](/examples/styled-components)


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Page Config `*.page.js`

The following page config showcases an overview of the available page configs.

~~~js
// pages/*.page.js

import React from 'react';
import fetchProduct from './fetchProduct';
import getHtmlOptions from './getHtmlOptions';
import assert_initialProps from './assert_initialProps';
import Product from './Product';

export default getPageConfig();

function getPageConfig() {
  return {
    // The url of the page.
    // The routing is done by `path-to-regexp` (https://github.com/pillarjs/path-to-regexp).
    route: '/product-details/:productId',

    // Add additional inital props, for example data loaded from an API.
    // `addInitialProps` can be async and Goldpage awaits `addInitialProps` before
    // rendering `view` to the DOM / HTML.
    addInitialProps,

    // The content of your page.
    // `view` is rendered by the render plugin you installed.
    view: Product,

    // Control when the page is rendered.
    // More in a section below.
    renderToDom: true, // (default value)
    renderToHtml: false, // (default value)
    renderHtmlAtBuildTime: false, // default value

    // The definition of `getHtmlOptions` is shown in a section below
    // and shows all HTML configs.
    ...getHtmlOptions()
  };
}

async function addInitialProps(initialProps) {
  // The definition of `assert_initialProps` is shown in a section below
  // and shows all `initialProps`.
  assert_initialProps(initialProps);

  const {productId} = initialProps;

  const product = await fetchProduct(productId);

  return {product};
}
~~~
We now list all configs.


- <a href=#all-initial-props-initialprops>All initial props `initialProps`</a>
- <a href=#all-page-configs-for-the-pages-html-document>All page configs for the page's HTML document</a>
- <a href=#all-render-page-configs-rendertodom-rendertohtml--renderhtmlatbuildtime>All render page configs: `renderToDom`, `renderToHtml` & `renderHtmlAtBuildTime`</a>

##### All initial props `initialProps`

This `initialProps` assertion showcases all `initialProps`.

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

##### !VAR HTML_CONFIGS

List of all HTML configs:

~~~js
import manifestUrl from './manifest.webmanifest';

export default getHtmlOptions;

function getHtmlOptions() {
  // Goldpage uses `@brillout/html` (https://github.com/brillout/html) to generate HTML.
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

##### All render page configs: `renderToDom`, `renderToHtml` & `renderHtmlAtBuildTime`

A page has three render configs:
 - `renderToDom`
 - `renderToHtml`
 - `renderHtmlAtBuildTime`

In this section we only explain what each config does.
At <a href=#where--when-rendertodom-rendertohtml--renderhtmlatbuildtime>Where & when: `renderToDom`, `renderToHtml` & `renderHtmlAtBuildTime`</a> we explain how to set these three render configs.

###### `renderToDom`

With `renderToDom` you control whether your page is rendered in the browser (to the DOM).

- `renderToDom: true` (default value)
  - Slower Performance.
    <br/>
    The page's views (e.g. React components) and view libraries (e.g. React) are loaded, executed, and rendered in the browser.
    This can be very slow on mobile devices.
  - Interactive.
    <br/>
    Because your page is rendered to the browser's DOM, your page's views (e.g. React components) can be stateful and interactive.
- `renderToDom: false`
  - Increased performance.
    <br/>
    The page's views and view libraries are not loaded nor executed in the browser.
    Considerably less JavaScript is loaded/executed in the browser.
    A page that has (or very little) browser-side JavaScript is blazing fast on mobile.
  - Non-interactive.
    <br/>
    Because your page is not rendered to the browser's DOM, your page connot have stateful views / interactive views.

In a nutshell:
If your page is interactive then you have to render it in the browser and set `renderToDom` to `true`.
But if your page isn't interactive then you can set `renderToDom` to `false` for increased performance and a blazing fast page on mobile devices.

###### `renderToHtml`

With `renderToDom` you control whether your page is rendered to HTML (in Node.js).

- `renderToHtml: false` (default value)
  <br/>
  Your page's `view` component is not rendered to HTML.
- `renderToHtml: true`
  <br/>
  Your page's `view` component is rendered to HTML.

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
  The page is rendered to HTML only once, when Goldpage transpiles and builds your pages.

By default,
a page is rendered to HTML at request-time.
But if the page's content is static
(a landing page, an about page, a blog post, a personal homepage, etc.)
it is wasteful to re-render its HTML on every page request.

By setting `renderHtmlAtBuildTime: true` to all your pages,
you can remove the need for a Node.js server
and have your frontend be a static website.
You can then deploy your frontend to a static host such as Netlify or GitHub Pages.


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Goldpage Config `goldpage.config.js`

We try to keep Goldpage as zero-config as possible
and `ssr.config.js` has only few options.

~~~js
// ssr.config.js

module.exports = {
  // Control how pages are rendered. (See section "How: `htmlRender` & `domRender`").
  htmlRender: require.resolve('./path/to/your/htmlRender'),
  domRender: require.resolve('./path/to/your/domRender'),

  // Make Goldpage silent in the terminal (but it will still prints errors).
  silent: true,
};
~~~


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## CLI

Goldpage has two commands:

- ~~~shell
  $ goldpage dev ./path/to/your/server.js
  ~~~
  The `dev` command starts your server with auto-reload:
  whenever you make a change to your code,
  your code is rebuilt and the pages open in your browser are reloaded.
  The `dev` command is meant to be used while you develop your app.

- ~~~shell
  $ goldpage build ./path/to/your/server.js
  ~~~
  The `build` command builds your code for production.
  (E.g. it minifies your browser-side code whereas the `dev` command doesn't.)
  Once `build` is finished you can repeatedly start and shut down your server.
  If your server-side code is written in JavaScript then you can call your server entry directly: `$ node ./path/to/your/server.js`.
  If not, then run the transpiled version which is located in the `.build` directory: `$ node ./build/nodejs/server.js`.

Do not install Goldpage globally and do not call the Goldpage CLI directly.
Use your `package.json`'s `scripts` instead:

~~~json
{
  "dependencies": {
    "goldpage": "^0.3.3",
  },
  "scripts": {
    "dev": "goldpage dev ./path/to/your/server.js",
    "prod": "npm run build && npm run start",
    "build": "goldpage build ./path/to/your/server.js",
    "start": "export NODE_ENV='production' && node ./.build/nodejs/server"
  }
}
~~~

You can then install a local Goldpage copy (`$ npm install` / `$ yarn`) and
then call `$ npm run dev` (/ `$ yarn dev`).

A local install has couple of advantages over a global install:
 - Many projects can have many different Goldpage versions.
 - Removing your project's directory also removes Goldpage.


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Providers: Redux / React Router / Vuex / Vue Router / GraphQL Apollo / Relay / ...

By controlling the rendering of your pages you can add providers for Redux, GraphQL, etc.

See <a href=#how-htmlrender--domrender>How: `htmlRender` & `domRender`</a> for how to take over control of the rendering of your pages.

Examples:
- [/examples/react-router](/examples/react-router)
- [/examples/redux](/examples/redux)
- [/examples/styled-components](/examples/styled-components)


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>


## Transpilation: Babel / TypeScript /  ES6 / ...

You can configure Babel and the JavaScript transpilation by creating a `.babelrc` file.
See [/examples/babel](/examples/babel) for an example of configuring babel.

Goldpage currently uses Webpack.
This means that for custom transpilations beyond babel, modifications to Goldpage's webpack config are required.
Instead of modifying Goldpage's webpack config yourself,
see if there is a [transpilation plugin](/plugins#transpilation-plugins)
that modifies Goldpage's webpack config for you.
For exampe, for TypeScript, you can use the [TypeScript plugin](/plugins/typescript).
If there is no plugin for what you need, then open a GitHub issue and we'll create one together.

Once Parcel v2 is released,
Goldpage will use Parcel instead of Webpack.
Since Parcel is zero-config, most of your transpilation needs will then just work.
(Transpilation plugins will not be required anymore.)

Examples:
- [/examples/typescript](/examples/typescript)
- [/examples/babel](/examples/babel)


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## CSS-in-JS: Emotion / styled-components / ...

Some CSS-in-JS libraries,
such as [emotion](https://github.com/emotion-js/emotion),
work with SSR out of the box and no additional setup is required.

For some others,
such as [styled-components](https://github.com/styled-components/styled-components),
you make need to
[take control over rendering](#how-htmlrender--domrender).

Examples:
- [/examples/emotion](/examples/emotion)
- [/examples/styled-components](/examples/styled-components)


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## CSS pre-processors: PostCSS / Sass / Less / ...

If there is a [transpilation plugin](/plugins#transpilation-plugins) for the CSS pre-processor you want to use,
then simply use it.

If there isn't one,
then see [controlling transpilation](#transpilation-babel--typescript---es6--).

Example:
 - [/examples/postcss](/examples/postcss)


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Routing: Server-side Routing / Browser-side Routing / React Router / Vue Router / ...

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
the browser terminates the current `/hello/jon` page and starts a new page `/hello/alice`.
It is the same as if you would close your `/hello/jon` tab and open a new tab at `/hello/alice`.

It is the server that does the job of mapping URLs to pages and the browser is not involved in the routing process.

###### Browser-side Routing

HTML5 introduced a new browser API `window.history` that allows you to manipulate the browser URL history.
This enables browser-side routing:
when navigating from `/previous-page` to `/next-page`, instead of terminating the current page `/previous-page` and starting a new page `/next-page`, the current page `/previous-page` is preserved, its URL changed to `/next-page` (with `window.history.pushState()`), and the content of `/next-page` is rendered to the DOM replacing the DOM of `/previous-page`.

Server-side routing is simpler than browser-side routing;
whenever possible, server-side routing should be used instead of browser-side rendering.

But if server-side routing is not an option,
you can opt to do browser-side routing
by [taking control over rendering](#how-htmlrender--domrender).

For example,
if you use React,
you can take control over rendering in order to use React Router which does browser-side routing:

~~~js
// /examples/react-router/render/domRender.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

export default domRender;

async function domRender({page, initialProps, CONTAINER_ID}) {
  ReactDOM.hydrate(
    <BrowserRouter>
      <page.view {...initialProps}/>
    </BrowserRouter>,
    document.getElementById(CONTAINER_ID)
  );
}
~~~

~~~js
// /examples/react-router/render/htmlRender.js

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {StaticRouter} = require('react-router');

module.exports = htmlRender;

async function htmlRender({page, initialProps}) {
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
// /examples/react-router/goldpage.config.js

module.exports = {
  htmlRender: './render/htmlRender.js',
  domRender: './render/domRender.js',
};
~~~

The example's entire source code is at:
- [/examples/react-router](/examples/react-router)

More Resources:
- [Understanding client side routing by implementing a router in Vanilla JS](http://willtaylor.blog/client-side-routing-in-vanilla-js/)


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Frontend Libraries: Google Analytics / jQuery / Bootstrap / Semantic UI / ...

To load a frontend library that is hosted on a cdn, add `<script>`/`<style>` tags to your HTML, see <a href=#html-indexhtml-head-meta-link->HTML: `index.html`, `<head>`, `<meta>`, `<link>`, ...</a>.

To load a frontend library that is saved on disk, use a file that is loaded by all your pages:

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
  renderToHtml: true,
};
~~~
~~~js
// /examples/frontend-libraries/pages/about.page.js

require('./commons.js');

import React from 'react';

export default {
  route: '/about',
  view: () => <h1>About Page</h1>,
  renderToHtml: true,
};
~~~


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Server: Express / Koa / Hapi / Fastify / ...

To use Goldpage with `express`, `koa` or `hapi`, use the corresponding [server plugin](/plugins#server-plugins).

To use Goldpage with another server framework, open a GitHub issue.
Goldpage can be used with any server framework
but there is no documentation for this (yet).


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## View Libraries: React / Vue / Preact / ...

If there is a [render plugin](/plugins#render-plugins) for the view library you want to use,
then simply use it.

If there is no render plugin,
then [take control over rendering](#how-htmlrender--domrender).
That way you are able to use any view library.


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



## Process Managers: Docker / systemd / PM2 / ...

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


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
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
    Instead, edit `/docs/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/readme.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/readme.template.md` and run `npm run docs` (or `yarn docs`).






-->
