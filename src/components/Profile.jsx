
import React from 'react';
import '../index.css';

const user = {
  name: 'Pablo García',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  bio: 'Desarrollador web y entusiasta de la tecnología. Me encanta crear cosas nuevas y compartir ideas.',
  friends: 120,
  posts: 34
};

const Profile = () => (
  <div className="profile">
    <h2 className="profile__title">Perfil</h2>
    <div className="profile__card">
      <img src={user.avatar} alt={user.name} className="profile__avatar" />
      <div className="profile__info">
        <div className="profile__name">{user.name}</div>
        <div className="profile__bio">{user.bio}</div>
        <div className="profile__stats">
          <span>Amigos: <span>{user.friends}</span></span>
          <span>Publicaciones: <span>{user.posts}</span></span>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
