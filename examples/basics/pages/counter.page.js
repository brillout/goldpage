import React, {useState} from 'react';

export default {
  route: '/counter',
  view: Counter,
  renderToHtml: true,
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
