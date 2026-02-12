import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h2>Counter Component</h2>
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <button onClick={decrement} className="btn btn-danger">
          -
        </button>
        <button onClick={reset} className="btn btn-secondary">
          Reset
        </button>
        <button onClick={increment} className="btn btn-success">
          +
        </button>
      </div>
      <p className="count-text">Current count: <strong>{count}</strong></p>
    </div>
  );
}

export default Counter;
