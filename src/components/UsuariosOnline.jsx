import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../index.css';

const UsuariosOnline = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/api/usuarios')
      .then(res => res.json())
      .then(data => {
        setUsuarios(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [location.pathname]);

  return (
    <aside className="usuarios-online">
      <h3 className="usuarios-online__title">Usuarios conectados</h3>
      {loading ? (
        <div>Cargando usuarios...</div>
      ) : (
        <ul className="usuarios-online__list">
          {usuarios.map((u, idx) => (
            <li key={idx} className="usuarios-online__item">
              <div
                className="usuarios-online__avatar-wrap"               
                onClick={() => navigate(`/profile/${encodeURIComponent(u.nombre)}`)}
                title={`Ver perfil de ${u.nombre}`}
              >
                <span className="usuarios-online__avatar">
                  {u.nombre && u.nombre.trim().length > 0
                    ? u.nombre.trim().replace(/\s+/g, '').substring(0,2).toUpperCase()
                    : '--'}
                </span>
                <span
                  className={`usuarios-online__status ${u.email === localStorage.getItem('email') ? 'online' : 'offline'}`}
                ></span>
                <span className="usuarios-online__nombre">{u.nombre}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default UsuariosOnline;
