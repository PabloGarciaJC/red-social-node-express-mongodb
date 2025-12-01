// components/LabUseEffect.jsx
import React, { useState, useEffect } from "react";
import { FaClock, FaToggleOn, FaSyncAlt, FaHashtag, FaCode } from "react-icons/fa";


export default function LabUseEffect() {

  // Contador automático
  const [contador, setContador] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setContador(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  // Toggle de visibilidad
  const [visible, setVisible] = useState(true);

  // Reloj
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const reloj = setInterval(() => setHora(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(reloj);
  }, []);

  // Efecto con dependencia
  const [nombre, setNombre] = useState("React");
  useEffect(() => {
    console.log("El nombre cambió a:", nombre);
  }, [nombre]);

  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaSyncAlt className="icon" /> UseEffect
      </h1>

      {/* Definición */}
      <div className="card card-info">
        <strong>¿Qué hace useEffect?</strong>
        <p>
          <code>useEffect</code> es un hook que permite ejecutar código después del renderizado.  
          Se usa para efectos secundarios como timers, cambios de estado, suscripciones o fetch de datos.
        </p>
      </div>

      {/* Sintaxis */}
      <div className="card card-info">
        <h3 className="subtitle flex items-center gap-2">
          <FaCode className="icon" /> Sintaxis de useEffect
        </h3>
        <p>
          useEffect recibe una función y un arreglo de dependencias. La función se ejecuta después del render y cada vez que cambian las dependencias.
        </p>
        <pre className="code-block">
          <code>{`useEffect(() => {
                    // código a ejecutar
                }, [dependencias]);`}
          </code>
        </pre>
      </div>

      {/* Contador automático */}
      <div className="card card-info">
        <FaHashtag className="icon" /> <strong>Contador automático:</strong> {contador}
      </div>

      {/* Toggle */}
      <div className="card card-info">
        <FaToggleOn className="icon" /> <strong>Toggle de visibilidad:</strong>
        <button className="btn" onClick={() => setVisible(!visible)}>
          {visible ? "Ocultar" : "Mostrar"} componente
        </button>
        {visible && <p className="text-green-600">¡Componente visible!</p>}
      </div>

      {/* Reloj */}
      <div className="card card-info">
        <FaClock className="icon" /> <strong>Hora actual:</strong> {hora}
      </div>

      {/* Efecto con dependencia */}
      <div className="card card-info">
        <strong>Cambio de nombre:</strong>
        <input
          className="input"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
        <p>Nombre actual: {nombre}</p>
      </div>
    </div>
  );
}
