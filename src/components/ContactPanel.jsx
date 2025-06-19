import React from "react";
import { FaTelegram, FaGithub } from "react-icons/fa";

export default function ContactPanel() {
  return (
    <div className="fixed bottom-4 left-4 z-40 flex flex-col gap-4 bg-white/30 p-3 rounded-lg shadow backdrop-blur">
      <a href="https://t.me/arkvr_bot" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-300 text-2xl">
        <FaTelegram />
      </a>
      <a href="https://github.com/yourusername/arkvr" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-300 text-2xl">
        <FaGithub />
      </a>
    </div>
  );
}
