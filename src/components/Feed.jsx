import '../index.css';
import React, { useEffect, useState } from 'react';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/publicaciones')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="feed">
      <h2 className="feed__title">Publicaciones</h2>
      {loading ? (
        <div>Cargando publicaciones...</div>
      ) : (
        <div className="feed__list">
          {posts.map((post, idx) => (
            <div key={idx} className="feed__post">
              {/* Si tienes avatar, puedes mostrarlo aquí */}
              {/* <img src={post.avatar} alt={post.usuario} className="feed__avatar" /> */}
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
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Feed;
