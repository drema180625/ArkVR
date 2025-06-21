// import React from "react";

// export default function PostCard({ title, summary, date }) {
//   return (
//     <div className="bg-white/60 backdrop-blur-md shadow rounded-lg p-5 mb-4">
//       <h2 className="text-xl font-bold text-indigo-900">{title}</h2>
//       <p className="text-gray-700 text-sm mb-2">{date}</p>
//       <p className="text-gray-800">{summary}</p>
//     </div>
//   );
// }

// -------------------------------------------------------------

import React from "react";

export default function PostCard({ title, content }) {
  return (
    <div className="bg-red shadow-lg p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-700 whitespace-pre-wrap">{content.slice(0, 300)}...</p>
    </div>
  );
}
