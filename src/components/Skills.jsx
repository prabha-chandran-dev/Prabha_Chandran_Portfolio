
// import {
//   FaHtml5, FaCss3Alt, FaReact, FaPython, FaJava, FaGitAlt, FaFigma, FaNodeJs,
// } from "react-icons/fa";
// import {
//   SiJavascript, SiTailwindcss, SiDjango, SiFlutter, SiFastapi, SiKeycloak,
//   SiRabbitmq, SiRedis, SiMongodb, SiPostgresql, SiSendgrid, SiSourcetree,
// } from "react-icons/si";
// import { motion } from "framer-motion";

// const tools = [
//   { name: "HTML", icon: <FaHtml5 /> },
//   { name: "CSS", icon: <FaCss3Alt /> },
//   { name: "JavaScript", icon: <SiJavascript /> },
//   { name: "Tailwind", icon: <SiTailwindcss /> },
//   { name: "React", icon: <FaReact /> },
//   { name: "Flutter", icon: <SiFlutter /> },
//   { name: "Python", icon: <FaPython /> },
//   { name: "Java", icon: <FaJava /> },
//   { name: "Node.js", icon: <FaNodeJs /> },
//   { name: "Django", icon: <SiDjango /> },
//   { name: "FastAPI", icon: <SiFastapi /> },
//   { name: "Keycloak", icon: <SiKeycloak /> },
//   { name: "RabbitMQ", icon: <SiRabbitmq /> },
//   { name: "Redis", icon: <SiRedis /> },
//   { name: "MongoDB", icon: <SiMongodb /> },
//   { name: "PostgreSQL", icon: <SiPostgresql /> },
//   { name: "Git", icon: <FaGitAlt /> },
//   { name: "Figma", icon: <FaFigma /> },
//   { name: "SendGrid", icon: <SiSendgrid /> },
//   { name: "SourceTree", icon: <SiSourcetree /> },
// ];

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="scroll-mt-30 min-h-screen bg-gradient-to-br from-[#0d011d] via-[#1a0133] to-[#100023] text-white px-6 py-24"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="max-w-7xl mx-auto text-center mb-10"
//       >
//         <h2 className="text-4xl font-bold text-purple-400">
//           Tech Stack & Tools
//         </h2>
//         <p className="text-gray-300 mt-2">
//           These are the technologies I’ve worked with:
//         </p>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//         viewport={{ once: true }}
//         className="max-w-4xl mx-auto"
//       >
//         <div
//           className="
//             grid gap-5 justify-center
//             [grid-template-columns:repeat(auto-fit,minmax(120px,1fr))]
//           "
//         >
//           {tools.map((tool, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.08, rotate: 2 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className="bg-[#1a0f2b] p-4 rounded-xl flex flex-col items-center justify-center hover:bg-[#2c1b3a] transition"
//             >
//               <div className="text-3xl text-purple-400 mb-2">{tool.icon}</div>
//               <p className="text-sm">{tool.name}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Skills;


import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaJava,
  FaGitAlt,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiDjango,
  SiFlutter,
  SiFastapi,
  SiKeycloak,
  SiRabbitmq,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiSendgrid,
  SiSourcetree,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
const CustomIcon = ({ name, alt }) => (
  <img
    src={`icons/${name}.svg`}
    alt={alt || name}
    className="w-8 h-8 object-contain"
    title={alt || name}
  />
  
);

const allSkills = {
  Languages: [
    { name: "HTML", icon: <FaHtml5 />, experience: "4+ yrs" },
    { name: "CSS", icon: <FaCss3Alt />, experience: "4+ yrs" },
    { name: "JavaScript", icon: <SiJavascript />, experience: "5+ yrs" },
    { name: "Python", icon: <FaPython />, experience: "2+ yrs" },
    { name: "Java", icon: <FaJava />, experience: "2+ yrs" },
    { name: "Dart", icon: <CustomIcon name="dart" />, experience: "1+ yrs" },
    { name: "SQL", icon: <CustomIcon name="sql" />, experience: "3+ yrs" },
  ],
  Frameworks: [
    { name: "React", icon: <FaReact />, experience: "2+ yrs" },
    { name: "Tailwind", icon: <SiTailwindcss />, experience: "2+ yrs" },
    { name: "Django", icon: <SiDjango />, experience: "2+ yrs" },
    { name: "FastAPI", icon: <SiFastapi />, experience: "1+ yrs" },
    { name: "Flutter", icon: <SiFlutter />, experience: "1+ yrs" },
    { name: "Node.js", icon: <FaNodeJs />, experience: "2+ yrs" },
    { name: "Angular", icon: <CustomIcon name="angular" />, experience: "2+ yrs" },
    { name: "Spring Boot", icon: <CustomIcon name="springboot" />, experience: "2+ yrs" },
    // { name: "Service Discovery (Eureka)", icon: <CustomIcon name="eureka" />, experience: "1+ yrs" },
    // { name: "ngx-translate", icon: <CustomIcon name="ngx-translate" />, experience: "1+ yrs" },
    { name: "WebSockets", icon: <CustomIcon name="websockets" />, experience: "1+ yrs" },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt />, experience: "6 yrs" },
    { name: "Figma", icon: <FaFigma />, experience: "1+ yrs" },
    { name: "Adobe XD", icon: <CustomIcon name="adobexd" />, experience: "1+ yrs" },
    { name: "Postman", icon: <CustomIcon name="postman" />, experience: "2+ yrs" },
    { name: "Keycloak", icon: <SiKeycloak />, experience: "1+ yrs" },
    { name: "RabbitMQ", icon: <SiRabbitmq />, experience: "1+ yrs" },
    { name: "Redis", icon: <SiRedis />, experience: "1+ yrs" },
    { name: "MongoDB", icon: <SiMongodb />, experience: "2+ yrs" },
    { name: "PostgreSQL", icon: <SiPostgresql />, experience: "2+ yrs" },
    { name: "MS SQL", icon: <CustomIcon name="mssql" />, experience: "1+ yrs" },
    { name: "IBM DB2", icon: <CustomIcon name="db2" />, experience: "1+ yrs" },
    { name: "Azure Blob Storage", icon: <CustomIcon name="azureblob" />, experience: "1+ yrs" },
    { name: "Docker", icon: <CustomIcon name="docker" />, experience: "1+ yrs" },
    { name: "REST API", icon: <CustomIcon name="restapi" />, experience: "2+ yrs" },
    { name: "SendGrid", icon: <SiSendgrid />, experience: "1 yrs" },
    { name: "SourceTree", icon: <SiSourcetree />, experience: "1+ yrs" },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Languages");
  const skillsToShow = allSkills[activeTab];

  return (
    <section
      id="skills"
      className="scroll-mt-30 min-h-screen bg-gradient-to-br from-[#0d011d] via-[#1a0133] to-[#100023] text-white px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-10"
      >
        <h2 className="text-4xl font-bold text-purple-400">Tech Stack & Tools</h2>
        <p className="text-gray-300 mt-2">
          These are the technologies I’ve worked with:
        </p>

        {/* Tabs */}
        <div className="mt-6 flex justify-center gap-4">
          {Object.keys(allSkills).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                activeTab === category
                  ? "bg-purple-600 text-white"
                  : "bg-[#2a1a40] text-gray-400 hover:bg-purple-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div
          className="
            grid gap-5 justify-center
            [grid-template-columns:repeat(auto-fit,minmax(120px,1fr))]
          "
        >
          {skillsToShow.map((tool, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#1a0f2b] p-4 rounded-xl flex flex-col items-center justify-center hover:bg-[#2c1b3a] hover:shadow-purple-500 hover:shadow-lg transition relative"
              >
                <span className="absolute top-2 right-2 bg-purple-800 text-xs px-2 py-0.5 rounded-full">
                  {tool.experience}
                </span>
                <div
                  className="text-3xl text-purple-400 mb-2"
                  title={`Experience: ${tool.experience}`}
                >
                  {tool.icon}
                </div>
                <p className="text-sm text-center">{tool.name}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
