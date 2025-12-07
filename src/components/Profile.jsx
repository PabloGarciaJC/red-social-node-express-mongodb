

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../index.css';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { usuario } = useParams();

  useEffect(() => {
    fetch('http://localhost:3000/api/profile')
      .then(res => res.json())
      .then(data => {
        // Filtrar por usuario si viene en la ruta
        if (usuario) {
          const normalizar = s => s && s.trim().toLowerCase().replace(/\s+/g, '');
          const found = data.find(p => normalizar(p.usuario) === normalizar(usuario));
          setProfile(found || null);
        } else {
          setProfile(data[0]);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [usuario]);

  return (
    <div className="profile">
      <h2 className="profile__title">Perfil</h2>
      {loading ? (
        <div>Cargando perfil...</div>
      ) : profile ? (
        <div className="profile__card">
          {/* El avatar debe venir de la colección de usuarios, no del perfil */}
          <div className="profile__info">
            <div className="profile__name">{profile.usuario}</div>
            <div className="profile__bio">{profile.bio}</div>
            <div className="profile__stats">
              {profile.intereses && (
                <span>Intereses: <span>{profile.intereses.join(', ')}</span></span>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>No se encontró perfil.</div>
      )}
    </div>
  );
};

export default Profile;
