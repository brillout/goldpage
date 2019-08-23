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




### Search Engines

Google is capable of crawling content that is rendered in the browser



## Social Sharing





## Performance

The best performance is achieved by setting:
- `renderToDom: false`
- `renderToHtml: true`
- `renderHtmlAtBuildTime: true`

This means that your page is rendered to HTML at build-time.
But this is not an option for interactive or dynamic pages.
(We explain what *interactive* and *dynamic* mean at
[CSR & SSR Explained]().)

If your page is non-interactive but needs to be dynamic, then set:
- `renderToDom: false`
- `renderToHtml: true`
- `renderHtmlAtBuildTime: false`

This configuration is still blazing fast.

For interactive pages you have two options:
- CSR-only (that is `renderToDom: true` and `renderToHtml: false`), or
- CSR+SSR (that is `renderToDom: true` and `renderToHtml: true`).

From a time-to-print perspective
(that is the time it takes for your user to first see content on your page),
CSR+SSR is more performant;
Rendering your page to HTML on the server is faster than the intial rendering of your page to the browser's DOM.
(The browser needs to load your page whereas the page is already loaded in the server.
Data is often fetched faster on the server than in the browser.
And HTML rendering is less complex (therefore faster) than DOM rendering;
DOM rendering you maintain some sort of virtual DOM (or somekind of tree) for
future DOM mutations whereas HMTL rendering

From a time-to-interactive perspective
(that is the time it takes for your user to first be able to interact with your page),
CSR-only is more performant;
the user can interact with your page only after your page is rendered to the browser's DOM,
and any prior HTML rendering is superfluous.
(Even though DOM hydrating is faster than an intial DOM render on a blank page &mdash;
the performance gains of hydration are marginal in comparison to the loss of time of initally redering your page to HTML.)


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

The advantages:
- SEO
  
- Social Sharing
- Faster time-to-print

The disadvantages:
- Slower time-to-interactive
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






###### `renderToDom: true` & `renderToHtml: true`

The idea here is to render your page's content to HTML for gains in SEO, social sharing, and performance.
The page is then re-rendered to the DOM to be able to have stateful React/Vue components and thus interactive views.

You can enable SSR for a page by setting both `renderToHtml: true` and `renderToDom: true`.
We elaborate further and explain when to SSR at !VAR-LINK RENDER_WHEN.








