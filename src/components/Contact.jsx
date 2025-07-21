// // src/components/Contact.jsx
// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//     const form = useRef();
//     const [isSent, setIsSent] = useState(false);
//     const [error, setError] = useState("");

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs
//             .sendForm(
//                 "service_ah3t36g",     // e.g. service_abcd123
//                 "template_fr2zcxs",    // e.g. template_xyz123
//                 form.current,
//                 "aVB1U72pwlERUfqa0"      // e.g. xLJz0n_something
//             )
//             .then(
//                 () => {
//                     setIsSent(true);
//                     form.current.reset();
//                     setError("");
//                 },
//                 (err) => {
//                     console.error("FAILED...", err.text);
//                     setError("Something went wrong. Please try again.");
//                 }
//             );
//     };

//     return (
//         <section id="contact" className="py-16 bg-[#0c011d] text-white">
//             <div className="max-w-4xl mx-auto px-6">
//                 <h2 className="text-4xl font-bold text-purple-400 mb-10 text-center">Contact Me</h2>

//                 <form ref={form} onSubmit={sendEmail} className="space-y-5">
//                     <input
//                         type="text"
//                         name="name"
//                         placeholder="Your Name"
//                         required
//                         className="w-full p-3 rounded bg-[#1b0b2e] border border-purple-700 text-white"
//                     />
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Your Email"
//                         required
//                         className="w-full p-3 rounded bg-[#1b0b2e] border border-purple-700 text-white"
//                     />

//                     <textarea
//                         name="message"
//                         placeholder="Your Message"
//                         required
//                         rows="5"
//                         className="w-full p-3 rounded bg-[#1b0b2e] border border-purple-700 text-white"
//                     ></textarea>

//                     <button
//                         type="submit"
//                         className="bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded text-white font-semibold transition"
//                     >
//                         Send Message
//                     </button>

//                     {isSent && (
//                         <p className="text-green-400 mt-2">Message sent successfully! ✅</p>
//                     )}
//                     {error && <p className="text-red-400 mt-2">{error}</p>}
//                 </form>
//             </div>
//         </section>
//     );
// };

// export default Contact;


import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ah3t36g",
        "template_fr2zcxs",
        form.current,
        "aVB1U72pwlERUfqa0"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          setError("");
        },
        (err) => {
          console.error("FAILED...", err.text);
          setError("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="scroll-mt-8 min-h-screen py-16 px-6 bg-gradient-to-br from-[#0d011d] via-[#1a0133] to-[#100023] text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-400 mb-10 text-center">
          Contact Me
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-[#1b0b2e] border border-purple-700 p-8 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-[#2a1d3e] border border-purple-600 text-white placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-[#2a1d3e] border border-purple-600 text-white placeholder-gray-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-3 rounded bg-[#2a1d3e] border border-purple-600 text-white placeholder-gray-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded text-white font-semibold transition"
          >
            Send Message
          </button>

          {isSent && (
            <p className="text-green-400 mt-2 text-center">
              Message sent successfully! ✅
            </p>
          )}
          {error && (
            <p className="text-red-400 mt-2 text-center">{error}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
