// components/Optimizar.jsx
import React, { useState, useMemo } from "react";
import { FaCog, FaCode, FaInfoCircle } from "react-icons/fa";

// Componente hijo para mostrar número
function Numero({ valor }) {
  console.log("Renderizado de Numero:", valor);
  return <p>{valor}</p>;
}

export default function Optimizar() {
  const [numero, setNumero] = useState(0);

  // Array memoizado para optimización
  const numeros = useMemo(() => {
    console.log("Calculando array de numeros...");
    return Array.from({ length: numero }, (_, i) => i + 1);
  }, [numero]);

  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaCog className="icon" /> Optimización avanzada en React
      </h1>

      <div className="card card-info">
        <FaInfoCircle className="icon" />
        <strong>Optimización:</strong> React re-renderiza componentes cuando cambia el estado. <code>useMemo</code> permite memorizar cálculos costosos para que solo se recalculen cuando sea necesario.
      </div>

      <div className="card card-info">
        <label>
          Introduce un número:{" "}
          <input
            type="number"
            value={numero}
            onChange={(e) => setNumero(Number(e.target.value))}
            className="input"
          />
        </label>
      </div>

      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaCode className="icon" />
          <strong>Array de números:</strong>
        </div>
        <pre className="code-block">
          <code>
            {`const [numero, setNumero] = useState(0);

            const numeros = useMemo(() => {
              return Array.from({ length: numero }, (_, i) => i + 1);
            }, [numero]);

            {numeros.map(n => <Numero key={n} valor={n} />)}`}
          </code>
        </pre>
      </div>
    </div>
  );
}
