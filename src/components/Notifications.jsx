

import React, { useEffect, useState } from 'react';
import '../index.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/notifications')
      .then(res => res.json())
      .then(data => {
        setNotifications(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="notifications">
      <h2 className="notifications__title">Notificaciones</h2>
      {loading ? (
        <div>Cargando notificaciones...</div>
      ) : (
        <div className="notifications__list">
          {notifications.map((n, idx) => (
            <div key={idx} className="notifications__item">
              {n.avatar && (
                <img src={n.avatar} alt={n.usuario} className="notifications__avatar" />
              )}
              <div className="notifications__text">{n.mensaje}</div>
              <div className="notifications__time">{n.fecha ? new Date(n.fecha).toLocaleString() : ''}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;
