import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Register = ({ onBack }) => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const res = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, password })
      });
      const data = await res.json();
      if (res.ok) {
        // Registro exitoso, ahora iniciar sesión automáticamente
        const loginRes = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const loginData = await loginRes.json();
        if (loginRes.ok) {
          localStorage.setItem('token', loginData.token);
          if (loginData.usuario && loginData.usuario.email) {
            localStorage.setItem('email', loginData.usuario.email);
          }
          if (loginData.usuario && loginData.usuario.nombre) {
            localStorage.setItem('nombre', loginData.usuario.nombre);
          }
          navigate('/feed');
        } else {
          setError('Registro exitoso, pero error al iniciar sesión.');
        }
      } else {
        setError(data.error || 'Error al registrar');
      }
    } catch (err) {
      setError('Error de red');
    }
    setLoading(false);
  };

  return (
    <div className="register">
      <h2 className="register__title">Registro</h2>
      <form className="register__form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Registrando...' : 'Registrarse'}
        </button>
        {error && <div className="register__error">{error}</div>}
        {success && <div className="register__success">{success}</div>}
      </form>
      <div className="register__back-link">
        <button
          type="button"
          onClick={() => {
            if (onBack) onBack();
            else navigate('/login');
          }}
        >
          Volver al login
        </button>
      </div>
    </div>
  );
};

export default Register;
