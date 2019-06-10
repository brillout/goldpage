!MENU_ORDER 1
!MENU_LINK /../../
!OUTPUT ../readme.md
!INLINE ./snippets/header.md --hide-source-path

!INLINE ./snippets/li-1.md <a href="#what-is-ssr-coin">What is `ssr-coin`</a> --hide-source-path
!INLINE ./snippets/li-1.md <a href="#why-ssr">Why `ssr-coin`</a> --hide-source-path
!INLINE ./snippets/li-1.md <a href="#plugins">Plugins</a> --hide-source-path
!INLINE ./snippets/li-1.md Usage --hide-source-path
!INLINE ./snippets/li-2.md <a href="#getting-started">Getting Started</a> --hide-source-path
!INLINE ./snippets/li-2-header.md Basics --hide-source-path
!INLINE ./snippets/li-2.md <a href="">Server-side Autoreload</a> --hide-source-path
!INLINE ./snippets/li-2.md <a href="">Transpile Server Code</a> --hide-source-path

bla

  - [Rendering `<App>`]()
  - [CSS & Static Assets]()
  - [`getInitialProps` & Async Data]()
  - [`doNotRenderInBrowser` & `renderHtmlAtBuildTime` & Performance Tuning]()
  - [`index.html` - <html>, <head/>, <title/>, <meta name="description"/>, etc.]()
  API
  - [Page Config](#page-config)
  - [`ssr-coin` Config](#page-config)
  How-to
  - [Control Transpalition: Babel Config]()
  - [Languages: TypeScript / Coffeescript / etc.]()
  - [Control Rendering & Providers for Redux / React Router / GraphQL Apollo / Relay / etc.]()
  - [CSS pre-processors: PostCSS / Sass / Less / etc.]()
  - [Control Routing & Dynamic Routing]()
  - [Frontend Libraries: jQuery / Bootstrap / Semantic UI / etc.]()
  - [Control scripts: Custom Dev Server & Custom Build & Custom CLI]()
  - [Express / Koa / Hapi / Other Server Frameworks]()


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

`ssr-coin` is about making SSR easy with no scrifice on flexibility and freedom.


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

We designed `ssr-coin` with a broad range of SSR uses cases in mind.
For example, you can configure when a page is rendered:
- You can configure your page's HTML to be rendered at build-time or at request-time.
- You can configure whether your page is rendered to the DOM or not (aka hydration).

This fine grain control over when your pages are rendered allows you to build all kinds of apps:
- Frontend & backend apps (aka full-stack **SSR** app).
- Frontend-only apps (aka **static website**).
- Backend-only apps (aka **old-school** app with **plain old HTML**).
- Hybrid apps (where some pages are static and some dynamic).


###### Batteries included

- [DX] Zero-config / Minimal-config
- [DX] Browser-side autoreload
- [DX] Server-side autoreload
- [Flexibility] Controlable Rendering
- [Flexibility] Controlable Babel Transpalition
- [Performance] Page based code spliting
- [Performance] Optimal HTTP caching
- [Performance] [DOM-static pages]()
- [Performance] [HTML-static pages]()





## Provider

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


## Why `ssr-coin`

We maintain [Awesome Universal Rendering]() list which includes a list of SSR tools.

The tools we are aware of either don't do enough and leave the user with too many things to handle
(e.g. Razzle)
or they do too much
and are too opinionated, restrictive and brittle
(e.g. Next.js)

`ssr-coin` is about giving you both: ease of use *and* freedom.
 It also comes with some unique features such as static pages.

When designing `ssr-coin` we focus on:
 - Zero-config
 - Freedom
 - Strong abstractions

Zero-config and strong abstractions make `ssr-coin` easy to use.
And freedom is about allowing you to use `ssr-coin` with any tool you want and giving you control over key aspects.

###### Zero-Config

You can use `ssr-coin` with a zero-config setup and add SSR to your app with only couple of lines.


 - Install `ssr-coin`, a render plugin (such as `@ssr-coin/react`), and a server integration plugin (such as `@ssr-coin/express`)
 - Add the `ssr-coin` middleware/plugin to your server (Express/Koa/Hapi/etc.)
 - Define pages (their root view component, their root, their title, etc.)

key aspects.
What this means is that 
Then automatically transpiles, bundles, routes, renders, and serves your pages.

 -
 - with only a couple of lines.

`ssr-coin` takes of the rest:
 - Bundling.
   <br/>
   `ssr-coin` transpiles and bundles your pages with a minimal-size bundle for each page. Allowing you to scale up to hundreds of pages without increase the bundle size of each page.
 - Minimal bundle sizes.
   <br/>
 - Routing & Serving. `ssr-coin` to for (Express, Koa, Hapi, etc.) automatically serve your pages with optiomal HTTP caching headers.
 - Auto-reload.
   <br/>
   `ssr-coin` comes with browser-side auto-reload as well as server-side auto-reload.

 - Generating a a size-minimal bundle for each page
 - Routing your pages
`ssr-coin` has been designed with "zero-config" in mind:
 - Beyond the zero-config setup, you have the possibility to take control over key aspects

`ssr-coin` is about giving you both ease and freedom.
easy experience

###### Control

We allow you to take over control key aspects of `ssr-coin`.

For example, by creating `renderToHtml` and `renderToDom` files you can take over control over the rendering.

For example for React:

~~~js
// renderToHtml.js

const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = renderToHtml;

async function renderToHtml({pageConfig, initialProps}) {
  return (
    ReactDOMServer.renderToStaticMarkup(
      React.createElement(pageConfig.view, initialProps)
    )
  );
}
~~~

~~~js
// renderToDom.js

const React = require('react');
const ReactDOM = require('react-dom');

module.exports = renderToDom;

async function renderToDom({pageConfig, initialProps, CONTAINER_ID}) {
  ReactDOM.hydrate(
    React.createElement(pageConfig.view, initialProps),
    document.getElementById(CONTAINER_ID)
  );
}
~~~

This control is important in order to allow you to use tools such as Redux or GraphQL Apollo.

###### Strong abstractions

Giving you too much freedom is equally as bad as giving you not enough freedom.
With only give you freedom that makes sense.

For example, we believe that you shouldn't mess around with bundling.
But ideally you shouldn't care.

Or another example is that we don't want you to control. This and you shouldn't care.

This is a complex subject and 

We care about strong abstractions that hide complexity from you to give you an tool that is easy to use.

###### Browser-static pages

By setting `doNoRenderInBrowser` you can make a page *browser-static*:
your page is rendered to HTML only and the DOM is not manipulated

your view components are only used render 
No JavaScript is loaded in the browser and the DOM is not manipulated.

Because no (or much less) JavaScript is loaded nor executed in the browser,

there is no browser-side JavaScript, the page is super fast.
This is important non-interactive pages that need good performance on mobile,
such as a landing page.

###### Server-static pages

By setting `renderHtmlAtBuildTime` you make a page *server-static*:
The HTML of the page is rendered ad build time and no server runtime is required to
generate your page.

###### Optimal code splitting & optimal HTTP cache headers

`ssr-coin` is designed so that a page only loads JavaScript it needs.
This means that create new view components for a new page doesn't increase the bundle size of other pages.

We extensively make use of hashing and HTTP cache headers to make best use of browser caches.




## What is SSR & SSR Benefits

Infos about SSR:
- [Awesome Universal Rendering - What is SSR](https://github.com/brillout/awesome-universal-rendering)
- [Awesome Universal Rendering - When to use SSR](https://github.com/brillout/awesome-universal-rendering) -
  Explains whether SSR should be used or not.
- [Awesome Universal Rendering - Performance](https://github.com/brillout/awesome-universal-rendering) -
  Explains the performance benefits of SSR which can be substantial for mobile.
- [Awesome Universal Rendering - Developer Experience](https://github.com/brillout/awesome-universal-rendering) -
  Not many people know that SSR introduces a new way of developing applications with an important increase in developing speed.

## Quick Start


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
You can now run `npm run dev` and go to your newly created page `/ssr-test`.

Note that you have to use `ssr-coin`'s bundling step.
You can however take control over the building step.
More infos at [Config - Build]().

Beyond the zero-config setup you can also:
- Enable **server-side auto-reload** by letting `ssr-coin` build your server code.
(Browser-side auto-reload is already enabled in zero-config setup)
- **Transpile server code** by letting `ssr-coin` build your server code
- **Add Redux, GraphQL or other container** by taking control over how your pages are rendered
- **Improve browser-load performance** for your non-interactive pages by setting `doNoRenderInBrowser: true`.





## Server-side autoreload

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




If you a bundling that is custom to your app,
for example if you have a webpack,
then you'll have to replace it with `ssr-coin`'s bundling.

You may think at first "Didn't you say that `ssr-coin` is a do-one-thing-do-it-well Library".
We don't believe so. We believe .
SSR and bundling are intimetly connected and.

(Integrating SSR is most complex part of SSR 
We strongly believe that 

You may
you'll have to replace.
This is a conscious and is a non-goal.
We believe .
Ideally

tighly couples you with Webpack.
Webpack's configuration is effectively a webpack lock-in.

You may 
As for the dev server you can easily
You may 
The bundling

You can configure ``

 - `pages/**/*.page.js` to configure your pages
 - `.ssr-coin.config.js` to globally configure `ssr-coin`

The options of a page config `*.page.js` are:

~~~js
// pages/landing.page.js

const landingPageConfig = {
  route: '/hello/:name',

  view: props => (
    <div>
      Welcome {props.name}.
      You are a {props.gender}
    </div>
  ),

  getInitialProps: async props => {
    const props = await fetch('https://example.org/person/'+name);
    // Load some async data
    // We assume that 
    assert(props.gender);
    return props;
  },

  // HTML meta scripts
  title: ({name, gender}) => 'Hi '+name,
  description: ({name}) => 'This is the page of '+name,

  // We explain the following two options below
  renderHtmlAtBuildTime: true,
  doNotRenderInBrowser: true,
};

module.exports = landingPageConfig;
~~~

And the `.ssr-coin.config.js` file has following options:

~~~js
// /ssr-coin.config.js

const = require.resolve('path/to/renderToHtml.js');

module.exports = {
  log: {
  },
  indexHtml: 'path/to/indexHtml.js',
};
~~~

The files `renderToHtml.js` and `renderPageToHtml.js` are explained at:

- [HTML Rendering](#html-rendering)

The files `renderToDom.js` and `renderPageToDom.js` are explained at:

- [DOM Rendering](#dom-rendering)

The file `router.js` is explained at:

- [Routing](#routing)

We talk about configuring the builing at:

- [Building](#building)

If you need then read:

- [Full Flexibility](#full-flexibility)

#### HTML Rendering

#### DOM Rendering

#### Routing

#### Building

We strongly believe that, as a developer, you shouldn't mess around with building.
Building is a complex topic and and configuring building can quickly become a considerably time sink.
We believe that the build process should be taken care of by tools with minimal configuration.
Messing with building should be your last resort.

Today,
`ssr-coin` is based on Webpack,
but we will migrate to Parcel once Parcel v2 is ready.

to alter Webpack but for now

We may publish documentation about how to write plugins
we prefer to develop the plugins hand-in-hand today.

If you want to change Webpack's configuration then we suggest you to use a `ssr-coin` plugin

#### Full Flexibility

For internal `ssr-coin` developing purposes,
the entire `ssr-coin` build process is design in a modular way.
What this means for you,
is that you can take control over many aspect of the building process.

If you need to configure something not covered in this Readme,
then open a GitHub issue
and let's discuss solutions to your problem.
We aim to make `ssr-coin` highly flexible,
and we meant it.

## Build

In order to use `ssr-coin` you have to use `ssr-coin`'s bundling.

We believe that, as a web developer, you shouldn't have to configure bundling
and that bundling should be as zero-config as possible.

If you are currently using Parcel,
then using `ssr-coin` should be as easy as changing

~~~json
{
  "scripts": {
    "dev": "parcel",
    "build": "parcel build",
  }
}
~~~

to

~~~json
{
  "scripts": {
    "dev": "ssr-coin",
    "build": "ssr-coin build",
  }
}
~~~

In a nutshell:
We don't want you to fiddle around with `ssr-coin`'s bundling and that's a good thing.
(When you think about it, a Webpack configuration is a vendor lock-in.)

That said we are not here yet and migration from Parcel/Webpack to `ssr-coin` requires work today.

`ssr-coin` is currently using Webpack.
(Once Parcel V2 is released we will use Parcel instead.)

parcel watch
parcel uild

and we believe that this situation should be avoided.
(Like what Parcel is doing.)
That's why we don't .
That said, for internal development purposes, the bunlding is

But we are not there yet and `ssr-coin` currently uses Webpack.

This also means that
This means that 

Right now `ssr-coin` uses Webpack. We will use Parcel v2 once it's released.
This means that depending what kind you'll have to
If you want to that is not covered by one of the `ssr-coin` plugin then you'll have to change `ssr-coin`'s webpack configuration yourself.
It's fairly easy to do so and open a GitHub ticket and we'll talk you throught how to do it.
(Since we will eventually use Parcel instead of Webpack.)
Which is basically what
Note that once `ssr-coin` uses Parcel, most things will just work without have to using any plugin.

It is a conscious design decision to include the bundling step inside `ssr-coin`
and to abstract it away from you.
We believe that you shouldn't have to fiddle around with bundling

Replacing your bundling from Webpack to `ssr-coin` could be trickier.
(Since Webpack's complex configuration is effectively a vendor lock-in.)
Please open a GitHub issue if you run into problems.

If you use Webpack, this means that you will have to drop your Webpack configuration.

If you use Parcel, this should be easy (since Parcel is zero-config).
It should be only a matter of changing your `package.json` scripts such as `"dev": "parcel"` to `"dev": "ssr-coin dev"`.

A possible migration strategy is to progessively add your view components to newly created `ssr-coin` pages and iteratively address the bundling migration problems you encounter.

Beyond bundling you can create your own build and dev logic and programatically call `ssr-coin`'s bundling:

~~~js
const ssr = require('ssr-coin');
const restartServer = require('./path/to/your/restartServer/logic');

(async () => {
  ssr.onBuild = async () => {
    console.log();
    // `ssr-coin`'s waits until `onBuild` resolves
    await restartServer();
  };
  await ssr.build();
})();
~~~

For example the current implementation of `ssr-coin dev` is:
~~~js
TODO-!INLINE ./ssr-coin/dev.js
~~~

If you need something that `ssr-coin` is currently not providing,
then open a GitHub ticket.
We aim to make `ssr-coin` flexible and we mean it.

## Plugins

## How it works

It works by building what we call "page configs" and you server.
It generates a browser entry.

This is crucial design decision that makes `ssr-coin` unique.
It's a simple design and achieves scalable and high performance for browser load time.
Scalable because each page is rendered 
SSR
With zero JavaScript.

That is:
 - 

