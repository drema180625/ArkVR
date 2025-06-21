import React, { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import matter from "gray-matter";
import BlogNavbar from "../components/BlogNavbar";
import { useParams, Link } from "react-router-dom";

import { Buffer } from "buffer";
 window.Buffer = Buffer;


export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const raw = await import(`../posts/${slug}.md?raw`);
        const { data, content } = matter(raw.default);
        setPost({ ...data, content });
      } catch (err) {
        console.error(`Файл поста не найден: ../posts/${slug}.md`, err);
        setPost({ title: "Пост не найден", date: "", content: "Увы, такого поста нет." });
      }
    };

    loadPost();
  }, [slug]);

  if (!post) return <p className="p-8 text-gray-600">Загрузка...</p>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <BlogNavbar />
      
      {/* 👇 Кнопка назад */}
      <Link
        to="/arkvr-blog"
        className="inline-block mb-6 text-indigo-600 hover:underline text-sm"
      >
        ← Назад ко всем постам
      </Link>

      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{String(post.date)}</p>
      <div className="prose prose-indigo max-w-none">
        {post.content.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}