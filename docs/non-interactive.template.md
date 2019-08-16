Goldpage gives you three page configs `renderToHtml`, `renderToDom`, and `renderHtmlAtBuildTime`
that allow you to build any kind of app.

Thinking in terms of "do I want my page to be rendered to the DOM" and "do I want my page to be rendered to HTML? At build-time or request-time?" will eventually feel more natural than thinking in terms of "SPA", "SSR", etc.

By default Goldpage renders your pages only in the browser to the DOM:

~~~js
// We use React here but note that Goldpage also supports Vue, React Native Web, etc.
import React from 'react';

// Page config
export default {
  route: '/',
  view: LandingPage,

  // `true` is the default value -- `<LandingPage/>` is rendered to the DOM in the browser
  renderToDom: true,
  // `false` is the default value -- `<LandingPage/>` is not rendered to HTML
  renderToHtml: false,
};

function LandingPage() {
  return (
    <div>
      Welcome to my first Goldpage app.
    </div>
  );
}
~~~

These default settings generate an MPA.

To add SSR to a page:

~~~js
import React from 'react';

export default {
  route: '/',
  view: LandingPage,

  renderToDom: true,
  // We also render the page to HTML
  renderToHtml: true,
};

function LandingPage() {
  return (
    <div>
      Welcome to my first Goldpage app.
    </div>
  );
}
~~~

You can also render your page to HTML only:

~~~js
import React from 'react';

export default {
  route: '/',
  view: LandingPage,

  // We don't render the page to the DOM in the browser
  renderToDom: false,
  // We only render it to HTML
  renderToHtml: true,
};

function LandingPage() {
  return (
    <div>
      Welcome to my first Goldpage app.
    </div>
  );
}
~~~

As you can see in the screenshot above,
the HTML has no `<sript>` tag &mdash;
no JavaScript is loaded nor executed in the browser.
For non-interactive pages, removing browser-side JavaScript is an effective way to achieve blazing fast performance on mobile.

To get a static website you set `renderHtmlAtBuildTime: true` to all your page configs:

~~~js
import React from 'react';

export default {
  route: '/',
  view: LandingPage,

  // A static website can still have a dynamic browser-side.
  // (The word "static" in "static website" denotes a static server-side.)
  renderToDom: true,

  // Generate the HTML at build-time.
  // No Node.js server is needed and the app can be
  // served by a static host such as GitHub pages or Netlify
  renderToHtml: true,
  renderHtmlAtBuildTime: true,
};

function LandingPage() {
  return (
    <div>
      Welcome to my first Goldpage app.
    </div>
  );
}
~~~

At !VAR|LINK RENDER_WHEN we discuss whether you should render your pages to HTML and/or to the DOM.

!INLINE ./snippets/section-footer.md #readme


