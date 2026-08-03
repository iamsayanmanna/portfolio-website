import { motion } from "framer-motion";
import {
  HiOutlineMapPin,
  HiOutlineAcademicCap,
  HiOutlineUserCircle,
HiOutlineSparkles,
  HiOutlineBriefcase,
  HiOutlineBolt,
  HiOutlineMoon,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

function About() {
  return (
    <section
      id="about"
      className="pt-10 lg:pt-14 pb-6 px-4 sm:px-6"

     
    >

      {/* Animated Background Particles */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {/* Floating Background Orbs */}
<div className="about-orb about-orb-1"></div>
<div className="about-orb about-orb-2"></div>
  <div className="particle particle-1"></div>
  <div className="particle particle-2"></div>
  <div className="particle particle-3"></div>
  <div className="particle particle-4"></div>
  <div className="particle particle-5"></div>
</div>

      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[#4285F4] font-semibold tracking-[0.25em] uppercase text-sm mb-4">
  GET TO KNOW ME
</p>

          <motion.h2
  className="
text-5xl
sm:text-6xl
lg:text-7xl
font-black
tracking-[-0.04em]
leading-none
text-gray-900
"
  animate={{
    textShadow: [
      "0 0 0px rgba(59,130,246,0)",
      "0 0 40px rgba(59,130,246,0.45)",
      "0 0 0px rgba(59,130,246,0)",
    ],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
  }}
>
  <>
  About{" "}
  <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
    Me
  </span>
</>
</motion.h2>

         <div className="mt-6 mx-auto w-28 h-1 rounded-full bg-gradient-to-r from-[#4285F4] via-[#FBBC05] to-[#34A853]"></div>
        </motion.div>

        {/* Extra Gap */}
        <div className="h-12"></div>

        {/* Cards */}
        <div
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Who Am I */}
          <motion.div
            style={{
              padding: "2.5rem",
            }}
            className="
about-card-left
relative
bg-white
border
border-gray-200
rounded-3xl
shadow-[0_10px_30px_rgba(17,24,39,.05)]
hover:border-[#4285F4]/30
hover:shadow-[0_20px_60px_rgba(66,133,244,.12)]
hover:-translate-y-2
transition-all
duration-500
hover:scale-[1.02]
"
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            

            <div className="flex items-center gap-3 mb-8">
              <motion.div
  className="w-1 h-8 rounded-full bg-gradient-to-b from-[#4285F4] via-[#FBBC05] to-[#34A853]"
  animate={{
    scaleY: [1, 1.3, 1],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
></motion.div>

              <div className="flex items-center gap-3">
  <HiOutlineUserCircle className="text-[#4285F4] text-3xl" />

  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
    Who Am I?
  </h3>
</div>
            </div>

            <p
              style={{
                color:"#4b5563",
                lineHeight: "2",
                marginBottom: "1.5rem",
              }}
              className="text-base sm:text-lg md:text-xl"
            >
              I'm Sayan Manna, a passionate Full Stack Developer and BCA student who enjoys building modern, scalable, and user-centric software. My core expertise includes Java, Python, React, Node.js, MongoDB, and AI-powered applications.
            </p>

            <p
              style={{
                color:"#4b5563",
                lineHeight: "2",
                marginBottom: "1.5rem",
              }}
              className="text-base sm:text-lg md:text-xl"
            >
              I enjoy transforming ideas into high-quality digital products by combining clean architecture, intuitive UI, and efficient backend systems. I continuously explore new technologies and best engineering practices.
            </p>

            <p
              style={{
                color:"#4b5563",
                lineHeight: "2",
              }}
              className="text-base sm:text-lg md:text-xl"
            >
              My focus is on creating impactful software, solving real-world problems, contributing to open source, and continuously growing as a software engineer.
            </p>

            {/* Info Tags */}
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <a
  href="https://www.google.co.in/maps/place/124%2F7,+Kumor+Para,+Purba+Barisha,+Kolkata,+West+Bengal+700008/@22.4783287,88.3197897,19z/data=!3m1!4b1!4m6!3m5!1s0x3a027a79be578cdb:0x7df43ce9307e40db!8m2!3d22.4783287!4d88.3204334!16s%2Fg%2F11x6rk8xl7?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="about-tag location-tag flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 hover:bg-blue-50 text-base text-gray-700 shadow-sm hover:bg-blue-50"
>
  <>
  <HiOutlineMapPin className="text-red-400 text-lg" />
   Kolkata, India
</>
</a>

              <a
  href="https://bhawanipurglobal.edu.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="about-tag college-tag flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 hover:bg-blue-50 text-base text-gray-700 shadow-sm hover:bg-purple-50"
>
  <>
  <HiOutlineAcademicCap className="text-purple-400 text-lg" />
   BCA • Computer Science
</>
</a>

              <a
  href="https://www.linkedin.com/in/iamsayanmanna/"
  target="_blank"
  rel="noopener noreferrer"
  className="about-tag linkedin-tag flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 hover:bg-blue-50 text-base text-gray-700 shadow-sm hover:bg-green-50"
>
  <>
  <HiOutlineBriefcase className="text-green-400 text-lg" />
  Open to Internship
</>
</a>
            </div>
          </motion.div>

          {/* My Goal */}
          <motion.div
            style={{
              padding: "2.5rem",
            }}
            className="
about-card-right
relative
bg-white
border
border-gray-200
rounded-3xl
shadow-[0_10px_30px_rgba(17,24,39,.05)]
hover:border-[#34A853]/30
hover:shadow-[0_20px_60px_rgba(52,168,83,.12)]
hover:-translate-y-2
transition-all
duration-500
hover:scale-[1.02]"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            

            <div className="flex items-center gap-3 mb-8">
              <motion.div
  className="w-1 h-8 rounded-full bg-gradient-to-b from-[#4285F4] via-[#FBBC05] to-[#34A853]"
  animate={{
    scaleY: [1, 1.3, 1],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
></motion.div>

              <div className="flex items-center gap-3">
  <HiOutlineSparkles className="text-[#34A853] text-3xl" />

  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
    My Goal
  </h3>
</div>
            </div>

            <p
              style={{
                color:"#4b5563",
                lineHeight: "2",
                marginBottom: "1.5rem",
              }}
              className="text-base sm:text-lg md:text-xl"
            >
              My goal is to become a world-class Software Engineer capable of building products used by millions of people across the globe.
            </p>

            <p
              style={{
                color:"#4b5563",
                lineHeight: "2",
                marginBottom: "1.5rem",
              }}
              className="text-base sm:text-lg md:text-xl"
            >
             I aspire to work on cutting-edge technologies involving Artificial Intelligence, Cloud Computing, Full Stack Development, and scalable distributed systems.
            </p>

            <p
              style={{
                color:"#4b5563",
                lineHeight: "2",
              }}
              className="text-base sm:text-lg md:text-xl"
            >
              In the long term, I aim to build innovative technology products, contribute to the developer community, and eventually launch my own successful startup.
            </p>

            {/* Fun Facts */}
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <span className="
flex items-center gap-2 px-5 py-3 rounded-xl
bg-white border border-gray-200 text-base text-gray-700
hover:scale-110
hover:-translate-y-1
hover:border-blue-500/40
hover:shadow-lg
hover:shadow-blue-500/20
transition-all duration-300
">
               <HiOutlineBolt className="text-yellow-400 text-xl" />
                Building products that solve real-world problems
              </span>

              <span className="
flex items-center gap-2 px-5 py-3 rounded-xl
bg-white border border-gray-200 text-base text-gray-700
hover:scale-110
hover:-translate-y-1
hover:border-purple-500/40
hover:shadow-lg
hover:shadow-purple-500/20
transition-all duration-300
">
                <HiOutlineMoon className="text-indigo-400 text-xl" />
                Most productive during late-night coding sessions
              </span>

              <span className="
flex items-center gap-2 px-5 py-3 rounded-xl
bg-white border border-gray-200 text-base text-gray-700
hover:scale-110
hover:-translate-y-1
hover:border-cyan-500/40
hover:shadow-lg
hover:shadow-cyan-500/20
transition-all duration-300
">
               <HiOutlineRocketLaunch className="text-cyan-400 text-xl" />
                Learning, improving and shipping every single day
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;