import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  // No mostrar Navbar si no hay sesión y estamos en login o register
  if (!token && (location.pathname === '/login' || location.pathname === '/' || location.pathname === '/register')) {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">RedSocial</div>
      <ul className="navbar-links">
        <li><Link to="/feed">Feed</Link></li>
        <li><Link to="/profile">Perfil</Link></li>
        <li><Link to="/messages">Mensajes</Link></li>
        <li><Link to="/friends">Amigos</Link></li>
        <li><Link to="/notifications">Notificaciones</Link></li>
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
