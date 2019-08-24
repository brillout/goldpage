# Client-side Rendering (CSR) VS Server-side Rendering (SSR)

> :warning: You do not need to what about CSR and SSR in order to use Goldpage.
> We recommend to start writing a prototype first and to learn about CSR and SSR later.

In a nutshel,
*Client-Side Rendering* (CSR) denotes the practice of rendering an app in the browser (to the DOM),
and *Server-Side Rendering* (SSR) denotes the practice of rendering an app to HTML (on the server).

This document assumes that you know that:
- Interactive views need CSR
- Vews with SSR without CSR can be dynamic but cannot be interactive
- Hydration means SSR + CSR
- `renderToHtml: true` => SSR
- `renderToDom: true` => CSR
- `renderToHtml: true` && `renderToDom` => 

If the above points are not obvious to you,
then take a look at [CSR & SSR Explained]()
before you continue reading.

Usually CSR and SSR is all or nothing:
your entire app is either CSR'd or SSR'd.
Not with Goldpage: you can set CSR and SSR on a page-by-page basis.

By default, your page is CSR'd.
(That is, the default is `renderToDom: true` and `renderToHtml: false`.)
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
- Mobile peformance
  <br/>
  Performance varies most notably on mobile phones.
  In particular, rendering your page to HTML is drastically faster then rendering it to the DOM fow low-end devices.

We now go into the details of each point.
We also explain how to configure `renderToDom`, `renderToHtml`, and `renderHtmlAtBuildTime` for each point.

- [Interactive](#interactive)
- [Development Speed](#development-speed)
- [Search Engines](#search-engines)
- Social Sharing
- Mobile peformance
- Performance




### Interactive

As shown in [CSR & SSR Explained](),
interactive views need to be rendered to the browser's DOM.

If your page has an interactive view (in other words, a stateful component),
then your page needs CSR and
you need to set `renderToDom: true`.

!INLINE ./snippets/section-footer.md #readme



### Development Speed

As shown in [non-interactive first](),
non-interactive views are often much easier and faster to implement than interactive views.

While considering whether to implement a feature with interactie views or not,
keep in mind that a non-interavive page doesn't need CSR.
And rendering your page only to HTML (`renderToDom: false` and `renderToHtml: true`) means:
- Blazing fast page, even on low-end mobile devices.
- Crawlable by search engines and Social Sharing sites.

While deciding how to configure your page's `renderToDom` and `renderToHtml`,
consider that the non-interactive first approach allows you to set `renderToDom: false` which is a good thing.


  Rendering your page to both HTML and the DOM means that your page's code will run in both Node.js and the browser:
  - Your libraries need to be able to run in Node.js.
    <br/>
    Certain libraries expect to be run in the browser and will crash when run in Node.js.
    You can often solve this by lazy loading your library loading it with `require('a-library-that-works-only-in-the-browser')` only after the React/Vue component is mounted. That way the libray is loaded only in the browser.
  - Only the inital state of your React/Vue components are rendered to HTML.
    <br/>
    You'll have to make sure that your content is available.
    But thanks to !VAR|LINK ASYNC_DATA this is often easy to achieve.

!INLINE ./snippets/section-footer.md #readme



### Search Engines

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

!INLINE ./snippets/section-footer.md #readme



## Social Sharing

When someone shares a page on a social site, such as Facebook or Twitter, a preview of the page is shown.

<img align="center" src="https://github.com/reframejs/goldpage/raw/master/docs/social-sharing-preview.png?sanitize=true"/>

Facebook, for example, looks for the following HTML meta tags:
~~~html
<meta property="og:title"              content="When Great Minds Don’t Think Alike" />
<meta property="og:description"        content="How much does culture influence creative thinking?" />
<meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
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

Also note that you can render your meta data at request-time:
~~~js
!INLINE /examples/html/pages/product-data.page.js
~~~

!INLINE ./snippets/section-footer.md #readme



## Performance

Correctly setting the render configs `renderToHtml`, `renderToDom`, `renderHtmlAtBuildTime`
can yield drastic performance improvements.

How to configure the render configs depends on how "static" your page is.

- [Fully static pages](#fully-static-pages)
- [Dynamic pages](#dynamic-pages)
- [Interactive pages](#interactive-pages)


#### Fully static pages

The fastest configuration is:
- `renderToDom: false`
- `renderToHtml: true`
- `renderHtmlAtBuildTime: true`

Your page is pre-rendered to a static `.html` file &mdash;
when a user requests your page then Goldpage simply serves the pre-rendered static `.html` file.
Your page is not rendered in the browser nor on the server.
It is rendered only once at build-time.

This configuration is super fast but your page is fully static:
- Non-interactive
  <br/>
  Your page is not rendered in the browser which means that
  the browser's DOM is static and your page's views will not
  change. In a nutshell: your page's view components cannot be stateful.
- Non-dynamic
  <br/>
  Your page is rendered to HTML at build-time.
  This means that the content of your page
  is generated at build-time;
  to change your page's content you'd have
  to re-build and re-deploy your frontend.
At
[CSR & SSR Explained]()
we further illustrate what
*interactive* and *dynamic* mean with examples and demos.
If you are not sure what dynamic and interactive means,
then take a look
before you continue
reading.


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



## Mobile peformance

The most effective way to achieve high performance on mobile is to remove browser-side JavaScript.

If you care about mobile,
then we recommend to implement as few interactive views as possible.
As explained in [non-interactive first](),
a non-interactive page doesn't need to be rendered to the browser's DOM.
You can then set:
- `renderToHtml: true`
- `renderToDom: false`

Your page is not loaded in the browser and
much less JavaScript
(and potentially no JavaScript at all)
is loaded in the browser.

SSR without CSR is drastically faster on low-end devices.

!INLINE ./snippets/section-footer.md #readme



