<p align="center">
  <a href="/../../#readme">
    <img align="center" src="https://github.com/brillout/ssr-coin/raw/master/docs/ssr-coin.min.svg?sanitize=true" width=96 height=96 style="max-width:100%;" alt="ssr-coin"/>
  </a>
</p>

<h1>
  <p align="center">
    <code>ssr-coin</code>
  </p>
</h1>

<p align="center">
Add SSR to your app.
</p>

<br/>
<br/>

- [What is `ssr-coin` <img src="https://github.com/brillout/ssr-coin/raw/master/docs/ssr-coin.min.svg?sanitize=true" width=16 height=10 style="max-width:100%;" alt="ssr-coin"/>](#what-is-ssr-coin-)
- Usage
  - [Zero-config Usage](#usage-zero-config)
  - [CSS](#css)
  - [Page Config](#page-config)
  - [Render Config](#)
  - [Router Config](#)
  - [Build Config](#)
  - [Full Config](#)
- [Plugins](#plugins)
- [How it works](#how-it-works)

## What is `ssr-coin` <img src="https://github.com/brillout/ssr-coin/raw/master/docs/ssr-coin.min.svg?sanitize=true" width=16 height=10 style="max-width:100%;" alt="ssr-coin"/>

`ssr-coin`
<img src="https://github.com/brillout/ssr-coin/raw/master/docs/ssr-coin.min.svg?sanitize=true" width=16 height=10 style="max-width:100%;" alt="ssr-coin"/>
is a do-one-thing-do-it-well library that adds server-side rendering (SSR) to your app.
It is designed to be easy yet entirely flexible.

Infos about SSR:
- [Awesome Universal Rendering - What is SSR](https://github.com/brillout/awesome-universal-rendering)
- [Awesome Universal Rendering - When to use SSR](https://github.com/brillout/awesome-universal-rendering) -
  Explains whether SSR should be used or not.
- [Awesome Universal Rendering - Performance](https://github.com/brillout/awesome-universal-rendering) -
  Explains the performance benefits of SSR which can be substantial for mobile.
- [Awesome Universal Rendering - Developer Experience](https://github.com/brillout/awesome-universal-rendering) -
  Not many people know that SSR introduces a new way of developing applications with an important increase in developing speed.

`ssr-coin` is unopinionated and works with any stack:
- Any view libray: React, Vue, React Native Web, etc.
- Any server framework: Express, Koa, Hapi, etc.
- Any language: ES6, TypeScript, PostCSS, etc.

By default,
`ssr-coin` has zero-config:
you can add SSR to your app with only couple of lines.
But, if you need to, you can configure and take control over:
 - The HTML rendering (full control)
 - The DOM rendering (full control)
 - The routing (full control)
 - The building (partial control)

## Zero Config

## Usage (with config)

You can configure ``

 - `pages/**/*.page.js` to configure your pages
 - `.ssr-coin.config.js` to globally configure `ssr-coin`

The options of a page config `*.page.js` are:

~~~js
// pages/landing.page.js

const landingPageConfig = {
  route: '/hello/:name',

  view: props => (
    <div>
      Welcome {props.name}.
      You are a {props.gender}
    </div>
  ),

  getInitialProps: async props => {
    const props = await fetch('https://example.org/person/'+name);
    // Load some async data
    // We assume that 
    assert(props.gender);
    return props;
  },

  // HTML meta scripts
  title: ({name, gender}) => 'Hi '+name,
  description: ({name}) => 'This is the page of '+name,

  // We explain the following two options below
  renderHtmlAtBuildTime: true,
  doNotRenderInBrowser: true,
};

module.exports = landingPageConfig;
~~~

And the `.ssr-coin.config.js` file has following options:

~~~js
// /ssr-coin.config.js

const = require.resolve('path/to/renderToHtml.js');

module.exports = {
  log: {
  },
  indexHtml: 'path/to/indexHtml.js',
};
~~~

The files `renderToHtml.js` and `renderPageToHtml.js` are explained at:

- [HTML Rendering](#html-rendering)

The files `renderToDom.js` and `renderPageToDom.js` are explained at:

- [DOM Rendering](#dom-rendering)

The file `router.js` is explained at:

- [Routing](#routing)

We talk about configuring the builing at:

- [Building](#building)

If you need then read:

- [Full Flexibility](#full-flexibility)

#### HTML Rendering

#### DOM Rendering

#### Routing

#### Building

We strongly believe that, as a developer, you shouldn't mess around with building.
Building is a complex topic and and configuring building can quickly become a considerably time sink.
We believe that the build process should be taken care of by tools with minimal configuration.
Messing with building should be your last resort.

Today,
`ssr-coin` is based on Webpack,
but we will migrate to Parcel once Parcel v2 is ready.

to alter Webpack but for now

We may publish documentation about how to write plugins
we prefer to develop the plugins hand-in-hand today.

If you want to change Webpack's configuration then we suggest you to use a `ssr-coin` plugin

#### Full Flexibility

For internal `ssr-coin` developing purposes,
the entire `ssr-coin` build process is design in a modular way.
What this means for you,
is that you can take control over many aspect of the building process.

If you need to configure something not covered in this Readme,
then open a ticket on this GitHub repository
and let's discuss solutions to your problem.
We aim to make `ssr-coin` highly flexible,
and we meant it.

## How it works

It works by building what we call "page configs" and you server.
It generates a browser entry.

This is crucial design decision that makes `ssr-coin` unique.
It's a simple design and achieves scalable and high performance for browser load time.
Scalable because each page is rendered 
SSR
With zero JavaScript.

That is:
 - 

