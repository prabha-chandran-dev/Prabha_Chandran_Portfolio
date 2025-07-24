

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import certifications from "../data/certificationsData";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const badgeInfo = {
  "Core Subjects Certification": { icon: "📘", label: "Core Certified" },
  "Hackathon Certification": { icon: "🏁", label: "Hackathon Champion" },
  "Internship Certification": { icon: "💼", label: "Internship Completed" },
};

const Certifications = () => {
  const [currentIndexes, setCurrentIndexes] = useState(
    new Array(certifications.length).fill(0)
  );
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryItems, setGalleryItems] = useState([]);

  // Image rotation every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prev) =>
        prev.map((index, i) => (index + 1) % certifications[i].images.length)
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleOpenGallery = (images) => {
    const items = images.map((img) => ({
      original: img,
      thumbnail: img,
    }));
    setGalleryItems(items);
    setIsGalleryOpen(true);
  };

  return (
    <section
      id="certifications"
      className="scroll-mt-8 py-24 px-6 bg-gradient-to-br from-[#0d011d] via-[#1a0133] to-[#100023] text-white min-h-screen"
    >
      {/* Heading */}
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

      {/* Grid of Cards */}
      <motion.div
        className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {certifications.map((cert, i) => {
          const badge = badgeInfo[cert.category] || {};
          return (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="relative group bg-[#1b0b2e] border border-purple-700 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => handleOpenGallery(cert.images)}
            >
              {/* Badge */}
              <div className="absolute top-3 right-3 bg-purple-700 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                {badge.icon} {badge.label}
              </div>

              {/* Rotating Image */}
              <img
                src={cert.images[currentIndexes[i]]}
                alt={cert.category}
                className="w-full h-64 object-cover transition-opacity duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center px-4 text-center z-30 pointer-events-none">
                <div
                  className="pointer-events-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenGallery(cert.images);
                  }}
                >
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">
                    {cert.category}
                  </h3>
                  <a
                    href={cert.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block bg-purple-700 hover:bg-purple-600 text-white text-sm px-4 py-2 rounded transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Certifications
                  </a>
                </div>
              </div>

              {/* Bottom Label */}
              <div className="text-center bg-[#290f4a] py-2">
                <p className="text-white font-medium flex items-center justify-center gap-2">
                  {badge.icon} {cert.category}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Modal Gallery */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl z-10"
            >
              ✕
            </button>
            <ImageGallery
              items={galleryItems}
              showFullscreenButton={true}
              showPlayButton={false}
              showThumbnails={true}
              startIndex={0}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
