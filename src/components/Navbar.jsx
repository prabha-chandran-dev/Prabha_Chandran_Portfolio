

// import React, { useState } from "react";
// import { Menu, X } from "lucide-react"; // Hamburger and close icons

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-[#0d011d]/80 backdrop-blur-md shadow-md">
//       <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white w-full">
//         {/* Logo */}
//         <div className="text-2xl font-bold tracking-wider ">
//           Prabha Chandran
//         </div>

//         {/* Desktop Nav */}
//         <div className="flex items-center space-x-10 [@media(max-width:768px)]:hidden text-lg font-semibold">
//           <a href="#home" className="hover:text-purple-400 transition">About</a>
//           <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
//           <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
//           <a href="#certifications" className="hover:text-purple-400 transition">Certs</a>
//           <a href="#awards" className="hover:text-purple-400 transition">Awards</a>
//           <a
//             href="#"
//             target="_blank"
//             rel="noreferrer"
//             className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full text-sm font-semibold shadow transition"
//           >
//             Resume
//           </a>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-[#0d011d]/95 px-6 pb-6 space-y-4 text-white animate-slideDown">
//           <a href="#home" onClick={() => setMenuOpen(false)} className="block hover:text-purple-400">About</a>
//           <a href="#skills" onClick={() => setMenuOpen(false)} className="block hover:text-purple-400">Skills</a>
//           <a href="#projects" onClick={() => setMenuOpen(false)} className="block hover:text-purple-400">Projects</a>
//           <a href="#certifications" onClick={() => setMenuOpen(false)} className="block hover:text-purple-400">Certs</a>
//           <a href="#awards" onClick={() => setMenuOpen(false)} className="block hover:text-purple-400">Awards</a>
//           <a
//             href="#"
//             target="_blank"
//             rel="noreferrer"
//             className="block bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full text-sm font-semibold shadow transition"
//           >
//             Resume
//           </a>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#home", id: "home" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Certs", href: "#certifications", id: "certifications" },
  { name: "Awards", href: "#awards", id: "awards" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let currentSection = "home";

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollY >= offsetTop - 100) {
            currentSection = link.id;
          }
        }
      }

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0d011d]/80 backdrop-blur-md shadow-md"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold tracking-wider cursor-pointer text-purple-400"
        >
          𝕻𝖗𝖆𝖇𝖍𝖆 𝕮𝖍𝖆𝖓𝖉𝖗𝖆𝖓
        </motion.div>

        {/* Desktop Nav */}
        <div className="flex items-center space-x-10 [@media(max-width:768px)]:hidden text-lg font-semibold">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              className={`relative hover:text-purple-400 transition hover-underline ${activeLink === link.id ? "text-purple-400 font-bold" : ""
                }`}
            >
              <span className="hover-underline">{link.name}</span>
            </motion.a>
          ))}

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full text-sm font-semibold shadow transition"
          >
            <Download size={16} /> Resume
          </motion.a>

        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#100123]/95 backdrop-blur-sm px-6 py-6 space-y-5 text-white shadow-lg rounded-b-xl border-t border-purple-800"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
                className={`block text-base font-medium tracking-wide px-3 py-2 rounded-lg transition duration-200 ${activeLink === link.id
                  ? "bg-purple-600 text-white shadow-md"
                  : "hover:bg-purple-700/30 hover:text-purple-300"
                  }`}
              >
                {link.name}
              </motion.a>
            ))}

            <hr className="border-purple-800 opacity-30" />

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full text-sm font-semibold shadow transition"
            >
              <Download size={16} /> Resume
            </motion.a>

          </motion.div>
        )}
      </AnimatePresence>


      {/* Hover underline style */}
      <style>{`
        .hover-underline {
          position: relative;
        }
        .hover-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          height: 2px;
          width: 0;
          background-color: #a855f7;
          transition: width 0.3s ease;
        }
        .hover-underline:hover::after {
          width: 100%;
        }
      `}</style>
    </motion.header>
  );
};

export default Navbar;
