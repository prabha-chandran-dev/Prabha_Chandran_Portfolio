


// import React, { useEffect, useState } from "react";
// import certifications from "../data/certificationsData";

// const Certifications = () => {
//   const [currentIndexes, setCurrentIndexes] = useState(
//     new Array(certifications.length).fill(0)
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndexes((prev) =>
//         prev.map((index, i) => (index + 1) % certifications[i].images.length)
//       );
//     }, 2500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="certifications"
//       className="scroll-mt-8 min-h-screen px-6 py-16 bg-gradient-to-br from-[#0d011d] via-[#1a0133] to-[#100023] text-white"
//     >
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-purple-400 text-center mb-12">
//           Certifications
//         </h2>

//         <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {certifications.map((cert, i) => (
//             <div
//               key={i}
//               className="relative group bg-[#1b0b2e] border border-purple-700 rounded-xl overflow-hidden shadow-lg"
//             >
//               {/* Rotating Image */}
//               <img
//                 src={cert.images[currentIndexes[i]]}
//                 alt={cert.category}
//                 className="w-full h-64 object-cover transition-opacity duration-500"
//               />

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center px-4 text-center">
//                 <h3 className="text-lg font-semibold text-purple-300 mb-2">
//                   {cert.category}
//                 </h3>
//                 <a
//                   href={cert.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-2 inline-block bg-purple-700 hover:bg-purple-600 text-white text-sm px-4 py-2 rounded transition"
//                 >
//                   View Certifications
//                 </a>
//               </div>

//               {/* Bottom Label */}
//               <div className="text-center bg-[#290f4a] py-2">
//                 <p className="text-white font-medium">{cert.category}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import certifications from "../data/certificationsData";

const Certifications = () => {
  const [currentIndexes, setCurrentIndexes] = useState(
    new Array(certifications.length).fill(0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prev) =>
        prev.map((index, i) => (index + 1) % certifications[i].images.length)
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="certifications"
      className="scroll-mt-8 py-24 px-6 bg-gradient-to-br from-[#0d011d] via-[#1a0133] to-[#100023] text-white min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-2">
          Certifications
        </h2>
        <p className="text-gray-400">Some of my professional credentials:</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
      >
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative group bg-[#1b0b2e] border border-purple-700 rounded-xl overflow-hidden shadow-lg"
          >
            {/* Rotating Image */}
            <img
              src={cert.images[currentIndexes[i]]}
              alt={cert.category}
              className="w-full h-64 object-cover transition-opacity duration-500"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center px-4 text-center">
              <h3 className="text-lg font-semibold text-purple-300 mb-2">
                {cert.category}
              </h3>
              <a
                href={cert.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block bg-purple-700 hover:bg-purple-600 text-white text-sm px-4 py-2 rounded transition"
              >
                View Certifications
              </a>
            </div>

            {/* Bottom Label */}
            <div className="text-center bg-[#290f4a] py-2">
              <p className="text-white font-medium">{cert.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;
