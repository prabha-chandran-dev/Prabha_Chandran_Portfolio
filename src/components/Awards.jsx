
import GoldMedalist from "../assets/Graduation.jpg";
import IBM from "../assets/IBM_Certificate.png";
import GFG from "../assets/GfG Statistics.png";
import Research from "../assets/Research-Certificate.png";
import Hackathon from "../assets/Hackathon.png";
import CodeKaze from "../assets/CodeKaze.png";
import IBMLogo from "../assets/IBM_Logo.png";
import CodeKazeLogo from "../assets/CodeKaze_Logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { Howl } from "howler";
import { useState, useEffect, useRef } from "react";
import "../styles/swiper-theme.css";
import awards from "../data/awardsData";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

 
const Awards = () => {
  const [confettiKey, setConfettiKey] = useState(0);

const [isGalleryOpen, setIsGalleryOpen] = useState(false);
const [galleryItems, setGalleryItems] = useState([]);


const handleOpenGallery = (image) => {
  setGalleryItems([{ original: image, thumbnail: image }]);
  setIsGalleryOpen(true);
};
  const celebrateSound = useRef(
    new Howl({
      src: ["../sounds/celebrate.mp3"],
      volume: 0.5,
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setConfettiKey(prev => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const triggerCelebration = () => {
    setConfettiKey(prev => prev + 1);
    celebrateSound.current.play();
    if (window.navigator.vibrate) window.navigator.vibrate(200);
  };

  return (
    <section
      id="awards"
      className="scroll-mt-30 min-h-screen py-24 px-6 bg-gradient-to-br from-[#0d011d] via-[#1a0133] to-[#100023] text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <h2 className="text-4xl font-bold text-purple-400">🏆 Trophy Wall</h2>
        <p className="text-gray-400 mt-2 text-lg">Milestones that shaped my journey:</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          grabCursor={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
        >
          {awards.map((award, index) => (
            <SwiperSlide key={index}>

              <div className="min-h-[60vh] sm:min-h-[70vh]">
              <motion.div
                whileHover={{ scale: 1.02 }}
                onHoverStart={index === 0 ? triggerCelebration : undefined}
                transition={{ type: "spring", stiffness: 200 }}
                className={`relative group border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 max-w-5xl mx-auto
                  ${index === 0 ? "border-yellow-500 shadow-yellow-300" : "border-purple-700"} 
                  ${index === 1 ? "hover:border-[#006699]" : ""}
                  ${index === 2 ? "bg-[#07360d] border-green-600" : ""}
                  ${index === 4 ? "hover:shadow-yellow-300" : ""}`}
              >
                {index === 0 && <Confetti key={confettiKey} numberOfPieces={150} recycle={false} />}

             <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[34rem] mx-auto ">

                  <img
  src={award.image}
  alt={award.title}
  onClick={() => handleOpenGallery(award.image)}
  className="w-full h-full object-cover cursor-zoom-in "
/>


                 <div className="absolute inset-0 bg-black bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center px-4 py-6 z-10 overflow-y-auto max-h-full pointer-events-none">


                    {index === 1 && (
                      <img
                        src={IBMLogo}
                        alt="IBM Logo"
                        className="absolute opacity-10 w-40 h-40 top-6 right-6"
                      />
                    )}

                    {index === 2 && (
                      <span className="absolute top-6 left-6 bg-green-700 text-white px-3 py-1 text-xs font-bold rounded-full">
                        #1 in College
                      </span>
                    )}

                    {index === 4 && (
                      <>
                        <div className="absolute top-6 left-6 bg-yellow-600 text-white px-3 py-1 text-xs font-bold rounded-full animate-pulse">
                          🏅 2nd Place | ₹2000 Prize
                        </div>
                        <div className="w-48 h-2 bg-gray-700 rounded-full mt-4">
                          <div className="h-2 bg-yellow-300 rounded-full w-[80%] animate-pulse" />
                        </div>
                      </>
                    )}

                    {index === 5 && (
                      <>
                        <img
                          src={CodeKazeLogo}
                          alt="CodeKaze Logo"
                          className="absolute opacity-10 w-40 h-40 bottom-6 left-6"
                        />
                        <div className="absolute bottom-6 right-6 text-xs italic text-gray-300">
                          “Keep shipping code. Keep showing up.”
                        </div>
                        <div className="absolute top-6 left-6 bg-blue-800 text-white px-3 py-1 text-xs font-bold rounded-full">
                          Rank: #10 | Event: CodeKaze | Org: Coding Ninjas
                        </div>
                      </>
                    )}

                    <h1 className="text-2xl md:text-3xl font-bold text-purple-300 mb-4">
                      {award.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-2">
                      {award.description}
                    </p>
                    <p className="text-md md:text-lg text-gray-400 italic max-w-2xl">
                      {award.funFact}
                    </p>

                    {index === 3 && (
                      <>
                        <div className="mb-2 text-md text-cyan-300 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-cyan-300 pr-2 max-w-xl">
                          Hybrid Encryption | Access Control | Cloud Privacy
                        </div>
                        <div className="text-sm text-gray-400 mt-2">
                          <a
                            href="src\assets\Secure Data Journal.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-block px-4 py-2 text-sm font-medium bg-cyan-700 hover:bg-cyan-600 text-white rounded"
                          >
                            📄 View Paper
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
              </div>
            </SwiperSlide>
          ))}
          
        </Swiper>
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
      />
    </div>
  </div>
)}

      </motion.div>
    </section>
  );
};

export default Awards;
