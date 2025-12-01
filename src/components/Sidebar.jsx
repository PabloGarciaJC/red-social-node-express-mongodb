import React from "react";
import { Link } from "react-router-dom";
import { 
  FaMapMarkedAlt, FaRocket, FaPuzzlePiece, FaFont, FaInbox, FaBolt, FaHourglassHalf, 
  FaGlobe, FaBrain, FaFlask, FaSlidersH, FaList, FaRoute, FaPenFancy, FaCog 
} from "react-icons/fa";

export default function Sidebar({ isOpen, onClose }) {
  const links = [
    { to: "/", label: "Introducción a Vite con React", icon: <FaRocket /> },
    { to: "/componentes", label: "Componentes", icon: <FaPuzzlePiece /> },
    { to: "/jsx", label: "JSX", icon: <FaFont /> },
    { to: "/props", label: "Props", icon: <FaInbox /> },
    { to: "/estado", label: "useState", icon: <FaBolt /> },
    { to: "/useeffect", label: "useEffect", icon: <FaHourglassHalf /> },
    { to: "/usecontext", label: "useContext", icon: <FaGlobe /> },
    { to: "/usecallback", label: "useCallback", icon: <FaBrain /> },
    { to: "/usememo", label: "useMemo", icon: <FaFlask /> },
    { to: "/eventos", label: "Manejo de eventos", icon: <FaSlidersH /> },
    { to: "/listas", label: "Renderizado de listas", icon: <FaList /> },
    { to: "/routers", label: "React Router", icon: <FaRoute /> },
    { to: "/formularios", label: "Formularios", icon: <FaPenFancy /> },
    { to: "/optimizar", label: "Optimización avanzada", icon: <FaCog /> },
  ];

  return (
    <>
      {/* Fondo oscuro cuando el sidebar está abierto en móvil */}
      {isOpen && <div className="overlay" onClick={onClose}></div>}

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2 className="sidebar-title">
          Roadmap: React + Vite
        </h2>
        <ul className="sidebar-links">
          {links.map((link) => (
            <li key={link.to}>
              <Link to={link.to} className="sidebar-link" onClick={onClose}>
                {link.icon} <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
