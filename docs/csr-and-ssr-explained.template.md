!INLINE ./snippets/header.md
<br/>

# CSR & SSR Explained

> :information_source:
> You do not need to read this document
> and you do not need to know what CSR and SSR are
> in order to use Goldpage.
> We recommend that you start writing a prototype first and learn about CSR and SSR later.

This document explains:
- What CSR is.
- What SSR is.
- What CSR + SSR is about.
- The motivation of doing CSR, SSR, and CSR and SSR.
- The difference between an interactive page and a non-interactive page.
- The difference between a static page and a dynamic page.

> :information_source:
> If you already know what CSR, SSR, and CSR + SSR are then checkout
> [Client-side Rendering (CSR) VS Server-side Rendering (SSR)](/docs/csr-vs-ssr.md#readme)
> instead which goes deep into the differences between CSR and SSR and helps you decide what to use.

> :warning:
> This document requires you to you have a good understanding of what the DOM is:
> - You know that anything you see on a page in the browser is represented in the DOM tree.
> - You know that the DOM manipulation APIs are what allows a page to change and to be interactive.
> - You are somewhat familiar / you have seen the basic DOM manipulation APIs before: `document.getElementById(id)`, `element.appendChild(aChild)`, `document.createElement(tagName)`, `element.setAttribute(name, value)`, etc.
> - You know that view libraries (React/Vue/...) are essentially helper libraries that call the DOM manipulation APIs for you.
> - You know that HTML is essentially a declarative specification of the initial DOM.
> - You know that HTML is generated on the server-side and that the DOM is manipulated on the browser-side.
>
> If any of the above is not clear to you, then learn about the DOM before continuing reading this document.

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
> We will only mention React from now on,
> but everything we talk about here is applicable to all modern view libraries
> that can do both CSR and SSR, such as React, Vue, and Angular.

*Server-Side Rendering* (SSR) denotes the practice of rendering a page to HTML on the server.
For example:

<img align="right" src="/docs/assets/screens/ssr.png" width=336 style="max-width:100%;"/>

~~~js
!INLINE /examples/csr-ssr-explained/pages/ssr.page.js --hide-source-path
~~~

This page is server-side rendered:
the page is rendered to HTML.
Note that this page
has no `<script>` tags;
there is no browser-side JavaScript.
React is only used render HTML in Node.js.

*Client-Side Rendering* (CSR) denotes the practice of loading a page in the browser and rendering it to the browser's DOM.
For example:

<img align="right" src="/docs/assets/screens/csr.png" width=336 style="max-width:100%;"/>

~~~js
!INLINE /examples/csr-ssr-explained/pages/csr.page.js --hide-source-path
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

!INLINE ./snippets/section-footer.md #readme



# Interactive vs Non-interactive

CSR is what allows a page to be interactive. For example:

<img align="right" src="/docs/assets/screens/time-with-csr.gif" style="max-width:100%;"/>

~~~js
!INLINE /examples/csr-ssr-explained/pages/time-with-csr.page.js --hide-source-path
~~~

~~~js
// Time.js

!INLINE /examples/csr-ssr-explained/pages/Time.js --hide-source-path
~~~

This is what is happening:
1. The browser loads and executes the source code of React and of our page.
2. React renders `<Time/>` to the DOM.
3. `effect` and subsequently `setInterval` are called &mdash; `update` is now called every 30ms.
4. Every time the second changes `setDisplayedTime` is called, the state `displayedTime` of `<Time/>` changes, and React re-renders `<Time/>` to the DOM.

This is basically how a stateful component allows a page to be interactive.
The crucial aspect to remember is that every thing that happens here, happens in the browser.
You could say that a page is "live" when it is loaded and running in the browser.

In short, CSR supports interactivity.

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
!INLINE /examples/csr-ssr-explained/pages/time-with-ssr.page.js --hide-source-path
~~~

What is happening is the following:
1. When we start the Node.js server, React and our page are loaded on the server.
2. When the browser requests the page `/time-with-ssr`, React renders the page to HTML.
3. The browser loads the server's HTML response and the server is done with the page request &mdash; there is no subsequent re-rendering of the page request, you could say that page is now "frozen".

> :information_source:
> When React renders `<Time/>` to HTML it ignores `useEffect` &mdash; `effect` and `update` are never called in Node.js.
> any interactivity feature of React are ignored
> All interactivity 
> On the server, React treats components as stateless; React only renders the inital state of components.
> Are only used by React in the browser.

The only way for us to update the displayed current time is to fully reload the page and get a new "frozen" page.

In short, SSR doesn't support interactivity.

If your page is interactive, you need CSR.

Note that we can also do both SSR and CSR which we discuss at
[CSR + SSR](#csr--ssr).

> :information_source:
> The Goldpage documentation often mentions "rendering a page in the browser" or "rendering a page to the DOM"
> which means CSR.

> :information_source:
> **History**
> <br/>
> Gmail and Google Maps were among the first desktop-like web apps and they popularized the practice of manipulating the DOM to implement interactive apps.
> CSR was called *ajax* back then.

!INLINE ./snippets/section-footer.md #readme



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

!INLINE ./snippets/section-footer.md #readme



# Crawlability

With CSR, this is how your page looks like
from the perspective of a crawler:

<p align="center">
<img align="right" src="/docs/assets/screens/csr.png" width=336 style="max-width:100%;"/>
</p>

A crawler sees only bunch of script tags; your page's content is invisible to crawlers.

Anything you render to the DOM is not crawlabe; if you want your pages to be crawled then you have no choice than to use SSR and render your page's content to HTML.

Search engines (Google, Yandex, Baidu, DuckDuckGo, Bing, etc.)
need to be able to crawl your pages to show them in their search results.

> :information_source:
> Google is capable of executing JavaScript and discover content rendered to the DOM.
> But be aware that it has limitations which we discuss at
> [Client-side Rendering (CSR) VS Server-side Rendering (SSR) - Search Engines](/docs/csr-vs-ssr.md#search-engines).

Social sites (Facebook, Twitter, etc.) need to be able to crawl your pages
to show a preview of your pages when someone shares your website.

> :information_source:
> Tools usually require you to use SSR for h.
> Goldpage is different and renders your page's meta data to HTML even when you don't do SSR.
> More at
> [Client-side Rendering (CSR) VS Server-side Rendering (SSR) - Social Sharing](/docs/csr-vs-ssr.md#social-sharing).

!INLINE ./snippets/section-footer.md #readme



# Performance

CSR and SSR have different performance characteristics.

On low-end devices and/or on slow internet connections, such as mobile, the differences are drastic.

We explain the performance differences in detail at
[Client-side Rendering (CSR) VS Server-side Rendering (SSR) - Performance](/docs/csr-vs-ssr.md#performance).

!INLINE ./snippets/section-footer.md #readme



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

One way to to think about is CSR + SSR is that CSR is about make a "frozen" SSR version of the page "live":
1. [SSR] On the server, React renders the initial state of your page to HTML on the server.
At that point your page is "frozen" and in order to
2. [SSR] The browser &mdash; but the page is "frozen" and cannot interact with it.
3. 
4. 
to "revive" your page, React re-renders your page in the browser.
then React re-renders the same initial state to the DOM in the browser
in order to make your app "live"
.
Once it's rendered to the DOM, the page can change.
In the React community, this process of is commonly called *hydration*.
First render to HTML and any subsequent.
HTML is b and the browser takes it from there.


The following page showcases SSR:
- The page is interactive (as you can see in the screencast, the user can modify the state of the counter).
- The page is server-side rendered (as you can see in the screencast, the content of the page is rendered to HTML, such as "brillout/awesome-react-components").

<img align="right" src="/docs/assets/screens/ssr-live-demo.gif" width=336 height=706 style="max-width:100%;"/>

~~~js
!INLINE /examples/basics/pages/repos/repos.page.js
~~~

!INLINE ./snippets/section-footer.md #readme



