
import '../index.css';
import React from 'react';

const posts = [
  {
    id: 1,
    user: 'Pablo García',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: '¡Hola mundo! Esta es mi primera publicación.',
    time: 'Hace 2 minutos'
  },
  {
    id: 2,
    user: 'Ana López',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: '¡Me encanta esta red social!',
    time: 'Hace 10 minutos'
  }
];

const Feed = () => (
  <div className="feed">
    <h2 className="feed__title">Feed</h2>
    <div className="feed__list">
      {posts.map(post => (
        <div key={post.id} className="feed__post">
          <img src={post.avatar} alt={post.user} className="feed__avatar" />
          <div className="feed__info">
            <div className="feed__user">{post.user}</div>
            <div className="feed__content">{post.content}</div>
            <div className="feed__time">{post.time}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Feed;
