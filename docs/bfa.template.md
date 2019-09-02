# Backend First App

> :warning:
> This document assumes that you have are familiar with the page configs `renderToDom` and `renderToHtml`.
>
> You can use Goldpage and start creating a prototype without reading this document.

Goldpage introduces a new app type we call *Backend First App* (BFA).

A Backend First App is an app that uses React (or Vue) primarily as an HTML template engine;
only the pages that need to be interactive are rendered to the DOM.

In other words most page have this configuration:
- `renderToHtml: true`
- `renderToDom: false`

And pages that need to be interactive have:
- `renderToHtml: false`
- `renderToDom: true`

Pages that 

The idea here is that non-interactive pages are much fast to implement.

simpler and usually much more performant than 

*Non-interactive First*

The modern stack has a reputation to be complex.
This is true because interactive pages are inherently complex, error prone, and performance optimization is hard.
In short, interactive pages are vastly more time consuming to implement than non-interactive pages.

But, when using the modern stack to implement non-interactive pages,
things are different.
But, if we use React only as an HTML template engine,
then things are vastly simpler

You may ask yourself: why would I use React for non-interactive?

In the end, you learn one stack to be able to create any kind of app.
You don't want to spend time on a stack that is crippled by nature.

Whenever possible, implement a feature using non-interactive pages.
Use interactive views as last resort.


A BFA can be a simpler yet performant alternative to a native mobile app.

The idea of a BFA is to follow the non-interactive first approach:
whenever possible implement a feature by create non-interactive views.
A non-interactive view can be rendered to the HTML and doesn't need to be (re-)rendered to the DOM.
- HTML views are drastically easier and faster to implement than DOM views, especially interactive views with complex and lots of possible states.
- HTML views are drastically faster than DOM views on low-end devices such as mobile.
- HTML views can be crawled by all search engines and by all social sharing sites.

Let's for exmaple imagine a newspaper.
Is mostly about images and text.
There is no need.
This means that the vast majority of the pages are only rendered to HTML
and the page config.
The advantage is that these page would have (almost) no browser-side JavaScript.
(`renderToDom: false` & `renderToHtml: true`)
Most newspaper artciles are most likely to be about text only and no interview views are necessary.
But, some arcticle may (e.g. a interactive US Election Poll that 


For example,
a BFA app could most pages rendered to HTML,
and only couple of pages.
onlyh ave 90% of it's pages with and only
A BFA o
A BFA is an app that tries to implement views as much as possible on the server-side,
hence the name *backend first*.



The idea is to use React (or Vue)
primarily as an HTML template engine and only secondarily
to implement interative views.

If a feature can be implemented with
Try to avoid DOM views as much as possible.

Now,
we exagerate a bit a interactive views aren't that 

If a feature doesn't asblutely need to be imp
The problem is that HTML views are not interactive.

With Goldpage 
The idea 
that mixes server-side rendering and browser-side rendering.


while trying to set
`renderToDom: false` as much as possible. (We call this the non-interactive first approach

The advantages are:

If you ant a BFA, then:
- Set `renderToHtml: true` and `renderToDom: false` for a page that is non-interactive.
- Set `renderToHtml: false` and `renderToDom: true` for a page that is interactive.
- Set `renderToHtml: true` and `renderToDom: true` for a page that is interactive and where the page's content needs to be rendered to HTML.

While trying to implement as few interactive views as possible.

While following the non-interactive first approach: any feature that can be implemented by a non-interactive.

there, you can easily do so by setting `renderToDom: true`.

And if you do need





uses React/Vue primarily as an HTML template engine and only secondarily
as to implement interative views



Goldpage introduces a new app type we call Backend First App (BFA).
The idea is to remove browser-side JavaScript
for a fundamental improvement in performence, especially
on mobile devices.

For a mobile app that is highly interactive (a music player, an email app, a video editor, ...),
native is still the way to go.

But, for a mobile app that is mainly about content (a meditatron app, a news app, ...),
a BFA offers
much simpler and performant alternative to native.

A BFA is an alternative to
That way you can achieve.
For apps that are mainly
Alternative to native
With Goldpage you can create pages that have no (or little) browser-side JavaScript
for blazing fast pages on mobile.
We are not aware of any other tool capable of that.
More at [Case Study: Goldpage & Mobile Performance]().



Goldpage introduces a new kind of app we call *backend-only app*.

By setting the page configs `renderToHtml: true` and `renderToDom: false` you
end up using React (or Vue) merely as a HTML template engine.

Why should one use React to generate plain old HTML?
It turns out that JSX can also be used to generate HTML in a delightful way; it allows you to leverage your knowledge about and the full power of JavaScript to generate HTML.

You can use the same stack and use your JavaScript knowledge to create an old-school and simple non-interactive backend-only app.

For apps that are mainly about content, this makes a lot of sense.



In short, Goldpage and `renderToDom: false` allow you to implement an old-school backend by using your knowledge of a modern JavaScript stack.


Non-interactive pages are much easier and much faster to implement.
And if you happen to absolutely need an interactive page you can always do so and set `renderToDom: true`.

means that no browser-side (or little) JavaScript
Long debate about that interactive apps are overkill and just use 
React can do that to today.

There are plenty of benefits:
- Full control over SEO & social sharing.
- Blazing fast performance, especially on mobile.
  <br/>
  Loading all views and views libraries
- High dev speed
  <br/>
  It turns out that create interactive views (state management is notoriously complex) is time consuming.
  No API
  Instead 

The nice thing is that you
interactive escape hatch:
If you happen to actually
absolutely need to implement a interactive page you selectively add `renderToDom: true`.

Non-interactive 

Interactive views are inherently complicated and time consuming to implement.


A backend-only and we believe it's good thing.

Many complain that the web dev of 10 years ago was esaier than today's web development.

the and 
But this is not necessarily

Also, non-interactive pages are easier and faster to develop than interactive ones &mdash;
using React/Vue as HTML template engine is a wonderful experience.





With a *mixed app* we denote an app that has non-interactive pages (`renderTo`)

This is for website
have both pages that are content and pages with lots of user interactions
(A e-commerce shop with a complex checkout process or a advanced. A)


Non-interactive first approach
Whenever possible 

We believe such mixed app to be the future of web developement.

For a mobile app that is highly interactive (a music player, an email app, a graphical editor, ...),
native is still the way to go.

But, for a mobile app that is mainly about content (a blog, a newspaper, a e-commerce shop, ...),




















- Faster time-to-first-paint
  <br/>
  The user can see your page's content rendered to HTML before the browser loads any JavaScript and before your pages is rendered in the browser.
  This results the user being able to see the page's content faster.
  Keep in mind that 
  Note that sites, e.g. Hacker News with only ~150 LOC.
