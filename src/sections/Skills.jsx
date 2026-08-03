import { motion } from "framer-motion";

import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaTools,
} from "react-icons/fa";


const skillCategories = [
  {
  title: "Programming Languages",
  icon: <FaCode size={32} />,
  skills: [
    { name: "C", icon: "devicon-c-plain colored", level: 90 },
    { name: "Java", icon: "devicon-java-plain colored", level: 82 },
    { name: "Python", icon: "devicon-python-plain colored", level: 90 },
    { name: "JavaScript", icon: "devicon-javascript-plain colored", level: 90 },
    { name: "TypeScript", icon: "devicon-typescript-plain colored", level: 75 },
  ],
},

{
  title: "Frontend Development",
  icon: <FaLaptopCode size={32} />,
  skills: [
    { name: "HTML5", icon: "devicon-html5-plain colored", level: 95 },
    { name: "CSS3", icon: "devicon-css3-plain colored", level: 92 },
    { name: "React", icon: "devicon-react-original colored", level: 88 },
    { name: "Next.js", icon: "devicon-nextjs-plain", level: 70 },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored", level: 95 },
    { name: "Framer Motion", icon: "devicon-framermotion-original", level: 85 },
  ],
},

{
  title: "Backend & Database",
  icon: <FaServer size={32} />,
  skills: [
    { name: "Node.js", icon: "devicon-nodejs-plain colored", level: 70 },
    { name: "Express.js", icon: "devicon-express-original", level: 68 },
    { name: "REST API", icon: "devicon-fastapi-plain colored", level: 75 },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored", level: 75 },
    { name: "MySQL", icon: "devicon-mysql-plain colored", level: 85 },
  ],
},

{
  title: "Tools & Technologies",
  icon: <FaTools size={32} />,
  skills: [
    { name: "Git", icon: "devicon-git-plain colored", level: 90 },
    { name: "GitHub", icon: "devicon-github-original", level: 95 },
    { name: "VS Code", icon: "devicon-vscode-plain colored", level: 98 },
    { name: "Docker", icon: "devicon-docker-plain colored", level: 65 },
    { name: "Postman", icon: "devicon-postman-plain colored", level: 88 },
    { name: "Linux", icon: "devicon-linux-plain", level: 60 },
  ],
},
];

function Skills() {
  return (
    <section
id="skills"
className="pt-10 lg:pt-12 pb-10 lg:pb-12 px-4 sm:px-6"
>
      <div className="w-full max-w-[1320px] mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[#4285F4] font-semibold tracking-[0.25em] uppercase text-sm mb-4">
            Technologies I Use
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
    "0 0 40px rgba(59,130,246,.35)",
    "0 0 0px rgba(59,130,246,0)",
  ],
}}
transition={{
  duration:3,
  repeat:Infinity,
}}
>
<>
My{" "}
<span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
Skills
</span>
</>
</motion.h2>

         <div className="mt-6 mx-auto w-28 h-1 rounded-full bg-gradient-to-r from-[#4285F4] via-[#FBBC05] to-[#34A853]"></div>
        </motion.div>

        {/* Skills */}
        
        {/* Skills Cards Coming Here */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">

  {skillCategories.map((category, index) => (

    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
      }}
      viewport={{ once: true }}
     className="
group
bg-white
border
border-gray-200
rounded-3xl
shadow-[0_10px_30px_rgba(17,24,39,.05)]
      
      p-7
      min-h-[560px]
      backdrop-blur-xl
     hover:border-[#4285F4]/40
      hover:bg-blue-50
      transition-all
      duration-700
      hover:-translate-y-3
hover:shadow-2xl
hover:shadow-cyan-500/25
      "
    >

      {/* Category Header */}
{/* Category Header */}

<div className="flex items-center gap-4 mb-8">

  <div
  className="
  w-16
  h-16
  rounded-[22px]
  flex
  items-center
  justify-center
  bg-gradient-to-br
  from-white
  to-[#F5F9FF]
  border
  border-[#DCE7FF]
  shadow-[0_8px_20px_rgba(66,133,244,.12)]
  transition-all
  duration-500
  group-hover:scale-105
  group-hover:shadow-[0_15px_35px_rgba(66,133,244,.18)]
  "
>
  <div className="text-[34px] text-[#4285F4]">
    {category.icon}
  </div>
</div>

  <div>

    <h3
      className="
      text-[22px]
      font-extrabold
      text-gray-900
      leading-tight
      "
    >
      {category.title}
    </h3>

    

  </div>

</div>

      {/* Skills */}

      <div className="space-y-7">

        {category.skills.map((skill, i) => (

          <div key={i}>

          <div className="space-y-3">

  <div className="flex items-center justify-between">

    <div className="flex items-center gap-2">

      <i className={`${skill.icon} text-[26px]`}></i>

      <span className="text-[18px] font-medium text-gray-700">
        {skill.name}
      </span>

    </div>

    <span className="text-[18px] font-bold text-[#4285F4]">
      {skill.level}%
    </span>

  </div>

  <div className="w-full h-3 rounded-xl bg-gray-200 overflow-hidden">

    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${skill.level}%` }}
      transition={{
        duration: 1.4,
        delay: i * 0.12,
      }}
      viewport={{ once: true }}
      className="
h-full
rounded-xl
bg-gradient-to-r
from-[#4285F4]
via-[#34A853]
to-[#FBBC05]
shadow-[0_0_12px_rgba(66,133,244,.35)]
"
    />

  </div>

</div>

            

          </div>

        ))}

      </div>

    </motion.div>

  ))}

</div>

        {/* Description */}
        <motion.p
         className="
max-w-4xl
mx-auto
mt-10
text-center
text-[22px]
leading-[2.1]
font-normal
text-[#4B5563]
tracking-[-0.01em]
"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          I continuously improve my skills by building real-world projects,
          exploring modern technologies and staying updated with industry
          trends. My focus is on creating scalable, efficient and
          user-friendly digital solutions.
        </motion.p>

        {/* Bottom Tagline */}
        <motion.div
 className="mt-10 mb-4 text-center"
  initial={{
    opacity: 0,
    y: 20,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.8,
  }}
  viewport={{ once: true }}
>
  <motion.p
  className="
text-[#9CA3AF]
text-[15px]
font-semibold
uppercase
tracking-[0.65em]
select-none
"
  animate={{
  opacity: [0.5, 1, 0.5],
  letterSpacing: [
    "0.60em",
    "0.68em",
    "0.60em",
  ],
}}
  transition={{
    duration: 6,
    repeat: Infinity,
  }}
>
    Always Learning • Always Building • Always Improving
  </motion.p>
</motion.div>
      </div>
    </section>
  );
}

export default Skills;