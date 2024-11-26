import React, { useState } from "react";

function ShapeEditor() {
  const [size, setSize] = useState(50);

  return (
    <div className="shape-editor">
      <div
        className="circle"
        style={{ width: size, height: size }}
      ></div>
      <button onClick={() => setSize(size + 10)}>Aumentar</button>
      <button onClick={() => setSize(size - 10)}>Diminuir</button>
    </div>
  );
}

export default ShapeEditor;
