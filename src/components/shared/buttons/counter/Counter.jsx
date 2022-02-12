import React, { useState } from "react";
import Typo from "../../Typography/Typo";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="main-wrapper-counter">
      <div className="decrease" onClick={decrement}>
        <Typo variant="body-opacity">-</Typo>
      </div>
      <div className="current-count">
        <Typo variant="body">{count}</Typo>
      </div>
      <div className="increase" onClick={() => setCount(count + 1)}>
        <Typo variant="body-opacity">+</Typo>
      </div>
    </div>
  );
}

export default Counter;
