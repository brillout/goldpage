# Backend First App

> :warning:
> <br/>
>
> This document assumes that you have are familiar with `renderToDom` and `renderToHtml`.
>
> You can use Goldpage and start creating a prototype without reading this document.

Goldpage introduces a new app type we call *Backend First App* (BFA).

A Backend First App is an app that uses React (or Vue) primarily as an HTML template engine
and where only a few pages that need to be interactive are rendered to the DOM.

In other words, most page have;
- `renderToDom: false`
- `renderToHtml: true`

And only few pages are interactive and have:
- `renderToDom: true`
- `renderToHtml: false` (or `renderToHtml: true`)

The idea of a BFA is to prefer non-interactive pages over interactive ones.
For an increased development speed and for increased performance.

**Non-interactive First**

Interactive modern apps are more a reputation to be complex.
This is true mostly because interactive views are inherently complex,
in particular state managment is hard to comprehend and error prone.
Interactive views need considerably more time to develop than non-interactive views.

But things are different when using the modern stack to implement non-interactive pages.
There is no state managemenet and using
React solely as an HTML template engine
is vastly simpler.

In short,
implementing non-interactive vies is much simpler and much faster than implementing interactive views,
which leads us to the *non-interactive first* approach:

> **Non-interactive first**
> <br/>
> Whenever possible, implement features using non-interactive pages.
> Use interactive views as last resort.

leads to high developing speed.

Using
Using has many benefits:
- It turns out that JSX can also be used to generate HTML in a way;
it allows you to leverage your knowledge about and the full power of JavaScript to generate HTML.
- You can use the same stack and use your JavaScript knowledge to create an old-school and simple non-interactive backend-only app.
- In short, Goldpage and `renderToDom: false` allow you to implement an old-school backend by using your knowledge of a modern JavaScript stack.
- In the end, you end up learning one stack to be able to create any kind of app.



**Fast prototyping**

Often the trade off is to choose between a simpler non-interactive view a
interactive view for a richer user experience.

Fast prototyping
Also, as your app scales and as you hit product-market-fit,
the quality of your app becomes increasingly important.
At that point interactive views can offer a better 


**Performance & Mobile**

Non-interactive pages are also usually more performant, especially on mobile;
removing browser-side JavaScript leads to substantial performance improvements.

The idea is to remove browser-side JavaScript
for a fundamental improvement in performance, especially
on mobile devices.

For a mobile app that is highly interactive (a music player, an email app, a video editor, ...),
writing the app in native code is still the way to go.
But, for a mobile app that is mainly about content (a meditatron app, a news app, ...),
a BFA can be a alternative with good enough performance and drastically faster developing speed.

**SEO**

All pages that are only rendered to HTML are easily crawlable by search engines.

Your.
And for pages you can have both `renderToHtml: true` and `renderToDom: true`.
Since most pages are rendered to HTML, SEO comes "for free".

**Example**

Let's for example imagine a newspaper.
Is mostly about images and text.
There is no need.
This means that the vast majority of the pages are only rendered to HTML
and the page config.
The advantage is that these page would have (almost) no browser-side JavaScript.
(`renderToDom: false` & `renderToHtml: true`)
Most newspaper artciles are most likely to be about text only and no interview views are necessary.
But, some arcticle may (e.g. a interactive US Election Poll that 

**One universal stack**



**Conclusion**

A BFA is about following the non-interactive first approach: features are implemented using non-interactive pages and we avoid interactive views whenever possible.

In this document we showed that
the non-interactive first approach and a BFA can achieve:
- High development speed.
- High performance, especially on mobile.
- Crawlability for SEO and social sharing.
- Possibility to have a couple of interative pages.

