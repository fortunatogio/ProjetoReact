import React from "react";

function Gallery() {
  const players = [
    {
      name: "Allen Iverson",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Allen_Iverson_2010.jpg",
      description: "Ícone dos 76ers e MVP da NBA em 2001.",
    },
    {
      name: "Kevin Garnett",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Kevin_Garnett_free_throw.jpg",
      description: "Lenda dos Celtics e campeão da NBA em 2008.",
    },
    {
      name: "Jayson Tatum",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/54/Jayson_Tatum_%28cropped%29.jpg",
      description: "Estrela dos Celtics e campeão da NBA em 2024",
    },
  ];

  return (
    <div className="gallery">
      {players.map((player, index) => (
        <div key={index} className="gallery-item">
          <img src={player.image} alt={player.name} />
          <h3>{player.name}</h3>
          <p>{player.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
