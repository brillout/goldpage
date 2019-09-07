import React, {useEffect, useState} from 'react';

export default Time;

function Time() {
  // `useEffect` and `useState` are React Hooks.
  // If you are no familiar with React hooks that's fine: just
  // know that it allows us to change the state `displayedTime`.
  const [displayedTime, setDisplayedTime] = useState(getCurrentTime());
  useEffect(effect, []);

  return (
    <div>
      The time is: <span>{displayedTime}</span>
    </div>
  );

  function update() {
    const now = getCurrentTime();
    if( now!==displayedTime ){
      setDisplayedTime(now);
    }
  }

  function effect() {
    const interval = setInterval(update, 30);
    return () => clearTimeout(interval);
  }
}

function getCurrentTime() {
  return new Date().toLocaleTimeString();
}
