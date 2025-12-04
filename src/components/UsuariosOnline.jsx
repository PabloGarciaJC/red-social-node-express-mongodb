import React, { useEffect, useState } from 'react';
import '../index.css';

const UsuariosOnline = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/usuarios')
      .then(res => res.json())
      .then(data => {
        setUsuarios(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <aside className="usuarios-online">
      <h3 className="usuarios-online__title">Usuarios conectados</h3>
      {loading ? (
        <div>Cargando usuarios...</div>
      ) : (
        <ul className="usuarios-online__list">
          {usuarios.map((u, idx) => (
            <li key={idx} className="usuarios-online__item">
              <div className="usuarios-online__avatar-wrap">
                <img src={u.avatar || 'https://randomuser.me/api/portraits/lego/1.jpg'} alt={u.nombre} className="usuarios-online__avatar" />
                <span className={`usuarios-online__status ${u.online ? 'online' : 'offline'}`}></span>
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
