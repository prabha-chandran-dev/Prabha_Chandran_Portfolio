// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     screens: {
    sm: "640px",
    md: "768px", // this must exist
    lg: "1024px",
    xl: "1280px",
  },
    extend: {
      colors: {
        primary: "#a855f7",
        lightBg: "#fdfcff",
        darkBg: "#0c011d",
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-out',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-10%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
