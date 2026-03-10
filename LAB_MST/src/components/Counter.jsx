import { useState } from "react";
import "../index.css";

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div className="counter-card">
      <h2 className="counter-title">✨ Counter</h2>

      <div className="counter-value">{count}</div>

      <button
        className="counter-btn increment"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <button
        className="counter-btn decrement"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>

      <button
        className="counter-btn reset"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;