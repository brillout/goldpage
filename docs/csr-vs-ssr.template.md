# Client-side Rendering (CSR) VS Server-side Rendering (SSR)

> :warning:
> You do not need to know what CSR and SSR is and
> you do not need to read this document in order to use Goldpage.
> And we recommend that you start writing a prototype first and learn about CSR and SSR later.

> :warning:
> This document assumes that you are familiar with CSR,
> SSR,
> `renderToDom`,
> `renderToHtml`,
> `renderHtmlAtBuildTime`,
> the difference between an interative page and a non-interactive page,
> and the difference between a dynamic page and a static page.
> At [CSR & SSR Explained](/docs/csr-and-ssr-explained.md)
> we illustrate all of this with examples and demos.
> We recommend that you have a look at it before continuing reading.

In a nutshell,
*Client-Side Rendering* (CSR) denotes the practice of rendering an app in the browser (to the DOM),
and *Server-Side Rendering* (SSR) denotes the practice of rendering an app to HTML (on the server).

Usually CSR and SSR are all-or-nothing:
your entire app is either entirely CSR'd or SSR'd.
Not with Goldpage: you can set CSR and SSR on a page-by-page basis.

By default, your page is CSR'd;
The default page config is `renderToDom: true` and `renderToHtml: false`.
By setting the page config `renerToDom: false` you remove CSR,
and by setting `renderToHtml: true` you add SSR.

Whether you want CSR and/or SSR for a page, depends on the following points.
- Interactive
  <br/>
  Whether your page has interactive views (a like button, a video player, a to-do list, ...).
- Development Speed
  <br/>
  Prefering to implement non-interactive views over interactive views allows you to remove CSR.
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
  Performance varies most notably on mobile phones.
  In particular, rendering your page to HTML is drastically faster then rendering it to the DOM fow low-end devices.

We now go into the details of each point.
We also explain how to configure `renderToDom`, `renderToHtml`, and `renderHtmlAtBuildTime` for each point.

- [Interactive](#interactive)
- [Development Speed](#development-speed)
- [Search Engines](#search-engines)
- [Social Sharing](#social-sharing)
- [Performance](#performance)
- [Mobile Performance](#mobile-performance)



### Interactive

If your page has an interactive view,
then your page needs CSR and
you need to set `renderToDom: true`.

> :information_source:
> At [CSR & SSR Explained](/docs/csr-and-ssr-explained.md)
> we illustrate with demos why interactive views need to be rendered to the browser's DOM.

!INLINE ./snippets/section-footer.md #readme



### Development Speed

As shown in [non-interactive first](),
non-interactive views are often much easier and faster to implement than interactive views.

**Non-interactive**

While considering whether to implement a feature with interactie views or not,
keep in mind that a non-interavive page doesn't need CSR.
And rendering your page only to HTML (`renderToDom: false` and `renderToHtml: true`) means:
- Blazing fast page, even on low-end mobile devices.
- Crawlable by search engines and Social Sharing sites.

While deciding how to configure your page's `renderToDom` and `renderToHtml`,
consider that the non-interactive first approach allows you to set `renderToDom: false` which is a good thing.

**SSR+CSR**

Rendering pages to HTML as well as to the DOM may slow down your development speed.
- Wrapping your head around SSR+CSR can take some time.
- Some tools will require a slightly more complicated setup. (Such as React Router or Redux.)
- The libraries you use need to be able to run in Node.js. But that's not too much of a problem; most libraries support SSR.

    Certain libraries expect to be run in the browser and will crash when run in Node.js.
    You can often solve this by lazy loading your library loading it with `require('a-library-that-works-only-in-the-browser')` only after the React/Vue component is mounted. That way the libray is loaded only in the browser.
- Many view tools, such as React Router or Redux, often require a slightly more complicated setup.
  - Only the inital state of your React/Vue components are rendered to HTML.
    <br/>
    You'll have to make sure that your content is available.
    But thanks to !VAR|LINK ASYNC_DATA this is often easy to achieve.

!INLINE ./snippets/section-footer.md #readme



### Search Engines

**Search Engines**

Other than Google,
if you want your page's content to be crawled by all search engines (Bing, Baidu, Yandex, DuckDuckGo, etc.)
then you need to render your page's content to HTML.
The practice of rendering a page to HTML is what is commonly called *SSR*.
With Goldpage you add SSR to a page by settings `renderToHtml: true` to its page config.

**Google**

Goolge's capability to execute your pages' JavaScript and to crawl your page's DOM has limitations:
- Delayed indexing
  <br/>
  The Google crawler first crawls your page without executing JavaScript
  and re-crawls your page after [~1 week](https://twitter.com/Paul_Kinlan/status/1039852756113080320)
  with executing JavaScript.
  This means that content accessible only over the DOM appears later than content
  accessible over your page's HTML.
  In contrast,
  and for popular sites,
  Google manages to track HTML changes almost instantly.

**SSR+CSR**

If your page is interactive,
you can both set `renderToDom: true` and `renderToHtml: true` and your page will be rendered twice:
it is first rendered to HTML on the server and then re-rendered to the DOM in the browser.
(FYI, the practice of re-rendering the page in the browser is called *hydrating*.)
That way you can have both: a page that is interactive with its content rendered to HTML.

**SSR+CSR or not?**

If your page is non-interactive, then doing SSR only is a no-brainer and the way to go.

But for interactive pages,
whether you should do SSR+CSR is not always clear.

A SSR+CSR setup can slower your developing speed
and impacts (positively and negatively) the performance of your page.

> :information_source:
> We elaborate how SSR can slower your developing speed
> at [Development Speed](#development-speed) and we elaborate on
> how SSR impacts the performance of your page at
> [Performance](#performance).

Before deciding whether you want to do SSR+CSR,
we recommend that you try it out first.

You can experiment SSR+CSR by doing it with only one of your pages
and see if it works out for you.
If it does,
then you can set SSR+CSR to all your pages.

!INLINE ./snippets/section-footer.md #readme



## Social Sharing

> :information_source:
> A particularity of Goldpage is that you can do SMO without SSR.

When someone shares a page on a social site, such as Facebook or Twitter, a preview of the page is shown.

<img align="center" src="https://github.com/reframejs/goldpage/raw/master/docs/social-sharing-preview.png?sanitize=true"/>

Facebook, for example, looks for the following HTML meta tags:
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
  // not rendering the page's view to HTML.
  renderToHtml: false,
  renderToDom: true,
};
~~~

You can also render your meta data at request-time:
~~~js
!INLINE /examples/html/pages/product-data.page.js
~~~

This means that Goldpage allows you to render the social sharing HTML meta tags
without rendering your page to HTML.

In a nutshell: you can do SMO (Social media optimization) without SSR.

!INLINE ./snippets/section-footer.md #readme



## Performance

Correctly setting the render configs `renderToHtml`, `renderToDom`, `renderHtmlAtBuildTime`
can yield drastic performance improvements.

How to configure the render configs depends on how "static" your page is.

#### Non-interactive static pages

The fastest configuration is:
- `renderToDom: false`
- `renderToHtml: true`
- `renderHtmlAtBuildTime: true`

Your page is pre-rendered to a static `.html` file &mdash;
when a user requests your page then Goldpage simply serves the pre-rendered static `.html` file.
Your page is not rendered in the browser nor on the server.
It is rendered only once at build-time.

This configuration is super fast but works only for a non-interactive and static page:
- Non-interactive
  <br/>
  Your page is not rendered in the browser which means that
  the browser's DOM is static and your page's components cannot be stateful.
- Static
  <br/>
  Your page is rendered to HTML at build-time.
  This means that the content of your page
  is generated at build-time;
  to change your page's content you'd have
  to re-build and re-deploy your frontend.

> :information_source:
> We illustrate what
> *non-interactive* and *static* mean at
> [CSR & SSR Explained](/docs/csr-and-ssr-explained.md).

#### Dynamic pages

If your page needs to be dynamic, then set:
- `renderToDom: false`
- `renderToHtml: true`
- `renderHtmlAtBuildTime: false`
Your page is rendered to HTML at request-time;
whenever a user requests yours page,
Goldpage (re-)renders your page to HTML.
This allows your page's content to change.
For exampe,
you can render data from your database to your page's HTML.

An can also have dynamic page by setting:
- `renderToDom: false`
- `renderToHtml: true`
- `renderHtmlAtBuildTime: false`
But this configuration is less performant.
Rendering a page to HTML is faster than rendering it to the DOM:
- Loading a page in the browser is substantially slower than loading the page on the server.
- Data is usually fetched faster on the server than in the browser.
  (Especially if the data you fetch is on your server's database and
  if you your user has a slow internet connection.)
- DOM rendering itself is fundamentally more complex and slower than HTML rendering;
  DOM rendering needs to maintain a tree representing the current state of the DOM to be able
  to efficiently translate future view state changes to DOM mutations.
  (FYI, this tree is often called *virtual DOM*.)


#### Interactive pages

If your page is interactive,
then your page needs to be rendered to the browser's DOM.
You then have the option to additionally render it to the HTML.
That leaves us with two options:
- CSR-only (that is `renderToDom: true` and `renderToHtml: false`), or
- CSR+SSR (that is `renderToDom: true` and `renderToHtml: true`).

From a time-to-print perspective,
CSR+SSR is more performant.
(That is the time it takes for your user to first see content on your page.)

Rendering your page to HTML on the server is faster than intially rendering your page to the browser's DOM.
Your user will be able to quickly see your page's content before
the browser loaded/exectuded any JavaScript.
This is most notable on mobile devices where browser-side JavaScript is slow.

From a time-to-interactive perspective,
CSR-only is more performant.
(That is the time it takes for your user to first be able to interact with your page.)

Before the user can have his first interaction with your page, you page needs to be loaded and rendered to the browser's DOM.
From a time-to-interactive perspective, any prior HTML rendering is superfluous and just slows down the initial HTML download.

(Note that DOM hydrating is faster than a DOM render on a blank page
but the performance gains of hydration are marginal in comparison to the loss of time of initally redering your page to HTML.)

!INLINE ./snippets/section-footer.md #readme



## Mobile Performance

The most effective way to achieve high performance on mobile is to remove browser-side JavaScript.

If you care about mobile,
then we recommend that you implement as few interactive views as possible.

A non-interactive page doesn't need to be rendered to the browser's DOM and you can set:
- `renderToHtml: true`
- `renderToDom: false`

> :information_source:
> At [CSR & SSR Explained](/docs/csr-and-ssr-explained.md)
> we illustrate with demos why a non-interactive page doesn't need to be rendered in the browser.

When setting `renderToDom: true`,
your page is not loaded in the browser.
This means that (almost) no JavaScript
is loaded in the browser.

Removing browser-side JavaScript drastically improves mobile performance &mdash;
browser-side JavaScript is a performance killer on low-end devices.

!INLINE ./snippets/section-footer.md #readme



