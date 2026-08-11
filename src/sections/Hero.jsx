import profile from "../assets/Profile.png";
import { motion } from "framer-motion";
import resume from "../assets/resume.pdf";
import { TypeAnimation } from "react-type-animation";
import CountUp from 'react-countup';
import { HiOutlineBriefcase } from "react-icons/hi2";



import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiVercel, 
  SiDocker,
  SiPostman,
  SiRedux,
} from "react-icons/si";

function Hero() {
  return (
    <section
  id="home"
  className="relative flex items-center justify-center px-4 sm:px-6 pt-18 lg:pt-20 pb-0"
>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="particle particle-1"></div>
  <div className="particle particle-2"></div>
  <div className="particle particle-3"></div>
</div>


 {/* NEW */}
  <div className="mesh-bg"></div>



    

     <div className="relative z-10 w-full max-w-[1200px] mx-auto pt-8 pb-0">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            className="lg:pt-8 flex flex-col gap-6 lg:gap-8 ml-0 lg:-ml-10"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.span
 
  transition={{
    duration: 3,
    repeat: Infinity,
  }}
  className="inline-flex items-center w-fit self-center lg:self-start px-5 py-2.5 text-sm rounded-full border border-gray-200
bg-white
text-gray-700
shadow-sm backdrop-blur-md"
>
  <HiOutlineBriefcase
  className="text-blue-600 text-lg mr-2"
/>

<span>
  Open to Internships & Freelance Projects
</span>
  
</motion.span>

            {/* Heading */}
           <h1
  className="
  text-[3.5rem]
  sm:text-[4.5rem]
  md:text-[5rem]
  lg:text-[5rem]
  xl:text-[6rem]
  font-black
  tracking-[-0.06em]
  leading-[0.88]
  text-center
  lg:text-left
  select-none
  whitespace-nowrap
"
>
  <span className="text-[#0F172A] drop-shadow-[0_2px_2px_rgba(255,255,255,.4)]">
    Sayan
  </span>

  <span
    className="
    ml-2
    bg-gradient-to-r
    from-[#4285F4]
    via-[#26A69A]
    to-[#34A853]
    bg-clip-text
    text-transparent
    drop-shadow-[0_3px_15px_rgba(52,168,83,.15)]
    "
  >
    Manna
  </span>
</h1>

            {/* Subheading */}
           <div className="flex items-center justify-center lg:justify-start min-h-[40px]">
  <TypeAnimation
    sequence={[
"Full Stack Engineer • Java • Python",2500,
"React • MERN • Node.js",2500,
"AI / ML • Automation",2500,
"Java Backend • REST APIs",2500,
"Scalable Web Applications",2500,
"Data Analyst • Research Enthusiast", 2500,
"Problem Solver • Open Source",2500,
"Cloud Ready Applications",2500,
"BCA Student • Lifelong Learner",2500,
]}
    wrapper="h2"
    speed={50}
    repeat={Infinity}
    className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 font-bold"
  />

  <span className="animate-pulse text-blue-600 text-2xl ml-1">
    |
  </span>
</div>
            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl text-center lg:text-left">
             I design and develop scalable web applications using Java, Python, React, Node.js and modern AI technologies. Passionate about solving real-world problems through clean architecture, intuitive user experiences and high-performance software.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:justify-center gap-5">
              <a
  href="https://github.com/iamsayanmanna"
  target="_blank"
  rel="noopener noreferrer"
  className="
  h-14
  w-full
  sm:w-auto
  min-w-[240px]
  text-lg
  px-8
  flex
  items-center
  justify-center
  rounded-2xl
  bg-gradient-to-r
  from-[#4285F4]
  to-[#3367D6]
  text-white
  font-semibold
  shadow-lg
  hover:-translate-y-1
  hover:scale-105
  hover:shadow-blue-500/30
  hover:shadow-xl
  transition-all
  duration-300
  hover:scale-110
hover:shadow-blue-500/40
  "
>
  View Projects
</a>

              <a
  href={resume}
  download="Sayan_Manna_Resume.pdf"
  className="
  h-14
  w-full
  sm:w-auto
  min-w-[240px]
  text-lg
  px-8
  flex
  items-center
  justify-center
  rounded-2xl
  border
  border-gray-300
  bg-white
  text-gray-900
  font-semibold
  hover:bg-gray-100
  hover:-translate-y-1
  hover:border-[#4285F4]
  hover:shadow-lg
  hover:shadow-blue-200
  transition-all
  duration-300
  hover:scale-105
hover:shadow-purple-500/30
hover:shadow-xl
  "
>
  Download Resume
</a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-[600px] mx-auto lg:mx-0 mt-2">
              <div
  className="
bg-white
border
border-gray-200
rounded-2xl
px-4
py-4
sm:px-5
sm:py-5
text-center
hover:-translate-y-2
hover:border-[#4285F4]
hover:shadow-xl
hover:shadow-blue-500/20
transition-all
duration-300
cursor-pointer
hover:scale-[1.03]
"
>
     <h3 className="text-[2rem] font-extrabold">
  15+
</h3>
  <p className="text-[15px] text-gray-600 mt-2">Projects Built</p>
</div>

              <div
 className="
bg-white
border
border-gray-200
rounded-2xl
px-4
py-4
sm:px-5
sm:py-5
text-center
hover:-translate-y-2
hover:border-[#4285F4]
hover:shadow-xl
hover:shadow-purple-500/20
transition-all
duration-300
cursor-pointer
hover:scale-[1.03]
"
>
  <h3 className="text-[2rem] font-extrabold">
  2
</h3>
  <p className="text-[15px] text-gray-600 mt-2">Internships</p>
</div>

              <div
  className="
bg-white
border
border-gray-200
rounded-2xl
px-4
py-4
sm:px-5
sm:py-5
text-center
hover:-translate-y-2
hover:border-[#4285F4]
hover:shadow-xl
hover:shadow-cyan-500/20
transition-all
duration-300
cursor-pointer
hover:scale-[1.03]
"
>
  <h3 className="text-[2rem] font-extrabold">
  BCA
</h3>
  <p className="text-[15px] text-gray-600 mt-2">Computer Science</p>
</div>
            </div>
          </motion.div>

          


         {/* Right Image */}
<motion.div
 className="flex justify-center lg:justify-end lg:pr-0 lg:translate-x-16"
  initial={{ opacity: 0, x: 40 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -15, 0],
  }}
  transition={{
    opacity: { duration: 0.8 },
    x: { duration: 0.8 },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
>
  <div className="relative w-full max-w-[520px] aspect-square flex items-center justify-center mx-auto">

    {/* Orbit Icons */}

{/* OUTER RING - 8 LOGOS */}

<div className="orbit orbit-1">
  <FaReact size={40} color="#61DAFB" />
</div>

<div className="orbit orbit-2">
  <FaPython size={40} color="#3776AB" />
</div>

<div className="orbit orbit-3">
  <SiJavascript size={40} color="#F7DF1E" />
</div>

<div className="orbit orbit-4">
  <FaNodeJs size={40} color="#68A063" />
</div>

<div className="orbit orbit-5">
  <SiMongodb size={40} color="#47A248" />
</div>

<div className="orbit orbit-6">
  <SiMysql size={40} color="#4479A1" />
</div>

<div className="orbit orbit-7">
  <FaGitAlt size={40} color="#F05032" />
</div>

<div className="orbit orbit-8">
  <FaGithub size={40} color="#24292F" />
</div>


{/* INNER RING - 8 LOGOS */}

<div className="orbit orbit-9">
  <SiTailwindcss size={40} color="#06B6D4" />
</div>

<div className="orbit orbit-10">
  <FaFigma size={40} color="#F24E1E" />
</div>

<div className="orbit orbit-11">
  <SiTypescript size={40} color="#3178C6" />
</div>

<div className="orbit orbit-12">
  <SiFirebase size={40} color="#FFCA28" />
</div>

<div className="orbit orbit-13">
  <SiVercel size={40} color="#000000" />
</div>

<div className="orbit orbit-14">
  <SiDocker size={40} color="#2496ED" />
</div>

<div className="orbit orbit-15">
  <SiPostman size={40} color="#FF6C37" />
</div>

<div className="orbit orbit-16">
  <SiRedux size={40} color="#764ABC" />
</div>
  

    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4]/2 via-[#FBBC05]/1 to-[#34A853]/20 blur-[120px] rounded-full"></div>

    {/* Profile Image */}
    <img
  src={profile}
  alt="Sayan Manna"
  className="
  relative
  w-[280px]
  sm:w-[350px]
  md:w-[420px]
  lg:w-[500px]
  rounded-3xl
  border
  border-gray-300
  ring-1
ring-white
  shadow-xl
  transition-all
  duration-500
  hover:scale-105
  hover:-translate-y-2
 hover:scale-[1.02]
hover:-translate-y-1
  hover:shadow-xl
  "
/>

  </div>
</motion.div>
          
            

        </div>
      </div>
    </section>
  );
}

export default Hero;