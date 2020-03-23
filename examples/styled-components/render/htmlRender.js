const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {ServerStyleSheet} = require('styled-components');

module.exports = htmlRender;

async function htmlRender({page, initialProps, CONTAINER_ID}) {
  const sheet = new ServerStyleSheet();

  let viewHtml;
  try {
    viewHtml = (
      '<div id="'+CONTAINER_ID+'">'+
      ReactDOMServer.renderToStaticMarkup(
        sheet.collectStyles(
          React.createElement(
            page.view,
            initialProps
          )
        )
      ) +
      '</div>'
    );
  } catch (error) {
    throw error;
  } finally {
    sheet.seal();
  }

  const styleHtml = sheet.getStyleTags();

  return {
    head: [
      styleHtml,
    ],
    body: [
      viewHtml,
    ],
  };
}
