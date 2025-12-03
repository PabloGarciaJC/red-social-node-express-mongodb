

import React, { useEffect, useState } from 'react';
import '../index.css';

const Messages = () => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/messages')
      .then(res => res.json())
      .then(data => {
        setChats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="messages">
      <h2 className="messages__title">Mensajes</h2>
      {loading ? (
        <div>Cargando mensajes...</div>
      ) : (
        <div className="messages__list">
          {chats.map((chat, idx) => (
            <div key={idx} className="messages__chat">
              <img src={chat.avatar} alt={chat.de} className="messages__avatar" />
              <div className="messages__info">
                <div className="messages__user">{chat.de}</div>
                <div className="messages__last">{chat.mensaje}</div>
                <div className="messages__time">{chat.fecha ? new Date(chat.fecha).toLocaleString() : ''}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Messages;
