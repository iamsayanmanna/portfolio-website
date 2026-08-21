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
  className="text-center mb-16"
>

  <p
    className="
    text-[#4285F4]
    font-semibold
    tracking-[0.25em]
    uppercase
    text-sm
    mb-4
    "
  >
    My Achievements
  </p>

<h2
  className="
  text-[3rem]
  sm:text-5xl
  lg:text-7xl
  font-black
  tracking-[-0.04em]
  leading-none
  text-gray-900
  whitespace-nowrap
"
>
  Certifi
  <span
    className="
    bg-gradient-to-r
    from-[#4285F4]
    via-[#EA4335]
    to-[#34A853]
    bg-clip-text
    text-transparent
    "
  >
    cations
  </span>
</h2>

  <div
    className="
    mt-6
    mx-auto
    w-28
    h-1
    rounded-full
    bg-gradient-to-r
    from-[#4285F4]
    via-[#FBBC05]
    to-[#34A853]
    "
  ></div>

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

bg-white/80
backdrop-blur-2xl

border
border-white/70

rounded-[32px]

overflow-hidden

shadow-[0_18px_55px_rgba(15,23,42,.08)]

hover:shadow-[0_45px_110px_rgba(66,133,244,.22)]

hover:border-[#4285F4]/50

hover:-translate-y-5
hover:scale-[1.02]

transition-all
duration-700
"
    >

      <div
className="
relative
overflow-hidden

rounded-t-[32px]

border-b
border-gray-100
"
>

  <img
    src={cert.image}
    alt={cert.title}
    className="
w-full
h-64
object-cover

transition-all
duration-700

group-hover:scale-110
group-hover:bg-white/30
group-hover:rotate-[0.5deg]
"
  />

  <div
  onClick={() => setSelectedCertificate(cert)}
    className="
      absolute
      inset-0
      bg-gradient-to-t
from-[#0B1020]/75
via-black/20
to-transparent
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
      size={38}
      className="text-white mb-2"
    />

    <div
className="
px-5
py-2.5

rounded-full

bg-white/20

backdrop-blur-md

border
border-white/30

text-white

font-semibold

text-sm

transition-all

group-hover:scale-110
"
>
View Certificate
</div>

  </div>

</div>

<div className="p-8 flex flex-col flex-1">
      <h3
className="
text-[28px]
font-black
tracking-[-0.04em]
leading-tight
text-gray-900
mb-4
min-h-[96px]
"
>
        {cert.title}
      </h3>

      <p
className="
text-[#4285F4]
font-semibold
mb-4
"
>
        {cert.issuer}
      </p>

      <span
className="
inline-flex
w-fit
px-4
py-2
rounded-full
bg-gray-100
text-gray-600
font-semibold
text-sm
"
>
  {cert.year}
</span>
</div>

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
          bg-white

text-gray-700

hover:bg-red-500

hover:text-white
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