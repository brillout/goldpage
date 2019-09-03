import React, {useEffect, useState} from 'react';

export default {
  route: '/',
  view: () => (
    <div>
      Welcome to ssr-coin.
      <Time/>
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
