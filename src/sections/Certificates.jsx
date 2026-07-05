import { motion } from "framer-motion";
import sihCertificate from "../assets/sih-certificate.png";
import aimlCertificate from "../assets/aiml-internship.png";
import rpaCertificate from "../assets/rpa-certificate.png";
import agcCertificate from "../assets/agc-certificate.png";
import { useState } from "react";
import { Eye, X } from "lucide-react";

const certificates = [
  {
    title: "Smart India Hackathon 2025",
    issuer: "NSHM Knowledge Campus",
    year: "2025",
    image: sihCertificate,
  },

  {
    title: "AI-ML Virtual Internship",
    issuer: "Google for Developers",
    year: "2024",
    image: aimlCertificate,
  },

  {
    title: "Robotic Process Automation",
    issuer: "Bhawanipur Global Campus",
    year: "2026",
    image: rpaCertificate,
  },

  {
    title: "Analytics Global Conference 2026",
    issuer: "AGC 2026",
    year: "2026",
    image: agcCertificate,
  },
];

function Certificates() {

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section
      id="certificates"
      className="pt-10 pb-20 px-6"
    >
      <div className="w-[92%] max-w-[1400px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-gray-400 text-sm tracking-[0.4em] uppercase">
            My Achievements
          </p>

          <div className="h-8"></div>

          <h2 className="text-7xl md:text-8xl font-black gradient-text">
            Certifications
          </h2>

          <div className="mt-8 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

        </motion.div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

  {certificates.map((cert, index) => (

    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      className="
      group
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-8
      backdrop-blur-xl
      hover:bg-white/10
      hover:border-blue-500/30
      hover:-translate-y-3
      hover:shadow-xl
      hover:shadow-blue-500/15
      transition-all
      duration-500
      "
    >

      <div className="relative mb-6 overflow-hidden rounded-2xl border border-white/10">

  <img
    src={cert.image}
    alt={cert.title}
    className="
      w-full
      h-48
      object-cover
      transition-transform
      duration-500
      group-hover:scale-110
    "
  />

  <div
  onClick={() => setSelectedCertificate(cert)}
    className="
      absolute
      inset-0
      bg-black/60
      backdrop-blur-sm
      opacity-0
      group-hover:opacity-100
      transition-all
      duration-500
      flex
      items-center
      justify-center
      flex-col
    "
  >
    <Eye
      size={42}
      className="text-white mb-2"
    />

    <span className="text-white font-semibold">
      View Certificate
    </span>

  </div>

</div>

      <h3 className="text-2xl font-bold mb-4">
        {cert.title}
      </h3>

      <p className="text-blue-400 mb-2">
        {cert.issuer}
      </p>

      <p className="text-gray-400">
        {cert.year}
      </p>

    </motion.div>

  ))}

</div>

      </div>

      {selectedCertificate && (

  <div
    className="
      fixed
      inset-0
      z-[999]
      bg-black/80
      backdrop-blur-md
      flex
      items-center
      justify-center
      p-6
    "
    onClick={() => setSelectedCertificate(null)}
  >

    <div
      className="relative flex justify-center items-center"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        onClick={() => setSelectedCertificate(null)}
        className="
          absolute
          -top-5
          -right-5
          w-12
          h-12
          rounded-full
          bg-white/10
          hover:bg-red-500
          transition-all
          duration-300
          flex
          items-center
          justify-center
        "
      >
        <X size={26} />
      </button>

      <img
  src={selectedCertificate.image}
  alt={selectedCertificate.title}
  className="
    max-w-[900px]
    w-full
    max-h-[85vh]
    h-auto
    object-contain
    rounded-3xl
    border
    border-white/20
    shadow-2xl
  "
/>

    </div>

  </div>

)}

    </section>
  );
}

export default Certificates;