import React from "react";
import { useNavigate } from "react-router-dom";

export default function BlogNavbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white/60 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
      {/* Логотип */}
      <div
        onClick={() => navigate("/")}
        className="text-2xl font-bold text-indigo-700 cursor-pointer hover:text-indigo-900 transition"
      >
        ArkVR
      </div>

      {/* Поиск */}
      <input
        type="text"
        placeholder="Поиск в блоге..."
        className="px-4 py-2 rounded-full border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 w-1/3"
      />

      {/* Кнопка на главную */}
      <button
        onClick={() => navigate("/")}
        className="text-sm text-indigo-600 hover:text-indigo-800 underline"
      >
        На главную
      </button>
    </nav>
  );
}
