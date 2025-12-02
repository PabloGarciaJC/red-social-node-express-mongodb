
import React from 'react';
import '../index.css';

const friends = [
  {
    id: 1,
    name: 'Ana López',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    online: true
  },
  {
    id: 2,
    name: 'Carlos Ruiz',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    online: false
  }
];

const Friends = () => (
  <div className="friends">
    <h2 className="friends__title">Amigos</h2>
    <div className="friends__list">
      {friends.map(friend => (
        <div key={friend.id} className="friends__item">
          <img src={friend.avatar} alt={friend.name} className="friends__avatar" />
          <div className="friends__info">
            <div className="friends__name">{friend.name}</div>
            <div className={`friends__status ${friend.online ? 'friends__status--online' : 'friends__status--offline'}`}>{friend.online ? 'En línea' : 'Desconectado'}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Friends;
