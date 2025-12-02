import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // icono de hamburguesa
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Messages from "./components/Messages";
import Friends from "./components/Friends";
import Notifications from "./components/Notifications";
import Navbar from "./components/Navbar";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="app flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="main flex-1 p-6">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </main>
    </div>
  );
}
