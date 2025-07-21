
// import projects from "../data/projectsData";
// import profileImg from "../assets/stars.jpg";

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="py-16 bg-gradient-to-br from-[#0d011d] via-[#1a0133] to-[#100023] text-white"
//     >
//       <div className="max-w-7xl mx-auto px-6">
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

//                 {/* GitHub Button */}
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

//               {/* Title bar at bottom */}
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


import projects from "../data/projectsData";
import profileImg from "../assets/stars.jpg";

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-8 min-h-screen bg-gradient-to-br from-[#0d011d] via-[#1a0133] to-[#100023] text-white px-6 py-12"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-400 mb-10 text-center">
          Projects
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-lg shadow-lg border border-purple-700 bg-[#1b0b2e]"
            >
              {/* Thumbnail */}
              <img
                src={profileImg}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center px-4 text-center z-20">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">
                  {project.title}
                </h3>

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
                    className="bg-purple-600 hover:bg-purple-500 text-white text-sm px-4 py-2 rounded mt-2"
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
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-700 hover:bg-purple-600 text-white font-medium px-6 py-3 rounded transition"
          >
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
