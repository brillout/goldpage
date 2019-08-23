# CSR & SSR Explained

In a nutshel,
*Client-Side Rendering* (CSR) denotes the practice of rendering a page in the browser (to the DOM),
and *Server-Side Rendering* (SSR) denotes the practice of rendering a page to HTML (on the server).

Modern view libraries, such as React and Vue, are able to render views to the DOM as well as to HTML.
This means that you have the choice whether you want to render your page to the DOM and to HTML.

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

