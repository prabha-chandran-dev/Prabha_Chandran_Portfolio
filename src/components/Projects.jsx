

// import projects from "../data/projectsData";
// import profileImg from "../assets/stars.jpg";

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="scroll-mt-8 min-h-screen bg-gradient-to-br from-[#0d011d] via-[#1a0133] to-[#100023] text-white px-6 py-12"
//     >
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-purple-400 mb-10 text-center">
//           Projects
//         </h2>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project, idx) => (
//             <div
//               key={idx}
//               className="relative group overflow-hidden rounded-lg shadow-lg border border-purple-700 bg-[#1b0b2e]"
//             >
//               {/* Thumbnail */}
//               <img
//                 src={profileImg}
//                 alt={project.title}
//                 className="w-full h-48 object-cover"
//               />

//               {/* Hover overlay */}
//               <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center px-4 text-center z-20">
//                 <h3 className="text-lg font-semibold text-purple-300 mb-2">
//                   {project.title}
//                 </h3>

//                 <p className="text-sm text-gray-300 mb-3">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap justify-center gap-2 mb-4">
//                   {project.tech.map((t, i) => (
//                     <span
//                       key={i}
//                       className="text-xs bg-purple-800 px-2 py-1 rounded-full"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 {project.github && (
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-purple-600 hover:bg-purple-500 text-white text-sm px-4 py-2 rounded mt-2"
//                   >
//                     View on GitHub
//                   </a>
//                 )}
//               </div>

//               {/* Bottom Title */}
//               <div className="absolute bottom-0 left-0 w-full bg-[#290f4a] text-center py-2 z-10">
//                 <h3 className="text-md font-medium text-white">
//                   {project.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View More Button */}
//         <div className="mt-12 text-center">
//           <a
//             href="https://github.com/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-purple-700 hover:bg-purple-600 text-white font-medium px-6 py-3 rounded transition"
//           >
//             View More Projects on GitHub
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import { motion } from "framer-motion";
import projects from "../data/projectsData";
import profileImg from "../assets/stars.jpg";

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-34 py-24 px-6 bg-gradient-to-br from-[#0d011d] via-[#1a0133] to-[#100023] text-white min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-2">
          ShowCase of Projects        </h2>
<p className="text-center text-gray-200 mb-8">
  🚀 These are my <span className="font-semibold text-white">academic/college projects</span>. For real-time industry experience, <span className="font-semibold text-purple-400 animate-pulse">📄 check my resume</span> via the top-right button.
</p>

      </motion.div>


      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative group overflow-hidden rounded-xl border border-purple-700 shadow-md bg-[#1b0b2e]"
          >
            {/* Thumbnail */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center px-4 text-center z-20">
              {/* <h3 className="text-lg font-semibold text-purple-300 mb-2">
                {project.title}
              </h3> */}

              <p className="text-sm text-gray-300 mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-purple-800 px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-500 text-white text-sm px-4 py-2 rounded"
                >
                  View on GitHub
                </a>
              )}
            </div>

            {/* Bottom Title */}
            <div className="absolute bottom-0 left-0 w-full bg-[#290f4a] text-center py-2 z-10">
              <h3 className="text-md font-medium text-white">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-14 text-center"
      >
        <a
          href="https://github.com/BB-Design/Self-Learning-Projects"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-700 hover:bg-purple-600 text-white font-medium px-6 py-3 rounded transition"
        >
          View More Projects on GitHub
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
