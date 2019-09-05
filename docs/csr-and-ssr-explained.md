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

> :information_source:
> You do not need to read this document
> and you do not need to know what CSR and SSR is
> in order to use Goldpage.
> We recommend that you start writing a prototype first and learn about CSR and SSR later.

This document explains:
- What CSR is.
- What SSR is.
- The motivation of doing both CSR and SSR.
- The difference between an interactive page and a non-interactive page.
- The difference between a static page and a dynamic page.

> :information_source:
> If you already know what CSR, SSR, and CSR + SSR is then checkout
> [Client-side Rendering (CSR) VS Server-side Rendering (SSR)](/docs/csr-vs-ssr.md#readme)
> instead which helps you decide whether to use CSR, SSR, or CSR + SSR.
> Otherwise read on.

> :warning:
> This document assumes that you know:
> - What the DOM is.
> - That anything you see on a page in the browser is represented by the DOM tree
> - The DOM manipulation APIs are what allows a page to change and to be interactive
> - You are somewhat familiar / you have seen the basic DOM manipulation APIs before: `document.getElementById(id)`, `element.appendChild(aChild)`, `document.createElement(tagName)`, `element.setAttribute(name, value)`, ...
> - View libraries (React/Vue/...) are essentially helper libraries that call the DOM manipulation APIs for you.
> - HTML is essentially a declarative specification of the initial DOM.
> - HTML is generated on the server-side and the DOM is manipulated on the browser-side.
> If any of the above is not clear to you, then learn about the DOM before reading this document.

#### Contents

- [What is CSR and SSR?](#what-is-csr-and-ssr)
- [Interactive vs Non-interactive](#interactive-vs-non-interactive)
- [Static vs Dynamic](#static-vs-dynamic)
- [Crawlability](#crawlability)
- [Performance](#performance)
- [CSR + SSR](#csr--ssr)

<br/>
<br/>

# What is CSR and SSR?

Modern view libraries (React/Vue/...) are able to run in the browser as well as in Node.js.
In the browser your page is rendered to the browser's DOM,
and in Node.js your pages is rendered to HTML.

When you define a page with React (or Vue),
you have the choice between rendering your page to the DOM or to HTML.

> :information_source: **Modern view libraries**
> We will only mention React from now on.
> But note that what we talk about here is applicable to all modern view libraries
> that support CSR and SSR. The most popular being React, Vue, and Angular.

*Server-Side Rendering* (SSR) denotes the practice of rendering a page to HTML on the server.

For example:

<img align="right" src="/docs/assets/screens/ssr-result.png" width=336 height=706 style="max-width:100%;"/>

<img align="right" src="/docs/assets/screens/ssr-html.png" width=336 height=706 style="max-width:100%;"/>

~~~js
// We use Goldpage to create a page with SSR.

import React from 'react';

export default {
  route: '/ssr-example',
  view: SomeText,

  // SSR renders the page to HTML.
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

This page has no `<script>` tags; the HTML is generated in Node.js and no browser-side JavaScript is needed.

*Client-Side Rendering* (CSR) denotes the practice of loading a page and rendering it in the browser.

For example:

<img align="right" src="/docs/assets/screens/csr-result.png" width=336 height=706 style="max-width:100%;"/>

<img align="right" src="/docs/assets/screens/csr-html.png" width=336 height=706 style="max-width:100%;"/>

~~~js
// We use Goldpage to create a page with CSR.

import React from 'react';

export default {
  route: '/csr-example',
  view: SomeText,

  // CSR renders the page to the DOM.
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

The page's HTML doesn't contain the page's content but has `<script/>` tags instead; the page's code is loaded and rendered in the browser:

<img align="right" src="/docs/assets/screens/csr-dom.png" width=336 height=706 style="max-width:100%;"/>


You can also do both CSR *and* SSR which we explain at
[CSR + SSR](#csr--ssr).

> :information_source:
> **History**
> <br/>
> In the old days (before React came out in 2013)
> tools were doing either SSR or CSR &mdash; they were not able to do both.
> You had two types of tools:
> - HTML template engines
>   that render your page to HTML on the server, in other words SSR.
    (You may already have heard about some, such as "Handlebars" and "Jinja".)
> - Browser libraries
>   that render interactive views by manipulating the DOM in the browser, in other words CSR.
>   (The most popular were the so-called "Backbone.js" and "Ember.js".)
> React was the first popular tool that was able to do CSR as well as SSR.
> This means that React can be used to create interactive views and it can as well be used as an HTML tempate engine.

We now illustrate how CSR and SSR differ in the following sections.


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

EXAMPLE
 - show HTML
 - show DOM changing

This page illustrates how CSR works:
the `<script/>` tags load React's and the page's source code,
and every time the state `currentTime` changes,
React applies the changes by manipulating the DOM.

> :information_source:
> Our example isn't, strictly speaking, interactive:
> we merely show the current time and the user has no interactions with the page.
> But we sill call the page interactive because it is stateful:
> we use `useState` and the value of `currentTime` changes every second.
> With *interactive* we denote any page that is stateful.

Not only does CSR enable a page to be interactive but it also required.
Without DOM manipulation,
the page would need a full reload for every change in the interactive view.
This is prohibitively slow for most interactive views.
In other words, CSR is required for interactive views.

This is the biggest difference between CSR and SSR;
CSR enables (and is required for) interactive views.

> :information_source:
> Our documentation often talks about "rendering a page in the browser" or "rendering a page to the DOM".
> Both denote the practice of doing CSR.

> :information_source:
> **History**
> <br/>
> Gmail and Google Maps were among the first desktop-like web apps and they popularized the practice of manipulating the DOM to implement interactive apps.
> CSR was called *ajax* back then.

**non-interactive**

With SSR alone you can only implement *non-interactive* pages.

However, we can still render our `<Time/>` view from the example above to HTML:

EXAMPLE
  // We don't render the page in the browser.
  // We could however render the page to the browser *as well*,
  // which is a common technique we explain in the section "CSR + SSR".
  renderToDom: false,
 - reload page to show user that state changes only between full page reloads.

What happens here is that React renders the initial state of `<Time/>` to HTML.
Because the page is (re-)rendered every time we request the page,
the initial state is computed anew on each page load;
the printed time corresponds to time the page was rendered.

Rendering a view to HTML is stateless;
only the initial state ever be rendered
and taht initial state will never change.
States and `useState` are only used when rendering a view to the browser.


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
a page cannot be interactive when it is only rendered to HTML.
But it can be dynamic:
the page can be dynamically rendered to HTML; the page's content can change between page (re-)loads.

When you render your page to HTML,
you have the choice between rendering your page at request-time or at built-time.

**request-time**

Whenever a user requests a page,
your server (re-)renders your page.

This allows your page's content to change.
For exampe,
you can render data from your database to HTML.
And that data from may change over time &mdash; your page is dynamic.

We call such page *dynamic*.

For example:

EXAMPLE

The printed time changes on every page reload.

**build-time**

Your page is rendered to HTML at build-time,
that is when you build your app. (When you transpiltion & bundle your JavaScript code, minify your assets, etc.)

Your page's HTML can change only at deploy-time;
if you want to change your page's HTML you need to re-build and re-deploy your app.

We call such page *static*.

For example:

EXAMPLE

The printed time never changes and corresponds to the time the app was built.

> :information_source:
> Tools that generate such static pages are called *Static Site Generators (SSG)*.

> :information_source:
> You can have a non-interactive dynamic page:
> a page that is not rendered to the DOM but rendered to HTML at request-time.
> (You can actually have all kinds of (non-)interactive static/dynamic combination)

To sum up:
- `renderToDom: true` &rArr; interactive
- `renderToDom: false` &rArr; non-interactive
- `renderToHtml: true` & `renderHtmlAtBuildTime: true` &rArr; static
- `renderToHtml: true` & `renderHtmlAtBuildTime: false` &rArr; dynamic


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

Search engines (Google, Yandex, Baidu, DuckDuckGo, Bing, etc.)
need to be able to crawl your pages for your website to appear in search results.

Social sites (Facebook, Twitter, etc.) need to be able to crawl your pages to be able
to show a preview of your pages when someone shares your website.

With CSR, this is how your page looks like
from the perspective of a crawler:

EXAMPLE

The crawler sees only bunch of script tags; your page's content is invisible to the crawler.

Anything you render to the DOM is not crawlabe; if you want your page's content to be crawled then you have no choice than to use SSR and render your page's content to HTML.

Note that Google is capable of executing JavaScript and discover content rendered to the DOM but it has limitations.

We elaborate furhter at
[Client-side Rendering (CSR) VS Server-side Rendering (SSR)](/docs/csr-vs-ssr.md#readme).


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
[Client-side Rendering (CSR) VS Server-side Rendering (SSR)](/docs/csr-vs-ssr.md#readme).


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

The motivation of doing both CSR and SSR is to
have a crawlabe interactive page:
the page is rendered to HTML to make its content available to crawlers
and the page is also rendered to DOM so that it can be interactive.

You get CSR + SSR when you set `renderToDom: true` and `renderToHtml: true`.
Your page is then rendered twice:
first to HTML in Node.js and then again to the DOM in the browser.
(FYI, the practice of re-rendering the page in the browser is called *hydrating*.)


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
