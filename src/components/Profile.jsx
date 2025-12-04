

import React, { useEffect, useState } from 'react';
import '../index.css';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/profile')
      .then(res => res.json())
      .then(data => {
        // Puedes elegir el primer perfil o filtrar por usuario
        setProfile(data[0]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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
