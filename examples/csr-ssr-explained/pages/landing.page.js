import React, {useEffect, useState} from 'react';

export default {
  route: '/',
  view: () => (
    <ul>
      <Page pathname="/csr-example"/>
      <Page pathname="/ssr-example"/>
      <Page pathname="/time-with-csr"/>
      <Page pathname="/time-with-ssr"/>
    </ul>
  ),
  renderToHtml: true,
};

function Page({pathname}) {
  return <li><a href={pathname}>{pathname}</a></li>;
}
