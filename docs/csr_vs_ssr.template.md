With React and Vue, not only can you render your pages to the DOM, but you can also render them to HTML.
The question arises: should I render my page to the DOM or to HTML?




If your app is mostly about user inteactions
then this 
(a music player, an email app, a graphical editor, a chat app, ...).

If your app is mostly about content
(a blog, a newspaper, a e-commerce shop, ...).

If your app is a mix
(a website with a questionnaire)
then a mixed app








###### Google Search Results

Google is capable of crawling content that is rendered in the browser

We recommend to build a prototype before digging too much into this section.
You can however, take a quick gaze over it just so you know that we offer you these optimizations.

Social Sharing

Mobile Performance

Configuring these page configs is about achieving improvements in:
- SEO
- SMO
- Performance

If you don't care about 

We recommand to not care about these aspects at first
but to build a prototype instead first.
And once you have your first protype, you can experiment with these three page configs and see what works best for you.

We now discuss how to configure `renderToDom`, `renderToHtml` and `renderHtmlAtBuildTime`.

###### `renderToDom: true` & `renderToHtml: false`

This is the default configuration;
your page is loaded & rendered in the browser only.

Because the page is rendered to the DOM, the page can be interactive.
(We explain why at [Interactive vs Non-interactive]().)

###### `renderToDom: false` & `renderToHtml: true`

If your page is non-interactive, this is the best configuration:
- SEO
  <br/>
  The content of your page is rendered to HTML &mdash; search engines merely have to crawl your page's HTML to get your page's content.
  Your pages will appear to all search engines.
- Performance
  <br/>
  Rendering your page in Node.js is generally faster than rendering it in the browser.
  The difference in speed can be drastic for low-end devices such as mobile phones where
  loading & executing browser-side JavaScript is slow.
  (Your page is already loaded in Node.js whereas in the browser it has to be loaded over the internet.

If your page has interactive views then your page needs to be rendered to the DOM and this configuration is not an option.
(We explain why at [Interactive vs Non-interactive]().)
If you still want the aforementioned SEO and SMO benefits you can your pages to both HTML and the DOM,
see the next section.


###### `renderToDom: true` & `renderToHtml: true`

With this configuration your page is rendered twice:
the page is first rendered to HTML with Node.js and then re-rendered to the DOM in the browser.
(The browser-side re-rendering is commonly called "hydration".)

This practice is known as SSR (Server-Side Rendering).

The main motivation of doing SSR is to make your page's content available to search engines and social sharing sites.

Also, SSR faster time-to-first-print (but slower time-to-first-interaction)

Also, the page and its `initialProps` have to be loaded

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







If you don't need the Node.js server beyond serving your browser-side code then your app is essentially
just a collection of static assets for the browser.
Your app is then what is commonly called a "static website".

