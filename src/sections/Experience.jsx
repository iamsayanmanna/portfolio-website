import { motion } from "framer-motion";
import {
  CalendarDays,
  Building2,
  Circle,
} from "lucide-react";

const journey = [
  {
    year: "2022",
    title: "Started Programming Journey",
    company: "Self Learning",
    description:
      "Started learning C programming, focusing on programming fundamentals, logic building and problem solving.",
    tech: ["C", "Programming"],
  },

  {
    year: "2022",
    title: "Built First Console Application",
    company: "Personal Project",
    description:
      "Built my first console-based applications and discovered a passion for software development.",
    tech: ["C", "Algorithms"],
  },

  {
    year: "2023",
    title: "Started Web Development",
    company: "Self Learning",
    description:
      "Started learning HTML, CSS and JavaScript while building responsive websites.",
    tech: ["HTML", "CSS", "JavaScript"],
  },

  {
    year: "2024",
    title: "Started BCA Journey",
    company: "Bhawanipur Global Campus • MAKAUT",
    description:
      "Started Bachelor of Computer Applications while strengthening programming and computer science fundamentals.",
    tech: ["BCA", "Computer Science"],
  },

  {
    year: "2024",
    title: "Started Python Development",
    company: "Self Learning",
    description:
      "Started learning Python and explored automation, scripting and software development.",
    tech: ["Python", "Automation"],
  },

  {
    year: "2025",
    title: "Google Cloud Skills Boost",
    company: "Google Cloud",
    description:
      "Completed cloud learning paths including Identity Management and Pre-trained AI APIs.",
    tech: ["Google Cloud", "IAM", "AI APIs"],
  },

  {
    year: "2025",
    title: "Python Development Internship",
    company: "CodeAlpha",
    description:
      "Completed a Python Development Internship by building practical automation projects.",
    tech: ["Python", "Automation", "GitHub"],
  },

  {
    year: "2025",
    title: "Smart India Hackathon",
    company: "Innovation Challenge",
    description:
      "Participated in Smart India Hackathon, collaborating to solve real-world challenges.",
    tech: ["Research", "Teamwork"],
  },

  {
    year: "2025",
    title: "GitHub Journey",
    company: "Open Source",
    description:
      "Started publishing projects on GitHub and building a professional developer profile.",
    tech: ["Git", "GitHub"],
  },

  {
    year: "2025",
    title: "React Ecosystem",
    company: "Frontend Development",
    description:
      "Started building modern applications using React, Tailwind CSS and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },

  {
    year: "2026",
    title: "Professional Portfolio",
    company: "Personal Brand",
    description:
      "Designed and developed a modern developer portfolio showcasing projects, certifications and technical skills.",
    tech: ["Portfolio", "React"],
  },

  {
    year: "Present",
    title: "Continuous Learning",
    company: "Career Growth",
    description:
      "Continuously improving skills in Full Stack Development, Python, Cloud Computing, AI and Open Source.",
    tech: ["Full Stack", "Cloud", "AI"],
  },
];

function Experience() {
  return null;
  return (
    <section
      id="experience"
      className="pt-10 pb-20 px-6"
    >
      <div className="w-[92%] max-w-[1400px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
  opacity: 1,
  y: 0,
}}

whileHover={{
  y: -10,
}}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <p className="text-gray-400 text-sm tracking-[0.4em] uppercase">
            My Journey
          </p>

          <div className="h-8"></div>

          <h2 className="text-7xl md:text-8xl font-black gradient-text">
            Experience
          </h2>

          <div className="mt-8 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

        </motion.div>

        <div className="relative max-w-[1150px] mx-auto">

  <div
  className="
  absolute
  left-1/2
  top-0
  -translate-x-1/2
  w-[3px]
  h-full
  rounded-full
  bg-gradient-to-b
  from-cyan-400
  via-blue-500
  to-purple-500
  opacity-80
  shadow-[0_0_30px_rgba(59,130,246,.35)]
  "
></div>

  {journey.map((item, index) => (

    <motion.div
      key={index}
      whileHover={{
  y: -10,
}}
whileTap={{
  scale: 0.98,
}}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
  duration: 0.6,
  ease: "easeOut",
}}
      viewport={{ once: true }}
      className={`
mb-16
lg:mb-20
flex
justify-center
lg:${index % 2 === 0 ? "justify-start" : "justify-end"}
`}
    >

<div
  className="
  absolute
  left-1/2
  -translate-x-1/2
  mt-10
  z-20
  "
>

  <motion.div
  animate={{
    scale: [1, 1.25, 1],
    boxShadow: [
      "0 0 10px rgba(34,211,238,.4)",
      "0 0 30px rgba(34,211,238,.9)",
      "0 0 10px rgba(34,211,238,.4)",
    ],
  }}
  whileHover={{
  scale: 1.4,
}}
  transition={{
    duration: 2.5,
    repeat: Infinity,
  }}
  className="
  w-5
  h-5
  rounded-full
  bg-cyan-400
  border-4
  border-[#0B1120]
  "
/>

</div>


      <div
  className="
  group
  relative
  lg:w-[46%] w-full
  rounded-3xl
  border
  border-white/15
  bg-white/5
  backdrop-blur-xl
  p-7 lg:p-8
  overflow-hidden

  transition-all
  duration-500

  hover:-translate-y-3
  hover:border-cyan-400/50
hover:bg-white/[0.08]
hover:shadow-[0_25px_60px_rgba(34,211,238,0.18)]
hover:scale-[1.02]
  "
>

  <div
  className="
  absolute
  inset-0
  opacity-0
  group-hover:opacity-100
  transition
  duration-500
  pointer-events-none
  "
>

  <div
    className="
    absolute
    -top-32
    -right-24
    w-60
    h-60
    rounded-full
    bg-cyan-500/10
    blur-3xl
    "
  />

</div>

        <div
  className="
  inline-flex
  items-center
  gap-2
  px-4
  py-2
  rounded-full
  bg-cyan-500/10
  border
  border-cyan-400/30
  text-cyan-300
  text-sm
  font-semibold
  mb-5
  "
>

  <CalendarDays size={16} />

  {item.year}

</div>

        <h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight mt-3">
  {item.title}
</h3>

<div
  className="
  flex
  items-center
  gap-2
  mt-3
  mb-5
  text-blue-300
  "
>

  <Building2 size={17} />

  <span className="font-medium">
    {item.company}
  </span>

</div>

<p className="text-gray-300 leading-7 text-gray-300/90">
  {item.description}
</p>

<div className="flex flex-wrap gap-2 mt-6">

  {item.tech.map((tech, i) => (

    <span
      key={i}
      className="
      px-3.5
py-1.5
rounded-xl
      text-sm
      font-medium
      bg-gradient-to-r from-cyan-500/10 to-blue-500/10
      border
      border-cyan-400/20
      text-cyan-300
      "
    >
      {tech}
    </span>

  ))}

</div>

      </div>

    </motion.div>

  ))}

</div>

      </div>
    </section>
  );
}

export default Experience;