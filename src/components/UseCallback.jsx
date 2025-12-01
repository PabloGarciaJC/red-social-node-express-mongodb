// components/UseCallback.jsx
import React, { useState, useCallback } from "react";
import { FaBrain, FaLightbulb, FaCode, FaBook, FaSitemap } from "react-icons/fa";

export default function UseCallback() {
  const [contador, setContador] = useState(0);

  // useCallback memoriza la función para no recrearla en cada render
  const incrementar = useCallback(() => {
    setContador((c) => c + 1);
  }, []);

  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaBrain className="icon" /> UseCallback
      </h1>

      {/* Nueva card: Definición completa de useCallback */}
      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaBook className="icon" />
          <strong>¿Qué es useCallback?</strong>
        </div>
        <p className="mt-2">
          <code>useCallback</code> es un <strong>hook de React</strong> que sirve para
          <strong> memorizar funciones</strong>, evitando que se vuelvan a crear en cada render.
        </p>
        <p className="mt-2">
          Esto es útil cuando pasas funciones como <code>props</code> a componentes hijos,
          ya que mantiene la misma referencia de la función entre renders, 
          evitando renderizados innecesarios y mejorando el rendimiento.
        </p>
      </div>

      {/* Qué hace useCallback */}
      <div className="card card-info flex items-center gap-2">
        <FaLightbulb className="icon" />
        <strong>Qué hace useCallback:</strong> Evita que una función se vuelva a crear en cada render, 
        lo cual es útil cuando se pasa como prop a componentes hijos que dependen 
        de la estabilidad de la referencia de la función.
      </div>

      {/* Ejemplo práctico */}
      <div className="card card-info">
        <p>
          Contador actual: <strong>{contador}</strong>
        </p>
        <button className="btn btn-primary" onClick={incrementar}>
          Incrementar
        </button>
      </div>

      {/* Ejemplo de código */}
      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaCode className="icon" />
          <strong>Ejemplo de código:</strong>
        </div>
        <pre className="code-block">
          <code>
            {`const [contador, setContador] = useState(0);

            // useCallback memoriza la función
            const incrementar = useCallback(() => {
              setContador(c => c + 1);
            }, []);

            <button onClick={incrementar}>Incrementar</button>`}
          </code>
        </pre>
      </div>

      {/* Nueva Card: Explicación visual paso a paso */}
      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaSitemap className="icon" />
          <strong>Cómo funciona useCallback (resumen visual):</strong>
        </div>

        <ol className="list-decimal ml-6 mt-2 space-y-2">
          <li>
            <strong>Sin useCallback:</strong> Cada vez que el componente se renderiza,
            React crea una nueva versión de la función.
          </li>
          <li>
            <strong>Con useCallback:</strong> La función se memoriza (caché) y solo se
            vuelve a crear si cambian las dependencias del array <code>[]</code>.
          </li>
          <li>
            <strong>Beneficio:</strong> Si pasas esa función a un hijo, 
            el hijo no se re-renderiza innecesariamente.
          </li>
        </ol>

        <pre className="code-block mt-4">
          <code>
            {`Render 1: crea la función incrementar()
            Render 2: useCallback devuelve la MISMA referencia
            Render 3: la función no cambia (si dependencias no cambian)`}          
          </code>
        </pre>

        <p className="mt-2">
          ⚡ <strong>En resumen:</strong> <code>useCallback</code> es ideal cuando trabajas con 
          componentes hijos optimizados con <code>React.memo()</code> o cuando necesitas 
          mantener la misma referencia de una función entre renders.
        </p>
      </div>
    </div>
  );
}
