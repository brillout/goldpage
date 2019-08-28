# CSR & SSR Explained

In this document we explain what CSR and SSR are and what you can achieve with them.

> :information_source:
>
> If you already have a good understanding of CSR and SSR then checkout
> [Client-side Rendering (CSR) VS Server-side Rendering (SSR)](/docs/csr-vs-ssr.md)
> instead. There we compare and explain whether you should do CSR, SSR, or both.
>
> If you don't know or if you are not sure what CSR and SSR are, then read on.

- [What is CSR and SSR?]()
- [Interactive vs Non-interactive]()
- [Static vs Dynamic]()
- [Crawlability]()
- [Performance]()

# What is CSR and SSR?
*Client-Side Rendering* (CSR) denotes the practice of rendering a page in the browser (to the DOM),
and *Server-Side Rendering* (SSR) denotes the practice of rendering a page on the server (to HTML).

> :information_source:
> **History**
> <br/>
> In the old days (before React came out in 2013)
> the situation was either or:
> either you used a HTML template engine (you may have heared about some such as "jinja" or "handlebars")
> to render your page to HTML on the server or
> or you'd used a browser library (the most popular back then was called "Backbone" and "EmberJS" and "AngularJS") that would manipulate the DOM and would rednder your view to the DOM.
>
> React was the first tool that was able to do both CSR *and* SSR:
> you define a React component and React is able to render your component to the DOM as well as to HTML.
> you'd use server-side HTML template engine (if you are familiar)

Modern view libraries, such as React or Vue, are able to render pages to the DOM as well as to HTML. With React (or Vue), you can do both: CSR *and* SSR.

> :information_source: **React, Vue, etc.**
> We will talk only about React from now on. But note that everything here is applicable to any view library that supports CSR and SSR, such as Vue.

You can define a page with React, the question arises: should I render my page to HTML or the DOM?

In the example you can the difference between both.

Not only can 

Also you can
The choices are plenty:
- 

This is what CSR and SSR is all about.


You even have the choice to render your page twice twice:
first to HTML and then again to the DOM. This may seem wasteful to render a page twice,
but this actually has some benefits we will disuss later.

The ad
The question arises: should I render my page to the DOM or to HTML?

CSR is about rendering your page 
This means that you have the choice whether you want to render your page to the DOM and to HTML.








In a nutshel,

With React and Vue, not only can you render your pages to the DOM, but you can also render them to HTML.
The question arises: should I render my page to the DOM or to HTML?

With *non-interactive page* we denote a page that has no stateful components.












interactive view
(a music player, an email app, a graphical editor, a chat app, ...).

If your app is mostly about content
(a blog, a newspaper, a e-commerce shop, ...).

If your app is a mix
(a website with a questionnaire)
then a mixed app












**SSR Example**

The following page showcases SSR:
- The page is interactive (as you can see in the screencast, the user can modify the state of the counter).
- The page is server-side rendered (as you can see in the video, the content of the page is rendered to HTML, such as "brillout/awesome-react-components").

<img align="right" src="https://github.com/reframejs/ssr-coin/raw/master/docs/ssr-coin_example_video.gif" width=336 height=706 style="max-width:100%;"/>

~~~js
!INLINE /examples/basics/pages/repos/repos.page.js
~~~

