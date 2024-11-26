import React from "react";

function TeamList() {
  const team = [
    { name: "Allen Iverson", isMVP: true },
    { name: "Kevin Garnett", isMVP: true },
    { name: "Jayson Tatum", isMVP: false },
  ];

  return (
    <div className="team-list">
      <h1>Jogadores do Time</h1>
      <ul>
        {team.map((player, index) => (
          <li key={index} className={player.isMVP ? "mvp" : ""}>
            {player.name} {player.isMVP && <span>🏆</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamList;
