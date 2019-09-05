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
    <img align="center" src="/docs/assets/icon-with-text.svg?sanitize=true" height=96 style="max-width:100%;" alt="Goldpage"/>
  </a>
</p>

# Goldpage VS Others

> :information_source:
> You can use Goldpage and create a prototype without reading this document.

> :warning:
> This document is meant for readers
> that already know about "SPA", "SSR", "static websites", etc.,
> and want to make an educated choice whether to use Goldpage.

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

We encourage you to start with Goldpage's default app type and,
once you finished your first prototype,
to try out and experiment different app types on your prototye
and see what works best for you.

We believe you shouldn't have to know what "SPA" or "SSR" means before getting started;
with Goldpage,
you start creating a prototype and worry about all that later.


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

For example these three page configs:
- `renderToDom` - If set to true, your page is rendered in the browser (to the DOM).
- `renderToHtml` - If set to true, your page is rendered to HTML (in Node.js).
- `renderHtmlAtBuildTime` - Whether your page is rendered to HTML at request-time or at build-time.
These three page configs allow you achieve any app type;
For example, if you set `renderToDom: true` and `renderToHtml: false` then your page is basically an SPA.
Or by setting `renderToHtml: true` you add SSR to your page.
And so on and so forth.

Reasoning in terms of `renderToDom`, `renderToHtml`, and `renderHtmlAtBuildTime` will eventually feel more natural than reasoning in terms of
"SPA", "MPA", "SSR", "static website", etc.
Our interface is simple and powerful:
with `renderToDom`, `renderToHtml`, and `renderHtmlAtBuildTime` you can achieve more things and easier.

Another example
is that we give you the possibility to define `htmlRender` and `domRender`:
- `htmlRender` renders your pages to HTML
- `domRender` renders your pages to the DOM
By defining these two functions you gain full control over how your pages are rendered.
This is what allows Goldpage to be used any view library
(React, Vue, RNW, Preact, ...) and any tool (Redux, React Router, ...).
Here again, our interface is simple and powerful.


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
non-interactive views are substantially faster to implement than interative views.
More at [Backend First App](/docs/bfa.md).


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
