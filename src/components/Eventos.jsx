// components/Eventos.jsx
import React, { useState } from "react";
import { FaRegKeyboard, FaCode, FaInfoCircle, FaBook, FaSitemap } from "react-icons/fa";

export default function Eventos() {
  const [mensaje, setMensaje] = useState("");

  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaRegKeyboard className="icon" /> Manejo de eventos en React
      </h1>

      {/* 📘 Nueva card: Definición completa */}
      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaBook className="icon" />
          <strong>¿Qué son los eventos en React?</strong>
        </div>
        <p className="mt-2">
          Los <strong>eventos en React</strong> son la forma de manejar interacciones del usuario
          (como clics, escritura, movimiento del mouse o envío de formularios),
          de manera similar al HTML tradicional, pero con algunas diferencias.
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Los nombres de los eventos usan <strong>camelCase</strong> (por ejemplo: <code>onClick</code>, <code>onChange</code>).</li>
          <li>Los manejadores se pasan como <strong>funciones</strong>, no como cadenas de texto.</li>
          <li>React usa un sistema de <strong>eventos sintéticos</strong> para mejorar compatibilidad y rendimiento.</li>
        </ul>
      </div>

      {/* 💡 Qué hace */}
      <div className="card card-info flex items-center gap-2">
        <FaInfoCircle className="icon" />
        <strong>Qué hace:</strong> React permite manejar eventos como en HTML,
        pero usando <code>camelCase</code> y pasando funciones como manejadores.
        Aquí mostramos cómo capturar el valor de un input y un evento de botón.
      </div>

      {/* ⚙️ Ejemplo práctico */}
      <div className="card card-info">
        <input
          className="input"
          placeholder="Escribe algo..."
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <p>
          Mensaje: <strong>{mensaje}</strong>
        </p>
        <button
          className="btn btn-primary"
          onClick={() => alert(`Se envió: ${mensaje}`)}
        >
          Enviar
        </button>
      </div>

      {/* 📄 Ejemplo de código */}
      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaCode className="icon" />
          <strong>Ejemplo de código:</strong>
        </div>
        <pre className="code-block">
          <code>
{`const [mensaje, setMensaje] = useState("");

// Evento onChange: se ejecuta cada vez que cambia el input
<input
  placeholder="Escribe algo..."
  value={mensaje}
  onChange={e => setMensaje(e.target.value)}
/>

// Evento onClick: se ejecuta cuando se hace clic en el botón
<button onClick={() => alert(\`Se envió: \${mensaje}\`)}>Enviar</button>`}
          </code>
        </pre>
      </div>

      {/* 🧩 Nueva Card: Explicación visual paso a paso */}
      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaSitemap className="icon" />
          <strong>Cómo funciona el manejo de eventos (resumen visual):</strong>
        </div>

        <ol className="list-decimal ml-6 mt-2 space-y-2">
          <li>
            El usuario escribe en el <code>input</code> → se dispara el evento <code>onChange</code>.
          </li>
          <li>
            La función manejadora <code>setMensaje(e.target.value)</code> actualiza el estado con el nuevo valor.
          </li>
          <li>
            React vuelve a renderizar el componente con el nuevo valor del estado.
          </li>
          <li>
            Al hacer clic en el botón, se ejecuta el evento <code>onClick</code> que muestra el mensaje en una alerta.
          </li>
        </ol>

        <pre className="code-block mt-4">
          <code>
{`Usuario escribe → onChange() → setMensaje() → render()
Usuario hace clic → onClick() → alert("Se envió: ...")`}
          </code>
        </pre>

        <p className="mt-2">
          ⚡ <strong>En resumen:</strong> Los eventos en React funcionan de forma similar
          al HTML, pero con una sintaxis más limpia y declarativa. Cada evento ejecuta
          una función que puede actualizar el estado o ejecutar acciones personalizadas.
        </p>
      </div>
    </div>
  );
}
