
import {
  FaCode,
  FaReact,
  FaQuestionCircle,
} from "react-icons/fa";

export default function JSXIntro() {
  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaCode className="icon" /> JSX
      </h1>

      {/* Definición */}
      <div className="card card-info">
        <strong className="flex items-center gap-2">
          <FaQuestionCircle className="icon" /> ¿Qué es JSX?
        </strong>
        <p>
          <strong>JSX</strong> (JavaScript XML) es una extensión de JavaScript que
          permite escribir código con una sintaxis parecida a HTML dentro de React.
          Se utiliza para definir la estructura visual de los componentes, mezclando
          la lógica de JavaScript con la presentación.
        </p>
        <p>
          JSX no es HTML real, sino una capa sintáctica que React convierte
          internamente en llamadas a <code>React.createElement()</code>.
        </p>
      </div>

      {/* Ejemplo simple */}
      <div className="card card-info">
        <h3 className="subtitle flex items-center gap-2">
          <FaReact className="icon" /> Ejemplo básico
        </h3>
        <p>
          En este ejemplo, el componente <code>Saludo</code> retorna un elemento JSX:
        </p>
        <pre className="code-block">
          <code>{`function Saludo() {const nombre = "React";
  return <h1>Hola, {nombre}!</h1>;
}`}</code>
        </pre>
        <p>Este JSX se transforma internamente en:</p>
        <pre className="code-block">
          <code>{`React.createElement("h1", null, "Hola, React!");`}</code>
        </pre>
        <p>
          JSX permite incrustar variables y expresiones entre llaves <code>{`{}`}</code>,
          y cada componente debe devolver un solo elemento raíz.
        </p>
      </div>
    </div>
  );
}
