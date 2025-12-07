import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // icono de hamburguesa
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Messages from "./components/Messages";
import Friends from "./components/Friends";
import Notifications from "./components/Notifications";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import UsuariosOnline from "./components/UsuariosOnline";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Escuchar cambios en localStorage para el token
  React.useEffect(() => {
    const onStorage = () => {
      setToken(localStorage.getItem('token'));
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // También actualizar el token tras login/registro en la misma pestaña
  React.useEffect(() => {
    const interval = setInterval(() => {
      const currentToken = localStorage.getItem('token');
      if (currentToken !== token) setToken(currentToken);
    }, 500);
    return () => clearInterval(interval);
  }, [token]);

  const location = useLocation();
  const isProfileRoute = location.pathname.startsWith('/profile');
  return (
    <div className="app flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      {token ? (
        <div className="app__content flex" style={{ display: "flex", flexDirection: "row" }}>
          <main className="main flex-1 p-6">
            <Routes>
              <Route path="/" element={<Navigate to="/feed" />} />
              <Route path="/feed" element={<PrivateRoute><Feed /></PrivateRoute>} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/:usuario" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          {!isProfileRoute && <UsuariosOnline />}
        </div>
      ) : (
        <main className="main flex-1 p-6">
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      )}
    </div>
  );
}
