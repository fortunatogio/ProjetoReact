import React, { useState } from "react";

function Counter() {
  const [score, setScore] = useState(0);

  const increment = () => setScore(score + 2); // Incrementa 2 pontos
  const reset = () => setScore(0); // Reseta para 0

  return (
    <div className="counter">
      <h2>Placar de Pontos</h2>
      <p>Pontos: {score}</p>
      <button onClick={increment}>+2 Pontos</button>
      <button onClick={reset}>Resetar</button>
    </div>
  );
}

export default Counter;
