import React, { useState } from "react";

export default function Configuracion() {
  const [nombre, setNombre] = useState("");

  return (
    <div>
      <h2>Configuración</h2>
      <label>
        Tu nombre: 
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
        />
      </label>
      <p>Hola, {nombre || "invitado"} 👋</p>
    </div>
  );
}
