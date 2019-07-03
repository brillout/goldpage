import React, {useState} from 'react';

export default Counter;

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{marginTop: 12, marginLeft: 22}}>
      {' '}
      <code style={{fontSize: '1.3em', verticalAlign: 'bottom', marginRight: 5, fontWeight: 'bold'}}>{count}</code>
      {' '}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

