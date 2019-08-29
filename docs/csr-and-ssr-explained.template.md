# CSR & SSR Explained

In this document we explain what CSR and SSR are and what you can achieve with them.

> :information_source:
>
> If you already have a good understanding of CSR and SSR then checkout
> [Client-side Rendering (CSR) VS Server-side Rendering (SSR)](/docs/csr-vs-ssr.md)
> instead. There we compare and explain whether you should do CSR, SSR, or both.
>
> If you don't know or if you are not sure what CSR and SSR are, then read on.

- [What is CSR and SSR?]()
- [Interactive vs Non-interactive]()
- [Static vs Dynamic]()
- [Crawlability]()
- [Performance]()

# What is CSR and SSR?

*Client-Side Rendering* (CSR) denotes the practice of rendering a page in the browser (to the DOM),
and *Server-Side Rendering* (SSR) denotes the practice of rendering a page on the server (to HTML).

> :information_source:
> **History**
> <br/>
> In the old days (before React came out in 2013)
> the situation was either or:
> either you used a HTML template engine (you may have heared about some such as "jinja" or "handlebars")
> to render your page to HTML on the server or
> or you'd used a browser library (the most popular back then was called "Backbone" and "EmberJS" and "AngularJS") that would manipulate the DOM and would rednder your view to the DOM.
>
> React was the first tool that was able to do both CSR *and* SSR:
> you define a React component and React is able to render your component to the DOM as well as to HTML.
> you'd use server-side HTML template engine (if you are familiar)

Modern view libraries, such as React or Vue, are able to render pages to the DOM as well as to HTML. With React (or Vue), you can do both: CSR *and* SSR.

> :information_source: **React, Vue, etc.**
> We will talk only about React from now on. But note that everything here is applicable to any view library that supports CSR and SSR, such as Vue.

You can define a page with React, the question arises: should I render my page to HTML or the DOM?

In the example you can the difference between both.

Also you can
The choices are plenty:
- 

This is what CSR and SSR is all about.


You can also use both CSR and SSR and the same,
You even have the choice to render your page twice twice:
first to HTML and then again to the DOM. This may seem wasteful to render a page twice,
but this actually has some benefits we will disuss later.
We explain at [CSR + SSR]().

You can also have mix

> :information_source:
> Having different CSR-SSR configuration on a page-by-page basis is a fairly new technique and is not widespread yet.


# Interactive vs Non-interactive

*non-interactive*

When you render your pages

You cannot have an interactive page with SSR alone.

*interactive*

The reason to of doing
doesn't need a full reload of your page.

If you want your page to be interactive then you'll have to usr CSR.

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

Anything you render to the DOM is invisible to crawlers; if you want your page's content to be crawled then you have no choice than to use SSR to render your page's content to HTML.

Note that Google is capable of executing JavaScript and discover content rendered to the DOM but it has limitations.

We elaborate furhter at
[Client-side Rendering (CSR) VS Server-side Rendering (SSR)](/docs/csr-vs-ssr.md).


# Performance

CSR and SSR have different performance characteristics,
especially on mobile where the differences can be drastic.

We explain the performance differences at
[Client-side Rendering (CSR) VS Server-side Rendering (SSR)](/docs/csr-vs-ssr.md).














interactive view
(a music player, an email app, a graphical editor, a chat app, ...).

If your app is mostly about content
(a blog, a newspaper, a e-commerce shop, ...).

If your app is a mix
(a website with a questionnaire)
then a mixed app












**SSR Example**

The following page showcases SSR:
- The page is interactive (as you can see in the screencast, the user can modify the state of the counter).
- The page is server-side rendered (as you can see in the video, the content of the page is rendered to HTML, such as "brillout/awesome-react-components").

<img align="right" src="https://github.com/reframejs/ssr-coin/raw/master/docs/ssr-coin_example_video.gif" width=336 height=706 style="max-width:100%;"/>

~~~js
!INLINE /examples/basics/pages/repos/repos.page.js
~~~

