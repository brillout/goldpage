import React, {useEffect, useState} from 'react';

export default {
  route: '/time-with-ssr',
  view: Time,

  // We do SSR:
  renderToDom: false,
  renderToHtml: true,
};

function Time() {
  const getTime = () => new Date().toLocaleTimeString();

  const [currentTime, setTime] = useState(getTime());

  useEffect(() => {
    const timeout = setInterval(
      () => setTime(getTime()),
      1000/60 // 60 FPS
    );
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      The time is: <span>{currentTime}</span>
    </div>
  );
}
