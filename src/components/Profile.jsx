

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

  const [editMode, setEditMode] = useState(false);
  const [bio, setBio] = useState("");
  const [intereses, setIntereses] = useState("");
  const [nombre, setNombre] = useState("");
  const [msg, setMsg] = useState("");
  const usuarioLog = localStorage.getItem('nombre') || localStorage.getItem('usuario');

  useEffect(() => {
    if (profile) {
      setBio(profile.bio || "");
      setIntereses(profile.intereses ? profile.intereses.join(', ') : "");
      setNombre(profile.usuario || "");
    }
  }, [profile]);

  const handleSave = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const res = await fetch(`http://localhost:3000/api/profile/${encodeURIComponent(profile.usuario)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          usuario: nombre,
          bio,
          intereses: intereses.split(',').map(i => i.trim()).filter(Boolean)
        })
      });
      const data = await res.json();
      if (res.ok) {
        setMsg('Perfil actualizado correctamente');
        setEditMode(false);
        setProfile(p => ({ ...p, usuario: nombre, bio, intereses: intereses.split(',').map(i => i.trim()).filter(Boolean) }));
      } else {
        setMsg(data.error || 'Error al actualizar');
      }
    } catch {
      setMsg('Error de red');
    }
  };

  return (
    <div className="profile">
      <h2 className="profile__title">Perfil</h2>
      {loading ? (
        <div>Cargando perfil...</div>
      ) : profile ? (
        <div className="profile__card">
          <div className="profile__info">
            <div className="profile__name">{profile.usuario}</div>
            {editMode ? (
              <form className="profile__form profile__form--edit" onSubmit={handleSave}>
                <div className="profile__form-group">
                  <label className="profile__label">Nombre de usuario:</label>
                  <input className="profile__input" type="text" value={nombre} onChange={e => setNombre(e.target.value)} readOnly />
                </div>
                <div className="profile__form-group">
                  <label className="profile__label">Bio:</label>
                  <textarea className="profile__textarea" value={bio} onChange={e => setBio(e.target.value)} rows={2} />
                </div>
                <div className="profile__form-group">
                  <label className="profile__label">Intereses (separados por coma):</label>
                  <input className="profile__input" type="text" value={intereses} onChange={e => setIntereses(e.target.value)} />
                </div>
                <div className="profile__form-actions">
                  <button className="profile__btn profile__btn--save" type="submit">Guardar</button>
                  <button className="profile__btn profile__btn--cancel" type="button" onClick={() => setEditMode(false)}>Cancelar</button>
                </div>
              </form>
            ) : (
              <>
                <div className="profile__bio">{profile.bio}</div>
                <div className="profile__stats">
                  {profile.intereses && (
                    <span>Intereses: <span>{profile.intereses.join(', ')}</span></span>
                  )}
                </div>
                {usuarioLog && (() => {
                  const norm = s => s && s.trim().toLowerCase().replace(/\s+/g, '');
                  return norm(profile.usuario) === norm(usuarioLog);
                })() && (
                    <button className="profile__btn profile__btn--edit" onClick={() => setEditMode(true)}>Editar perfil</button>
                  )}
              </>
            )}
            {/* Mensaje de éxito/error solo fuera del form */}
            {!editMode && msg && (
              <div className={
                msg.toLowerCase().includes('correctamente') ? 'profile__msg profile__msg--success' : 'profile__msg profile__msg--error'}>
                {msg}
                <button className="profile__msg-close" type="button" title="Cerrar" onClick={() => setMsg("")}>×</button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>No se encontró perfil.</div>
      )}
    </div>
  );
};

export default Profile;
