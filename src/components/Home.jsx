

// // src/components/Home.jsx
// import React from "react";
// import { FaGithub, FaLinkedin, FaMedium, FaBehance } from "react-icons/fa";
// import profileImg from "../assets/profile.jpg";

// const Home = () => {
//   return (
//     <section
//       id="home"
//       className="scroll-mt-8 min-h-screen bg-gradient-to-br from-[#0d011d] via-[#1a0133] to-[#100023] text-white flex items-center px-6 py-12"
//     >
//       <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-12">
//         {/* LEFT - TEXT */}
//         <div className="text-center md:text-left">
//           <h1 className="text-5xl md:text-6xl font-bold text-purple-400 mb-4">
//             Hi, I’m <span className="text-white">Prabha</span>
//           </h1>
//           <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-xl mx-auto md:mx-0">
//             Welcome to my favourite digital home. <br />
//             Please take a mini tour of my life as a writer. I hope that you’ll
//             enjoy your time visiting.
//           </p>

//           {/* SOCIAL ICONS */}
//           <div className="flex justify-center md:justify-start gap-4 text-lg mb-6">
//             <a href="#" className="bg-purple-900 hover:bg-purple-700 p-3 rounded-full transition">
//               <FaMedium />
//             </a>
//             <a href="#" className="bg-purple-900 hover:bg-purple-700 p-3 rounded-full transition">
//               <FaLinkedin />
//             </a>
//             <a href="#" className="bg-purple-900 hover:bg-purple-700 p-3 rounded-full transition">
//               <FaGithub />
//             </a>
//             <a href="#" className="bg-purple-900 hover:bg-purple-700 p-3 rounded-full transition">
//               <FaBehance />
//             </a>
//           </div>

//         </div>

//         {/* RIGHT - IMAGE */}
//         <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] mx-auto md:mx-0 rounded-full overflow-hidden border-[6px] border-purple-700 shadow-xl hover:scale-105 transition duration-300">
//           <img
//             src={profileImg}
//             alt="Profile"
//             className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
//           />
//           <div className="absolute inset-0 rounded-full bg-purple-500 blur-2xl opacity-20 animate-pulse z-[-1]"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;

import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
// import arrowImg from "../assets/zigzag-arrow.png";
import arrowSvg from "../assets/zigzag-arrow.svg";

import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaBehance,
} from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="relative scroll-mt-8 min-h-screen bg-gradient-to-br from-[#0d011d] via-[#1a0133] to-[#100023] text-white flex items-center px-6 py-12 relative overflow-hidden"
    >
      {/* Background Glow Bubbles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-64 h-64 bg-purple-800 rounded-full mix-blend-lighten  opacity-20 top-20 left-10 animate-pulse" />
        <div className="absolute w-48 h-48 bg-pink-700 rounded-full mix-blend-lighten opacity-20 bottom-10 right-10 animate-pulse" />
      </div>
 <div className="bubble-container absolute inset-0 -z-10 overflow-hidden"></div>

            {/* Floating background bubbles */}
            <style>{`
  .bubble {
    position: absolute;
    bottom: -60px;
    width: ${Math.random() * 12 + 8}px;
    height: ${Math.random() * 12 + 8}px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    animation: floatUp 6s ease-in infinite;
    z-index: 0;
  }
  @keyframes floatUp {
    0% { transform: translateY(0) scale(1); opacity: 0.6; }
    100% { transform: translateY(-100vh) scale(0.4); opacity: 0; }
  }
`}</style>
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-12 z-10 relative">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left relative"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-purple-400 mb-4 inline-block relative z-10">
            Hi, I’m{" "}
            <span className="text-white">
              <Typewriter
                options={{
                  strings: ["Prabha Chandran"],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </h1>

          <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-xl mx-auto md:mx-0">
            A full-stack developer with passion for smooth UI, animations and clean code.
            I believe in design that speaks. Let’s explore together.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center md:justify-start gap-4 text-3xl mb-6">
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



        </motion.div>
        {/* Arrow pointing from name to profile */}
        <motion.img
  src={arrowSvg}
  alt="Arrow"
  animate={{ x: [0, -5, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
  className=" md:block absolute top-[-150px] left-[550px] w-[280px] z-50 rotate-90 pointer-events-none"
  style={{ transformOrigin: "center" }}
/>




        {/* RIGHT - PROFILE IMAGE */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center md:justify-end"
        >
          <motion.div
            style={{ y: [-20, 20, -20] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden border-[6px] border-purple-700 shadow-xl"
          >
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
            />
            <div className="absolute inset-0 rounded-full bg-purple-500 blur-2xl opacity-20 animate-pulse z-[-1]" />
          </motion.div>
        </motion.div>




      </div>
    </section>
  );
};

export default Home;
