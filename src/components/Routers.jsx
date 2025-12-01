// components/RouterEjemplo.jsx
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaCode,
  FaRoute,
  FaBook,
  FaSitemap,
  FaArrowRight,
} from "react-icons/fa";

// Componentes simples para las rutas
function Home() {
  return (
    <p className="route-text">
      <FaHome className="icon" /> Bienvenido a <strong>Home</strong>
    </p>
  );
}

function About() {
  return (
    <p className="route-text">
      <FaInfoCircle className="icon" /> Esta es la página <strong>About</strong>
    </p>
  );
}

export default function RouterEjemplo() {
  return (
    <div className="container">
      <h1 className="title flex items-center gap-2">
        <FaRoute className="icon" /> React Router - Ejemplo básico
      </h1>

      {/* 📘 Nueva card: Definición completa */}
      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaBook className="icon" />
          <strong>¿Qué es React Router?</strong>
        </div>
        <p className="mt-2">
          <strong>React Router</strong> es una librería que permite manejar
          la <strong>navegación entre páginas o vistas</strong> dentro de una
          aplicación React sin necesidad de recargar toda la página.
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>
            Usa componentes como <code>{`<Routes>`}</code> y{" "}
            <code>{`<Route>`}</code> para definir qué se muestra según la URL.
          </li>
          <li>
            Usa <code>{`<Link>`}</code> para navegar entre rutas sin refrescar la página.
          </li>
          <li>
            Ideal para crear aplicaciones <strong>SPA (Single Page Applications)</strong>.
          </li>
        </ul>
      </div>

      {/* Qué hace */}
      <div className="card card-info flex items-center gap-2">
        <FaInfoCircle className="icon" />
        <strong>Qué hace:</strong> Permite manejar rutas y navegación en tu aplicación
        React sin recargar la página. Aquí mostramos un ejemplo simple con dos rutas:
        Home y About.
      </div>

      {/* Enlaces de navegación */}
      <div className="card card-info">
        <strong>Enlaces de navegación:</strong>
        <div className="flex gap-4 mt-2">
          <Link to="/router/home" className="link">
            Home
          </Link>
          <Link to="/router/about" className="link">
            About
          </Link>
        </div>
      </div>

      {/* Contenido dinámico según la ruta */}
      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaCode className="icon" />
          <strong>Contenido de la ruta:</strong>
        </div>
        <pre className="code-block">
          <code>
            {`<Link to="/home">Home</Link>
            <Link to="/about">About</Link>

            <Routes>
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
            </Routes>`}
          </code>
        </pre>
      </div>

      {/* Nueva card: Explicación visual paso a paso */}
      <div className="card card-info">
        <div className="flex items-center gap-2">
          <FaSitemap className="icon" />
          <strong>Cómo funciona React Router (resumen visual):</strong>
        </div>

        <ol className="list-decimal ml-6 mt-2 space-y-2">
          <li>
            El usuario hace clic en un <code>{`<Link>`}</code> (por ejemplo: “Home”).
          </li>
          <li>
            React Router actualiza la URL (por ejemplo: <code>/router/home</code>)
            sin recargar la página.
          </li>
          <li>
            El componente <code>{`<Routes>`}</code> busca un{" "}
            <code>{`<Route>`}</code> cuyo <code>path</code> coincida con la URL.
          </li>
          <li>
            Renderiza el componente correspondiente (<code>&lt;Home /&gt;</code> o{" "}
            <code>&lt;About /&gt;</code>).
          </li>
        </ol>

        <pre className="code-block mt-4">
          <code>
            {`Usuario hace clic en <Link to="/router/home"> →
            React Router detecta la ruta →
            Muestra <Home /> sin recargar la página`}
          </code>
        </pre>

        <p className="mt-2">
          ⚡ <strong>En resumen:</strong> React Router permite crear navegación
          fluida dentro de tu app React. Cada cambio de URL muestra un componente
          distinto sin recargar el sitio completo.
        </p>
      </div>

      {/* Extra: recordatorio de estructura base */}
      <div className="card card-info">
        <FaArrowRight className="icon" />
        <strong>Estructura típica de una app con Router:</strong>
        <pre className="code-block mt-2">
          <code>
            {`import { BrowserRouter } from "react-router-dom";

            <BrowserRouter>
              <App />  {/* Contiene tus <Routes> y <Link> */}
            </BrowserRouter>`}
          </code>
        </pre>
      </div>
    </div>
  );
}
