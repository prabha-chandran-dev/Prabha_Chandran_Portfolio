
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import profileImg from "../assets/profile.png";
import arrowSvg from "../assets/zigzag-arrow.svg";

const Home = () => {
  const bubbles = Array.from({ length: 25 }, (_, index) => {
    const size = Math.random() * 20 + 10;
    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 10 + 5;

    return (
      <div
        key={index}
        className="absolute bottom-[-50px] rounded-full bg-white opacity-10"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          animation: `floatUp ${duration}s ease-in infinite`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return (
    <section
      id="home"
      className="scroll-mt-24 relative min-h-screen bg-gradient-to-br from-[#0d011d] via-[#1a0133] to-[#100023] text-white flex items-center px-6 py-12"
    >
      {/* 🔮 Background Glow Orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-64 h-64 bg-purple-800 rounded-full mix-blend-lighten opacity-20 top-20 left-10 animate-pulse" />
        <div className="absolute w-48 h-48 bg-pink-700 rounded-full mix-blend-lighten opacity-20 bottom-10 right-80 animate-pulse" />
      </div>

      {/* 🎈 Floating Bubbles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">{bubbles}</div>
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>

      {/* 🌟 Main Content */}
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-12 z-10 relative mt-10">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-purple-400 mb-4">
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
            A Associate Software Engineer passionate about turning real-world
            challenges into clean, scalable software. At <strong>Xebia</strong>,
            I’ve architected enterprise-grade apps with{" "}
            <span className="text-purple-400">Python</span>,{" "}
            <span className="text-purple-400">FastAPI</span>,{" "}
            <span className="text-purple-400">Angular</span> &{" "}
            <span className="text-purple-400">Azure</span>. Hackathon winner,
            gold medalist, and someone who believes great UI should feel like
            magic.
          </p>

          <div className="flex flex-col items-center md:items-start gap-4 mb-6">
            <a
              href="#contact"
              className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg shadow-md transition"
            >
              Let’s Work Together
            </a>

            <div className="flex gap-4 text-3xl">
              <a href="https://www.geeksforgeeks.org/user/cprabh502j/" className="bg-purple-900 hover:bg-purple-700 p-3 rounded-full transition">
                <SiGeeksforgeeks />
              </a>
              <a href="https://www.linkedin.com/in/prabhachandran/" className="bg-purple-900 hover:bg-purple-700 p-3 rounded-full transition">
                <FaLinkedin />
              </a>
              <a href="https://github.com/prabha-chandran-dev" className="bg-purple-900 hover:bg-purple-700 p-3 rounded-full transition">
                <FaGithub />
              </a>
              <a href="https://www.behance.net/prabhac/projects" className="bg-purple-900 hover:bg-purple-700 p-3 rounded-full transition">
                <FaBehance />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 🎯 ARROW */}
        <motion.img
          src={arrowSvg}
          alt="Arrow"
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute  [@media(max-width:768px)]:hidden top-[-50px] left-[700px] w-[250px] z-30 opacity-70 rotate-100 pointer-events-none"
        />

        {/* 👤 PROFILE IMAGE */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className=" relative flex [@media(max-width:768px)]:hidden justify-end md:col-start-2 mt-[-480px] md:pr-4 pr-7"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="relative w-[250px] md:w-[400px] max-h-[450px] mr-[-50px] z-10"
          >
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-auto object-contain drop-shadow(0 0 50px rgba(165, 82, 252, 0.25)) transition duration-500"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 17%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%)",
              }}
            />

      {/* 🌈 Glow behind image */}
            {/* <div className="absolute inset-0 z-[-1] bg-purple-500 opacity-30 blur-[120px] rounded-xl animate-pulse" /> */}

        
            {/* 🌈 Glow behind image (blending into bg) */}
            <div className="absolute inset-0 z-[-1] bg-gradient-to-l from-[#1a0133] to-transparent opacity-30 blur-[100px] rounded-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

