// components/UseEffectIntro.jsx
import React, { useState, useEffect } from "react";
import { FaBolt, FaSyncAlt, FaHandsHelping, FaCode } from "react-icons/fa";

export default function UseEffectIntro() {
  const [contador, setContador] = useState(0);

  // useEffect que se ejecuta cada vez que cambia el contador
  useEffect(() => {
    console.log("El contador cambió a:", contador);
  }, [contador]);

  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaBolt className="icon" /> UseEffect
      </h1>

      {/* Definición */}
      <div className="card card-info">
        <strong className="flex items-center gap-2">
          <FaHandsHelping className="icon" /> ¿Qué es useEffect?
        </strong>
        <p>
          <code>useEffect</code> es un <strong>hook</strong> de React que permite ejecutar código después de que un componente se renderiza.  
          Se utiliza para efectos secundarios como temporizadores, suscripciones o reaccionar a cambios de estado o props.
        </p>
      </div>

      {/* Explicación de la sintaxis */}
      <div className="card card-info">
        <h3 className="subtitle flex items-center gap-2">
          <FaSyncAlt className="icon" /> Sintaxis de useEffect
        </h3>
        <p>
          useEffect recibe una función y un arreglo de dependencias. La función se ejecuta después del render y cada vez que cambian las dependencias.
        </p>
        <pre className="code-block">
          <code>{`useEffect(() => {
  // código a ejecutar
}, [dependencias]);`}</code>
        </pre>
      </div>

      {/* Ejemplo práctico */}
      <div className="card card-info">
        <h3 className="subtitle flex items-center gap-2">
          <FaCode className="icon" /> Ejemplo práctico
        </h3>
        <p>
          Cada vez que cambias el contador, <code>useEffect</code> se ejecuta y muestra un mensaje en la consola:
        </p>
        <pre className="code-block">
          <code>{`const [contador, setContador] = useState(0);

useEffect(() => {
  console.log("El contador cambió a:", contador);
}, [contador]);`}</code>
        </pre>

        <div className="mt-3 flex items-center gap-2">
          <button className="btn" onClick={() => setContador(contador + 1)}>
            +1
          </button>
          <span>Contador: {contador}</span>
        </div>
      </div>
    </div>
  );
}
