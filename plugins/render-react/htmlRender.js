const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = htmlRender;

async function htmlRender({page, initialProps, CONTAINER_ID}) {
  const html = (
    ReactDOMServer.renderToStaticMarkup(
      React.createElement(page.view, initialProps)
    )
  );

  // Altnertively, you can return a `@brillout/html` options object
  // in order to have more control over the generated HTML. See all
  // html options at https://github.com/brillout/html
  // return {
  //   head: [
  //     '<style>body{background: blue;}</style>',
  //   ],
  //   body: [
  //     '<div>Some additional HTML</div>',
  //     '<div id="'+CONTAINER_ID+'">'+html+'</div>',
  //   ]
  // };

  return html;
}
