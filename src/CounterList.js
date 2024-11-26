import React, { useState } from "react";

function CounterList() {
  const [counters, setCounters] = useState([0, 0, 0]);

  const increment = (index) => {
    setCounters(counters.map((c, i) => (i === index ? c + 1 : c)));
  };

  return (
    <div className="counter-list">
      {counters.map((count, index) => (
        <div key={index}>
          <p>Contador {index + 1}: {count}</p>
          <button onClick={() => increment(index)}>+1</button>
        </div>
      ))}
    </div>
  );
}

export default CounterList;
