import React, {useState} from 'react';

export default {
  route: '/',
  view: () => (
    <div>
      Hello from ssr-coin.
      <Counter/>
    </div>
  ),
};

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked <span>{count}</span> times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
