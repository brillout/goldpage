# CSR & SSR Explained

CSR is commonly used to build desktop-like interactive apps: a music player, an email app, a graphical editor, a dashboard, a chat app, ...

SSR is commonly used to build websites that are mostly about content: a blog, an online newspaper, a landing page, marketing pages, ...

And CSR + SSR is commonly used to build apps that are about interactions as well as content: a e-commerce shop, a social news site, ...

This document explains CSR, SSR, and the technique of doing both CSR *and* SSR.

> :information_source:
>
> If you already know what CSR, SSR, and CSR+SSR is then checkout
> [Client-side Rendering (CSR) VS Server-side Rendering (SSR)](/docs/csr-vs-ssr.md)
> instead. There we help you decide whether you should do CSR, SSR, or CSR+SSR.
>
> If you don't know (or if you are not sure) what CSR, SSR, and CSR+SSR mean, then read on.

> :warning:
> <br/>
> This document assumes that you know:
> - What the DOM is.
> - That anything you see on a page in the browser is represented by the DOM tree and the DOM manipulation APIs is what allows the page to change; the DOM manipulation API is what allows a page to be interactive.
> - You are somewhat familiar / you have seen the basic DOM manipulation APIs before. (`document.getElementById(id)`, `element.appendChild(aChild)`, `document.createElement(tagName)`, `element.setAttribute(name, value)`, ...)
> - View libraries (React/Vue/...) are essentially helper libraries that call the DOM manipulation APIs for you.
> - HTML is essentially a declarative representation of the initial DOM.
> - HTML is generated on the server-side and the DOM is manipulated on the browser-side.
> If any of the above is not clear to you, then learn about the DOM before reading this document.

This document covers following topics.
This document explains:
- What CSR and SSR means
- What interative means
- What dynamic means
- The benefits of CSR and SSR

- [What is CSR and SSR?]()
- [Interactive vs Non-interactive]()
- [Static vs Dynamic]()
- [Crawlability]()
- [Performance]()

# What is CSR and SSR?

Modern view libraries (React/Vue/...) are able to run in the browser as well as in Node.js.
In the browser your page is rendered to the browser's DOM,
and in Node.js your pages is rendered to HTML.

This means that when you define a page with React (or Vue),
you have the choice between rendering your page to the DOM or to HTML.

> :information_source: **Modern view libraries**
> We will mention only React from now on. But note that everything here is applicable to all modern view libraries that supports CSR and SSR. The most popular being React, Vue, and Angular.

*Server-Side Rendering* (SSR) denotes the practice of rendering a page to HTML on the server.

For example:

EXAMPLE

This page has no `<script>` tags; the HTML is generated in Node.js and no browser-side JavaScript is needed.

*Client-Side Rendering* (CSR) denotes the practice of loading a page and rendering it in the browser.

For example:

EXAMPLE

The page's HTML doesn't contain the page's content but has `<script/>` tags instead; the page's code is loaded and rendered in the browser.

We further illustrate how CSR and SSR work in the following sections.

You can also do both: CSR *and* SSR.
Your page is then rendered twice:
first to HTML in Node.js and then again to the DOM in the browser.
It may seem wasteful to render a page twice but it actually brings many benefetis which we explain at
[CSR + SSR]().

> :information_source:
> **History**
> <br/>
> In the old days (before React came out in 2013)
> tools were doing either SSR or CSR &mdash; they were not able to do both.
> You had only 2 types of tools:
> - HTML template engines
>   that rendered your page to HTML on the server, in other words SSR.
    (You may already have heard about some, such as "Handlebars" and "Jinja".)
> - Browser libraries
>   that rendered interactive views by manipulating the DOM in the browser, in other words CSR.
>   (The most popular were the so-called "Backbone.js" and "Ember.js".)
> React was the first popular tool that was able to do CSR as well as SSR. This means that React can be used for interactive views and can as well be used as an HTML tempate engine.


# Interactive vs Non-interactive

This section shows how CSR works and how it enables a page to be interactive.

For example:

EXAMPLE
 - show HTML
 - show DOM changing

This illustrates how CSR works:
the `<script/>` tags load the page's source code and React's source code,
and whenever the state changes,
React applies the changes by manipulating the DOM.

This is ho

In short, we load `<Time/>` in the browser and render it to the DOM.

> :information_source:
> <br/>
> Our example isn't, strictly speaking, interactive:
> we merely show the current time and the user has no interactions with the page.
> We sill the page interative.
> The page is stateful:
> we use `useState` and the value of `currentTime` changes every second.
> With *interactive* we denote any page that is stateful.

Every interactive view is about DOM 
It's all about DOM manipulations
and we need to 

doesn't need a full reload of your page.

If you want your page to be interactive then you'll have to use CSR.


For example:

As you can see your page changes.


When you render (with is equivalent to say that the view is stateless).
(Stateless is somewhat of a misnomer and a better name would be "one-state")
You can render a stateful view to 
When 
when you think about,
rendering a 



> :information_source:
> **History**
> <br/>
> Gmail and Google Maps where among the first desktop-like web apps and they popularized the practice of using DOM manipulations APIs to implement interactive apps.
> CSR was called *ajax* back then.

**non-interactive**

As shown above,
CSR allows a page to be interactive.

EXAMPLE
  // We don't render the page in the browser.
  // We could however render the page to the browser *as well*,
  // which is a common technique we explain in the section "CSR + SSR".
  renderToDom: false,
 - reload page to show user that state changes only between full page reloads.

As we can see the time is rendered to HTML and the page doesn't load any JavaScript.

with SSR it's allways a full .
A new request.
It would be prohabitively slow;
the page's code and React's code need to be loaded in the browser.

You cannot have an interacive page With SSR alone;

You cannot ha

But you can still have 

But you can have dynamic pages

When React renders a stateful view to HTML it takes the initial state of the view.
On SSR the state mutations.

You can however reload the page -- you'll see that .
The state never changes when doing SSR.



Any subsequent state are irrelevant from a SSR perspective.


SSR

We'd need but the practice is not done.

that said

Without CSR.
When you render your pages only to HTML than your page's DOM will not change and your page is what we call *non-interactive*.

For example, when rendering the same `<Time/>` component to HTML yields

You cannot have an interactive page with HTML/SSR alone; you need the DOM and CSR to implement interative views.


# Static vs dynamic

When you render your page to HTML, you have the choice between rendering your page at request-time or at built-time.

**request-time**

Whenever a user requests a page,
your server (re)-renders the page.

This allows your page's content to change.
For exampe,
you can render data from your database to your page's HTML.
That data from may change over time.

We call such page *dynamic*.

**build-time**

Your page is rendered to HTML at build-time;
that is when you build your app (When youtranspiltion & bundle your JavaScript, minify your assets, etc.)

Your page's HTML can change only at deploy-time;
if you want to change your page's HTML you'll have to re-build and re-deploy your app.

We call such page *static*.

> :information_source:
> Note that a static page can be interactive which we explain at
> [CSR + SSR]()

> :information_source:
> Tools that generate such static websites are called *Static Site Generators (SSG)*.

# Crawlability

Search engines (Google, Yandex, Baidu, DuckDuckGo, Bing, etc.)
need to be able to crawl your pages so that your pages appear in search results,
and social sites (Facebook, Twitter, etc.) need to be able to crawl your pages in order to be able
to show a preview of your pages when someone shares one of your pages.

With CSR, this is how your page looks like
from the perspective of a crawler:

The crawler sees only bunch of script tags; your page's content is invisible to the crawler.

Anything you render to the DOM is not crawlabe; if you want your page's content to be crawled then you have no choice than to use SSR and render your page's content to HTML.

Note that Google is capable of executing JavaScript and discover content rendered to the DOM but it has limitations.

We elaborate furhter at
[Client-side Rendering (CSR) VS Server-side Rendering (SSR)](/docs/csr-vs-ssr.md).


# Performance

CSR and SSR have different performance characteristics,
especially on mobile where the differences can be drastic.

We explain the performance differences at
[Client-side Rendering (CSR) VS Server-side Rendering (SSR)](/docs/csr-vs-ssr.md).



















# CSR + SSR

It may seem wasteful to render your page twice
but this actually has some benefits we will disuss later.



**SSR Example**

The following page showcases SSR:
- The page is interactive (as you can see in the screencast, the user can modify the state of the counter).
- The page is server-side rendered (as you can see in the video, the content of the page is rendered to HTML, such as "brillout/awesome-react-components").

<img align="right" src="https://github.com/reframejs/ssr-coin/raw/master/docs/ssr-coin_example_video.gif" width=336 height=706 style="max-width:100%;"/>

~~~js
!INLINE /examples/basics/pages/repos/repos.page.js
~~~

