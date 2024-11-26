import React from "react";
import Relogio from "./Relogio";
import Letreiro from "./Letreiro";
import { Link } from "react-router-dom";
import "./Atividade01.css"; 

function Atividade01() {
  return (
    <div className="container"> 
      <div className="relogio">
        <Relogio />
      </div>
      <div className="letreiro">
        <Letreiro />
      </div>
      <div className="link">
        <Link to="/">Voltar</Link>
      </div>
    </div>
  );
}

export default Atividade01;
