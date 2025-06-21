import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Drema from "./pages/Drema.jsx"; // ← создадим скоро
import "./style.css";
import BlogHome from "./blog/pages/BlogHome.jsx";
import BlogPost from "./blog/pages/BlogPost";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/drema" element={<Drema />} />
        <Route path="/arkvr-blog" element={<BlogHome />} />
        <Route path="/arkvr-blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


