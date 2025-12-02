
import React from 'react';
import '../index.css';

const notifications = [
  {
    id: 1,
    text: 'Ana López comentó tu publicación.',
    time: 'Hace 3 min'
  },
  {
    id: 2,
    text: 'Carlos Ruiz te envió una solicitud de amistad.',
    time: 'Hace 1 hora'
  }
];

const Notifications = () => (
  <div className="notifications">
    <h2 className="notifications__title">Notificaciones</h2>
    <div className="notifications__list">
      {notifications.map(n => (
        <div key={n.id} className="notifications__item">
          <div className="notifications__text">{n.text}</div>
          <div className="notifications__time">{n.time}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Notifications;
