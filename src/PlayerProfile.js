import React from "react";

function PlayerProfile({ name, team, position, stats, image }) {
  return (
    <div className="player-profile">
      <img src={image} alt={name} className="player-image" />
      <h2>{name}</h2>
      <p>Equipe: {team}</p>
      <p>Posição: {position}</p>
      <p>Estatísticas: {stats}</p>
    </div>
  );
}

export default PlayerProfile;
