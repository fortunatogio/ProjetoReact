import React from "react";
import PlayerGallery from "./components/PlayerGallery";
import TeamList from "./components/TeamList";
import PlayerCard from "./components/PlayerCard";
import "./Atividade03.css";

function App() {
  return (
    <div className="app">
      <h1>NBA Showcase</h1>
      <PlayerGallery />
      <TeamList />
      <PlayerCard name="Allen Iverson" isStar={true} />
      <PlayerCard name="Jayson Tatum" isStar={false} />
    </div>
  );
}

export default App;
