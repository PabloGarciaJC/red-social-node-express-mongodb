import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../index.css';

const UsuariosOnline = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

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
              <div className="usuarios-online__avatar-wrap" style={{display:'flex',alignItems:'center'}}>
                <span
                  className="usuarios-online__avatar"
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: '50%',
                    background: '#cccccc',
                    color: '#222',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1em',
                    marginRight: 6,
                    border: '1px solid #eee',
                    textTransform: 'uppercase',
                    letterSpacing: 1
                  }}
                >
                  {u.nombre && u.nombre.trim().length > 0
                    ? u.nombre.trim().replace(/\s+/g, '').substring(0,2).toUpperCase()
                    : '--'}
                </span>
                <span
                  className="usuarios-online__status"
                  style={{
                    display: 'inline-block',
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: u.email === localStorage.getItem('email') ? '#4caf50' : '#bbb',
                    marginRight: 8
                  }}
                ></span>
              </div>
              <span className="usuarios-online__nombre">{u.nombre}</span>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default UsuariosOnline;
