import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { motion, useScroll } from "framer-motion";
import { useState } from "react";
import Loader from "./components/Loader";
import Certificates from "./sections/Certificates";
import GitHubStats from "./sections/GitHubStats";
import LeetCodeStats from "./sections/LeetCodeStats";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Blog from "./sections/Blog";

function App() {
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />

        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Loader */}
      <Loader
        loading={loading}
        setLoading={setLoading}
      />

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-[999]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Website */}
      {!loading && (
        <>
          <Navbar />

          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <GitHubStats />
          <LeetCodeStats />
          <Experience />
          <Testimonials />
          <Blog />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;