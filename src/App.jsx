import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactPanel from "./components/ContactPanel";

export default function App() {
  return (
    <>
      <Navbar />
      <ContactPanel />

      <div className="h-screen w-screen bg-gradient-to-b from-indigo-400 via-rose-200 to-yellow-50 flex justify-between items-center px-12 relative">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

        {/* Левая панель: Поиск + Новости */}
        <div className="relative z-10 max-w-md space-y-6">
          <input
            type="text"
            placeholder="Поиск по сайту и статьям..."
            className="w-full px-5 py-3 rounded-full border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <div className="bg-white/60 backdrop-blur-md rounded-lg p-4 shadow-lg space-y-3">
            <h2 className="text-lg font-semibold text-gray-800">Новости:</h2>
            <ul className="text-sm text-gray-700 list-disc list-inside">
              <li>✨ Новый сон добавлен в Drema</li>
              <li>📢 Обновлён модуль ARKVR-блога</li>
              <li>🔒 Скоро: приватный доступ к «Церберу»</li>
            </ul>
          </div>
        </div>

        {/* Правая часть: изображение */}
        <div className="relative z-1 w-[45vw] max-w-[800px] rounded-xl overflow-hidden">
          <img
            src="/assets/snapedit_1.png"
            alt="AI Drema"
            className="h-[41vw] w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
