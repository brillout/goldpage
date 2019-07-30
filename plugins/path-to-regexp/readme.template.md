!MENU_SKIP

`ssr-coin` + `path-to-regexp` = :heart:

# `@ssr-coin/path-to-regexp`

Routing with [`path-to-regexp`](https://github.com/pillarjs/path-to-regexp).

(Note that `@ssr-coin/path-to-regexp` doesn't use the npm module `path-to-regexp` directly, but uses React Router's wrapper `react-router/matchPath`.)

### Usage

Install `@ssr-coin/path-to-regexp`.

~~~bash
$ npm install @ssr-coin/path-to-regexp
~~~

The plugin is automatically loaded and
the `route` property of your page configs is now handled by `path-to-regexp`.

### Example

~~~js
!INLINE /examples/basics/pages/welcome.page.js
~~~
