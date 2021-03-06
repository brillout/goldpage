!INLINE ./snippets/header.md
<br/>

# Client-side Rendering (CSR) VS Server-side Rendering (SSR)

> :information_source:
> You do not need to know what CSR and SSR is and
> you do not need to read this document in order to use Goldpage.
> We recommend that you start writing a prototype first and learn about CSR and SSR later.

> :warning: **Prerequisite Knowledge**
> <br/>
> This document assumes that you are familiar with CSR,
> SSR,
> `renderToDom`,
> `renderToHtml`,
> `renderHtmlAtBuildTime`,
> the difference between an interactive page and a non-interactive page,
> and the difference between a dynamic page and a static page.
> We explain and illustrate all this
> at [CSR & SSR Explained](/docs/csr-and-ssr-explained.md#readme).

Whether you want CSR and/or SSR for a page, depends on the following.
- Interactive
  <br/>
  Whether your page has interactive views (a like button, a video player, a to-do list, ...).
- Search Engines
  <br/>
  Other than Google,
  all search engines need your page to be rendered to HTML to be able to crawl it.
  And Goolge's capability to execute your pages' JavaScript and to crawl your page's DOM has limitations.
- Social Sharing
  <br/>
  When your page is shared on a social site (Facebook, Twitter, ...) then a little preview (title, description, and image) of your page is shown.
  To have a correct preview the meta data of your page needs to be rendered to HTML.
- Performance
  <br/>
  Your page's performance can vastly differ depending on whether your page is rendered to the DOM and/or to HTML.
- Mobile Performance
  <br/>
  Performance varies most notably on mobile.
  On low-end devices and/or on slow internet connections,
  rendering your page to HTML is drastically faster then rendering it to the DOM.

We now go into the details of each point.
We also explain how to configure `renderToDom`, `renderToHtml`, and `renderHtmlAtBuildTime` for each point.

- [Interactive](#interactive)
- [Search Engines](#search-engines)
- [Social Sharing](#social-sharing)
- [Performance](#performance)
- [Mobile Performance](#mobile-performance)



### Interactive

If your page has an interactive view,
then your page needs CSR and
you need to set `renderToDom: true`.

> :information_source:
> At [CSR & SSR Explained](/docs/csr-and-ssr-explained.md#readme)
> we explain and illustrate why interactive views need to be rendered to the browser's DOM.

!INLINE ./snippets/section-footer.md #readme



### Search Engines

**Search Engines**

Other than Google,
if you want your page's content to be crawled by search engines (Bing, Baidu, Yandex, DuckDuckGo, etc.)
then you need to render your page's content to HTML.
The practice of rendering a page to HTML is what is commonly called *SSR*.
With Goldpage you add SSR to a page by settings `renderToHtml: true` to its page config.

**Google**

Google crawls your page twice:
- First without executing your page's JavaScript; Goolgle only sees content rendered to HTML.
- After [~1 week](https://twitter.com/Paul_Kinlan/status/1039852756113080320) Google re-crawls your page but this time it executes JavaScript and is able to see content rendered to the DOM.

Crawling the DOM of all your pages
can take Google [as low as a couple of days and as high as multiple weeks](https://www.reddit.com/r/reactjs/comments/d2hoge/how_difficult_is_it_to_port_an_app_to_ssr/ezvwzjn/).

In contrast,
Google manages to track HTML changes almost instantly for popular sites.

**SSR + CSR**

If your page is interactive,
you can set both `renderToDom: true` and `renderToHtml: true` for having a crawlable interactive page.

!INLINE ./snippets/section-footer.md #readme



## Social Sharing

When someone shares a page on a social site, such as Facebook or Twitter, a preview of the page is shown.

For example on Facebook:

<p align="center">
  <img width=400 src="/docs/assets/social-sharing-preview.png" style="max-width:100%;"/>
</p>

To be able to show a correct preview of the page,
Facebook crawls the page's HTML and looks for the following meta tags:
~~~html
<meta property="og:title"       content="When Great Minds Don’t Think Alike" />
<meta property="og:description" content="How much does culture influence creative thinking?" />
<meta property="og:image"       content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
~~~

You can define these meta tags by using your page's config:
~~~js
// Page config
export default {
  head: [
    '<meta property="og:title"              content="When Great Minds Don’t Think Alike" />',
    '<meta property="og:description"        content="How much does culture influence creative thinking?" />',
    '<meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />',
  ],
  route: '2015/02/19/arts/international/when-great-minds-dont-think-alike',
  view: () => (
    <div>
      <h1>When Great Minds Don’t Think Alike<h1/>
      <div>
        Content here.
      </div>
    </div>
  ),

  // Contrary to most SSR tools out there,
  // you can render your page's HTML meta data while
  // not rendering your page's view to HTML.
  // This means that Goldpage allows you to render the social sharing HTML meta tags.
  renderToHtml: false,
  renderToDom: true,
};
~~~

You can also render your page's meta data at request-time:
~~~js
!INLINE /examples/html/pages/product-data.page.js
~~~

> :information_source:
> Note that a particularity of Goldpage is that you can do SMO without SSR.

!INLINE ./snippets/section-footer.md #readme



## Performance

Correctly setting the render configs `renderToHtml`, `renderToDom`, `renderHtmlAtBuildTime`
can yield drastic performance improvements.

How to configure the render configs depends on whether your pages is static and and whther it is interactive.

#### Non-interactive static page

The fastest configuration for a non-interactive static page is:
- `renderToDom: false`
- `renderToHtml: true`
- `renderHtmlAtBuildTime: true`

Your page is pre-rendered to a static `.html` file &mdash;
when a user requests your page then Goldpage simply serves the pre-rendered static `.html` file.
Your page is not rendered in the browser nor on the server.
It is rendered only once at build-time.

This configuration is super fast but works only for a non-interactive and static page.

> :information_source:
> We illustrate what
> *non-interactive* and *static* mean at
> [CSR & SSR Explained](/docs/csr-and-ssr-explained.md#readme).

#### Dynamic pages

If your page needs to be dynamic, then set:
- `renderToDom: false`
- `renderToHtml: true`
- `renderHtmlAtBuildTime: false`
Your page is then rendered to HTML at request-time;
your page is (re-)rendered to HTML
whenever a user requests your page.
This allows your page's content to change,
for example
to render data from your database to HTML.

You could also have a dynamic page by setting:
- `renderToDom: false`
- `renderToHtml: true`
- `renderHtmlAtBuildTime: false`
But this configuration is less performant.
Rendering a page to HTML is usually considerably faster than rendering it to the DOM:
- Loading a page in the browser is substantially slower than loading the page on the server.
- Data is usually fetched faster on the server than in the browser.
  (For example when the data you fetch is on your server's database or
  when you your user has a slow internet connection.)
- DOM rendering itself is fundamentally more complex and slower than HTML rendering;
  DOM rendering needs to maintain a tree representing the current state of the DOM to
  efficiently translate state changes to DOM mutations.
  (FYI, this tree is often called *virtual DOM*.)


#### Interactive pages

If your page is interactive,
then your page needs to be rendered to the browser's DOM.
That leaves us with two options:
- CSR-only (that is `renderToDom: true` and `renderToHtml: false`), or
- CSR + SSR (that is `renderToDom: true` and `renderToHtml: true`).

From a time-to-print perspective,
CSR+SSR is more performant.
(That is the time it takes for your user to first see content on your page.)
Rendering your page to HTML on the server is faster than the initial render of your page to the browser's DOM.
Your user will be able to see your page's content rendered to HTML before
the browser has loaded any JavaScript.
This is most notable on mobile devices where browser-side JavaScript is slow.

From a time-to-interactive perspective,
CSR-only is more performant.
(That is the time it takes for your user to first be able to interact with your page.)
Before the user can have his first interaction with your page, you page needs to be loaded and rendered to the browser's DOM.
From a time-to-interactive perspective, any prior HTML rendering is superfluous and just slows down the initial DOM render.

!INLINE ./snippets/section-footer.md #readme



## Mobile Performance

The most effective way to achieve high performance on mobile is to remove browser-side JavaScript.

Removing browser-side JavaScript drastically improves performance &mdash;
browser-side JavaScript is a performance killer on low-end devices.

If you care about mobile,
then we recommend that you implement as few interactive views as possible.

A non-interactive page doesn't need to be rendered to the browser's DOM and you can set:
- `renderToHtml: true`
- `renderToDom: false`

> :information_source:
> At [CSR & SSR Explained](/docs/csr-and-ssr-explained.md)
> we illustrate why a non-interactive page doesn't need to be rendered in the browser.

When setting `renderToDom: true`,
your page is not loaded in the browser.
This means that (almost) no JavaScript
is loaded in the browser.

!INLINE ./snippets/section-footer.md #readme



