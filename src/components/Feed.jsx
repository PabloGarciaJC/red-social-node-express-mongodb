import '../index.css';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

const Feed = () => {
              const navigate = useNavigate();
            const [likedPosts, setLikedPosts] = useState([]);

            const handleLikeClick = async (postId) => {
              // Actualizar visualmente de inmediato
              setPosts(posts => posts.map(p => {
                if (p._id === postId) {
                  const email = localStorage.getItem('email');
                  let nuevoArray = Array.isArray(p.likesUsuarios) ? [...p.likesUsuarios] : [];
                  let liked = nuevoArray.includes(email);
                  if (liked) {
                    nuevoArray = nuevoArray.filter(u => u !== email);
                  } else {
                    nuevoArray.push(email);
                  }
                  return { ...p, likesUsuarios: nuevoArray, likes: nuevoArray.length };
                }
                return p;
              }));
              // Sincronizar con la BD
              try {
                const res = await fetch(`http://localhost:3000/api/publicaciones/${postId}/like`, {
                  method: 'POST',
                  headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                  }
                });
                const data = await res.json();
                if (res.ok && data.likesUsuarios) {
                  setPosts(posts => posts.map(p => p._id === postId ? { ...p, likes: data.likes, likesUsuarios: data.likesUsuarios } : p));
                }
              } catch {
                // Error de red, no hacer nada
              }
            };
          const [editCommentModalOpen, setEditCommentModalOpen] = useState(false);
          const [editCommentContent, setEditCommentContent] = useState("");
          const [editCommentIdx, setEditCommentIdx] = useState(null);
          const [editCommentPostId, setEditCommentPostId] = useState(null);
          const [deleteCommentModalOpen, setDeleteCommentModalOpen] = useState(false);
          const [deleteCommentIdx, setDeleteCommentIdx] = useState(null);
          const [deleteCommentPostId, setDeleteCommentPostId] = useState(null);

          // Abrir modal de edición de comentario
          const handleEditCommentClick = (postId, idx, texto) => {
            setEditCommentPostId(postId);
            setEditCommentIdx(idx);
            setEditCommentContent(texto);
            setEditCommentModalOpen(true);
          };

          // Guardar edición de comentario
          const handleEditCommentSave = async () => {
            if (!editCommentContent.trim()) {
              setError("El comentario no puede estar vacío.");
              return;
            }
            try {
              const res = await fetch(`http://localhost:3000/api/publicaciones/${editCommentPostId}/comentarios/${editCommentIdx}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ texto: editCommentContent })
              });
              const data = await res.json();
              if (res.ok) {
                setEditCommentModalOpen(false);
                setEditCommentContent("");
                setEditCommentIdx(null);
                setEditCommentPostId(null);
                setSuccess("¡Comentario editado!");
                fetch('http://localhost:3000/api/publicaciones')
                  .then(res => res.json())
                  .then(pubs => {
                    const ordenadas = pubs.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
                    setPosts(ordenadas);
                  });
              } else {
                setError(data.error || "Error al editar comentario");
              }
            } catch {
              setError("Error de red");
            }
          };

          // Abrir modal de confirmación para eliminar comentario
          const handleDeleteCommentClick = (postId, idx) => {
            setDeleteCommentPostId(postId);
            setDeleteCommentIdx(idx);
            setDeleteCommentModalOpen(true);
          };

          // Eliminar comentario
          const handleDeleteCommentConfirm = async () => {
            try {
              const res = await fetch(`http://localhost:3000/api/publicaciones/${deleteCommentPostId}/comentarios/${deleteCommentIdx}`, {
                method: 'DELETE',
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
              });
              const data = await res.json();
              if (res.ok) {
                setDeleteCommentModalOpen(false);
                setDeleteCommentIdx(null);
                setDeleteCommentPostId(null);
                setSuccess('¡Comentario eliminado!');
                fetch('http://localhost:3000/api/publicaciones')
                  .then(res => res.json())
                  .then(pubs => {
                    const ordenadas = pubs.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
                    setPosts(ordenadas);
                  });
              } else {
                setError(data.error || 'Error al eliminar comentario');
              }
            } catch {
              setError('Error de red');
            }
          };
        const [commentContent, setCommentContent] = useState("");
        const [commentingPostId, setCommentingPostId] = useState(null);

        // Crear comentario en una publicación
        const handleCommentSubmit = async (e, postId) => {
          e.preventDefault();
          if (!commentContent.trim()) return;
          try {
            const usuario = localStorage.getItem('nombre') || localStorage.getItem('usuario') || 'Anonimo';
            const res = await fetch(`http://localhost:3000/api/publicaciones/${postId}/comentarios`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              },
              body: JSON.stringify({ usuario, texto: commentContent })
            });
            const data = await res.json();
            if (res.ok) {
              setCommentContent("");
              setCommentingPostId(null);
              // Recargar publicaciones
              fetch('http://localhost:3000/api/publicaciones')
                .then(res => res.json())
                .then(pubs => {
                  const ordenadas = pubs.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
                  setPosts(ordenadas);
                });
            } else {
              setError(data.error || "Error al agregar comentario");
            }
          } catch {
            setError("Error de red");
          }
        };
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
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/api/publicaciones')
      .then(res => res.json())
      .then(pubs => {
        const ordenadas = pubs.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
        setPosts(ordenadas);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [location.pathname]);

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
                <div className="feed__user" style={{cursor:'pointer'}} onClick={() => navigate(`/profile/${encodeURIComponent(post.usuario)}`)}>
                  <span
                    className="feed__avatar"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: '#cccccc',
                      color: '#222',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '1.35em',
                      marginRight: 12,
                      border: '2px solid #eee',
                      textTransform: 'uppercase',
                      letterSpacing: 1
                    }}
                  >
                    {post.usuario && post.usuario.trim().length > 0
                      ? post.usuario.trim().replace(/\s+/g, '').substring(0,2).toUpperCase()
                      : '--'}
                  </span>
                  {post.usuario}
                </div>
                <div className="feed__content">{post.contenido}</div>
                <div className="feed__time">{post.fecha ? new Date(post.fecha).toLocaleString() : ''}</div>
                {/* Mostrar likes como número */}
                {typeof post.likes === 'number' ? (
                  <button
                    className="feed__like-btn"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                    onClick={() => handleLikeClick(post._id)}
                  >
                    <FaHeart style={{ color: Array.isArray(post.likesUsuarios) && post.likesUsuarios.includes(localStorage.getItem('email')) ? '#e74c3c' : '#888', marginRight: 4 }} />
                    {post.likes}
                  </button>
                ) : null}
                {/* Mostrar comentarios solo si existen */}
                {post.comentarios && post.comentarios.length > 0 && (
                  <div className="feed__comments">
                    <strong>Comentarios:</strong>
                    <ul>
                      {post.comentarios.map((comentario, cidx) => (
                        <li key={cidx}>
                          <span className="feed__comment-content">
                            <span className="feed__comment-user">{comentario.usuario}:</span> {comentario.texto}
                            {comentario.fecha && (
                              <span className="feed__comment-date" style={{marginLeft:8, color:'#888', fontSize:'0.9em'}}>
                                {new Date(comentario.fecha).toLocaleDateString('es-ES')}
                              </span>
                            )}
                          </span>
                          {comentario.usuario === (localStorage.getItem('nombre') || localStorage.getItem('usuario')) && (
                            <span>
                              <button className="feed__comment-action-btn" title="Editar" style={{fontSize:'0.95em'}} onClick={() => handleEditCommentClick(post._id, cidx, comentario.texto)}>
                                <FaEdit />
                              </button>
                              <button className="feed__comment-action-btn feed__action-icon--delete" title="Eliminar" style={{fontSize:'0.95em'}} onClick={() => handleDeleteCommentClick(post._id, cidx)}>
                                <FaTrash />
                              </button>
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                      {/* Modal para editar comentario */}
                      {editCommentModalOpen && (
                        <div className="feed__modal-overlay">
                          <div className="feed__modal">
                            <h3>Editar comentario</h3>
                            <textarea
                              className="feed__form-textarea"
                              value={editCommentContent}
                              onChange={e => setEditCommentContent(e.target.value)}
                              rows={2}
                            />
                            <div className="feed__modal-actions">
                              <button className="feed__form-btn" onClick={handleEditCommentSave}>Guardar</button>
                              <button className="feed__form-btn" onClick={() => setEditCommentModalOpen(false)}>Cancelar</button>
                            </div>
                            {error && <div className="feed__error">{error}</div>}
                          </div>
                        </div>
                      )}

                      {/* Modal para eliminar comentario */}
                      {deleteCommentModalOpen && (
                        <div className="feed__modal-overlay">
                          <div className="feed__modal">
                            <h3>¿Deseas eliminar este comentario?</h3>
                            <p>Esta acción no se puede deshacer.</p>
                            <div className="feed__modal-actions">
                              <button className="feed__form-btn" onClick={handleDeleteCommentConfirm}>Sí, eliminar</button>
                              <button className="feed__form-btn" onClick={() => setDeleteCommentModalOpen(false)}>Cancelar</button>
                            </div>
                            {error && <div className="feed__error">{error}</div>}
                          </div>
                        </div>
                      )}
                {/* Formulario para agregar comentario */}
                <form className="feed__form" style={{marginTop:8}} onSubmit={e => { setCommentingPostId(post._id); handleCommentSubmit(e, post._id); }}>
                  <textarea
                    className="feed__form-textarea"
                    value={commentingPostId === post._id ? commentContent : ""}
                    onChange={e => { setCommentingPostId(post._id); setCommentContent(e.target.value); }}
                    placeholder="Escribe un comentario..."
                    rows={2}
                  />
                  <button type="submit" className="feed__form-btn">Comentar</button>
                </form>
              </div>
              <div className="feed__actions">
                {(post.usuario === (localStorage.getItem('nombre') || localStorage.getItem('usuario'))) && (
                  <>
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
                  </>
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
