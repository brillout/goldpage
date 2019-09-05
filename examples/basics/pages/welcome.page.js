import React, {useEffect, useState} from 'react';

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
        <Page pathname="/csr-example"/>
        <Page pathname="/ssr-example"/>
      </ul>
    </div>
  ),
  renderToHtml: true,
};

function Time() {
  const getTime = () => new Date().toLocaleTimeString();

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const timeout = setInterval(() => setTime(getTime()), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      The time is: <span>{time}</span>
    </div>
  );
}

function Page({pathname}) {
  return <li><a href={pathname}>{pathname}</a></li>;
}
