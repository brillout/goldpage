import React, {useEffect, useState} from 'react';

export default Time;

function Time() {
  const [currentTime, setCurrentTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentTime(getTime()),
      1000/60 // 60 FPS
    );
    return () => clearTimeout(interval);
  }, []);

  return (
    <div>
      The time is: <span>{currentTime}</span>
    </div>
  );
}

function getTime() {
  return new Date().toLocaleTimeString();
}
