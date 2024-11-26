import React from "react";

function PlayerCard({ name, isStar }) {
  return (
    <div className="player-card">
      <h2>{name}</h2>
      {isStar ? <p>⭐ Jogador Estrela ⭐</p> : <p>Jogador Regular</p>}
    </div>
  );
}

export default PlayerCard;
