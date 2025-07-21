// import React from "react";
// import { FaGithub, FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa";
// import profileImg from "../assets/profile.png"; // update path if needed

// const Home = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#1f0036] via-[#2e055a] to-[#120028] text-white"
//     >
//       <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         {/* LEFT - TEXT CONTENT */}
//         <div>
//           <h1 className="text-5xl font-bold mb-4 leading-tight text-purple-300">
//             Hi, I’m <span className="text-white">Prabha Chandran</span>
//           </h1>
//           <h2 className="text-2xl font-semibold text-purple-200 mb-4">
//             Full Stack Developer
//           </h2>
//           <p className="text-lg text-gray-300 mb-6 max-w-lg">
//             Welcome to my portfolio! I'm passionate about coding, UI/UX, and
//             building scalable web apps. Explore my projects and skills below.
//           </p>

//           {/* SOCIAL ICONS */}
//           <div className="flex items-center gap-4 text-2xl mb-6">
//             <a href="#" target="_blank" rel="noreferrer">
//               <FaGithub className="hover:text-purple-400" />
//             </a>
//             <a href="#" target="_blank" rel="noreferrer">
//               <FaLinkedin className="hover:text-purple-400" />
//             </a>
//             <a href="#" target="_blank" rel="noreferrer">
//               <FaBehance className="hover:text-purple-400" />
//             </a>
//             <a href="#" target="_blank" rel="noreferrer">
//               <FaInstagram className="hover:text-purple-400" />
//             </a>
//           </div>

//           {/* RESUME BUTTON */}
//           <a
//             href="#"
//             target="_blank"
//             rel="noreferrer"
//             className="inline-block bg-purple-600 hover:bg-purple-800 transition px-6 py-3 rounded-full font-semibold shadow-lg"
//           >
//             View Resume
//           </a>
//         </div>

//         {/* RIGHT - PROFILE IMAGE */}
//         <div className="flex justify-center md:justify-end">
//           <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-purple-700 shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
//             <img
//               src={profileImg}
//               alt="Profile"
//               className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
//             />
//             {/* Optional glow effect */}
//             <div className="absolute inset-0 rounded-full bg-purple-500 blur-2xl opacity-20 animate-pulse"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;


// src/components/Home.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaMedium, FaBehance } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="scroll-mt-8 min-h-screen bg-gradient-to-br from-[#0d011d] via-[#1a0133] to-[#100023] text-white flex items-center px-6 py-12"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-12">
        {/* LEFT - TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-purple-400 mb-4">
            Hi, I’m <span className="text-white">Prabha</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-xl mx-auto md:mx-0">
            Welcome to my favourite digital home. <br />
            Please take a mini tour of my life as a writer. I hope that you’ll
            enjoy your time visiting.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center md:justify-start gap-4 text-lg mb-6">
            <a href="#" className="bg-purple-900 hover:bg-purple-700 p-3 rounded-full transition">
              <FaMedium />
            </a>
            <a href="#" className="bg-purple-900 hover:bg-purple-700 p-3 rounded-full transition">
              <FaLinkedin />
            </a>
            <a href="#" className="bg-purple-900 hover:bg-purple-700 p-3 rounded-full transition">
              <FaGithub />
            </a>
            <a href="#" className="bg-purple-900 hover:bg-purple-700 p-3 rounded-full transition">
              <FaBehance />
            </a>
          </div>

        </div>

        {/* RIGHT - IMAGE */}
        <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] mx-auto md:mx-0 rounded-full overflow-hidden border-[6px] border-purple-700 shadow-xl hover:scale-105 transition duration-300">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
          />
          <div className="absolute inset-0 rounded-full bg-purple-500 blur-2xl opacity-20 animate-pulse z-[-1]"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
