import '../index.css';
import React, { useEffect, useState } from 'react';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contenido, setContenido] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/api/publicaciones')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleCrear = async (e) => {
    e.preventDefault();
    setError("");
    if (!contenido.trim()) {
      setError("El contenido no puede estar vacío.");
      return;
    }
    try {
      const res = await fetch('http://localhost:3000/api/publicaciones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ contenido })
      });
      const data = await res.json();
      if (res.ok) {
        setPosts([data, ...posts]);
        setContenido("");
      } else {
        setError(data.error || "Error al crear publicación");
      }
    } catch {
      setError("Error de red");
    }
  };

  return (
    <div className="feed">
      <h2 className="feed__title">Publicaciones</h2>
      <form className="feed__form" onSubmit={handleCrear}>
        <textarea
          className="feed__form-textarea"
          value={contenido}
          onChange={e => setContenido(e.target.value)}
          placeholder="¿Qué quieres compartir?"
          rows={3}
        />
        <button type="submit" className="feed__form-btn">Publicar</button>
        {error && <div className="feed__error">{error}</div>}
      </form>
      {loading ? (
        <div>Cargando publicaciones...</div>
      ) : (
        <div className="feed__list">
          {posts.map((post, idx) => (
            <div key={idx} className="feed__post">
              {post.avatar && (
                <img src={post.avatar} alt={post.usuario} className="feed__avatar" />
              )}
              <div className="feed__info">
                <div className="feed__user">{post.usuario}</div>
                <div className="feed__content">{post.contenido}</div>
                <div className="feed__time">{post.fecha ? new Date(post.fecha).toLocaleString() : ''}</div>
                {/* Mostrar likes */}
                {post.likes && post.likes.length > 0 && (
                  <div className="feed__likes">
                    <strong>Likes:</strong> {post.likes.join(', ')}
                  </div>
                )}
                {/* Mostrar comentarios */}
                {post.comentarios && post.comentarios.length > 0 && (
                  <div className="feed__comments">
                    <strong>Comentarios:</strong>
                    <ul>
                      {post.comentarios.map((comentario, cidx) => (
                        <li key={cidx}>
                          <span className="feed__comment-user">{comentario.usuario}:</span> {comentario.texto}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Botones editar y eliminar */}
                <div className="feed__actions">
                  <button className="feed__edit-btn" style={{marginRight:8, padding:'6px 16px', borderRadius:6, background:'#f0f2f5', border:'1px solid #e3e6ea', cursor:'pointer', fontWeight:600}}>Editar</button>
                  <button className="feed__delete-btn" style={{padding:'6px 16px', borderRadius:6, background:'#e53935', color:'#fff', border:'none', cursor:'pointer', fontWeight:600}}>Eliminar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Feed;
