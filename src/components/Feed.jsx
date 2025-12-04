import '../index.css';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Feed = () => {
      const [deleteModalOpen, setDeleteModalOpen] = useState(false);
      const [deletePost, setDeletePost] = useState(null);

      // Abrir modal de confirmación para eliminar
      const handleDeleteClick = (post) => {
        setDeletePost(post);
        setDeleteModalOpen(true);
      };

      // Eliminar publicación
      const handleDeleteConfirm = async () => {
        try {
          const res = await fetch(`http://localhost:3000/api/publicaciones/${deletePost._id}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
          const data = await res.json();
          if (res.ok) {
            setDeleteModalOpen(false);
            setDeletePost(null);
            setSuccess('¡Publicación eliminada!');
            // Recargar publicaciones
            fetch('http://localhost:3000/api/publicaciones')
              .then(res => res.json())
              .then(pubs => {
                const ordenadas = pubs.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
                setPosts(ordenadas);
              });
          } else {
            setError(data.error || 'Error al eliminar publicación');
          }
        } catch {
          setError('Error de red');
        }
      };
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editPost, setEditPost] = useState(null);
    const [editContenido, setEditContenido] = useState("");

    // Abrir modal de edición
    const handleEditClick = (post) => {
      setEditPost(post);
      setEditContenido(post.contenido);
      setEditModalOpen(true);
    };

    // Guardar cambios de edición
    const handleEditSave = async () => {
      if (!editContenido.trim()) {
        setError("El contenido no puede estar vacío.");
        return;
      }
      try {
        const res = await fetch(`http://localhost:3000/api/publicaciones/${editPost._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({ contenido: editContenido })
        });
        const data = await res.json();
        if (res.ok) {
          setEditModalOpen(false);
          setEditPost(null);
          setEditContenido("");
          setSuccess("¡Publicación editada!");
          // Recargar publicaciones
          fetch('http://localhost:3000/api/publicaciones')
            .then(res => res.json())
            .then(pubs => {
              const ordenadas = pubs.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
              setPosts(ordenadas);
            });
        } else {
          setError(data.error || "Error al editar publicación");
        }
      } catch {
        setError("Error de red");
      }
    };
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
      const usuario = localStorage.getItem('usuario');
      const res = await fetch('http://localhost:3000/api/publicaciones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ contenido, usuario })
      });
      const data = await res.json();
      if (res.ok) {
        setContenido("");
        setSuccess("¡Publicación creada!");
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
                            <button className="feed__comment-action-btn" title="Editar" onClick={() => handleEditClick(post)}>
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
                <span className="feed__action-icon" title="Editar" onClick={() => handleEditClick(post)} style={{ cursor: 'pointer' }}>
                  <FaEdit />
                </span>
                <span className="feed__action-icon feed__action-icon--delete" title="Eliminar" onClick={() => handleDeleteClick(post)} style={{ cursor: 'pointer' }}>
                  <FaTrash />
                </span>
                    {/* Modal de confirmación para eliminar publicación */}
                    {deleteModalOpen && (
                      <div className="feed__modal-overlay">
                        <div className="feed__modal">
                          <h3>¿Deseas eliminar esta publicación?</h3>
                          <p>Esta acción no se puede deshacer.</p>
                          <div className="feed__modal-actions">
                            <button className="feed__form-btn" onClick={handleDeleteConfirm}>Sí, eliminar</button>
                            <button className="feed__form-btn" onClick={() => setDeleteModalOpen(false)}>Cancelar</button>
                          </div>
                          {error && <div className="feed__error">{error}</div>}
                        </div>
                      </div>
                    )}
              </div>
            </div>
          ))}

          {/* Popup modal para editar publicación */}
          {editModalOpen && (
            <div className="feed__modal-overlay">
              <div className="feed__modal">
                <h3>Editar publicación</h3>
                <textarea
                  className="feed__form-textarea"
                  value={editContenido}
                  onChange={e => setEditContenido(e.target.value)}
                  rows={3}
                />
                <div className="feed__modal-actions">
                  <button className="feed__form-btn" onClick={handleEditSave}>Guardar</button>
                  <button className="feed__form-btn" onClick={() => setEditModalOpen(false)}>Cancelar</button>
                </div>
                {error && <div className="feed__error">{error}</div>}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Feed;
