// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// --------------------------------------------------------------

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      dropShadow: {
        glow: "0 0 6px #67e8f9", // небесно-голубое свечение
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      dropShadow: {
        glow: "0 0 8px #7dd3fc", // небесно-голубое свечение
      },
      animation: {
        "pulse-custom": "pulse-custom 2.5s ease-in-out infinite",
      },
      keyframes: {
        "pulse-custom": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.75", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

