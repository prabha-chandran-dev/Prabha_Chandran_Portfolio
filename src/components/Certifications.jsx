

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
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
//       className="scroll-mt-8 py-24 px-6 bg-gradient-to-br from-[#0d011d] via-[#1a0133] to-[#100023] text-white min-h-screen"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-center mb-12"
//       >
//         <h2 className="text-4xl font-bold text-purple-400 mb-2">
//           Certifications
//         </h2>
//         <p className="text-gray-400">Some of my professional credentials:</p>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//         viewport={{ once: true }}
//         className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
//       >
//         {certifications.map((cert, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.03 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className="relative group bg-[#1b0b2e] border border-purple-700 rounded-xl overflow-hidden shadow-lg"
//           >
//             {/* Rotating Image */}
//             <img
//               src={cert.images[currentIndexes[i]]}
//               alt={cert.category}
//               className="w-full h-64 object-cover transition-opacity duration-500"
//             />

//             {/* Hover Overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center px-4 text-center">
//               <h3 className="text-lg font-semibold text-purple-300 mb-2">
//                 {cert.category}
//               </h3>
//               <a
//                 href={cert.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-2 inline-block bg-purple-700 hover:bg-purple-600 text-white text-sm px-4 py-2 rounded transition"
//               >
//                 View Certifications
//               </a>
//             </div>

//             {/* Bottom Label */}
//             <div className="text-center bg-[#290f4a] py-2">
//               <p className="text-white font-medium">{cert.category}</p>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Certifications;


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import certifications from "../data/certificationsData";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const badgeInfo = {
  "Core Subjects Certification": { icon: "📘", label: "Core Certified" },
  "Hackathon Certification": { icon: "🏁", label: "Hackathon Champion" },
  "Internship Certification": { icon: "💼", label: "Internship Completed" },
};

const Certifications = () => {
  const [currentIndexes, setCurrentIndexes] = useState(
    new Array(certifications.length).fill(0)
  );
  const [lightboxOpenIndex, setLightboxOpenIndex] = useState(null);

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
        {certifications.map((cert, i) => {
          const badge = badgeInfo[cert.category] || {};
          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group bg-[#1b0b2e] border border-purple-700 rounded-xl overflow-hidden shadow-lg"
            >
              {/* 🎖️ Violet Badge */}
              <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md animate-pulse z-20">
                {badge.icon} {badge.label}
              </div>

              {/* Image (Clickable) */}
              <img
                src={cert.images[currentIndexes[i]]}
                alt={cert.category}
                className="w-full h-64 object-cover transition-opacity duration-500 cursor-pointer z-10 relative"
                onClick={() => setLightboxOpenIndex(i)}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center px-4 text-center pointer-events-none z-30">
                <div className="pointer-events-auto">
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
              </div>

              {/* Bottom Label */}
              <div className="text-center bg-[#290f4a] py-2 z-10 relative">
                <p className="text-white font-medium flex items-center justify-center gap-2">
                  {badge.icon} {cert.category}
                </p>
              </div>

              {/* Lightbox */}
              {lightboxOpenIndex === i && (
                <Lightbox
                  open
                  close={() => setLightboxOpenIndex(null)}
                  slides={cert.images.map((img) => ({ src: img }))}
                  plugins={[Zoom]}
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Certifications;
