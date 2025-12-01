// components/UseContextIntro.jsx
import React, { createContext, useContext, useState } from "react";
import { FaGlobe, FaLightbulb, FaCode, FaSitemap, FaBook } from "react-icons/fa";

// Crear el contexto
const TemaContext = createContext();

// Componente hijo que consume el contexto
function TemaBoton() {
  const { tema, toggleTema } = useContext(TemaContext);

  return (
    <button
      className={`btn ${tema === "claro" ? "btn-light" : "btn-dark"}`}
      onClick={toggleTema}
    >
      Cambiar tema (actual: {tema})
    </button>
  );
}

// Componente principal
export default function UseContextIntro() {
  const [tema, setTema] = useState("claro");
  const toggleTema = () => setTema(tema === "claro" ? "oscuro" : "claro");

  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaGlobe className="icon" /> UseContext
      </h1>

      {/* Nueva card: Definición completa de useContext */}
      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaBook className="icon" />
          <strong>¿Qué es useContext?</strong>
        </div>
        <p className="mt-2">
          <code>useContext</code> es un <strong>hook de React</strong> que permite compartir
          información (como estados o funciones) entre componentes sin tener que
          pasar <code>props</code> manualmente en cada nivel del árbol de componentes.
        </p>
        <p className="mt-2">
          En lugar de pasar props de <em>padre → hijo → nieto</em>, usamos un{" "}
          <strong>contexto global</strong> que permite acceder directamente a los datos
          desde cualquier componente dentro del <code>Provider</code>.
        </p>
      </div>

      {/* Qué hace useContext */}
      <div className="card card-info flex items-center gap-2">
        <FaLightbulb className="icon" />
        <strong>Qué hace useContext:</strong> Permite compartir información entre componentes sin necesidad de pasar props manualmente por cada nivel.
      </div>

      {/* Sintaxis base */}
      <div className="card card-info">
        <h3 className="subtitle flex items-center gap-2">
          <FaCode className="icon" /> Sintaxis de useContext
        </h3>
        <p>
          Primero se crea un contexto con <code>createContext()</code>, luego se
          envuelve el componente con un <code>Provider</code> y finalmente los
          componentes hijos pueden consumir los datos con{" "}
          <code>useContext(NombreDelContexto)</code>.
        </p>
        <pre className="code-block">
          <code>
            {`const MiContexto = createContext();

            // En el padre:
            <MiContexto.Provider value={valor}>
              <Hijo />
            </MiContexto.Provider>

            // En el hijo:
            const valor = useContext(MiContexto);`}
          </code>
        </pre>
      </div>

      {/* Ejemplo práctico */}
      <div className="card card-info">
        <p>
          El tema actual es: <strong>{tema}</strong>
        </p>
        <TemaContext.Provider value={{ tema, toggleTema }}>
          <TemaBoton />
        </TemaContext.Provider>
      </div>

      {/* Ejemplo completo */}
      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaCode className="icon" />
          <strong>Ejemplo completo de código:</strong>
        </div>
        <pre className="code-block">
          <code>
            {`const TemaContext = createContext();

              function TemaBoton() {
                const { tema, toggleTema } = useContext(TemaContext);
                return (
                  <button onClick={toggleTema}>
                    Cambiar tema (actual: {tema})
                  </button>
                );
              }

              export default function App() {
                const [tema, setTema] = useState("claro");
                const toggleTema = () => setTema(tema === "claro" ? "oscuro" : "claro");

                return (
                  <TemaContext.Provider value={{ tema, toggleTema }}>
                    <TemaBoton />
                  </TemaContext.Provider>
                );
              }`}
          </code>
        </pre>
      </div>

      {/* Nueva Card: Explicación visual paso a paso */}
      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaSitemap className="icon" />
          <strong>Cómo funciona useContext (resumen visual):</strong>
        </div>

        <ol className="list-decimal ml-6 mt-2 space-y-2">
          <li>
            <strong>createContext()</strong> → Crea un “canal” para compartir datos.
          </li>
          <li>
            <strong>Provider</strong> → Comparte el valor (estado o funciones) con
            todos los componentes hijos.
          </li>
          <li>
            <strong>useContext()</strong> → Permite a un hijo acceder al valor sin
            necesidad de recibir props.
          </li>
        </ol>

        <pre className="code-block mt-4">
          <code>
            {`UseContextIntro
            │
            ├── TemaContext.Provider (value = { tema, toggleTema })
            │       │
            │       └── TemaBoton
            │             └── useContext(TemaContext)
            │                   ↳ { tema, toggleTema }`}
          </code>
        </pre>

        <p className="mt-2">
          🔁 Esto evita tener que pasar <code>props</code> manualmente por cada nivel
          y hace el código más limpio, reutilizable y mantenible.
        </p>
      </div>
    </div>
  );
}
