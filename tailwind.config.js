// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     darkMode: 'class',
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#a855f7', // violet-500
//         darkBg: '#0c011d',
//         lightBg: '#fdfcff',
//       },
//     },
//   },
//   plugins: [],
// }


// tailwind.config.js
module.exports = {
  darkMode: "class", // very important!
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a855f7",
        lightBg: "#fdfcff",
        darkBg: "#0c011d",
      },
    },
  },
  plugins: [],
};
