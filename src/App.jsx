import React from "react";
import ThemeProvider from "./components/ThemeProvider";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Awards from "./components/Awards";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
// function App() {
//   return (
//     <div className="font-sans">
//       <Home />
//      <About />
//       <Projects />
//       <Skills />
//       <Contact />

//     </div>
//   );
// }

function App() {
  return (
<div className="bg-[#0d011d] text-white min-h-screen w-full">
      <Navbar />
      <main className="pt-20"> {/* Push content below the fixed nav */}
        <Home />
        <Skills />
        <Projects />
        <Certifications />
        <Awards />
        <Contact />
        <ScrollToTopButton />
      </main>
    </div>
  );
}
export default App;
