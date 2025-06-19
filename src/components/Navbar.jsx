import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full fixed top-0 left-0 z-50 px-12 py-1 bg-white/30 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Лого */}
        <Link to="/" className="text-3xl font-extrabold text-cyan-300 animate-pulse-custom drop-shadow-glow">
          <span className="text-white">Ark</span>VR
        </Link>

        {/* Меню */}
        <div className="flex gap-10 text-lg text-gray-900 font-medium justify-center items-center">
          <Link to="/" className={isActive("/") ? "text-indigo-700" : "hover:text-indigo-600"}>Главная</Link>
          <Link to="/drema" className={isActive("/drema") ? "text-indigo-700" : "hover:text-indigo-600"}>Drema</Link>
          <Link to="/arkvr-blog" className={isActive("/arkvr-blog") ? "text-indigo-700" : "hover:text-indigo-600"}>Блог</Link>
          <Link to="/about" className={isActive("/about") ? "text-indigo-700" : "hover:text-indigo-600"}>О нас</Link>
        </div>

        {/* Вход/Регистрация */}
        <div className="text-indigo-700 font-semibold hover:text-indigo-900 transition cursor-pointer">
          <Link to="/login">Вход / Регистрация</Link>
        </div>
      </div>
    </nav>
  );
}
