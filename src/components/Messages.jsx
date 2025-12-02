
import React from 'react';
import '../index.css';

const chats = [
  {
    id: 1,
    user: 'Ana López',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    lastMessage: '¿Nos vemos mañana?',
    time: 'Hace 5 min'
  },
  {
    id: 2,
    user: 'Carlos Ruiz',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    lastMessage: '¡Genial el proyecto!',
    time: 'Hace 1 hora'
  }
];

const Messages = () => (
  <div className="messages">
    <h2 className="messages__title">Mensajes</h2>
    <div className="messages__list">
      {chats.map(chat => (
        <div key={chat.id} className="messages__chat">
          <img src={chat.avatar} alt={chat.user} className="messages__avatar" />
          <div className="messages__info">
            <div className="messages__user">{chat.user}</div>
            <div className="messages__last">{chat.lastMessage}</div>
            <div className="messages__time">{chat.time}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Messages;
