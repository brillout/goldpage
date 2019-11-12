Goldpage is a tiny tool to build a frontend. It is simple yet powerful.

You define pages:

~~~jsx
// A page config
export default {
  route: '/hello/:name',
  view: ({name}) => (
    <div>
      Hello {name}, welcome to Goldpage.
    </div>
  ),
};
~~~

The Goldpage CLI takes care of the rest:

~~~shell
$ goldpage build
~~~

Your pages are built at `.build/browser/`.
If your pages are static, deploy `.build/browser/` to a static host such as Netlify, and you are done.

For server-side rendering add the Goldpage middleware:

~~~js
// Goldpage can be used with any server framework (Express, Koa, Hapi, ...)
const express = require('express');
const goldpage = require('goldpage');

const app = express();

// Our Goldpage middleware serves your pages.
app.use(goldpage.express);
~~~

Goldpage is a tiny do-one-thing-do-it-well library (~4K LOCs) with a simple interface. Yet it is powerful:
- **Render Control** - You can choose when and where your pages are rendered: one page can be rendered to HTML and to the DOM (classic SSR), another page can be rendered to HTML only (no browser-side JavaScript for blazing fast mobile performance), and a third page can be rendered to the DOM only.
- **Any app type** (SPA, SSR, Static Website, ...) - Goldpage supports all app types and switching from one app type to another is easy; you can start writing your prototype and decide later which app type is right for you. No more endless research whether you should go for a static website or SSR.
- **Any view tool** - Thanks to its simple design, you can use any view framework (React, Vue, RNW, Svelte, ...), any view library (Redux, Vuex, GraphQL, ...) and any server framewok (Express, Koa, Hapi, ...).
- **Backend First Apps** - Goldpage introduces a new type of app we call [Backend First App (BFA)]() for higher development speed.


## How it works

At the heart of Goldpage's design revolves around 
full control over how and where your pages are rendered.

You control where your pages are rendered with these two page options:
- `renderToDom: Boolean` - Whether your pages is rendered to the DOM.
- `renderToHtml: Boolean` - Whether your page is rendered to HTML.

A page with `renderToDom: true` and `renderToHtml: true` 

the full freedom to use any view tool you want.








Goldpage uses Webpack to transpile and bundle your pages and is based on a minimal Webpack config allowing you to easily modify/modify our config.

Goldpage is designed to give you full control over how and where your pages are rendered.

You control *where* your page are rendered with two page configs:
- `renderToDom` - If set to true, your page is rendered to the DOM (browser).
- `renderToHtml` - If set to true, your page is rendered to HTML (Node.js).

If you want to add SSR to a page you set `renderToHtml: true` and `renderToDom: true`.
If you want a page to be an SPA, you set `renderToDom: true` and `renderToHtml: false`.
You can also set `renderToHtml: true` and `renderToDom: false` for a page
to be rendered only to HTML with zero browser-side JavaScript.
(Good old plain HTML like in the 90s!)

You can control *how* your pages are rendered by defining the render functions `htmlRender` and `domRender`:

~~~js
// We can use any view framework here (React, Vue, RNW, ...)

import React from 'react';
import ReactDOM from 'react-dom';

export default domRender;

async function domRender({page, initialProps, CONTAINER_ID}) {
  const element = React.createElement(page.view, initialProps);
  const container = document.getElementById(CONTAINER_ID);
  if( page.renderToHtml ){
    ReactDOM.hydrate(element, container);
  } else {
    ReactDOM.render(element, container);
  }
}
~~~

~~~js
const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = htmlRender;

async function htmlRender({page, initialProps, CONTAINER_ID}) {
  const el = React.createElement(page.view, initialProps);
  const html = ReactDOMServer.renderToStaticMarkup(el);
  return html;
}
~~~

This render control enables you to:
- Build any app type (SPA, SSR, static website, ...).
- Build new kinds of apps, such as [Backend First Apps]().
- Use any view framework (React, Vue, RNW, ...).
- Use any view library (React Router, Vuex, GraphQL, ...).

For server-side rendering, we offer a server middleware that can be used with any server framework (Express, Koa, Hapi, ...).
