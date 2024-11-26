import React, { useState } from "react";
import Toolbar from "./components/Toolbar";
import Gallery from "./components/Gallery";
import Counter from "./components/Counter";
import Form from "./components/Form";
import MovingDot from "./components/MovingDot";
import List from "./components/List";
import ShapeEditor from "./components/ShapeEditor";
import CounterList from "./components/CounterList";
import BucketList from "./components/BucketList";
import "./Atividade04.css";

function Atividade04() {
  const [view, setView] = useState("gallery"); // Controla a exibição atual

  const renderView = () => {
    switch (view) {
      case "gallery":
        return <Gallery />;
      case "counter":
        return <Counter />;
      case "form":
        return <Form />;
      case "movingDot":
        return <MovingDot />;
      case "list":
        return <List />;
      case "shapeEditor":
        return <ShapeEditor />;
      case "counterList":
        return <CounterList />;
      case "bucketList":
        return <BucketList />;
      default:
        return <Gallery />;
    }
  };

  return (
    <div className="atividade04">
      <h1>NBA Showcase - Atividade 04</h1>
      <Toolbar
        onShowGallery={() => setView("gallery")}
        onShowStats={() => setView("counter")}
      />
      <div className="content">{renderView()}</div>
      <div className="navigation">
        <button onClick={() => setView("form")}>Enviar Mensagem</button>
        <button onClick={() => setView("movingDot")}>Moving Dot</button>
        <button onClick={() => setView("list")}>Lista de Jogadores</button>
        <button onClick={() => setView("shapeEditor")}>Editar Forma</button>
        <button onClick={() => setView("counterList")}>Lista de Contadores</button>
        <button onClick={() => setView("bucketList")}>Bucket List</button>
      </div>
    </div>
  );
}

export default Atividade04;
