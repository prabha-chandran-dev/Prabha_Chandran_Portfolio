// // src/components/Navbar.jsx
// import React from "react";

// const Navbar = () => {
//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-[#0d011d]/80 backdrop-blur-md shadow-sm">
//       <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
//         {/* Logo */}
//         <div className="text-lg font-bold tracking-wider text-white uppercase">
//           ℙ𝕣𝕒𝕓𝕙𝕒ℂ𝕙𝕒𝕟𝕕𝕣𝕒𝕟
//         </div>

//         {/* Navigation Links */}
//        <ul className="flex space-x-6 text-sm font-medium">
//   <li>
//     <a href="#home" className="hover:text-purple-400 transition">About</a>
//   </li>
//   <li>
//     <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
//   </li>
//   <li>
//     <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
//   </li>
//   <li>
//     <a href="#certifications" className="hover:text-purple-400 transition">Certs</a>
//   </li>
//   <li>
//     <a href="#awards" className="hover:text-purple-400 transition">Awards</a>
//   </li>
// </ul>


//         {/* Resume Button */}
//         <a
//           href="#"
//           target="_blank"
//           rel="noreferrer"
//           className="ml-4 inline-block bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full text-sm font-semibold shadow transition"
//         >
//           Resume
//         </a>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // or any icon library you like

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 /90 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between text-white w-full">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider text-white uppercase">
          Prabha Chandran
        </div>

        {/* Desktop Nav Links */}
        <div className=" md:flex items-center space-x-10 text-lg font-semibold text-white">
          <a href="#home" className="hover:text-purple-400 transition">About</a>
          <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#certifications" className="hover:text-purple-400 transition">Certs</a>
          <a href="#awards" className="hover:text-purple-400 transition">Awards</a>

          {/* Resume Button */}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full text-sm font-semibold shadow transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          {/* Your hamburger button here */}
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 space-y-4 text-white">
          <a href="#home" onClick={() => setMenuOpen(false)} className="block hover:text-purple-400">About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="block hover:text-purple-400">Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="block hover:text-purple-400">Projects</a>
          <a href="#certifications" onClick={() => setMenuOpen(false)} className="block hover:text-purple-400">Certs</a>
          <a href="#awards" onClick={() => setMenuOpen(false)} className="block hover:text-purple-400">Awards</a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="block bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full text-sm font-semibold shadow transition"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
