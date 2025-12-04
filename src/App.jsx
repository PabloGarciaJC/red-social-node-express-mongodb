import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const token = localStorage.getItem('token');
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
              <Route path="/messages" element={<Messages />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <UsuariosOnline />
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
