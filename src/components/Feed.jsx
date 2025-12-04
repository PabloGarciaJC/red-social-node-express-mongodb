import '../index.css';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contenido, setContenido] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Obtener publicaciones y usuarios en paralelo
    fetch('http://localhost:3000/api/publicaciones')
      .then(res => res.json())
      .then(pubs => {
        const ordenadas = pubs.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
        setPosts(ordenadas);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleCrear = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
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
        setContenido("");
        setSuccess("¡Publicación creada!");
        // Recargar publicaciones desde el backend
        // Recargar publicaciones y usuarios
        fetch('http://localhost:3000/api/publicaciones')
          .then(res => res.json())
          .then(pubs => {
            const ordenadas = pubs.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
            setPosts(ordenadas);
          });
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
        {error && <div className="feed__error">{error}</div>}
        {success && (
          <div className="feed__success">
            {success}
            <button
              className="feed__success-close"
              type="button"
              title="Cerrar"
              onClick={() => setSuccess("")}
            >×</button>
          </div>
        )}
        <textarea
          className="feed__form-textarea"
          value={contenido}
          onChange={e => setContenido(e.target.value)}
          placeholder="¿Qué quieres compartir?"
          rows={3}
        />
        <button type="submit" className="feed__form-btn">Publicar</button>
      </form>
      {loading ? (
        <div>Cargando publicaciones...</div>
      ) : (
        <div className="feed__list">
          {posts.map((post, idx) => (
            <div key={idx} className="feed__post">
              <div className="feed__info">
                <div className="feed__user">
                  <img src={post.avatar ? post.avatar : "https://ui-avatars.com/api/?name=Anonimo&background=cccccc&color=555555"} alt={post.usuario} className="feed__avatar" />
                  {post.usuario}
                </div>
                <div className="feed__content">{post.contenido}</div>
                <div className="feed__time">{post.fecha ? new Date(post.fecha).toLocaleString() : ''}</div>
                {/* Mostrar likes como número */}
                {typeof post.likes === 'number' ? (
                  <div className="feed__likes">
                    <strong>Likes:</strong> {post.likes}
                  </div>
                ) : null}
                {/* Mostrar comentarios */}
                {post.comentarios && post.comentarios.length > 0 && (
                  <div className="feed__comments">
                    <strong>Comentarios:</strong>
                    <ul>
                      {post.comentarios.map((comentario, cidx) => (
                        <li key={cidx}>
                          <span className="feed__comment-content">
                            <span className="feed__comment-user">{comentario.usuario}:</span> {comentario.texto}
                          </span>
                          <span>
                            <button className="feed__comment-action-btn" title="Editar">
                              <FaEdit />
                            </button>
                            <button className="feed__comment-action-btn feed__action-icon--delete" title="Eliminar">
                              <FaTrash />
                            </button>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="feed__actions">
                <span className="feed__action-icon" title="Editar">
                  <FaEdit />
                </span>
                <span className="feed__action-icon feed__action-icon--delete" title="Eliminar">
                  <FaTrash />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Feed;
