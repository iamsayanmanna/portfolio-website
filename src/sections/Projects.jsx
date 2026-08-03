import { motion } from "framer-motion";
import { Code2, BrainCircuit, Database, ArrowUpRight } from "lucide-react";

import hangmanImg from "../assets/projects/hangman.png";
import stockImg from "../assets/projects/stock.png";
import emailImg from "../assets/projects/email.png";

const projects = [
  {
    title: "Hangman Game",
    description:
      "A professional Python-based Hangman game with ASCII visuals, lives system, score tracking and replay functionality.",

    image: hangmanImg,  

    link: "https://github.com/iamsayanmanna/CodeAlpha_Hangman_Game.git",
    icon: <Code2 size={80} />,
  },

  {
    title: "Stock Portfolio Tracker",
    description:
      "A Python automation tool that tracks stock investments, analyzes portfolio performance and calculates returns efficiently.",
      
    image: stockImg,
    link: "https://github.com/iamsayanmanna/CodeAlpha_Stock_Portfolio_Tracker.git",
    icon: <Database size={80} />,
  },

  {
    title: "Email Extractor Tool",
    description:
      "An automation utility built with Python and Regex that extracts, filters and validates unique email addresses.",
    image: emailImg,
    link: "https://github.com/iamsayanmanna/CodeAlpha_Email_Extractor.git",
    icon: <BrainCircuit size={80} />,
  },
];

function Projects() {
  return (
    <section
  id="projects"
  className="pt-10 pb-0 px-8"
>
    
      <div
  style={{
    width: "95%",
    maxWidth: "1400px",
     margin: "0 auto",
  }}
>
        {/* Section Title */}
       <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-center mb-16"
>

  <p className="text-gray-400 text-sm tracking-[0.4em] uppercase">
  My Recent Work
</p>

<div className="h-2"></div>

<h2 className="
projects-title
text-4xl
sm:text-5xl
md:text-6xl
lg:text-7xl
xl:text-8xl
font-black
gradient-text
leading-none
">
  Featured Projects
</h2>

  <div className="mt-8 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-[#4285F4]
via-[#5B7FFF]
to-[#7B61FF]"></div>

</motion.div>

        {/* Projects Grid */}
       <div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
gap-9
lg:gap-12
">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              className="
group
project-card
bg-white
border
border-gray-200
rounded-3xl
overflow-hidden
shadow-[0_15px_40px_rgba(17,24,39,.08)]
hover:border-[#4285F4]/40
hover:shadow-[0_30px_70px_rgba(66,133,244,.15)]
hover:ring-1
hover:ring-[#4285F4]/20
hover:ring-1
hover:ring-[#4285F4]/20
hover:-translate-y-3
transition-all
duration-500
flex
flex-col
"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >

              <div className="project-top-line"></div>

              {/* Preview Area */}
             {/* Project Thumbnail */}

<div className="relative h-72 overflow-hidden rounded-t-3xl border-b border-gray-100">

  <img
    src={project.image}
    alt={project.title}
    className="
      w-full
      h-full
      object-cover
      transition-all
      duration-500
      group-hover:scale-[1.08]
group-hover:rotate-[0.5deg]
    "
  />

  {/* Dark Overlay */}

  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

</div>

              {/* Content */}
              <div className="p-9 flex flex-col flex-1 min-h-[220px]">

                <h3
className="
text-[32px]
font-black
tracking-[-0.04em]
text-gray-900
tracking-[-0.03em]
text-gray-900
mb-6
leading-tight
"
>
                  {project.title}
                </h3>

                <p className="
text-gray-600
text-[16px]
leading-8
font-medium
text-gray-600
mb-8
">
                  {project.description}
                </p>

                <div className="mt-auto flex gap-3">

  {/* GitHub */}

  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex-1
      text-center
      h-12
flex
items-center
justify-center
      rounded-2xl
      border
      border-gray-200
bg-white
text-gray-700
hover:border-[#4285F4]
hover:text-[#4285F4]
hover:shadow-lg
      hover:bg-white/10
      transition-all
      duration-300
      font-semibold
      hover:bg-[#4285F4]
hover:text-white
hover:border-[#4285F4]
    "
  >
    GitHub
  </a>

  {/* Live / Source */}

  {project.live ? (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex-1
        text-center
        h-12
        flex
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-r
        from-[#4285F4]
via-[#5B7FFF]
to-[#7B61FF]
        font-semibold
        text-white
        hover:scale-105
        transition-all
      "
    >
      Live Demo
    </a>
  ) : (
    <button
      disabled
      className="
        flex-1
        h-12
        flex
        items-center
        justify-center
        rounded-2xl
        bg-gray-700/40
        text-gray-400
        cursor-not-allowed
        font-semibold
      "
    >
      Source Only
    </button>
  )}

</div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Text */}
        <motion.p
          className="
projects-description
text-center
text-gray-600
text-base
sm:text-lg
lg:text-xl
mt-16
lg:mt-24
mb-12
max-w-[700px]
mx-auto
leading-8
px-4
"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          These projects represent my journey in software development,
          automation and modern web technologies. I continuously build
          new solutions to improve my skills and solve real-world problems.
        </motion.p>

      </div>
    </section>
  );
}

export default Projects;