!MENU_LINK /../../
!OUTPUT ../readme.md
!INLINE ./snippets/header.md

!VAR WHAT_SSR_COIN What is `ssr-coin`
!VAR VS_ECO Goldpage VS Next.js/Nuxt.js/create-react-app/vue-cli/Gatsby/...
!VAR HOW_IT_WORKS How It Works

!VAR GETTING_STARTED Getting Started

!VAR CSS_AND_ASSETS CSS & Static Assets
!VAR ASYNC_DATA Async Data: `addInitialProps`
!VAR CONTROL_HTML HTML: `index.html`, `<head>`, `<meta>`, `<link>`, ...
!VAR RENDER_WHEN Control Rendering - When: `renderToDom`, `renderToHtml` & `renderHtmlAtBuildTime`
!VAR RENDER_HOW Control Rendering - How

!VAR SPA_MPA_APP SPA/MPA
!VAR SSR_APP SSR
!VAR BACKEND_ONLY_APP Backend-only
!VAR MIXED_APP Mixed
!VAR STATIC_WEBSITE Static Website

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

!VAR PLUGIN_LIST Plugins
!VAR PLUGINS_SERVER Server Plugins
!VAR PLUGINS_RENDER Render Plugins
!VAR PLUGINS_TRANSPILATION Transpilation Plugins



!INLINE li-1 Intro
!INLINE li-2 !VAR|LINK WHAT_SSR_COIN
!INLINE li-2 !VAR|LINK VS_ECO
!INLINE li-2 !VAR|LINK HOW_IT_WORKS

!INLINE li-1 Usage
!INLINE li-2 !VAR|LINK GETTING_STARTED
!INLINE li-2-header Basics
!INLINE li-2 !VAR|LINK CSS_AND_ASSETS
!INLINE li-2 !VAR|LINK ASYNC_DATA
!INLINE li-2 !VAR|LINK CONTROL_HTML
!INLINE li-2-header Advanced - App Types
!INLINE li-2 !VAR|LINK SPA_MPA_APP
!INLINE li-2 !VAR|LINK SSR_APP
!INLINE li-2 !VAR|LINK BACKEND_ONLY_APP
!INLINE li-2 !VAR|LINK STATIC_WEBSITE
!INLINE li-2-header Advanced - Control Rendering
!INLINE li-2 !VAR|LINK RENDER_HOW
!INLINE li-2 !VAR|LINK RENDER_WHEN
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

!INLINE li-1 !VAR|LINK PLUGIN_LIST

<br/>

## !VAR WHAT_SSR_COIN

Easily create any kind of app. (SPA/MPA, SSR, static websites, etc.)

Goldpage is a small (but powerful) tool that makes it easy to create an app
using a modern view library such as React or Vue.

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

and Goldpage takes care of the rest:
- Building. (It transpiles and bundles your pages' JavaScript, CSS, and static assets with Webpack.)
- Routing. (It maps URLs to your pages.)
- Rendering. (It renders your pages to the DOM and/or to HTML.)

What makes Goldpage special is that it supports all app types (such as SPA or SSR) and allows you to
easily switch between app type at any given time.
We further elaborate at !VAR|LINK VS_ECO.

Goldpage is unopinionated, do-one-thing-do-it-well,
and designed to work with:
- Any view libray: React, Vue, React Native Web, ...
- Any server framework: Express, Koa, Hapi, ...
- Any language: ES7, TypeScript, PostCSS, ...
- Any provider: Redux, React Router, Vuex, Vue Router, GraphQL Apollo, Relay, ...
- Any CSS-in-JS: Emotion, styled-components, ...
- Any process manager: Docker, systemd, PM2, ...

You can easily add Goldpage to your existing app and
we provide middlewares for Express, Koa, and Hapi.
For example with Express:

 ~~~js
 const express = require('express');
 const ssr = require('ssr-coin');

 const app = express();

 // The `ssr.express` middleware routes & serves your pages.
 app.use(ssr.express);
 ~~~

!INLINE ./snippets/section-footer.md #readme



## !VAR VS_ECO

The problem with our current tools is that their support only one type of app.
For React you have the choice between:
- create-react-app to create an SPA
- Next.js to create a SSR app
- Gatsby to create a static website

If you already know what an SPA, SSR app, or a static website is and if you know which one is right for you then you can choose the right tool.
But, most often than not,
what app type is right becomes clear only after you have written and battle-tested your first protoype.

Goldpage, in contrast, supports *all* app types.
And, we believe you shouldn't have to know what "SPA", "SSR", and "static website" mean before creating your first prototype.
With Goldpage,
you start creating an app and adopt the right app type further down the line as it becomes clearer what you need.

Goldpage gives you three page configs `renderToHtml`, `renderToDom`, and `renderHtmlAtBuildTime`
that allow you to build any kind of app.
Thinking in terms of "do I want my page to be rendered to the DOM" and "do I want my page to be rendered to HTML? At build-time or request-time?" will feel more natural than thinking in terms of "SPA", "SSR", etc.
We further elaborate in the next secion !VAR|LINK HOW_IT_WORKS.

## !VAR HOW_IT_WORKS

Reading this section is optional &mdash; if you already decided to use Goldpage then
you can go straight to !VAR|LINK GETTING_STARTED and start writing your app.

But if you are still evaluating whether to use Goldpage,
then this section will give you a sneak peek into how Goldpage allows you to build any kind of app.

By default Goldpage renders your pages only in the browser to the DOM.

~~~js
// We use React here but note that Goldpage also supports Vue, React Native Web, etc.
import React from 'react';

// Page config
export default {
  route: '/',
  view: LandingPage,

  // `true` is the default value -- `<LandingPage/>` is rendered to the DOM in the browser
  renderToDom: true,
  // `false` is the default value -- `<LandingPage/>` is not rendered to HTML
  renderToHtml: false,
};

function LandingPage() {
  return (
    <div>
      Welcome to my first Goldpage app.
    </div>
  );
}
~~~

This default setting works for most cases.

But, there are cases where you need to render your pages to HTML:

~~~js
import React from 'react';

export default {
  route: '/',
  view: LandingPage,

  renderToDom: true,
  // We also render the page to HTML
  renderToHtml: true,
};

function LandingPage() {
  return (
    <div>
      Welcome to my first Goldpage app.
    </div>
  );
}
~~~

You can even render your page to HTML only:
~~~js
import React from 'react';

export default {
  route: '/',
  view: LandingPage,

  // We don't render the page to the DOM in the browser
  renderToDom: false,
  // We only render it to HTML
  renderToHtml: true,
};

function LandingPage() {
  return (
    <div>
      Welcome to my first Goldpage app.
    </div>
  );
}
~~~

As you can see in the screenshot above, the HTML as no `<sript>` tag and no JavaScript is loaded in the browser.
For non-interactive pages, removing browser-side JavaScript is an effective way to achieve blazing fast performance on mobile.
Also, non-interactive pages are easier and faster to develop than interactive ones &mdash;
using React/Vue as HTML template engine is a wonderful experience.
Goldpage is the only tool we are aware of that offers you a browser-less usage of React/Vue.
More at !VAR|LINK BACKEND_ONLY_APP.

In !VAR|LINK RENDER_WHEN we explain a third page config `renderHtmlAtBuildTime` and
whether you should render your pages to HTML and/or to the DOM.

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



## !VAR RENDER_HOW

Goldpage gives you full control
over how your pages are rendered to HTML and the DOM.

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

!INLINE ./snippets/section-footer.md #readme



## !VAR RENDER_WHEN

Goldpage allows you to fully control when and how your pages are rendered.

This section is about when your pages are rendered.

Modern view libraries, such as React or Vue, allow ...
All kinds of app (SPA, SSR, static website, etc.)

There are three page configs that are at the core of Goldpage's unique ability to generate any app type.
Set `renderToDom: true` and `renderToHtml: false` to your page configs and you get an SPA (more precisely, a MPA).
Set `renderToDom: true` and `renderToHtml: true` to your page configs and you get a SSR app.
So one and so forth.
And the best
is that you can mix: one page can be an SPA and another page can be a SSR page.

`renderToDom` - If set to true, your page is rendered in the browser (to the DOM).

`renderToHtml` - If set to true, your page is rendered on Node.js (to HTML).

`renderHtmlAtBuildTime` - Whether your page is rendered to HTML at request-time or at build-time.

We now discuss the different combination and when to use what.

> NOTE: You do NOT need to know this section before starting to create your app.
> We recommend you to start writing your first prototype and come back to this section only once you start asking yourself following questions:
> - SEO and Google ranking are important to me - how can I get the best SEO result?
> - Mobile users are important to me - how can I achieve great mobile performance?
> - 
> The nice thing about Goldpage is that it allows you to easily change app type at any type &mdash;
> don't worry about choosing the right app type and just start writing code.

###### `renderToDom: true` & `renderToHtml: false`

This is Goldpage's default setting.

###### `renderToDom: true` & `renderToHtml: true`

###### `renderToDom: false` & `renderToHtml: true`

###### `renderToDom: false` & `renderToHtml: true`

###### `renderToDom: true` & `renderToHtml: true` & `renderHtmlAtBuildTime: true`

We first that allows you to control
With `renderToDom` and `renderHtmlAtBuildTime` you can control when your pages are rendered.

###### renderToDom

With `renderToDom` you control whether your page is rendered in the browser.

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
If your page is interactive then you have to rendered it in the browser and set `renderToDom` to `true`.
But if your page isn't interactive then you can set `renderToDom` to `false` for increased performance and a blazing fast page on mobile devices.

###### renderToHtml

With `renderToHtml` you control whether your page is rendered to HTML.

By setting `renderToHtml: true` and `renderToDom: true` you get:
- SEO
  Rendering your page's content 
  Content that are accessible only over the DOM:
  <br/>
  - Google-only
    <br/>
    The Google crawler is the only one that executes JavaScript and only Google will know about content that are only rendered to the DOM.
    if you want your page's content to be crawled by all other search engines (Bing, Baidu, DuckDuckGo, etc.) then you need to render your page's content to HTML.
  - Delay on Google
    <br/>
    The Google crawler first crawls your page without executing JavaScript
  and re-crawls your page after [~1 week](https://twitter.com/Paul_Kinlan/status/1039852756113080320)
  with executing JavaScript.
  This means that content accessible only over the DOM appear later than content
  This means that if your page's content is rendered to the DOM and not to HTML then it will appear only one week later
  (for popular sites, Google manages to track HTML changes almost instantly)
  Rendering your page to HTML solves these problems.
  Rendering your page to both HTML to the DOM is not difficult but to entirely trivial either:
   - 
  We recommend to first experiment if Google's crawler exectuing works out for you first.
  And only after you realize is not an option to render your page to HTML.
  And only if the result to resort ;
  see "slightly increased dev cost".
- Slightly 
- Social sharing
  <br/>
  When someone shares your page on social sites, such as Facebook or Twitter, a preview of your content is shown: the HTML of your page is (Your page's title
- Slightly increased dev cost
  <br/>
  Rendering your page to both HTML and the DOM means that your page's code will run in both Node.js and the browser:
  - Your libraries need to be able to run in Node.js.
    <br/>
    Certain libraries expect to be run in the browser and will crash when run in Node.js.
    You can often solve this by lazy loading your library loading it with `require('a-library-that-works-only-in-the-browser')` only after the React/Vue component is mounted. That way the libray is loaded only in the browser.
  - Only the inital state of your React/Vue components are rendered to HTML.
    <br/>
    You'll have to make sure that your content is available.
    But thanks to !VAR|LINK ASYNC_DATA this is often easy to achieve.
- Faster time-to-first-paint
  <br/>
  The user can see your page's content rendered to HTML before the browser loads any JavaScript and before your pages is rendered in the browser.
  This results the user being able to see the page's content faster.
  Keep in mind that 
  Note that sites, e.g. Hacker News with only ~150 LOC.
- Slower time-to-first-interaction
  <br/>
  On the other hand, rendering your page to HTML slows down the initial HTML download
  and, before the user is able to interact with your page, the JavaScript needs to be loaded and your page rendered to the DOM.

By setting `renderToHtml: true` and `renderToDom: false` you get:
- SEO
  <br/>
  You have full control
- No interactive page
  all the aforementioned benefits without the dr

So, if your page is non-interactive we recommend to render it only to HTML.
Also note that interactive (i.e. stateful) views are more time consuming to implement.
It is often underestimated.
Using React/Vue as HTML template engine is a wonderful experience (using JavaScript to generate HTML is neat)
Using 

Alternatively,
and if your page is non-interactive,
you can render your page to HTML only to get all the aforementioned benefits

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
you can remove the need for a Node.js server,
and your app is now a static website.
You can then deploy your app to a static host such as Netlify or GitHub Pages.

!INLINE ./snippets/section-footer.md #readme



## !VAR SPA_MPA_APP

!INLINE ./snippets/warning-advanced.md

With Goldpage, you get a MPA by default.
This is because the page config's default values are `renderToDom: true` and `renderToHtml: false` which corresponds to what a MPA does.

At !VAR|LINK RENDER_WHEN we explain what the page configs `renderToDom` and `renderToHtml` mean.

For more information about `

Note that a MPA is basically the same than an SPA but with improved performance.

If you are curious, we elaborate more about what SPA and MPA means then check.

You shoudn't worry whether
Whether the default values `renderToDom: true` and `renderToHtml: true` are the right one for your app.

But note that you don't have to know what SPA and MPA mean to use Goldpage and to build a great app.
(We prefer to reseaon in terms of `renderToDom` and `renderToHtml` instead of "SPA"/"SSR"/...)

you get a SPA (more precisely, a MPA) by setting:
- `renderToDom: true`
- `renderToHtml: false`
to your page configs.

A SPA (Single Page App) is the "mother" of all frontends.

Both SPAs

A MPA (Multi Page App) is like a SPA but 

With React and Vue, not only can you render your pages to the DOM, but you can also render them to HTML.
The question arises: should I render my page to the DOM or to HTML?

A SPA (and a MPA) renders your page to the DOM.

A MPA is like an SPA but instead of bundling all browser-side JavaScript into one bundle,
and server-side routed.
with couple of nicess



Modern view libraries 

In an SPA and a MPA,
your pages are rendered in the browser

An Single Page app (SPA) and Multi Page App (MPA) are the classical way of using React/Vue.

In an SPA all browser-side JavaScript are bundled into one file and
this file is served at all URLs

This is what you get when you use create-react-app, vue-cli, Webpack, and Parcel.

With Goldpage, you get an MPA by default.
(The default page config has `renderToDom: true` and `renderToHtml: false`,
more about `renderToDom` and `renderToHtml` at !VAR|LINK RENDER_WHEN.)

to your pages.
You generate 
This is also the default app type that Goldpage generates.

If your app is mostly about user inteactions
then this 
(a music player, an email app, a graphical editor, a chat app, ...).

If your app is mostly about content
(a blog, a newspaper, a e-commerce shop, ...).

If your app is a mix
(a website with a questionnaire)
then a mixed app

Choose this type of app if y

This is typically is highly interactive

!INLINE ./snippets/section-footer.md #readme


## !VAR SSR_APP

[SSR (Server-Side Rendering)](https://github.com/brillout/awesome-universal-rendering#introduction)
denotes the practice of rendering a page twice:
the page is first rendered to HTML with Node.js and then re-rendered to the DOM in the browser.
(The browser-side re-rendering is commonly called "hydration".)
(Modern view libraries, such as React and Vue, are able to render views to the DOM as well as to HTML.)

The idea here is to render your page's content to HTML for gains in SEO, social sharing, and performance.
The page is then re-rendered to the DOM to be able to have stateful React/Vue components and thus interactive views.

You can enable SSR for a page by setting both `renderToHtml: true` and `renderToDom: true`.
We elaborate further and explain when to SSR at !VAR-LINK RENDER_WHEN.

**Example**

The following page showcases SSR:
- The page is interactive (as you can see in the screencast, the user can modify the state of the counter).
- The page is server-side rendered (as you can see in the video, the content of the page is rendered to HTML, such as "brillout/awesome-react-components").

<img align="right" src="https://github.com/reframejs/ssr-coin/raw/master/docs/ssr-coin_example_video.gif" width=336 height=706 style="max-width:100%;"/>

~~~js
!INLINE /examples/basics/pages/repos/repos.page.js
~~~

!INLINE ./snippets/section-footer.md #readme


## !VAR BACKEND_ONLY_APP

Goldpage introduces a new kind of app we call *backend-only app*.

Instead of creating interactive views,
a backend-only app uses React (or Vue) as a HTML template engine.

Using React to generate HTML is a wonderful experience;

There are plenty of benefits:
- Full control over SEO & social sharing.
- Blazing fast performance, especially on mobile.
  <br/>
  Loading all views and views libraries
- High dev speed
  <br/>
  It turns out that create interactive views (state management is notoriously complex) is time consuming.
  No API
  Instead 

A backend-only and we believe it's good thing.
And if you happen to 

Keep in mind: there are hugely successful websites that have (almost) no browser-side JavaScript, such as Hacker News have only ~150 LOC of browser-side JavaScript.

A backend-only app like the old days

Thanks to 

The benefits are mutli
Why would someone want?

And more importantly, if you happen to require

Interactive views are inherently complicated and time consuming to implement.

Many complain that the web dev of 10 years ago was esaier than today's web development.

the and 
But this is not necessarily

!INLINE ./snippets/section-footer.md #readme


## !VAR MIXED_APP

With a *mixed app* we denote an app that has non-interactive pages (`renderTo`)

This is for website
have both pages that are content and pages with lots of user interactions
(A e-commerce shop with a complex checkout process or a advanced. A)


Non-interactive first approach
Whenever possible 

We believe such mixed app to be the future of web developement.


## !VAR STATIC_WEBSITE

A static website is like a SPA/MPA but where 

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
[taking control over rendering](!VAR|ANCHOR RENDER_HOW).

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



