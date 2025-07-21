// // src/components/ThemeProvider.jsx
// import { useEffect, useState } from "react";

// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("dark");

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "dark" ? "light" : "dark"));
//   };

//   return (
//     <>
//       <button
//         onClick={toggleTheme}
//         className="fixed top-4 right-4 z-50 bg-primary text-white px-3 py-2 rounded-full shadow-lg text-sm hover:bg-purple-600"
//       >
//         {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
//       </button>
//       {children}
//     </>
//   );
// };

// export default ThemeProvider;


// src/components/ThemeProvider.jsx
import { useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 bg-primary text-white px-3 py-2 rounded-full shadow-lg text-sm hover:bg-purple-600"
      >
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>
      {children}
    </>
  );
};

export default ThemeProvider;
