// components/Listas.jsx
import React from "react";
import {
  FaListAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaCode,
  FaInfoCircle,
  FaBook,
  FaSitemap,
} from "react-icons/fa";

export default function Listas() {
  const tareas = [
    { id: 1, nombre: "Aprender React", completada: true },
    { id: 2, nombre: "Practicar Hooks", completada: false },
    { id: 3, nombre: "Crear proyecto", completada: false },
  ];

  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaListAlt className="icon" /> Listas y condicionales en React
      </h1>

      {/* 📘 Nueva card: Definición completa */}
      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaBook className="icon" />
          <strong>¿Qué son las listas y condicionales en React?</strong>
        </div>
        <p className="mt-2">
          En React, las <strong>listas</strong> permiten renderizar múltiples elementos
          de forma dinámica a partir de un arreglo usando el método <code>map()</code>.
          Los <strong>condicionales</strong> permiten mostrar o no ciertos elementos
          según alguna condición.
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>
            Cada elemento de la lista debe tener una propiedad única llamada{" "}
            <code>key</code> para que React pueda identificarlo.
          </li>
          <li>
            Los condicionales en JSX se pueden escribir con{" "}
            <code>ternarios</code> (<code>condición ? A : B</code>) o con{" "}
            <code>&&</code> para mostrar algo solo si se cumple una condición.
          </li>
          <li>
            React actualiza solo los elementos que cambian, optimizando el rendimiento.
          </li>
        </ul>
      </div>

      {/* 💡 Qué hace */}
      <div className="card card-info flex items-center gap-2">
        <FaInfoCircle className="icon" />
        <strong>Qué hace:</strong> En React puedes renderizar listas usando{" "}
        <code>map()</code> y manejar condicionales dentro del JSX, como mostrar un icono
        de completado o pendiente.
      </div>

      {/* ⚙️ Ejemplo práctico */}
      <div className="card card-info">
        <ul>
          {tareas.map((tarea) => (
            <li key={tarea.id} className="flex items-center gap-2">
              {tarea.nombre}{" "}
              {tarea.completada ? (
                <FaCheckCircle className="icon text-green-500" />
              ) : (
                <FaTimesCircle className="icon text-red-500" />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* 📄 Ejemplo de código */}
      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaCode className="icon" />
          <strong>Ejemplo de código:</strong>
        </div>
        <pre className="code-block">
          <code>
{`const tareas = [
  { id: 1, nombre: "Aprender React", completada: true },
  { id: 2, nombre: "Practicar Hooks", completada: false },
  { id: 3, nombre: "Crear proyecto", completada: false },
];

<ul>
  {tareas.map(tarea => (
    <li key={tarea.id}>
      {tarea.nombre}
      {tarea.completada ? <FaCheckCircle /> : <FaTimesCircle />}
    </li>
  ))}
</ul>`}
          </code>
        </pre>
      </div>

      {/* 🧩 Nueva Card: Explicación visual paso a paso */}
      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaSitemap className="icon" />
          <strong>Cómo funciona el renderizado de listas y condicionales:</strong>
        </div>

        <ol className="list-decimal ml-6 mt-2 space-y-2">
          <li>
            React toma el arreglo <code>tareas</code> y ejecuta <code>map()</code> para
            recorrerlo.
          </li>
          <li>
            Por cada elemento del arreglo, se genera un{" "}
            <code>&lt;li&gt;</code> con su contenido.
          </li>
          <li>
            Se evalúa el condicional <code>tarea.completada ? ✅ : ❌</code> para mostrar
            el ícono correcto.
          </li>
          <li>
            Cada <code>&lt;li&gt;</code> tiene una <code>key</code> única para optimizar el renderizado.
          </li>
        </ol>

        <pre className="code-block mt-4">
          <code>
{`tareas.map() → genera una lista de <li>
tarea.completada === true → muestra <FaCheckCircle />
tarea.completada === false → muestra <FaTimesCircle />`}
          </code>
        </pre>

        <p className="mt-2">
          ⚡ <strong>En resumen:</strong> Usar <code>map()</code> te permite crear listas
          dinámicas, y los condicionales en JSX te ayudan a mostrar información
          adaptada al estado de cada elemento.
        </p>
      </div>
    </div>
  );
}
