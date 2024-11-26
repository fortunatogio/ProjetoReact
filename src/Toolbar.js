import React from "react";

function Toolbar({ onShowGallery, onShowStats }) {
  return (
    <div className="toolbar">
      <button onClick={onShowGallery}>Ver Galeria</button>
      <button onClick={onShowStats}>Ver Estatísticas</button>
    </div>
  );
}

export default Toolbar;
