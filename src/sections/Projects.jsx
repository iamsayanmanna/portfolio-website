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
    github:
      "https://github.com/iamsayanmanna/CodeAlpha_Hangman_Game.git",
    demo:
      "https://www.linkedin.com/posts/iamsayanmanna_codealpha-python-pythonprogramming-activity-7459326940857110528-ToqU?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFn_J64Bpq1LvgDTxvihhSXPCLA8-GmtXpM",
    tech: "Python",
  },

  {
    title: "Stock Portfolio Tracker",
    description:
      "A Python automation tool that tracks stock investments, analyzes portfolio performance and calculates returns efficiently.",
    image: stockImg,
    github:
      "https://github.com/iamsayanmanna/CodeAlpha_Stock_Portfolio_Tracker.git",
    demo:
      "https://www.linkedin.com/posts/iamsayanmanna_python-codealpha-pythonprogramming-activity-7464045912311386112-8mgx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFn_J64Bpq1LvgDTxvihhSXPCLA8-GmtXpM",
    tech: "Python",
  },

  {
    title: "Email Extractor Tool",
    description:
      "An automation utility built with Python and Regex that extracts, filters and validates unique email addresses.",
    image: emailImg,
    github:
      "https://github.com/iamsayanmanna/CodeAlpha_Email_Extractor.git",
    demo:
      "https://www.linkedin.com/posts/iamsayanmanna_python-codealpha-automation-ugcPost-7464200011849940992-pjxo/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFn_J64Bpq1LvgDTxvihhSXPCLA8-GmtXpM",
    tech: "Python + Regex",
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

  <p className="
text-[#4285F4]
font-semibold
tracking-[0.25em]
uppercase
text-sm
mb-4
">
  My Recent Work
</p>

<div className="h-2"></div>

<h2
  className="
  text-5xl
  sm:text-6xl
  lg:text-7xl
  font-black
  tracking-[-0.04em]
  leading-none
  text-gray-900
  "
>
  <>
    Featured{" "}
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
      Projects
    </span>
  </>
</h2>

  <div className="mt-6 mx-auto w-28 h-1 rounded-full bg-gradient-to-r from-[#4285F4] via-[#FBBC05] to-[#34A853]"></div>

</motion.div>

        {/* Projects Grid */}
       <div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
gap-10
lg:gap-12
">

          {projects.map((project, index) => (

            <motion.div
              key={index}
             className="
group
relative
overflow-hidden

rounded-[32px]

bg-white/80
backdrop-blur-2xl

border
border-white/70

shadow-[0_12px_40px_rgba(15,23,42,.08)]

transition-all
duration-700

hover:-translate-y-4
hover:scale-[1.015]

hover:border-[#4285F4]/30

hover:shadow-[0_35px_90px_rgba(66,133,244,.20)]

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
<div
className="
absolute
inset-0
opacity-0
group-hover:opacity-100
transition-opacity
duration-700
pointer-events-none
bg-gradient-to-br
from-white/40
via-transparent
to-transparent
"/>

              <div className="project-top-line"></div>

              {/* Preview Area */}
             {/* Project Thumbnail */}

<div
className="
relative
h-64
overflow-hidden
rounded-t-[32px]
">

  <img
    src={project.image}
    alt={project.title}
    className="
      w-full
      h-full
      object-cover
      transition-all
      duration-500
    group-hover:scale-[1.06]
    "
  />

  {/* Dark Overlay */}

  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent"></div>
  <div
className="
absolute
top-5
left-5

px-4
py-2

rounded-full

bg-white/90

backdrop-blur-xl

text-sm

font-semibold

text-gray-700

shadow-lg
"
>
 {project.tech}
</div>

</div>

              {/* Content */}
              <div className="p-8 lg:p-9 flex flex-col flex-1 min-h-[220px]">

                <h3
className="
text-3xl
lg:text-[34px]

font-black

tracking-[-0.05em]

leading-[1.05]

text-gray-900

mb-5
"
>
                  {project.title}
                </h3>

                <p className="
text-[15px]

leading-8

font-medium

text-gray-500

mb-10
"
>
                  {project.description}
                </p>

                <div className="mt-auto flex gap-3">

  {/* GitHub */}

  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="
flex-1

h-12

flex

items-center

justify-center

gap-2

rounded-full

border

border-gray-200

bg-white

font-semibold

text-gray-700

transition-all

duration-500

hover:bg-gradient-to-r

hover:from-[#4285F4]

hover:to-[#7B61FF]

hover:text-white

hover:border-transparent
"
  >
    <>
GitHub
<ArrowUpRight size={18}/>
</>
  </a>

  {/* Live / Source */}

  <a
  href={project.demo}
  target="_blank"
  rel="noopener noreferrer"
  className="
  flex-1
  h-12
  flex
  items-center
  justify-center
  rounded-2xl

  bg-gradient-to-r
  from-[#4285F4]
  via-[#5B7FFF]
  to-[#7B61FF]

  text-white
  font-semibold

  hover:scale-[1.03]
  hover:shadow-xl
  hover:shadow-[#4285F4]/30

  transition-all
  duration-300
  "
>
  Watch Demo
</a>

</div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Text */}
        <motion.p
          className="
projects-description

max-w-4xl
mx-auto

text-center

text-gray-500

text-lg
sm:text-xl

leading-10

font-medium

tracking-[-0.01em]

mt-20
lg:mt-24

mb-8

px-8
"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          I build real-world software projects that combine clean architecture,
modern technologies and practical problem-solving. Every project reflects
my passion for creating scalable, user-focused digital experiences while
continuously improving my engineering skills.
        </motion.p>

      </div>
    </section>
  );
}

export default Projects;