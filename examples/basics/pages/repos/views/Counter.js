import React, {useState} from 'react';
import './style.css';

export default Counter;

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div id='counter'>
      {' '}
      <code>{count}</code>
      {' '}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

