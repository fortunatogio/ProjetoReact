import React, { useState } from "react";

function Form() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada: ${message}`);
    setMessage("");
  };

  return (
    <div className="form">
      <h2>Enviar Mensagem</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escreva sua mensagem..."
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
