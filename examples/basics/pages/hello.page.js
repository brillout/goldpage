import React, {useState} from 'react';

export default {
  route: '/hello/:name',
  addInitialProps,
  view: Hello,
  title,
  renderToHtml: true,
};

async function addInitialProps({name}) {
  // We simulate a network request delay
  await sleep(0.5);

  const nameReversed = name.split('').reverse().join('');
  return {nameReversed};
}

function Hello({name, nameReversed}) {
  const [isReversed, setReverse] = useState(false);

  return (
    <div>
      Hello <span>{isReversed ? nameReversed : name}</span>, welcome to ssr-coin.
      <br/>
      <button onClick={() => setReverse(!isReversed)}>Reverse name</button>
    </div>
  );
}

function title({name}) {
  return 'Hi '+name;
}

function sleep(seconds) {
  let resolve;
  const promise = new Promise(r => resolve=r);
  setTimeout(resolve, seconds*1000);
  return promise;
}
