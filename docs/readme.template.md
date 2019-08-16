!MENU_LINK /../../
!OUTPUT ../readme.md
!INLINE ./snippets/header.md

!VAR WHAT_IS_GOLDPAGE What is `ssr-coin`
!VAR WHY_GOLDPAGE Goldpage VS create-react-app/Next.js/vue-cli/Nuxt.js/Gatsby/...

!VAR GETTING_STARTED Getting Started

!VAR CSS_AND_ASSETS CSS & Static Assets
!VAR ASYNC_DATA Async Data: `addInitialProps`
!VAR CONTROL_HTML HTML: `index.html`, `<head>`, `<meta>`, `<link>`, ...

!VAR RENDER_WHEN Control Rendering - When: `renderToDom`, `renderToHtml` & `renderHtmlAtBuildTime`
!VAR RENDER_HOW Control Rendering - How

!VAR APP_TYPES App Types (Advanced)
!VAR MPA_APP MPA
!VAR SPA_APP SPA
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
!INLINE li-2-header !VAR APP_TYPES
!INLINE li-2 !VAR|LINK MPA_APP
!INLINE li-2 !VAR|LINK SPA_APP
!INLINE li-2 !VAR|LINK SSR_APP
!INLINE li-2 !VAR|LINK BACKEND_ONLY_APP
!INLINE li-2 !VAR|LINK STATIC_WEBSITE
!INLINE li-2-header Advanced - Rendering
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
!INLINE li-2 !VAR|LINK CONTROL_ROUTING
!INLINE li-2 !VAR|LINK FRONTEND_LIBRARIRES
!INLINE li-2 !VAR|LINK SERVER_FRAMEWORKS
!INLINE li-2 !VAR|LINK VIEW_LIBRARIES
!INLINE li-2 !VAR|LINK PROCESS_MANAGERS

!INLINE li-1 !VAR|LINK PLUGIN_LIST

<br/>

## !VAR WHAT_IS_GOLDPAGE

Easily create a modern frontend.
Works with React, Vue, RNW, etc.
Supports all app types.
(so-called "SPA", "MPA", "SSR", "static website", etc.)

Goldpage is a small (but powerful) tool that makes it easy to create a frontend.
It works with any view library, such as React or Vue.

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

Goldpage is designed to be easy to use and easy to get started with &mdash;
all you need to know to create your first prototype
is written in the "Getting Started" and "Usage - Basics" sections.

**App types**

Goldpage supports all app types.
(What are commonly called "SPA", "MPA", "SSR", "static website", etc.)
(So-called "SPA", "MPA", "SSR", "static website", etc.)
(In case you are familiar with following terms: Goldpages supports SPAs, MPAs, SSR apps, static websites, and more.)

Switching from one app type to another is easy, which means that you can start
writing your app, and, once you have finished a first prototype,
you can try out different app types and see what works out best for your app.

We believe you shouldn't have to know what "SPA", "MPA", "SSR", and "static website" mean before getting started.

**Do-one-thing-do-it-well**

Goldpage is designed as do-one-thing-do-it-well and works with
any view libray (React, Vue, React Native Web, ...),
any server framework (Express, Koa, Hapi, ...),
any language (ES7, TypeScript, PostCSS, ...),
any provider (Redux, React Router, Vuex, Vue Router, GraphQL Apollo, Relay, ...),
any CSS-in-JS library (Emotion, styled-components, ...),
and any process manager (Docker, systemd, PM2, ...).

!INLINE ./snippets/section-footer.md #readme



## !VAR WHY_GOLDPAGE

What distiguishes Goldpage most is that it supports all app types whereas
ohter tools support only one. For example for React:
- create-react-app creates a so-called "SPA"
- Next.js creates a so-called "SSR app"
- Gatsby creates a so-called "static website"

Before choosing one of these tools you have to know what "SPA", "SSR", and "static website" mean, the differences between them, and decide which of these app types is the right one for your app.
But, most often than not,
which app type is the right one becomes clear only after you have written and battle-tested your first protoype.

Goldpage supports all app types
and you can easily switch from one app type to another.
That way,
you can create a prototype before even knowing what "SPA" or "SSR" mean
and, once you finished a first prototype, you can experiment with different app types and see which one works best for your app.

Instead of spending time learning about the different kinds of app types,
we encourage you start creating a first prototype.
You'll eventually get familiar with the different kind of app types while developing your app,
and you'll eventually figure out
which app type works best for your app.

Switching between app types is simply a matter of setting three page configs:
`renderToDom` - If set to true, your page is rendered in the browser (to the DOM).
`renderToHtml` - If set to true, your page is rendered on Node.js (to HTML).
`renderHtmlAtBuildTime` - Whether your page is rendered to HTML at request-time or at build-time.
These three flags allow you to get any app type.
For example, to add SSR to your page, you set `renderToDom: true` and `renderToHtml: true`,
and to get an MPA you set `renderToDom: true` and `renderToHtml: false`..

For example, there is a technique called "SSR" that allows search engines successfully crawl the content of your pages.
The best way to know if you need SSR is to try it out.
(for example from create-react-app to Next.js).
You cannot easily jusdo that with other tools.
But with Goldpage you can.
You can add SSR to one of your page by setting `renderToHtml: true` to the page config
and then test how SSR works out for that page.
If it does, you can then add SSR to your other pages.

With Goldpage you can add SSR a one of your page and see if it works out for you.
If it does you can add SSR to your other pages and 

Now you .
You can even try SSR with only one page.
If you are hestitating whether 

then you know that it's not clear 
then you most likely asked yourself the question
know 
SSR and SEO.
Google executes JavaScript but it has limitations and it's not clear whether you will need.
We recommend you to experiement without SSR first and if you're not satisfied with
Googlebot's capability of executing JavaScript crawler
and if
's not 
Whether or not you will require to render your pages to HTML to achieve
now always clear and requires you to experiment if 
By default, Goldpage generates an MPA and easily add SSR at a later point.
You can start without SSR and later,
if you encounter SEO problems, add SSR to your app.
We fur

Also, other tools are too framework-ish;
they come with lots of (create-react-app 
Goldpage is unopinionated can.
restrictive but you should be free to achieve whatever you want.
For example, Reframe Starters are opinionated

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

> This section assumes what you know [differences between non-interactive and interactive] pages are.

There are three page configs that allow you to control when and where your page is rendered:
- `renderToDom` - If set to true, your page is rendered in the browser (to the DOM).
- `renderToHtml` - If set to true, your page is rendered on Node.js (to HTML).
- `renderHtmlAtBuildTime` - Whether your page is rendered to HTML at request-time or at build-time.

Configuring these page configs is about achieving improvements in:
- SEO
- SSO
- Performance

We recommand to not care about these aspects at first
but to build a prototype instead first.
And once you have your first protype, you can experiment with these three page configs and see what works best for you.

We now discuss the different combination of setting `renderToDom` and `renderToHtml` and `renderHtmlAtBuildTime`.

###### `renderToDom: true` & `renderToHtml: false`

This is Goldpage's default setting.

###### `renderToDom: true` & `renderToHtml: true`

With this configuration your page is rendered twice:
the page is first rendered to HTML with Node.js and then re-rendered to the DOM in the browser.
(The browser-side re-rendering is commonly called "hydration".)

This practice is known as SSR (Server-Side Rendering).

The main motivation of doing SSR is to make your page's content available to search engine and social site that crawler your' pages HTML.

We give a little overview of SSR's advantages and disadvantages and we
further elaborate at [SSR or not to SSR?]().

The advantages:
- SEO
  
- Social Sharing
- Faster time-to-first-print

The disadvantages:
- Slower time-to-first-interaction
- Slightly slower dev speed

- SEO
- Social Sharing
- Performance

The motivation of rendering your page twice is to be able to have a page that is both interacative while also having its content rendered to HTML to make the content more accessible to HTML crawlers for search engines and social sharing sites.

###### `renderToDom: false` & `renderToHtml: true`

As explained in [Interactive Page VS Non-interactive Page](),
an interactive page needs to be rendered to the DOM.

But if your page is non-interactive then you can rendered it to HTML only.
This is then the best configuration:
- Performance
  <br/>
  Epsecially on mobile devices, a without any browser-side JavaScript is dramatically faster than a
  with many MBs of browser-side JavaScript.
- SEO & Social sharing
  All your page's content is accessible to search engines and social sites crawling page's HTML.

###### `renderToHtml: true` & `renderToHtml: true`

The main motivation for this configuration is to get rid of the need for a Node.js server and create a static website.
This is mainly to create a 

###### `renderToDom: false` & `renderToHtml: false`

Doesn't make sense ;-).

###### `renderToHtml: false` & `renderHtmlAtBuildTime: true`




- more details renderToDom
- more details renderToHtml
- more details renderHtmlAtBuildTime
- overview renderToDom vs renderToHtml
- extra doc renderToDom vs renderToHtml

By default Goldpages renders your pages to the DOM:

~~~js
EXAMPLE
~~~

k(`renderToDom: true` and `renderToHtml



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


We now discuss the different combination and when to use what.

> NOTE: You do NOT need to know this section before starting to create your app.
> We recommend you to start writing your first prototype and come back to this section only once you start asking yourself following questions:
> - SEO and Google ranking are important to me - how can I get the best SEO result?
> - Mobile users are important to me - how can I achieve great mobile performance?
> - 
> The nice thing about Goldpage is that it allows you to easily change app type at any type &mdash;
> don't worry about choosing the right app type and just start writing code.

###### `renderToDom: true` & `renderToHtml: true`

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



## !VAR MPA_APP

!INLINE ./snippets/warning-advanced.md
> This section assumes that you know what MPA means.

An MPA is what you get by default.

The default values are `renderToDom: true` and `renderToHtml: false` which corresponds to what a MPA does.

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

## !VAR SPA_APP

!INLINE ./snippets/warning-advanced.md
>
> This section assumes that you know what SPA, MPA, [browser-side routing, and server-side routing](!VAR|ANCHOR CONTROL_ROUTING) mean.

By default,
Goldpage generates an MPA which most of the a better alterantive to an SPA.
(MPA is basically the same than an SPA but with server-side routing and code-splitting.)

An SPA is what you get when you use create-create-app, vue-cli, the Webpack CLI, and Parcel.

If you're curious:
you could still have an SPA by have a single page with a catch-all route and use a browser-side routing library such as React Router.

## !VAR SSR_APP

!INLINE ./snippets/warning-advanced.md
>
> This section assumes that you know about `renderToHtml`, `renderToDom` and that you know what [SSR](https://github.com/brillout/awesome-universal-rendering#introduction) means.

Set the page configs `renderToHtml: true` and `renderToDom: true` in order add SSR to a page.

By setting `renderToHtml: true` and `renderToDom: true` to all page configs you get an SSR app.

An SSR app is what you get when you use Next.js and Nuxt.js.

!INLINE ./snippets/section-footer.md #readme


## !VAR BACKEND_ONLY_APP

!INLINE ./snippets/warning-advanced.md


- overview backend-only
- extra doc details backend-only




Goldpage introduces a new kind of app we call *backend-only app*.

By setting the page configs `renderToHtml: true` and `renderToDom: false` you
end up using React (or Vue) merely as a HTML template engine.

Why should one use React to generate plain old HTML?
It turns out that JSX can also be used to generate HTML in a delightful way; it allows you to leverage your knowledge about and the full power of JavaScript to generate HTML.

You can use the same stack and use your JavaScript knowledge to create an old-school and simple non-interactive backend-only app.

For apps that are mainly about content, this makes a lot of sense.



In short, Goldpage and `renderToDom: false` allow you to implement an old-school backend by using your knowledge of a modern JavaScript stack.


Non-interactive pages are much easier and much faster to implement.
And if you happen to absolutely need an interactive page you can always do so and set `renderToDom: true`.

means that no browser-side (or little) JavaScript
Long debate about that interactive apps are overkill and just use 
React can do that to today.

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

The nice thing is that you
interactive escape hatch:
If you happen to actually
absolutely need to implement a interactive page you selectively add `renderToDom: true`.

Non-interactive 

Interactive views are inherently complicated and time consuming to implement.


A backend-only and we believe it's good thing.

Many complain that the web dev of 10 years ago was esaier than today's web development.

the and 
But this is not necessarily

Also, non-interactive pages are easier and faster to develop than interactive ones &mdash;
using React/Vue as HTML template engine is a wonderful experience.

More at !VAR|LINK BACKEND_ONLY_APP.


!INLINE ./snippets/section-footer.md #readme


## !VAR MIXED_APP

!INLINE ./snippets/warning-advanced.md

With a *mixed app* we denote an app that has non-interactive pages (`renderTo`)

This is for website
have both pages that are content and pages with lots of user interactions
(A e-commerce shop with a complex checkout process or a advanced. A)


Non-interactive first approach
Whenever possible 

We believe such mixed app to be the future of web developement.


## !VAR STATIC_WEBSITE

!INLINE ./snippets/warning-advanced.md

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



