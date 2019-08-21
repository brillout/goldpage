
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


