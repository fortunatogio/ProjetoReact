import React, { useState } from "react";

function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="moving-dot" onMouseMove={handleMouseMove}>
      <div
        className="dot"
        style={{ left: position.x, top: position.y }}
      ></div>
    </div>
  );
}

export default MovingDot;
