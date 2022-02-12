import React, { useState } from "react";
import Typo from "../../Typography/Typo";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-wrapper-counter">
      <div className="decrease" onClick={() => setCount(count - 1)}>
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
