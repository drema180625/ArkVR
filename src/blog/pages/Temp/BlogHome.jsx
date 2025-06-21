//import React from "react";
import React, { useEffect, useState } from "react";
//import { posts } from "../data/posts";
import PostCard from "../components/PostCard";
//import React, { useEffect, useState } from "react";

// export default function BlogHome() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-100 via-indigo-100 to-white py-10 px-6">
//       <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">Блог ARKVR</h1>
//       <div className="max-w-3xl mx-auto">
//         {posts.map(post => (
//           <PostCard key={post.id} {...post} />
//         ))}
//       </div>
//     </div>
//   );
// }

// --------------------------------------------------------------------

// export default function BlogHome() {
  const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("/api/posts") // или http://localhost:8000/api/posts
//       .then((res) => res.json())
//       .then(setPosts);
//   }, []);

//   return (
//     <div className="p-10 bg-white min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Блог ARKVR</h1>
//       <ul className="space-y-4">
//         {posts.map((post) => (
//           <li key={post.filename}>
//             <a
//               href={`/posts/${post.filename}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-indigo-600 hover:underline"
//             >
//               {post.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// --------------------------------------------------------------------

const postFiles = import.meta.glob("../posts/*.md");

useEffect(() => {
  const loadPosts = async () => {
    const loadedPosts = [];

    for (const path in postFiles) {
      const mod = await postFiles[path](); // не raw!
      loadedPosts.push({
        slug: path.split("/").pop().replace(".md", ""),
        content: mod.default || "⚠️ Нет контента",
      });
    }

    setPosts(loadedPosts);
  };

  loadPosts();
}, []);

export default BlogHome;