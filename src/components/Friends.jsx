import '../index.css';
import React, { useEffect, useState } from 'react';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/friends')
      .then(res => res.json())
      .then(data => {
        setFriends(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  

  return (
    <div className="friends">
      <h2 className="friends__title">Amigos</h2>
      {loading ? (
        <div>Cargando amigos...</div>
      ) : (
        <div className="friends__list">
          {friends.flatMap(f => f.amigos).map((friend, idx) => (
            <div key={idx} className="friends__item">
              {/* El avatar debe venir de la colección de usuarios, no de amigos */}
              <div className="friends__info">
                <div className="friends__name">{friend.nombre || friend.name}</div>
                <div className={`friends__status ${friend.online ? 'friends__status--online' : 'friends__status--offline'}`}>
                  {friend.online ? 'En línea' : 'Desconectado'}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Friends;
