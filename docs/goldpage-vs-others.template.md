!INLINE ./snippets/header.md
<br/>

# Goldpage VS Others

> :information_source:
> You can use Goldpage without reading this document.

This document explains what makes Goldpage different.

> :warning: **Prerequisite Knowledge**
> <br/>
> For this document you need to know:
> <br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp;
> Roughly what CSR and SSR are about
> <br/>
> You can learn this
> at [CSR & SSR Explained](/docs/csr-and-ssr-explained.md#readme).

- [All App Types](#all-app-types)
- [Simple Design](#simple-design)
- [Flexible & Rock-solid](#flexible--rock-solid)
- [New App Types](#new-app-types)

### All App Types

The biggest problem of our current tools is that they support only one app type.
For example for React:
<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp;
create-react-app creates a so-called "SPA"
<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp;
Next.js creates a so-called "SSR app"
<br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp;
Gatsby creates a so-called "Static Website"
<br/>

By choosing one of these tools you are essentially choosing an app type and locking yourself into that app type.
This means that before choosing one of these tools you have to:
 - Learn about "SPA", "SSR" and "Static Website".
 - Know the differences between them.
 - Decide which app type is the right one for the future of your app.
And you have to do all this before even having started writing one line of code.

And,
most often than not,
it's not possible to predict which app type
is the right one
before having created and battle-tested a first prototype.

Goldpage solves this problem:
it supports all app types and makes it easy to switch from one app type to another &mdash;
you can start writing a prototype and worry about app type later.

We actually encourage you to start with Goldpage's default app type and,
once you finished your first prototype,
to try out and experiment different app types on your prototye
and see what works best for you.

We believe you shouldn't have to know what "SPA" or "SSR" means before getting started;
with Goldpage,
you start creating a prototype and worry about all that later.

!INLINE ./snippets/section-footer.md #readme



### Simple Design

Goldpage has a simple and powerful interface.

For example:
- `renderToDom` - If set to true, your page is rendered in the browser (to the DOM).
- `renderToHtml` - If set to true, your page is rendered to HTML (in Node.js).
- `renderHtmlAtBuildTime` - Whether your page is rendered to HTML at request-time or at build-time.
These three page configs allow you achieve any app type.
If you set `renderToDom: true` and `renderToHtml: false` then your page is an SPA,
if you set `renderToHtml: true` you add SSR to your page,
etc.
In short,
the `renderToDom`, `renderToHtml`, and `renderHtmlAtBuildTime`
interface is powerful and gives you the possibility achieve any app type.

And reasoning in terms of `renderToDom`, `renderToHtml`, and `renderHtmlAtBuildTime` will eventually feel more natural than reasoning in terms of
"SPA", "MPA", "SSR", "static website", etc.
Not only is the
`renderToDom`, `renderToHtml`, and `renderHtmlAtBuildTime`
interface
powerful but it is also simple.

Another example
is our `htmlRender` and `domRender` interface:
- `htmlRender` renders your pages to HTML.
- `domRender` renders your pages to the DOM.
By defining these two functions you gain full control over how your pages are rendered.
This allows you to use Goldpage with any view library
(React, Vue, RNW, Preact, ...) and any tool (Redux, React Router, ...).
Here again, our interface is simple and powerful.

!INLINE ./snippets/section-footer.md #readme



### Flexible & Rock-solid

Not only does our design makes
Goldpage easy to use
a stable and stable contract between you (Goldpage users) and us (Goldand maintainers),
this also makes Goldpage's rock-solid. Because a stable interface

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

As shown in
[Simple Design](#simple-design)
the page configs `renderToDom`, `renderToHtml`, and `renderHtmlAtBuildTime`
allow you to achieve all common app types.
In addition to commonly used app types,
you can achieve entirely new app types that are not supported by any other tool other than Goldpage.

For example,
by setting `renderToHtml: true` and `renderToDom: false` you remove browser-side JavaScript code from a page.
That way you can have non-interactive pages that are
blazing fast (even on mobile) and SEO-friendly.

Our page-by-page basis configuration is a novelty as well as it allows you to mix:
one of your pages can be an SPA while another one uses SSR.
We call such app a *Mixed App*.

One such mixed app is what we call a *Backend First App* where
most pages are non-interactive and rendered only to HTML,
and where only a couple of pages are interactive and rendered to the DOM.
The idea of a BFA is to implement features with non-interactive pages whenever possible;
non-interactive views are substantially faster to implement than interative views.
More at [Backend First App](/docs/bfa.md#readme).

!INLINE ./snippets/section-footer.md #readme



