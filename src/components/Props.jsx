import { FaInbox, FaExchangeAlt, FaCogs, FaReact } from "react-icons/fa";

export default function PropsIntro() {
  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaInbox className="icon" /> Props
      </h1>

      {/* Definición */}
      <div className="card card-info">
        <strong className="flex items-center gap-2">
          <FaExchangeAlt className="icon" /> ¿Qué son las Props?
        </strong>
        <p>
          En <strong>React</strong>, las <strong>props</strong> (abreviatura de “properties”)
          son los <em>parámetros</em> que un componente padre envía a un componente hijo.
          Permiten que los componentes sean <strong>reutilizables y dinámicos</strong>,
          al recibir datos o funciones que cambian su comportamiento o contenido.
        </p>
        <p>
          Las props son <strong>inmutables</strong> dentro del componente hijo:
          no deben modificarse, solo usarse para mostrar información o ejecutar acciones.
        </p>
      </div>

      {/* Ejemplo básico */}
      <div className="card card-info">
        <h3 className="subtitle flex items-center gap-2">
          <FaCogs className="icon" /> Ejemplo básico
        </h3>
        <p>El componente hijo <code>Saludo</code> recibe una prop llamada <code>nombre</code>:</p>
        <pre className="code-block">
          <code>{`function Saludo({ nombre }) {
                    return <h2>Hola, {nombre}!</h2>;
                  }

                  export default function App() {
                    return <Saludo nombre="Ana" />;
                  }`}
          </code>
        </pre>
        <p>El resultado será:</p>
        <pre className="code-block">
          <code>{`Hola, Ana!`}</code>
        </pre>
        <p>
          En este ejemplo, <code>nombre</code> se pasa como prop desde <code>App</code> al componente <code>Saludo</code>.
        </p>
      </div>

      {/* Tipos de props */}
      <div className="card card-info">
        <h3 className="subtitle flex items-center gap-2">
          <FaReact className="icon" /> Tipos de datos que pueden ser props
        </h3>
        <ul className="list-disc pl-6">
          <li>String → <code>{"nombre='Ana'"}</code></li>
          <li>Number → <code>{"edad={25}"}</code></li>
          <li>Boolean → <code>{"activo={true}"}</code></li>
          <li>Array → <code>{"frutas={['Manzana', 'Banana']}"}</code></li>
          <li>Objeto → <code>{"usuario={{ nombre: 'Ana', edad: 25 }}"}</code></li>
          <li>Función → <code>{"saludo={miFuncion}"}</code></li>
          <li>Elemento JSX → <code>{"elementoJSX={<p>Hola</p>}"}</code></li>
          <li>Otro Componente → <code>{"componente={() => <Otro />}"}</code></li>
        </ul>
      </div>
    </div>
  );
}
