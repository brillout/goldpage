# Goldpage VS Others

> :warning:
>
> You can use Goldpage and create an app without reading this document.
>
> This document is meant for users that want to make an educated choice of whether to use Goldpage or another tool.
>
> This document assumes that you roughly know what the different app types, such as "SPA" and "SSR", are about.

This document goes into the details of what differentiates Goldpage from other tools.

- [App Types](#app-types)
- [Simple Design](#simple-design)
- [Flexible & Rock-solid](#flexible--rock-solid)
- [New App Types](#new-app-types)

### App Types

The main problem of our current tools is that they support only one app type.
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
- Know exactly what the differences between them are
- Decide which app type is the right one for the future of your app
And you have to do all this before even having started writing one line of code.

Even worse is that, most often than not,
it's not possible to predict which app type
is the right one
before having created and battle-tested a first prototype.

Goldpage solves this problem:
it supports all app types and makes switching from one app type to another easy &mdash;
you can start writing a prototype and worry about app type later.

We actually encourage you to start with Goldpage's default app type and,
only once you finished your first prototype,
to try out and experiment different app types with your prototye
and see what works best for you.

With Goldpage,
you can start writing your app without even knowing
what "SPA" or "SSR" mean.

In the next section below we show
how you can achieve any app type.

!INLINE ./snippets/section-footer.md #readme



### Simple Design

Goldpage is designed to have an interface that is simple and powerful.

For example,
you can achieve any app type thanks to three page configs:
- `renderToDom` - If set to true, your page is rendered in the browser (to the DOM).
- `renderToHtml` - If set to true, your page is rendered to HTML (in Node.js).
- `renderHtmlAtBuildTime` - Whether your page is rendered to HTML at request-time or at build-time.

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
Goldpage's codebase small, simple, and rock-solid.

For example,
the `htmlRender` and `domRender` functions we mentioned in the previous section
give you the control and freedom to use Goldpage with any tool you want such as Redux or React Router.
considerably less work for us.

Other tools suffer the problem that leading to an explosion of GitHub issues, maintainers require to patch and documentation writing work.
Where other tools have to write patch anytime there is
We don't have to write patch anytime a new tool;
Goldpage is designed from the ground up to easily integrate with other tools.

These are interfaces between you, the user, and us the Goldpage's maintainers.
But this is also
Another example is that

Goldpage is about 10k lines of code,
which is super small compared to other tools.

Ultimately, our simple design decreases our developing work by up to an order of magnitude &mdash;
the work of one maintainer is as effective as the work of up to 10 maintainers.

!INLINE ./snippets/section-footer.md #readme



### New App Types

The page configs `renderToHtml`, `renderToDom` we showed in
the [Simple Design]() section allow you to create any app type.

Not only does this allow you to create all common app types but it also introduces new app types.

!INLINE ./snippets/section-footer.md #readme



