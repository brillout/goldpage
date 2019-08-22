!MENU_LINK /../../
!OUTPUT ../readme.md
!INLINE ./snippets/header.md

!VAR WHAT_IS_GOLDPAGE What is `ssr-coin`
!VAR WHY_GOLDPAGE Goldpage VS create-react-app/Next.js/vue-cli/Nuxt.js/Gatsby/...

!VAR GETTING_STARTED Getting Started

!VAR CSS_AND_ASSETS CSS & Static Assets
!VAR ASYNC_DATA Async Data: `addInitialProps`
!VAR CONTROL_HTML HTML: `index.html`, `<head>`, `<meta>`, `<link>`, ...

!VAR RENDER_WHEN Rendering - When: `renderToDom`, `renderToHtml` & `renderHtmlAtBuildTime`
!VAR RENDER_HOW Rendering - How

!VAR MPA_APP MPA
!VAR SPA_APP SPA
!VAR SSR_APP SSR
!VAR BFA_APP BFA
!VAR STATIC_WEBSITE Static Website

!VAR PAGE_CONFIG Page Config `*page.js`
!VAR SSR_COIN_CONFIG Global Config `ssr-coin.config.js`
!VAR CLI_REF CLI

!VAR ADD_PROVIDERS Providers: Redux / React Router / Vuex / Vue Router / GraphQL Apollo / Relay / ...
!VAR CONTROL_TRANSPILATION Transpilation: Babel / TypeScript /  ES6 / ...
!VAR CSS_IN_JS CSS-in-JS: Emotion / styled-components / ...
!VAR CSS_PRE_PROCESSORS CSS pre-processors: PostCSS / Sass / Less / ...
!VAR CONTROL_ROUTING Routing: Server-side Routing / Browser-side Routing / React Router / Vue Router / ...
!VAR FRONTEND_LIBRARIRES Frontend Libraries: Google Analytics / jQuery / Bootstrap / Semantic UI / ...
!VAR SERVER_FRAMEWORKS Server Frameworks: Express / Koa / Hapi / Fastify / ...
!VAR VIEW_LIBRARIES View Libraries: React / Vue / Preact / ...
!VAR PROCESS_MANAGERS Process Managers: Docker / systemd / PM2 / ...

!VAR PLUGIN_LIST Plugins
!VAR PLUGINS_SERVER Server Plugins
!VAR PLUGINS_RENDER Render Plugins
!VAR PLUGINS_TRANSPILATION Transpilation Plugins



!INLINE li-1 Intro
!INLINE li-2 !VAR|LINK WHAT_IS_GOLDPAGE
!INLINE li-2 !VAR|LINK WHY_GOLDPAGE

!INLINE li-1 Usage
!INLINE li-2 !VAR|LINK GETTING_STARTED
!INLINE li-2-header Basics
!INLINE li-2 !VAR|LINK CSS_AND_ASSETS
!INLINE li-2 !VAR|LINK ASYNC_DATA
!INLINE li-2 !VAR|LINK CONTROL_HTML
!INLINE li-2-header Rendering
!INLINE li-2 !VAR|LINK RENDER_WHEN
!INLINE li-2 !VAR|LINK RENDER_HOW
!INLINE li-2-header App Types
!INLINE li-2 !VAR|LINK MPA_APP
!INLINE li-2 !VAR|LINK SPA_APP
!INLINE li-2 !VAR|LINK SSR_APP
!INLINE li-2 !VAR|LINK BFA_APP
!INLINE li-2 !VAR|LINK STATIC_WEBSITE
!INLINE li-2-header API Reference
!INLINE li-2 !VAR|LINK PAGE_CONFIG
!INLINE li-2 !VAR|LINK SSR_COIN_CONFIG
!INLINE li-2 !VAR|LINK CLI_REF
!INLINE li-2-header Recipes
!INLINE li-2 !VAR|LINK ADD_PROVIDERS
!INLINE li-2 !VAR|LINK CONTROL_TRANSPILATION
!INLINE li-2 !VAR|LINK CSS_IN_JS
!INLINE li-2 !VAR|LINK CSS_PRE_PROCESSORS
!INLINE li-2 !VAR|LINK CONTROL_ROUTING
!INLINE li-2 !VAR|LINK FRONTEND_LIBRARIRES
!INLINE li-2 !VAR|LINK SERVER_FRAMEWORKS
!INLINE li-2 !VAR|LINK VIEW_LIBRARIES
!INLINE li-2 !VAR|LINK PROCESS_MANAGERS

!INLINE li-1 !VAR|LINK PLUGIN_LIST

<br/>

## !VAR WHAT_IS_GOLDPAGE

Page Builder &mdash;
easily create a modern frontend.
Works with any view library (React, Vue, RNW, ...).
Supports all app types
(so-called "SPA", "MPA", "SSR", "static website", ...).

Goldpage is a small (yet powerful) tool
that makes it easy to create a frontend
with React, Vue, React Native Web, etc.

You define so-called page configs

~~~js
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

and the rest is taken care of: Goldpage builds, routes, renders, and serves your pages.

Goldpage is designed from the ground up to be
easy to use, robust, and flexible.

**Easy**

All you need to install Goldpage is to define your page configs,
add the Goldpage Express/Koa/Hapi middleware to your server,
and add couple of lines to your `package.json`.
That's it.

And all you need to know to get started
is written in the "Usage - Basics" sections.

**App types**

Goldpage supports all app types.
(Commonly denoted as "SPA", "MPA", "SSR", "static website", etc.)

Switching from one app type to another is easy,
so that you can start
writing a prototype before even choosing an app type.

Once you have finished your first prototype,
you can try and experiement different app types with your prototype
and see what works best for you.

We believe you shouldn't have to know what "SPA", "MPA", "SSR", and "static website" mean before getting started.

**BFA**

Goldpage introduces a new app type
we call Backend First App (BFA)
that achieves blazing fast pages on mobile devices.

A BFA can be a simple and performant alternative to a native mobile app.

More at [BFA](/bfa.md)

**Do-one-thing-do-it-well**

Goldpage only takes care of building your pages.
We leave the rest of the stack to you and
Goldpage works with
any server framework (Express, Koa, Hapi, ...),
any view libray (React, Vue, React Native Web, ...),
any language (ES7, TypeScript, PostCSS, ...),
any provider (Redux, React Router, Vuex, Vue Router, GraphQL Apollo, Relay, ...),
any CSS-in-JS library (Emotion, styled-components, ...),
and any process manager (Docker, systemd, PM2, ...).

!INLINE ./snippets/section-footer.md #readme



## !VAR WHY_GOLDPAGE

**Only One App Type**

The main problem of our current tools is that they support only one app type.
For example for React:
<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp;
create-react-app creates a so-called "SPA"
<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp;
Next.js creates a so-called "SSR app"
<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp;
Gatsby creates a so-called "static website"
<br/>

By choosing one of these tools you are essentially choosing an app type and locking yourself into that app type.
This means that before choosing one of these tools you have to research about what "SPA", "SSR", and "static website" mean and
what the differences between them are.
And that before even having started writing one line of code.

Even worse is that, most often than not,
it's not possible to predict which app type
is the right one
before having created and battle-tested a first prototype.

Goldpage solves this problem:
it supports all app types and makes switching from one app type to another easy &mdash;
you can start writing a prototype and worry about app type later.

We encourage you to start with Goldpage's default app type
and, once you finished your first prototype,
to experiment different app types with your prototye
and see what works best for you.

With Goldpage,
you can start writing your app without even knowing
what "SPA", "MPA", "SSR", and "static website" mean.

For readers that know what SSR is,
at
[Case study: Goldpage & SSR]()
we illustrate how, with Goldpage, you can
start without SSR,
add SSR to one of your pages,
see if SSR works out for that pages,
and add SSR to all your other pages.

And, for readers that know what a static website is,
at
[Case study: Goldpage & Static Websites]()
we showcase how, with Goldpage, you can easily experiment and try out
if a static website is something that works out for you.

**Mobile Peformance**

Goldpage is the only tool (that we are aware of) allowing you
to remove the browser-side JavaScript of a page
yealding super fast mobile performance.

More at [BFA](/bfa.md).

**Flexibility**

We find other tools too "framework-ish".
Goldpage only takes care of building your pages and leaves the rest of the stack to you.
Where you may feel restricted with other tools
Goldpage gives you freedom.
For example,
Gatsby forces you to use GraphQL
whereas Goldpage leaves the choice of using GraphQL to you.

The backbone of Goldpage's flexibility is to
allow you to fully control how and when your pages are rendered.

!INLINE ./snippets/section-footer.md #readme



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

!INLINE ./snippets/section-footer.md #readme



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

!INLINE ./snippets/section-footer.md #readme



## !VAR ASYNC_DATA

You can load and render data by adding an `addInitialProps` function to your page config:

~~~js
!INLINE /examples/html/pages/product.page.js --hide-source-path
~~~

Alternatively, you can fetch data in a stateful component.
But the page's content is then rendered to the DOM only (and not to HTML).

We further explain the difference between using a stateful component and `addInitialProps` at:
 - [/examples/async-data/](/examples/async-data/)

!INLINE ./snippets/section-footer.md #readme



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

!INLINE ./snippets/section-footer.md #readme



## !VAR MPA_APP

!INLINE ./snippets/app-type-intro.md an MPA
then you don't have to do anything;
by default, Goldpage builds an MPA:
- By default, a page is rendered only in the browser. (That is: `renderToDom: true` and `renderToHtml: false`. We explain `renderToHtml` and `renderToDom` at !VAR|LINK RENDER_WHEN.)
- By default, pages are routed on the server-side. (We explain what "server-side routing" means at !VAR|LINK CONTROL_ROUTING.)

These defaults corresponds to an MPA.

!INLINE ./snippets/section-footer.md #readme



## !VAR SPA_APP

!INLINE ./snippets/app-type-intro.md an SPA
then:
- Create a single page with a catch-all route. (That is, create only one page config with `route: '/:param*`; all URLs will be routed to this single page.)
- Use a browser-side routing such as React Router. (We elaborate more at !VAR|LINK CONTROL_ROUTING.)

Note that an MPA is almost always a better alternative than an SPA.
And, by default, Goldpage builds an MPA.
So, if you want an SPA, this means that you most likely don't have to do anything.
(AN MPA is basically the same than an SPA but with server-side routing and code-splitting.)

(FYI, a SPA is what you get when you use create-react-app, vue-cli, Webpack, or Parcel.)




## !VAR SSR_APP

!INLINE ./snippets/app-type-intro.md an SSR app
then:
- Set `renderToHtml: true` and `renderToDom: true` to all your page configs. (We explain `renderToHtml` and `renderToDom` at !VAR|LINK RENDER_WHEN.)

(FYI, an SSR app is what you get when you use Next.js or Nuxt.js.)

!INLINE ./snippets/section-footer.md #readme



## !VAR BFA_APP

More at [BFA](/bfa.md)



## !VAR STATIC_WEBSITE

!INLINE ./snippets/app-type-intro.md a static website
then:
- Set `renderHtmlAtBuildTime: true` to all your page configs. (We explain `renderHtmlAtBuildTime` at !VAR|LINK RENDER_WHEN.)

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

!INLINE ./snippets/section-footer.md #readme



## !VAR RENDER_WHEN

There are three page configs that allow you to control when your page is rendered:
- `renderToDom` - If set to true, your page is rendered in the browser (to the DOM).
- `renderToHtml` - If set to true, your page is rendered to HTML (in Node.js).
- `renderHtmlAtBuildTime` - Whether your page is rendered to HTML at request-time or at build-time.

The default values are `renderToDom: true` and `renderToHtml: false`,
which means that your page is rendered only in the browser.

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
[Browser-side Rendering VS Server-side Rendering](),
we illustrate `renderToHtml`, `renderToDom`, `renderHtmlAtBuildTime`,
and how you can configure them to achieve improvements in the above points.
But before you learn more about these page configs and what you can achieve with them, we recommend that you first implement a prototype and learn more only after you need improvements in the above points.

!INLINE ./snippets/section-footer.md #readme



## !VAR RENDER_HOW

You can control how your pages are rendered
to HTML and the DOM.

For that,
save a `ssr-coin.config.js` file at your project's root directory
(the directory that contains your `package.json`)
and add the `renderToHtml` and `renderToDom` configs:
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

!INLINE ./snippets/section-footer.md #readme



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

!INLINE ./snippets/section-footer.md #contents

#### !VAR INITIAL_PROPS

~~~js
!INLINE /examples/html/pages/assert_initialProps.js --hide-source-path
~~~

!INLINE ./snippets/section-footer.md #contents

#### !VAR HTML_CONFIGS

~~~js
!INLINE /examples/html/pages/getHtmlOptions.js --hide-source-path
~~~

!INLINE ./snippets/section-footer.md #contents



## !VAR SSR_COIN_CONFIG

We try keep `ssr-coin` as zero-config as possible,
hence `ssr.config.js` has only few options.

~~~js
// ssr.config.js

module.exports = {
  // Control how pages are rendered. (See section "!VAR RENDER_HOW").
  renderToHtml: require.resolve('./path/to/your/renderToHtml'),
  renderToDom: require.resolve('./path/to/your/renderToDom'),

  // Make `ssr-coin` silent in the terminal (but it will still prints errors).
  silent: true,
};
~~~

!INLINE ./snippets/section-footer.md #readme



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

!INLINE ./snippets/section-footer.md #readme



## !VAR ADD_PROVIDERS

By controlling the rendering of your pages you can add providers for Redux, GraphQL, etc.

See !VAR|LINK RENDER_HOW for how to take over control of the rendering of your pages.

Examples:
- [/examples/react-router](/examples/react-router)
- [/examples/redux](/examples/redux)
- [/examples/styled-components](/examples/styled-components)

!INLINE ./snippets/section-footer.md #readme


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

!INLINE ./snippets/section-footer.md #readme



## !VAR CSS_IN_JS

Some CSS-in-JS libraries,
such as [emotion](https://github.com/emotion-js/emotion),
work with SSR out of the box and no additional setup is required.

For some others,
such as [styled-components](https://github.com/styled-components/styled-components),
you make need to
[take control over rendering](!VAR|ANCHOR RENDER_HOW).

Examples:
- [/examples/emotion](/examples/emotion)
- [/examples/styled-components](/examples/styled-components)

!INLINE ./snippets/section-footer.md #readme



## !VAR CSS_PRE_PROCESSORS

If there is a [transpilation plugin](!VAR|ANCHOR PLUGINS_TRANSPILATION) for the CSS pre-processor you want to use,
then simply use it.

If there isn't one,
then see [controlling transpilation](!VAR|ANCHOR CONTROL_TRANSPILATION).

Example:
 - [/examples/postcss](/examples/postcss)

!INLINE ./snippets/section-footer.md #readme



## !VAR CONTROL_ROUTING

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
It is the same as if you would close your `/hello/jon` browser tab and open a new tab at `/hello/alice`.

It is the server that does the job of mapping URLs to pages and the browser is not involved in the routing process.

###### Browser-side Routing

HTML5 introduced a new browser API `window.history` that allows you to manipulate the browser URL history.
This enables browser-side routing:
when navigating from `/previous-page` to `/next-page`, instead of terminating the current page `/previous-page` and starting a new page `/next-page`, the current page `/previous-page` is preserved, its URL changed to `/next-page` (with `window.history.pushState()`), and the content of `/next-page` is rendered to the DOM replacing the DOM of `/previous-page`.

Server-side routing is simpler than browser-side routing;
whenever possible, server-side routing should be used instead of browser-side rendering.

But if server-side routing is not an option,
you can opt to do browser-side routing
by [taking control over rendering](!VAR|ANCHOR RENDER_HOW).

For example,
if you use React,
you take control over rendering in order to add React Router (which does browser-side routing):

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

!INLINE ./snippets/section-footer.md #readme



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

!INLINE ./snippets/section-footer.md #readme



## !VAR SERVER_FRAMEWORKS

To use `ssr-coin` with `express`, `koa` or `hapi`, use the corresponding [server plugin](!VAR|ANCHOR PLUGINS_SERVER).

To use `ssr-coin` with another server framework, open a GitHub issue.
`ssr-coin` can be used with any server framework
but there is no documentation for this (yet).

!INLINE ./snippets/section-footer.md #readme



## !VAR VIEW_LIBRARIES

If there is a [render plugin](!VAR|ANCHOR PLUGINS_RENDER) for the view library you want to use,
then simply use it.

If there is no render plugin,
then [take control over rendering](!VAR|ANCHOR RENDER_HOW).
That way you are able to use any view library.

!INLINE ./snippets/section-footer.md #readme



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

!INLINE ./snippets/section-footer.md #readme



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

!INLINE ./snippets/section-footer.md #readme



