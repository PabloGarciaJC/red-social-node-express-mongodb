// components/Componentes.jsx
import React from "react";
import { FaCode, FaBolt, FaCubes, FaPuzzlePiece } from "react-icons/fa";

// Componente hijo funcional 1
function CardA() {
  return (
    <div className="card card-info">
      <h3 className="subtitle flex items-center gap-2">
        <FaCode className="icon" /> Componente Funcional A
      </h3>
      <p>Este es un ejemplo de componente funcional estático.</p>
      <p>
        <strong>Sintaxis:</strong>{" "}
        <code>
          {`function MiComponente() { return <div>Contenido</div> }`}
        </code>
      </p>
    </div>
  );
}

// Componente hijo funcional 2 con arrow function
const CardB = () => (
  <div className="card card-info">
    <h3 className="subtitle flex items-center gap-2">
      <FaBolt className="icon" /> Componente Funcional B
    </h3>
    <p>Otro componente funcional independiente.</p>
    <p>
      <strong>Sintaxis con arrow function:</strong>{" "}
      <code>{`const MiComponente = () => <div>Contenido</div>`}</code>
    </p>
  </div>
);

// Componente hijo de clase
class CardC extends React.Component {
  render() {
    return (
      <div className="card card-info">
        <h3 className="subtitle flex items-center gap-2">
          <FaCubes className="icon" /> Componente de Clase C
        </h3>
        <p>Este componente usa la sintaxis clásica de React.</p>
        <p>
          <strong>Sintaxis de clase:</strong>{" "}
          <code>
            {`class MiComponente extends React.Component { render() { return <div>Contenido</div> } }`}
          </code>
        </p>
      </div>
    );
  }
}

// Componente principal
export default function Componentes() {
  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaPuzzlePiece className="icon" /> Componentes
      </h1>

      {/* Descripción */}
      <div className="card card-info">
        <strong>¿Qué son los componentes?</strong>
        <p>
          Los componentes en React son bloques reutilizables de interfaz que
          pueden ser funcionales o de clase. Permiten organizar la UI,
          encapsular lógica y reutilizar código. No siempre necesitan props ni
          children.
        </p>
      </div>

      <p className="mb-4">
        Cada componente incluye un párrafo con su sintaxis correspondiente.
      </p>

      {/* Renderizado de componentes hijos */}
      <CardA />
      <CardB />
      <CardC />
    </div>
  );
}
