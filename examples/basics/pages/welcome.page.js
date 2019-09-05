import React from 'react';

import Time from '../../csr-ssr-explained/pages/Time';

export default {
  route: '/',
  view: () => (
    <div>
      Welcome to Goldpage.
      <Time/>
      <br/>
      More:
      <ul>
        <Page pathname="/counter"/>
        <Page pathname="/hello/jon"/>
        <Page pathname="/repos/brillout"/>
      </ul>
    </div>
  ),
  renderToHtml: true,
};

function Page({pathname}) {
  return <li><a href={pathname}>{pathname}</a></li>;
}
