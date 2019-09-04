!INLINE ./snippets/header.md

# Goldpage VS Others

> :warning:
>
> You can use Goldpage and create a prototype without reading this document.
>
> This document is meant for readers
> that roughly know what the different app types, such as "SPA" and "SSR", are about.
> and that want to make an educated choice of whether to use Goldpage.

This document explains what differentiates Goldpage from other tools.

- [App Types](#app-types)
- [Simple Design](#simple-design)
- [Flexible & Rock-solid](#flexible--rock-solid)
- [New App Types](#new-app-types)

### App Types

The biggest problem of our current tools is that they support only one app type.
For example for React:
<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp;
create-react-app creates a so-called "SPA"
<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp;
Next.js creates a so-called "SSR app"
<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp;
Gatsby creates a so-called "static website"
<br/>

By choosing one of these tools you are essentially choosing an app type and locking yourself into that app type.
This means that before choosing one of these tools you have to:
- Learn about "SPA", "SSR", "static website", and all other app types.
- Know exactly the differences between them.
- Decide which app type is the right one for the future of your app.
And you have to do all this before even having started writing one line of code.

Even worse is that,
most often than not,
it's not possible to predict which app type
is the right one
before having created and battle-tested a first prototype.

Goldpage solves this problem:
it supports all app types and makes switching from one app type to another easy &mdash;
you can start writing a prototype and worry about app type later.

We actually encourage you to start with Goldpage's default app type and,
only once you finished your first prototype,
to try out and experiment different app types on your prototye
and see what works best for you.

With Goldpage,
you can start writing your app without even knowing
what "SPA" or "SSR" mean.

In the next section below we show
how Goldpages allows you to create any app type.

!INLINE ./snippets/section-footer.md #readme



### Simple Design

Goldpage is designed to have an interface that is simple and powerful.

For example,
what allows to achieve any app type are three page configs:
- `renderToDom` - If set to true, your page is rendered in the browser (to the DOM).
- `renderToHtml` - If set to true, your page is rendered to HTML (in Node.js).
- `renderHtmlAtBuildTime` - Whether your page is rendered to HTML at request-time or at build-time.

If you set `renderToDom: true` and `renderToHtml: false` to all your pages then you get an SPA.
And if you set `renderToHtml: true` to a page then SSR to that page. Etc.

Ironically,
understanding these three page configs is actually simpler than understanding all these different terms "SPA", "MPA", "SSR", "static website", etc. This means that our `renderToDom`, `renderToHtml`, and `renderHtmlAtBuildTime` interface is simple. And because it allows you to create any app type it is also a powerful. This is example of an interface that is simple and powerful.

Another example
is that we allow you to define the `htmlRender` and `domRender` functions where:
- `htmlRender` renders a page to HTML
- `domRender` renders a page to the DOM
Allowing you to define these 2 render functions gives you full control over how your pages are rendered
and full freedom to use Goldpage with any view library
(React, Vue, RNW, Preact, ...) and any other tool
(Redux, React Router, ...).

Our `htmlRender` and `domRender` interface is simple and powerful.

!INLINE ./snippets/section-footer.md #readme



### Flexible & Rock-solid

Our simple design makes
Goldpage's codebase small, easy to understand, and rock-solid.

For example,
the `htmlRender` and `domRender` functions we have seen in the previous section
allow you to easily integrate Goldpage with other tools (Redux, React Router, etc.) which
is crucial for the life of a Goldpage maintainers;
other tool (Next.js, Gatsby, ...) maintainers suffer from the problem that they integrate poorly leading to an explosion of GitHub issues and required maintenance work to answer users and write ad-hoc patchs.

The same goes for Goldpage's internal APIs.
For example, our core is agnostic to the web app bundler we use;
we currently use Webpack but we will migrate to Parcel v2 once it's released.
(Parcel v2 will bring numerous benefits over Webpack.)

Goldpage is about 10k lines of code
which is tiny compared to other tools.

Ultimately, our simple design decreases our developing work by up to an order of magnitude &mdash;
the work of one maintainer can be as effective as the work of up to 10 maintainers.

!INLINE ./snippets/section-footer.md #readme



### New App Types

As we showed in
[Simple Design](#simple-design)
the page configs `renderToDom`, `renderToHtml`, and `renderHtmlAtBuildTime`
allow you to create any app type.
Not only do these page configs enable you to create all common app types but it also enable new app types.

For example,
by setting `renderToDom: false` you remove browser-side JavaScript code from a page.
If a page is non-interactive, then
rendering it to HTML makes the page blazing fast (even on mobile) and SEO-friendly.

Also you can configure on page-by-page basis which is a novelty as well;
parts of your app can be an SPA while other parts of your app can be rendered to HTML only.

Most notably we introduce a new app type we call *Backend First App* where
most pages are rendered only to HTML and where only a couple of interactive pages are rendered to the DOM.
The idea here is to implement features with non-interactive pages whenever possible;
interactive views are substantially more time consuming to implement than non-interative views.
More at [Backend First App](/docs/bfa.md).

!INLINE ./snippets/section-footer.md #readme



