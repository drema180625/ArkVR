import React from "react";
import { Link } from "react-router-dom";
import BlogNavbar from "../components/BlogNavbar";

// ⚠️ список постов вручную или автоматизируем позже
const posts = [
  { slug: "post_1", title: "Первый пост", date: "2025-06-18" },
  { slug: "post_2", title: "Второй пост", date: "2025-06-19" },
];

export default function BlogHome() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <BlogNavbar />
      <h1 className="text-3xl font-bold mb-6">Блог ArkVR</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/arkvr-blog/${post.slug}`} className="text-xl text-indigo-600 hover:underline">
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
