Goldpage is a tiny wrapper on top of Webpack that makes building a frontend super easy. It is powerful yet without getting in your way.

You define so-called page configs:

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

And the Goldpage CLI takes care of the rest:

~~~shell
$ goldpage build
~~~

Your pages are built at `.build/browser/`.
If your pages are static then simply deploy `.build/browser/` to a static host such as Netlify and you are done.

For server-side rendering simply add the Goldpage middleware:

~~~js
// Goldpage can be used with any server (Express/Koa/Hapi/...)
const express = require('express');
const goldpage = require('goldpage');

const app = express();

// The Goldpage middleware serves our pages.
app.Use(goldpage.express);
~~~

Goldpage is a tiny do-one-thing-do-it-well library (~4K LOCs) with a simple interface. Yet it is powerful:
- **Render Control** - You can choose when and where your pages are rendered: one page can be rendered to HTML and to the DOM (classic SSR), another page can be rendered to HTML only (no browser-side JavaScript for blazing fast mobile performance), and a third page can be rendered to the DOM only.
- **Any app type** (SPA, SSR, Static Website, ...) - Goldpage supports all app types and switching from one app type to another is easy; you can start writing your prototype and decide later which app type is right for you. No more endless research whether you should go for a static website or SSR.
- **Any view tool** - Thanks to its simple design, you can use any view framework (React, Vue, RNW, Svelte, ...), any view library (Redux, Vuex, GraphQL, ...) and any server framewok (Express, Koa, Hapi, ...).
- **Backend First Apps** - Goldpage introduces a new type of app we call [Backend First App (BFA)]() for higher development speed.


## How it works
