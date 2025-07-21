import { useEffect, useState } from "react";
import { ArrowUpCircle } from "lucide-react"; // ✅ Modern icon

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    show && (
      <button
        onClick={() =>
          document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
        }
        className="fixed bottom-6 right-6 z-50 bg-purple-700 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transition duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUpCircle size={24} className="text-white" /> {/* 👈 Bigger, cleaner icon */}
      </button>
    )
  );
};

export default ScrollToTopButton;
