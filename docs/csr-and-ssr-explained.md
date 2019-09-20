<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/csr-and-ssr-explained.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/csr-and-ssr-explained.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/csr-and-ssr-explained.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/csr-and-ssr-explained.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/csr-and-ssr-explained.template.md` and run `npm run docs` (or `yarn docs`).






-->
<p align="center">
  <a href="/../../#readme">
    <img align="center" src="/docs/assets/logo-with-text.svg" height=96 style="max-width:100%;" alt="Goldpage"/>
  </a>
</p>
<br/>

# CSR & SSR Explained

This document explains the differences between CSR and SSR,
between interactive and non-interactive,
and between static and dynamic.

> :information_source: You can use Goldpage without reading this document; we recommend that you write your app first and learn about CSR and SSR later.

> :information_source:
> If you already know what CSR and SSR are then checkout
> [Client-side Rendering (CSR) VS Server-side Rendering (SSR)](/docs/csr-vs-ssr.md#readme)
> instead.

> :warning:
> This document requires you to have a [good understanding of the DOM](/docs/dom.md#readme).

#### Contents

- [What are CSR and SSR?](#what-are-csr-and-ssr)
- [Interactive vs Non-interactive](#interactive-vs-non-interactive)
- [Static vs Dynamic](#static-vs-dynamic)
- [Crawlability](#crawlability)
- [Performance](#performance)
- [CSR + SSR](#csr--ssr)

<br/>
<br/>

# What are CSR and SSR?

Modern view libraries (React/Vue/...) are able to run in the browser as well as in Node.js.
In the browser your page is rendered to the browser's DOM,
and in Node.js your pages is rendered to HTML.

When you define a page with React (or Vue),
you have the choice between rendering your page to the DOM or to HTML.

> :information_source:
> We will only talk about React from now on,
> but everything here is applicable to any modern view library such as Vue or Angular.

*Server-Side Rendering* (SSR) denotes the practice of rendering a page to HTML on the server.
And *Client-Side Rendering* (CSR) denotes the practice of loading a page in the browser and rendering it to the browser's DOM.

SSR example:

<img align="right" src="/docs/assets/screens/ssr.png" width=336 style="max-width:100%;"/>

~~~js
// This example uses Goldpage to create a SSR page.

import React from 'react';

export default {
  route: '/ssr-example',
  view: SomeText,

  // We do SSR: we render the page to HTML.
  renderToHtml: true,

  // We do SSR only: we don't render the page to the DOM.
  // (We could also do both SSR *and* CSR
  // which we explain later.)
  renderToDom: false,
};

function SomeText() {
  return (
   <div>
     <h1>Some Content</h1>
     Lorem ipsum dolor sit amet, consectetur adipiscing
     elit, sed do eiusmod tempor incididunt ut labore
     et dolore magna aliqua.  Ut enim ad minim veniam,
     quis nostrud exercitation ullamco laboris nisi ut
     aliquip ex ea commodo consequat. Duis aute irure
     dolor in reprehenderit in voluptate velit esse
     cillum dolore eu fugiat nulla pariatur. Excepteur
     sint occaecat cupidatat non proident, sunt in culpa
     qui officia deserunt mollit anim id est laborum.
   </div>
  );
};
~~~

This page is server-side rendered:
the page is rendered to HTML.
Note that this page
has no `<script>` tags;
there is no browser-side JavaScript.
React is only used to render HTML in Node.js.

CSR example:

<img align="right" src="/docs/assets/screens/csr.png" width=336 style="max-width:100%;"/>

~~~js
// This example uses Goldpage to create a CSR page.

import React from 'react';

export default {
  route: '/csr-example',
  view: SomeText,

  // We do CSR: we render the page to the DOM.
  renderToDom: true,

  // We do CSR only: we don't render the page to HTML.
  // (We could also do both CSR *and* SSR
  // which we explain later.)
  renderToHtml: false,
};

function SomeText() {
  return (
   <div>
     <h1>Some Content</h1>
     Lorem ipsum dolor sit amet, consectetur adipiscing
     elit, sed do eiusmod tempor incididunt ut labore
     et dolore magna aliqua.  Ut enim ad minim veniam,
     quis nostrud exercitation ullamco laboris nisi ut
     aliquip ex ea commodo consequat. Duis aute irure
     dolor in reprehenderit in voluptate velit esse
     cillum dolore eu fugiat nulla pariatur. Excepteur
     sint occaecat cupidatat non proident, sunt in culpa
     qui officia deserunt mollit anim id est laborum.
   </div>
  );
};
~~~

This time the page is not rendered to HTML.
The page's HTML has `<script/>` tags instead which contain the page's and React's source code; the page and React are loaded in the browser
and React renders the page to the browser's DOM:

<p align="center">
  <img src="/docs/assets/screens/csr-dom.png" style="max-width:100%;" width=750/>
</p>


There is also a common practice of doing both CSR *and* SSR which we talk about at
[CSR + SSR](#csr--ssr).

> :information_source:
> **History**
> <br/>
> In the old days, before React came out in 2013,
> tools were doing either SSR or CSR &mdash; they were not able to do both.
> You had two types of tools:
> - HTML template engines.
>   <br/>
>   They render your page to HTML on the server, in other words SSR.
>   (You may already have heard about some, such as "Handlebars" and "Jinja".)
> - Browser libraries.
>   <br/>
>   They render interactive views by manipulating the DOM in the browser, in other words CSR.
>   (The most popular were the so-called "Backbone.js" and "Ember.js".)
>
> React was the first popular tool that was able to do CSR as well as SSR:
> you could use React can be used to create interactive views and it can as well be used as an HTML tempate engine.


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



# Interactive vs Non-interactive

CSR is what allows a page to be interactive.
For example:

<img align="right" src="/docs/assets/screens/time-with-csr.gif" style="max-width:100%;"/>

~~~js
import Time
from './Time';

export default {
  route: '/time-with-csr',
  view: Time,

  // We do CSR:
  renderToDom: true,
  renderToHtml: false,
};
~~~

~~~js
// Time.js

import React, {useEffect, useState} from 'react';

export default Time;

function Time() {
  // `useEffect` and `useState` are React Hooks.
  // If you are no familiar with React hooks that's fine: just
  // know that it allows us to change the state `displayedTime`.
  const [displayedTime, setDisplayedTime] = useState(getCurrentTime());
  useEffect(effect, []);

  return (
    <div>
      The time is: <span>{displayedTime}</span>
    </div>
  );

  function update() {
    const now = getCurrentTime();
    if( now!==displayedTime ){
      setDisplayedTime(now);
    }
  }

  function effect() {
    const interval = setInterval(update, 30);
    return () => clearTimeout(interval);
  }
}

function getCurrentTime() {
  return new Date().toLocaleTimeString();
}
~~~

This is what is happening:
1. The browser loads and executes the source code of React and of our page.
2. React renders `<Time/>` to the DOM.
3. `effect` and subsequently `setInterval` are called &mdash; `update` is now called every 30ms.
4. Every time the second changes, `setDisplayedTime` is called, the state `displayedTime` of `<Time/>` changes, and React re-renders `<Time/>` to the DOM.

This is basically how a stateful component and the DOM allow a page to be interactive.
The crucial aspect to remember is that everything that happens here, happens in the browser.
You could say that,
loading and running a page in the browser,
allows it to be "alive" and interactive.

In short, CSR enables interactivity.

> :information_source:
> Our example isn't, strictly speaking, interactive:
> we merely show the current time and the user has no interactions with the page.
> But we sill call the page interactive because it is stateful:
> the value of our `<Time/>`'s state `displayedTime` changes every second.
> Technically speaking with *interactive* we denote any page that is stateful.

**non-interactive**

With SSR alone you cannot have interactivity.

Let's see what happens when we render `<Time/>` with SSR:

<img align="right" src="/docs/assets/screens/time-with-ssr.gif" width=600 style="max-width:100%;"/>

~~~js
import Time from './Time';

export default {
  route: '/time-with-ssr',
  view: Time,

  // We do SSR:
  renderToDom: false,
  renderToHtml: true,
};
~~~

What happens is the following:
1. When we start the Node.js server, React and our page are loaded on the server.
2. When the browser requests the page `/time-with-ssr`, React renders the page to HTML.
3. The browser loads the server's HTML response and the server is done with the page request &mdash; there is no subsequent re-rendering of the page and you could say that page is now "frozen".

> :information_source:
> When React renders `<Time/>` to HTML it ignores `useEffect` &mdash; `effect` and `update` are never called.
> React renders the initial state of `displayedTime` to HTML and the state of `<Time/>` never changes.
> In general, React's interactive features are only used in the browser.
> In Node.js components are stateless and it is always the initial state of a component that is rendered to HTML.

The only way for us to update the displayed current time is to fully reload the page and get a new "frozen" page.

In short, SSR doesn't support interactivity.

If your page is interactive, you need CSR.

Note that we can also do both SSR and CSR which we discuss at
[CSR + SSR](#csr--ssr).

> :information_source:
> **History**
> <br/>
> Gmail and Google Maps were among the first to show that
> it is possible to use browser-side JavaScript and the DOM manipulation APIs
> to build a rich interactive app with a desktop-like experience.
> CSR was called *ajax* back then.

> :information_source:
> In the Goldpage documentation, when we talk about "rendering a page in the browser" or "rendering a page to the DOM"
> we mean CSR.


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



# Static vs dynamic

As shown in the previous section,
a page cannot be interactive when it is rendered to HTML only.
But it can be dynamic.

**request-time**

When the browser requests your page,
your server (re-)renders your page to HTML.

This allows your page's content to change.
For exampe,
you can render data from your database to HTML
and that data may change over time &mdash; your page is what we call *dynamic*.

> :information_source:
> With Goldpage, pages are rendered to HTML at request-time by default.

Let's reconsider the example of our previous section:
<img align="right" src="/docs/assets/screens/time-with-ssr.gif" width=600 style="max-width:100%;"/>

~~~js
import Time from './Time';

export default {
  route: '/time-with-ssr',
  view: Time,

  // We do SSR:
  renderToDom: false,
  renderToHtml: true,
};
~~~

As we can see, the displayed time changes on every page reload and our page is dyanmic.

In short, our page is non-interactive but dynamic.

**build-time**

Your page is rendered to HTML at build-time:
your page is rendered at the same time as when
when you transpile & bundle your JavaScript code, minify your assets, etc.

Your page's HTML can change only at deploy-time;
if you want to change your page's HTML you need to re-build and re-deploy your app.

We call such page *static* and the practive of rendering a page at build-time is called *static rendering*.

> :information_source:
> With Goldpage, you can set `renderHtmlAtBuildTime: true` to your page's config and your page will be rendered at build-time.

<img align="right" src="/docs/assets/screens/time-with-sr.gif" width=560 style="max-width:100%;"/>

~~~js
import Time from './Time';

export default {
  route: '/time-with-sr',
  view: Time,

  // We do Static Rendering:
  renderToDom: false,
  renderToHtml: true,
  renderHtmlAtBuildTime: true,
};
~~~

As we can see,
the displayed time never changes, even when we reload the page.
The time shown corresponds to the time the app was built.

> :information_source:
> Tools that generate websites where all pages are static are called *Static Site Generators (SSG)*.

To sum up:
- `renderToDom: true` &rArr; interactive
- `renderToDom: false` &rArr; non-interactive
- `renderToHtml: true` & `renderHtmlAtBuildTime: false` &rArr; dynamic
- `renderToHtml: true` & `renderHtmlAtBuildTime: true` &rArr; static


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



# Crawlability

Content rendered to the DOM (and not to HTML) is invisible to crawlers.

Let's for example consider the content of following page:

<p align="center">
  <img src="/docs/assets/screens/csr-dom.png" style="max-width:100%;" width=750/>
</p>

<p align="center">
  <img src="/docs/assets/screens/csr-html.png" style="max-width:100%;"/>
</p>

The content `Lorem ipsum dolor sit amet, ...` is rendered only to the DOM &mdash; the page's HTML doesn't contain it.

But crawlers are based on HTTP and all they see are the page's HTML.
This means that `Lorem ipsum dolor sit amet, ...`
is invisible to crawlers.

You need to use SSR and render your page to HTML to make its content visible to crawlers.

Search engines (Google, Yandex, Baidu, DuckDuckGo, Bing, etc.)
need to be able to crawl your pages in order to show them in their search results.

> :information_source:
> Google executes your pages' JavaScript and is able to discover content rendered to the DOM.
> But it has limitations which we discuss at
> [Client-side Rendering (CSR) VS Server-side Rendering (SSR) - Search Engines](/docs/csr-vs-ssr.md#search-engines).

Social sites (Facebook, Twitter, etc.) need to be able to crawl your pages
to be able to show a correct preview of your pages when someone shares your website.

> :information_source:
> Goldpage allows you to render your page's meta data to HTML without doing SSR.
> More at
> [Client-side Rendering (CSR) VS Server-side Rendering (SSR) - Social Sharing](/docs/csr-vs-ssr.md#social-sharing).


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



# Performance

CSR and SSR have different performance characteristics.

On low-end devices and/or on slow internet connections, such as mobile, the differences are drastic.

We explain the performance differences in detail at
[Client-side Rendering (CSR) VS Server-side Rendering (SSR) - Performance](/docs/csr-vs-ssr.md#performance).


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



# CSR + SSR

> :warning:
> This section assumes that you have read
> [What are CSR and SSR?](#what-are-csr-and-ssr) and
> [Interactive vs Non-interactive](#interactive-vs-non-interactive).

The main motivation of doing both CSR and SSR is to
have a crawlabe interactive page:
the page is rendered to HTML in order to make its content available to crawlers
and the page is as well rendered to the DOM so that it can be interactive.

> :information_source:
> Some people also do CSR + SSR for performace reasons which we talk about at
> [Client-side Rendering (CSR) VS Server-side Rendering (SSR) - Performance](/docs/csr-vs-ssr.md#performance).

When doing CSR + SSR your page is rendered twice:
first to HTML in Node.js and then again to the DOM in the browser.

> :information_source:
> When using Goldpage,
> you get CSR + SSR when you set `renderToDom: true` and `renderToHtml: true`.

One way to to think about is CSR + SSR is that SSR delivers a "frozen" page and CSR is about making it "alive":
1. [SSR] When we start our Node.js server, React and our page are loaded on the server.
2. [SSR] When the browser requests our server and React renders the page to HTML.
3. [SSR] The browser &mdash; but the page is "frozen" and the user cannot interact with it.
1. [CSR] The browser loads and executes the source code of React and of the page.
4. [CSR] React renders the page to the DOM &mdash; the page is now "alive": the user can now use interactive components of the page.

In short,
the page is initially rendered to HTML and to the DOM,
and all subsequent renders are done to the browser's DOM.

> :information_source:
> In the React community, this process of making a "frozen" page "alive" is commonly called *hydration*.

Thanks to CSR our page is interactive and thanks to SSR our page is crawlable.

The following page showcases SSR:
- The page is interactive (as you can see in the screencast, the user can modify the state of the counter).
- The page is server-side rendered (as you can see in the screencast, the content of the page is rendered to HTML, such as "brillout/awesome-react-components").

<img align="right" src="/docs/assets/screens/ssr-live-demo.gif" width=336 height=706 style="max-width:100%;"/>

~~~js
// /examples/basics/pages/repos/repos.page.js

// We use React but Goldpage also works with Vue, RNW, ...
import React from 'react';

import getRepositories from './data/getRepositories';

import RepoList from './views/RepoList';
import Counter from './views/Counter';

// The page config:
export default {
  route: '/repos/:username',
  addInitialProps,
  view: Repos,
  title,
  renderToHtml: true,
};

// `getRepositories(username)` uses the GitHub API
// to load the repositories of `username`.
// `addInitialProps` makes `repositories` available
// to `view`.
async function addInitialProps({username}) {
  const repositories = await getRepositories(username);
  return {repositories};
}

function Repos({username, repositories}) {
  return (
    <div>
      Hello <b>{username}</b>,

      <br/><br/>
      Your repositories are:
      <RepoList repositories={repositories} />

      <br/><br/>
      This page is interactive:
      <Counter/>
    </div>
  );
}

function title({username, repositories}) {
  return (
    username+' repositories ('+repositories.length+')'
  );
}
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
    Instead, edit `/docs/csr-and-ssr-explained.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/csr-and-ssr-explained.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/csr-and-ssr-explained.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/csr-and-ssr-explained.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/csr-and-ssr-explained.template.md` and run `npm run docs` (or `yarn docs`).






-->
