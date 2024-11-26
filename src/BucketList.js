import React, { useState } from "react";

function BucketList() {
  const [tasks, setTasks] = useState(["Ver um jogo ao vivo", "Colecionar cards de jogadores"]);

  return (
    <div className="bucket-list">
      <h2>Lista de Tarefas NBA</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default BucketList;
