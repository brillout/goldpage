import React from 'react';

export default {
  route: '/',
  view: () => (
    <div>
      Pages:
      <Page pathname="/express-route"/>
      <Page pathname="/about"/>
      <Page pathname="/org/reframejs"/>
      <Page pathname="/reframejs/goldpage"/>
      <br/>
      404 Pages:
      <Page pathname="/doesn't-exist"/>
      <Page pathname="/doesn't-exist-either"/>
      <Page pathname="/express-route-404"/>
    </div>
  ),
  renderToHtml: true,
};

function Page({pathname}) {
  return <div><a href={pathname}>{pathname}</a></div>;
}
