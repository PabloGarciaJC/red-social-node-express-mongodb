import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const Navbar = ({ onToggleUsuariosOnline }) => {
  const token = localStorage.getItem('token');
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  // No mostrar Navbar si no hay sesión y estamos en login o register
  if (!token && (location.pathname === '/login' || location.pathname === '/' || location.pathname === '/register')) {
    return null;
  }

  const handleHamburgerClick = () => {
    if (onToggleUsuariosOnline) onToggleUsuariosOnline();
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/feed" className="navbar-logo">RedSocial</Link>

      {/* Botón hamburguesa para móviles */}
      <button 
        className="navbar-hamburger" 
        onClick={handleHamburgerClick}
        aria-label="Toggle usuarios online"
      >
        ☰
      </button>

        {/* Panel deslizante */}
      <div className={`side-panel ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>×</button>
        <ul className="panel-links">
          <li><Link to="/feed" onClick={() => setMenuOpen(false)}>Feed</Link></li>
          <li><Link to="/profile" onClick={() => setMenuOpen(false)}>Perfil</Link></li>
          {token && (
            <li>
              <button onClick={handleLogout} className="navbar-logout">
                Cerrar sesión
              </button>
            </li>
          )}
        </ul>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/feed">Feed</Link></li>
          <li><Link to={`/profile/${encodeURIComponent(localStorage.getItem('nombre') || '')}`}>Perfil</Link></li>
        {/* <li><Link to="/messages">Mensajes</Link></li>
        <li><Link to="/friends">Amigos</Link></li>
        <li><Link to="/notifications">Notificaciones</Link></li> */}
        {token && (
          <li>
            <button onClick={handleLogout} className="navbar-logout">
              Cerrar sesión
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
