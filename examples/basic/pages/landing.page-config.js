const React = require('react');
const { useState, useEffect } = require('react');

module.exports = {
  route: '/',
  view: () => (
    <div>
      Hello from GoldSSR.
      <Time/>
    </div>
  ),
//renderHtmlAtBuildTime: true,
};

function Time() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setTimeout(() => setSeconds(seconds+1), 1000);
  });

  return (
    <div>
      Time elapsed: <span>{seconds}</span>
    </div>
  );
}
