// components/Formularios.jsx
import React, { useState } from "react";
import { FaPenNib, FaInfoCircle, FaCode } from "react-icons/fa";

export default function Formularios() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nombre: ${nombre}, Email: ${email}`);
  };

  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaPenNib className="icon" /> Formularios en React
      </h1>

      <div className="card card-info">
        <FaInfoCircle className="icon" />
        <strong>Qué son los formularios:</strong> Permiten al usuario ingresar datos y enviarlos. React usa <em>controlled components</em> para manejar los valores de los inputs mediante el estado.
      </div>

      <form onSubmit={handleSubmit} className="card card-info">
        <input 
          placeholder="Nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          className="input"
        />
        <input 
          placeholder="Email" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="input"
        />
        <button type="submit" className="btn-submit">Enviar</button>
      </form>

      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaCode className="icon" />
          <strong>Ejemplo de sintaxis:</strong>
        </div>
        <pre className="code-block">
          <code>
            {`const [nombre, setNombre] = useState("");
            const [email, setEmail] = useState("");

            const handleSubmit = (e) => {
              e.preventDefault();
              alert(\`Nombre: \${nombre}, Email: \${email}\`);
            };

            <form onSubmit={handleSubmit}>
              <input value={nombre} onChange={e => setNombre(e.target.value)} />
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
              <button type="submit">Enviar</button>
            </form>`}
          </code>
        </pre>
      </div>
    </div>
  );
}
