
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";
// import "../styles/swiper-theme.css";
// import awards from "../data/awardsData";

// const Awards = () => {
//   return (
//     <section id="awards" className="py-16 bg-[#0c011d] text-white">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <h2 className="text-4xl font-bold text-purple-400 mb-12">Awards & Achievements</h2>

//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           autoplay={{ delay: 4000 }}
//           loop={true}
//           pagination={{ clickable: true }}
//         >
//           {awards.map((award, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative group max-w-5xl mx-auto bg-[#1b0b2e] border border-purple-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
//                 {/* Make image rectangle shape: wider width, shorter height */}
//                 <img
//                   src={award.image}
//                   alt={award.title}
//                   className="w-full h-60 object-cover md:h-72 lg:h-80" // rectangle shape
//                 />

//                 {/* Overlay on hover */}
//                 <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center p-6">
//                   <h3 className="text-2xl font-semibold text-purple-300 mb-4">{award.title}</h3>
//                   <p className="text-sm text-gray-300 max-w-2xl">{award.description}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Awards;


// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";
// import "../styles/swiper-theme.css";
// import awards from "../data/awardsData";

// const Awards = () => {
//   return (
//     <section
//       id="awards"
//       className="scroll-mt-8 min-h-screen py-16 px-6 bg-gradient-to-br from-[#0d011d] via-[#1a0133] to-[#100023] text-white"
//     >
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-purple-400 mb-12">
//           Awards & Achievements
//         </h2>

//         <Swiper
//           modules={[Autoplay, Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           autoplay={{ delay: 4000 }}
//           loop={true}
//           pagination={{ clickable: true }}
//         >
//           {awards.map((award, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative group max-w-5xl mx-auto bg-[#1b0b2e] border border-purple-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
//                 <img
//                   src={award.image}
//                   alt={award.title}
//                   className="w-full h-60 md:h-72 lg:h-80 object-cover"
//                 />

//                 <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center p-6 text-center">
//                   <h3 className="text-2xl font-semibold text-purple-300 mb-4">
//                     {award.title}
//                   </h3>
//                   <p className="text-sm text-gray-300 max-w-2xl">
//                     {award.description}
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Awards;


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";

import "../styles/swiper-theme.css";
import awards from "../data/awardsData";

const Awards = () => {
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
        <h2 className="text-4xl font-bold text-purple-400">
          Awards & Achievements
        </h2>
        <p className="text-gray-400 mt-2">Milestones that shaped my journey:</p>
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
          autoplay={{ delay: 4000 }}
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
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative group bg-[#1b0b2e] border border-purple-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 max-w-5xl mx-auto"
              >
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-[28rem] object-cover rounded-t-2xl"
                />

                <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center p-6 text-center">
                  <h3 className="text-2xl font-semibold text-purple-300 mb-4">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-300 max-w-2xl">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Awards;
