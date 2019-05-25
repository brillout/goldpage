<p align="center">
  <a href="/../../#readme">
    <img align="center" src="https://github.com/brillout/goldssr/raw/master/docs/ssr-coin.min.svg?sanitize=true" width=96 height=96 style="max-width:100%;" alt="ssr-coin"/>
  </a>
</p>

<h1><p align="center"><code>ssr-coin</code></p></h1>

 - [What is `ssr-coin`](#what-is-ssr-coin)
 - [Usage (zero-config)](#usage-zero-config)
 - [How it works](#how-it-works)
 - [Usage (with config)](#usage-with-config)

## What is `ssr-coin`

`ssr-coin`
(<img src="https://github.com/brillout/goldssr/raw/master/docs/ssr-coin.min.svg?sanitize=true" width=16 height=10 style="max-width:100%;" alt="ssr-coin"/>)
is a do-one-thing-do-it-well library that adds server-side rendering (SSR) to your app.
It is designed to be easy yet flexible.

Read [Awesome Universal Rendering](https://github.com/brillout/awesome-universal-rendering) if you want more information about what SSR is and its benefits.
Note that SSR is not only about **SEO** but it is also about (**browser-load-time** performance)[] and (**developer-experience**)[].
The last two ascpects of SSR are vastly underestimated.

`ssr-coin` is unopinionated and works with any stack:
 - any view libray: React, Vue, React Native Web, etc.
 - any server framework: Express, Koa, Hapi, etc.
 - any language: ES6, TypeScript, PostCSS, etc.

Thanks to its zero-config feature, you can use `ssr-coin` with only a couple of lines.

But, and if you need to, you can also take control over:
 - The HTML rendering (full-control)
 - The DOM rendering (full-control)
 - The routing (full-control)
 - The building (partial-control)

## Usage (zero-config)

## How it works

It works by building what we call "page configs" and you server.
It generates a browser entry.

This is crucual design decision that makes `ssr-coin` unique.
It's a simple design and achieves scalable and high performance for browser load time.
Scalable because each page is rendered 
SSR
With zero JavaScript.

That is:
 - 

## Usage (with config)

You can configure `ssr-coin` with a `.ssr-coin.config.js` file placed at project's root directory.

~~~js
// /ssr-coin.config.js

const = require.resolve('path/to/renderToHtml.js');

module.exports = {
  log: {
  },
};
~~~

What `renderToHtml.js`, are explained in the following sections. bellow.
- [HTML Rendering](#html-rendering)
What values are explained in the sections bellow.

- [DOM Rendering](#dom-rendering)
- [Routing](#routing)

And we talk about configuring the builing at:

- [Building](#building)

### HTML Rendering

### DOM Rendering

### Routing

### Building

We strongly believe that, as a developer, you shouldn't mess around with building.
Building is a complex topic and and quickly can become a considerably time sink.
We believe that the build should be taken care of by tools with minimal configuration,
and we thrilled about zero-config bundlers such as [Parcel](https://github.com/parcel-bundler/parcel).

Today `gold-ssr` is based on Webpack but we will migrate to Parcel once Parcel v2 is ready.

