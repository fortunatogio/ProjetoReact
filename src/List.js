import React, { useState } from "react";

function List() {
  const [players, setPlayers] = useState(["Allen Iverson", "Kevin Garnett", "Jayson Tatum"]);
  const [newPlayer, setNewPlayer] = useState("");

  const addPlayer = () => {
    if (newPlayer.trim() !== "") {
      setPlayers([...players, newPlayer]);
      setNewPlayer("");
    }
  };

  return (
    <div className="list">
      <h2>Jogadores</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newPlayer}
        onChange={(e) => setNewPlayer(e.target.value)}
        placeholder="Adicionar jogador"
      />
      <button onClick={addPlayer}>Adicionar</button>
    </div>
  );
}

export default List;
