import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export default {
  view: Hello,
  route: '/',
  renderToHtml: true,
};

function Hello() {
  const color = 'white'

  return (
    <div
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        width: 250px;
        &:hover {
          color: ${color};
        }
      `}
    >
      Hover to change color.
    </div>
  );
}
