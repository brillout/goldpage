import React from 'react';

export default {
  route: '/',
  view,
  renderToHtml: true,
  renderToDom: false,
};

function view() {
  return (
    <div>
      Build time: {new Date().toLocaleTimeString()}.
      <br/><br/>
      CSR: <a href='/interactive'>/interactive</a>
    </div>
  );
}
