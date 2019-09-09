<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/goldpage-vs-others.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/goldpage-vs-others.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/goldpage-vs-others.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/goldpage-vs-others.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/goldpage-vs-others.template.md` and run `npm run docs` (or `yarn docs`).






-->
<p align="center">
  <a href="/../../#readme">
    <img align="center" src="/docs/assets/logo-with-text.svg" height=96 style="max-width:100%;" alt="Goldpage"/>
  </a>
</p>
<br/>

# Goldpage VS Others

> :information_source:
> You can use Goldpage without reading this document.

This document explains what makes Goldpage different.

> :warning: **Prerequisite Knowledge**
> <br/>
> For this document you need to know:
> <br/> &nbsp;&nbsp;&nbsp;&#8226;&nbsp;
> Rough understanding of what SPA and SSR are about
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

Even worse is that,
most often than not,
it's not possible to predict which app type
is the right one
before having created and battle-tested a first prototype.

Goldpage solves this problem:
it supports all app types and makes it easy to switch from one app type to another &mdash;
you can start writing a prototype and worry about choosing the right app type later.

With Goldpage, you can start with our default app type and,
while you implement your first prototype,
you can try out and experiment different app types.
This allows you to progressively figure out what app type is the right one for you.

We believe you shouldn't have to know what "SPA" or "SSR" means before getting started;
with Goldpage,
you start creating a prototype and worry about all that later.

In the next section
we explain how Goldpage supports all app types.


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



### Simple Design

Goldpage has a simple and powerful interface.

For example:
- `renderToDom` - If set to true, your page is rendered in the browser (to the DOM).
- `renderToHtml` - If set to true, your page is rendered to HTML (in Node.js).
- `renderHtmlAtBuildTime` - Whether your page is rendered to HTML at request-time or at build-time.

These three page configs allow you achieve any app type:
if you set `renderToDom: true` and `renderToHtml: false` then your page is an SPA,
if you set `renderToHtml: true` you add SSR to your page,
etc.
In short,
the `renderToDom`/`renderToHtml`/`renderHtmlAtBuildTime`
interface is powerful.

Reasoning in terms of `renderToDom`, `renderToHtml`, and `renderHtmlAtBuildTime` will eventually feel more natural and easier than reasoning in terms of
"SPA", "MPA", "SSR", "static website", etc.
So, not only is the
`renderToDom`/`renderToHtml`/`renderHtmlAtBuildTime`
interface
powerful but it is also simple.

Another example
is our `htmlRender`/`domRender` interface:
- `htmlRender` renders your pages to HTML.
- `domRender` renders your pages to the DOM.

By defining these two functions you gain full control over how your pages are rendered.
This allows you to use Goldpage with any view library
(React, Vue, RNW, Preact, ...) and any tool (Redux, React Router, ...).
Here again, our interface is simple and powerful.

These two examples are just the tip of the iceberg.
We believe that a simple design is key to ambitious (and easily maintainable) projects.
We elaborate more in the next section.


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



### Flexible & Rock-solid

Not only does our design make
Goldpage simple and powerful
but it also makes the life of the Goldpage maintainers much easier.

For example,
our `htmlRender`/`domRender` interface (seen in the previous section)
allows you to easily integrate Goldpage with the ecosystem (Redux, React Router, etc.).
In contrast, others (Next.js, Gatsby, ...) integrate poorly with the ecosystem.
This means that their users open a GitHub ticket every time
they fail to integrate with the ecosystem leading to an explosion of GitHub tickets.
This is hell for maintainers: they have to answer all these tickets and constantly ad-hoc patch a broken design.

The same goes for Goldpage's internal APIs.
For example, our core is agnostic to the bundler;
we currently use Webpack but we will migrate to Parcel v2 once it's released.
(Parcel v2 will bring numerous benefits.)

Goldpage is about 10k lines of code
which is very little compared to others.
This is thanks to our great care to design.

Ultimately, our simple design decreases our developing work by up to an order of magnitude &mdash;
the work of one maintainer can be as effective as the work of up to 10 maintainers.


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>



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
non-interactive views are substantially faster to implement than interactive views.
More at [Backend First App](/docs/bfa.md#readme).


<br/>

<p align="center">

<sup>
<a href="https://github.com/reframejs/goldpage/issues/new">Open a ticket</a> or
<a href="https://discord.gg/kqXf65G">chat with us</a>
if you have questions, feature requests, or if you just want to talk to us.
</sup>

<sup>
We enjoy talking with our users :-).
</sup>

<br/>

<sup>
<a href="#readme"><b>&#8679;</b> <b>TOP</b> <b>&#8679;</b></a>
</sup>

</p>

<br/>
<br/>




<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/goldpage-vs-others.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/goldpage-vs-others.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/goldpage-vs-others.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/goldpage-vs-others.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/goldpage-vs-others.template.md` and run `npm run docs` (or `yarn docs`).






-->
