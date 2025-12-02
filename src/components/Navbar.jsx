
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">RedSocial</div>
    <ul className="navbar-links">
      <li><Link to="/">Feed</Link></li>
      <li><Link to="/profile">Perfil</Link></li>
      <li><Link to="/messages">Mensajes</Link></li>
      <li><Link to="/friends">Amigos</Link></li>
      <li><Link to="/notifications">Notificaciones</Link></li>
    </ul>
  </nav>
);

export default Navbar;
