
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "../constants/socialLinks"; // Adjust path as needed

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
                "dBeG7O5tu8X_r92K5"
            )
            .then(
                () => {
                    setIsSent(true);
                    form.current.reset();
                    setError("");
                    launchConfetti();
                    setTimeout(() => setIsSent(false), 4000);
                },
                (err) => {
                    console.error("FAILED...", err.text);
                    setError("Something went wrong. Please try again.");
                }
            );
    };

    const launchConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });
    };

    useEffect(() => {
  const container = document.querySelector(".bubble-container");

  const interval = setInterval(() => {
    const bubble = document.createElement("div");
    bubble.className = "bubble";

    const size = Math.random() * 12 + 8; // 8–20px
    const left = Math.random() * 100; // 0%–100%
    const duration = Math.random() * 8 + 6; // 6–14s

    bubble.style.left = `${left}%`;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.animation = `floatUp ${duration}s ease-in forwards`;
    bubble.style.background = "rgba(255,255,255,0.2)";
    bubble.style.position = "absolute";
    bubble.style.bottom = "-40px";
    bubble.style.borderRadius = "9999px";
    bubble.style.zIndex = "0";
    bubble.style.pointerEvents = "none";
    bubble.style.boxShadow = "0 0 8px rgba(255,255,255,0.1)";

    container.appendChild(bubble);
    setTimeout(() => bubble.remove(), duration * 1000);
  }, 500);

  return () => clearInterval(interval);
}, []);



    return (
        <section
            id="contact"
            className="relative scroll-mt-8 min-h-screen py-20 pb-0 px-6 bg-gradient-to-br from-[#0d011d] via-[#1a0133] to-[#100023] text-white "
        >
                  {/* Background Glow Bubbles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-64 h-64 bg-purple-800 rounded-full mix-blend-lighten  opacity-20 top-20 left-10 animate-pulse" />
        <div className="absolute w-48 h-48 bg-pink-700 rounded-full mix-blend-lighten opacity-20 bottom-10 right-10 animate-pulse" />
      </div>

            <div className="bubble-container absolute inset-0 -z-10 overflow-hidden"></div>

            {/* Floating background bubbles */}
          <style>{`
  @keyframes floatUp {
    0% {
      transform: translateY(0) scale(1);
      opacity: 0.7;
    }
    100% {
      transform: translateY(-100vh) scale(0.4);
      opacity: 0;
    }
  }
`}</style>


            <div className="max-w-3xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-purple-400 mb-10 text-center"
                >
                    Let's Connect
                </motion.h2>

                <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="glass border border-purple-600 backdrop-blur-md p-8 rounded-2xl shadow-2xl space-y-6"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full p-3 rounded-lg bg-[#2a1d3e]/60 border border-purple-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full p-3 rounded-lg bg-[#2a1d3e]/60 border border-purple-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        rows="5"
                        className="w-full p-3 rounded-lg bg-[#2a1d3e]/60 border border-purple-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                    ></textarea>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-lg text-white font-semibold transition duration-300"
                    >
                        Send Message
                    </motion.button>

                    {isSent && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-green-400 text-center mt-4"
                        >
                            ✅ Message sent successfully!
                        </motion.p>
                    )}
                    {error && (
                        <p className="text-red-400 text-center mt-4">{error}</p>
                    )}
                </motion.form>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center mt-10 space-x-6"
                >
                    <a
                         href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition"
                    >
                        <Github size={28} />
                    </a>
                    <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition"
                    >
                        <Linkedin size={28} />
                    </a>
                    <a
                        href={socialLinks.gmail}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition"
                    >
                        <Mail size={28} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
