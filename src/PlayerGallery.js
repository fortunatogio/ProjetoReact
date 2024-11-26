import React from "react";
import PlayerProfile from "./PlayerProfile";

function PlayerGallery() {
  const players = [
    {
      name: "Allen Iverson",
      team: "76ers",
      position: "Armador",
      stats: "27 PPG, 6 APG",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Allen_Iverson_2010.jpg", 
    },
    {
      name: "Kevin Garnett",
      team: "Celtics",
      position: "Ala-Pivô",
      stats: "20 PPG, 10 RPG",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Kevin_Garnett_free_throw.jpg", 
    },
    {
      name: "Jayson Tatum",
      team: "Celtics",
      position: "Ala",
      stats: "30 PPG, 8 RPG",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/54/Jayson_Tatum_%28cropped%29.jpg", 
    },
  ];

  return (
    <div className="player-gallery">
      <h1>Galeria de Jogadores</h1>
      <div className="gallery-grid">
        {players.map((player, index) => (
          <PlayerProfile
            key={index}
            name={player.name}
            team={player.team}
            position={player.position}
            stats={player.stats}
            image={player.image} 
          />
        ))}
      </div>
    </div>
  );
}

export default PlayerGallery;
