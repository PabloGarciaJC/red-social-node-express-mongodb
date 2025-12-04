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
              <div className="usuarios-online__avatar-wrap" style={{display:'flex',alignItems:'center'}}>
                <img
                  src={u.avatar && u.avatar.trim() ? u.avatar : `https://ui-avatars.com/api/?name=${encodeURIComponent(u.nombre)}&background=cccccc&color=555555`}
                  alt={u.nombre}
                  className="usuarios-online__avatar"
                  style={{width:28,height:28,borderRadius:'50%',objectFit:'cover',marginRight:6,border:'1px solid #eee'}}
                />
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
