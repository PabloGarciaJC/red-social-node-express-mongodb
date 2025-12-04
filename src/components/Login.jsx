import React, { useState } from 'react';
import '../index.css';
import Register from './Register';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        if (data.usuario && data.usuario.email) {
          localStorage.setItem('email', data.usuario.email);
        }
        if (data.usuario && data.usuario.nombre) {
          localStorage.setItem('nombre', data.usuario.nombre);
        }
        // Redirigir al Feed tras login exitoso y forzar recarga
        window.location.href = '/feed';
      } else {
        setError(data.error || 'Error al iniciar sesión');
      }
    } catch (err) {
      setError('Error de red');
    }
    setLoading(false);
  };

  if (showRegister) return <Register onBack={() => setShowRegister(false)} />;

  return (
    <div className="login">
      <h2 className="login__title">Iniciar sesión</h2>
      <form className="login__form" onSubmit={handleLogin}>
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
          {loading ? 'Ingresando...' : 'Ingresar'}
        </button>
        {error && <div className="login__error">{error}</div>}
      </form>
      <div className="login__register-link">
        ¿No tienes cuenta?{' '}
        <button type="button" onClick={() => setShowRegister(true)}>
          Regístrate aquí
        </button>
      </div>
    </div>
  );
};

export default Login;
