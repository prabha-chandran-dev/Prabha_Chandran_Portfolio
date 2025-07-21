
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaReact,
//   FaPython,
//   FaJava,
//   FaGitAlt,
//   FaFigma,
//   FaNodeJs,
// } from "react-icons/fa";
// import {
//   SiJavascript,
//   SiTailwindcss,
//   SiDjango,
//   SiFlutter,
//   SiFastapi,
//   SiKeycloak,
//   SiRabbitmq,
//   SiRedis,
// //   SiAzuredevops,
//   SiMongodb,
//   SiPostgresql,
// //   SiMicrosoftsqlserver,
//   SiSendgrid,
//   SiSourcetree,
// //   SiWebsocket,
// //   SiAdobeXd,
// } from "react-icons/si";

// const tools = [
  
//     { name: "HTML", icon: <FaHtml5 /> },
//     { name: "CSS", icon: <FaCss3Alt /> },
//     { name: "JavaScript", icon: <SiJavascript /> },
//     { name: "Tailwind", icon: <SiTailwindcss /> },
//     { name: "React", icon: <FaReact /> },
//     { name: "Flutter", icon: <SiFlutter /> },

 
//     { name: "Python", icon: <FaPython /> },
//     { name: "Java", icon: <FaJava /> },
//     { name: "Node.js", icon: <FaNodeJs /> },
//     { name: "Django", icon: <SiDjango /> },
//     { name: "FastAPI", icon: <SiFastapi /> },
//     { name: "Keycloak", icon: <SiKeycloak /> },
//     { name: "RabbitMQ", icon: <SiRabbitmq /> },
//     { name: "Redis", icon: <SiRedis /> },
  
//     { name: "MongoDB", icon: <SiMongodb /> },
//     { name: "PostgreSQL", icon: <SiPostgresql /> },
//     // { name: "MS SQL", icon: <SiMicrosoftsqlserver /> },
  
//     { name: "Git", icon: <FaGitAlt /> },
//     { name: "Figma", icon: <FaFigma /> },
//     // { name: "Azure", icon: <SiAzuredevops /> },
//     { name: "SendGrid", icon: <SiSendgrid /> },
//     { name: "SourceTree", icon: <SiSourcetree /> },
//     // { name: "WebSockets", icon: <SiWebsocket /> },
//     // { name: "Adobe XD", icon: <SiAdobeXd /> },
  
// ];

// const Skills = () => {
//   return (
//       <section id="skills" className="py-12 px-4 bg-[#0c011d] text-white min-h-screen">
//       <div className="text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-purple-400">
//           Tech Stack & Tools
//         </h2>
//         <p className="text-gray-400 mt-2">
//           These are the technologies I’ve worked with:
//         </p>
//       </div>

//       {/* Grid with dynamic responsive columns */}
//     <div className="max-w-screen-xl mx-auto px-4">
//   <div
//     className="
//       grid 
//       gap-4
//       justify-center
//       [grid-template-columns:repeat(auto-fit,minmax(120px,1fr))]
//     "
//   >
//     {tools.map((tool, index) => (
//       <div
//         key={index}
//         className="bg-[#1a0f2b] p-4 rounded-xl flex flex-col items-center justify-center text-white hover:bg-[#2c1b3a] transition"
//       >
//         <div className="text-3xl text-purple-400 mb-2">{tool.icon}</div>
//         <p className="text-sm">{tool.name}</p>
//       </div>
//     ))}
//   </div>
// </div>

//     </section>
//   );
// };

// export default Skills;


// src/components/Skills.jsx
import {
  FaHtml5, FaCss3Alt, FaReact, FaPython, FaJava, FaGitAlt, FaFigma, FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiDjango, SiFlutter, SiFastapi, SiKeycloak,
  SiRabbitmq, SiRedis, SiMongodb, SiPostgresql, SiSendgrid, SiSourcetree,
} from "react-icons/si";

const tools = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "React", icon: <FaReact /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Keycloak", icon: <SiKeycloak /> },
  { name: "RabbitMQ", icon: <SiRabbitmq /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Figma", icon: <FaFigma /> },
  { name: "SendGrid", icon: <SiSendgrid /> },
  { name: "SourceTree", icon: <SiSourcetree /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-8 min-h-screen bg-gradient-to-br from-[#0d011d] via-[#1a0133] to-[#100023] text-white px-6 py-12"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-4">
          Tech Stack & Tools
        </h2>
        <p className="text-gray-300 mb-10">
          These are the technologies I’ve worked with:
        </p>

        <div
          className="
            grid gap-5 justify-center
            [grid-template-columns:repeat(auto-fit,minmax(120px,1fr))]
            max-w-4xl mx-auto
          "
        >
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-[#1a0f2b] p-4 rounded-xl flex flex-col items-center justify-center hover:bg-[#2c1b3a] transition"
            >
              <div className="text-3xl text-purple-400 mb-2">{tool.icon}</div>
              <p className="text-sm">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
