import { motion } from "framer-motion";
import {
  BadgeCheck,
  Star,
  StarHalf,
} from "lucide-react";

const testimonials = [
  {
    name: "Aman Karki",
    role: "Co-Founder & COO",
    company: "SkillBotix",
    review:
      "Sayan is highly dedicated and always eager to improve. His attention to detail and willingness to learn make him a developer with strong long-term potential.",
    badge: "Verified",
    rating: 5,
  },

  {
    name: "Nihal Gazi",
    role: "Founder & CEO",
    company: "KindSynapse",
    review:
      "His portfolio demonstrates clean UI design, responsive layouts and continuous improvement. I'm excited to see what he builds next.",
    badge: "Community",
    rating: 4.9,
  },

  {
    name: "Sayan Manna",
    role: "Developer's Note",
    company: "Personal Mission",
    review:
      "Every project is another step toward becoming a world-class software engineer. I believe consistency beats motivation.",
    badge: "Personal",
    rating: 3,
  },
  {
    name: "Saurav Das",
    role: "Senior UI/UX Designer",
    company: "Cognizant",
    review:
      "Great eye for design and performance. The code structure is clean, making it very easy to hand off and integrate into our production setup.",
    badge: "Verified",
    rating: 4.5,
  },
  {
    name: "Subham Roy",
    role: "Full Stack Developer",
    company: "TCS",
    review:
      "Worked together on a web app project. Outstanding frontend execution with pixel-perfect accuracy and great responsiveness.",
    badge: "Verified",
    rating: 4,
  },
  {
    name: "Pooja Banerjee",
    role: "Product Designer",
    company: "Swiggy",
    review:
      "Delivered the user interface ahead of time. The attention to spacing, typography, and mobile responsiveness was top-notch.",
    badge: "Verified",
    rating: 5,
  },
  {
    name: "Ayan Mukherjee",
    role: "Software Engineer",
    company: "Wipro",
    review:
      "Super smooth experience working together. Highly efficient with modern JavaScript frameworks and clean CSS architecture.",
    badge: "Verified",
    rating: 4.5,
  },
  {
    name: "Rishi Ganguly",
    role: "Founder",
    company: "PixelCraft Agency",
    review:
      "Hired for our client's landing page redesign. Conversion rates went up significantly right after launch. Highly recommended!",
    badge: "Verified",
    rating: 5,
  },
  {
    name: "Sneha Sen",
    role: "Frontend Lead",
    company: "Tech Mahindra",
    review:
      "Very professional and proactive in communication. Understands edge-cases in responsive web design extremely well.",
    badge: "Verified",
    rating: 4.5,
  },
  {
    name: "Debanjan Saha",
    role: "Backend Engineer",
    company: "Capgemini",
    review:
      "API integration was flawless. Clean component architecture made backend data wiring smooth without any hitch.",
    badge: "Verified",
    rating: 4.7,
  },
  {
    name: "Ankita Ghosal",
    role: "Digital Marketer",
    company: "Freelancer",
    review:
      "The portfolio and web design were lightning-fast and perfectly optimized for SEO. Exactly what my clients needed.",
    badge: "Verified",
    rating: 5,
  },
  {
    name: "Tritoy Dutta",
    role: "Tech Lead",
    company: "Infosys",
    review:
      "Consistently delivers clean code, great UI aesthetics, and follows proper web development best practices.",
    badge: "Verified",
    rating: 4.9,
  }
];

function Testimonials() {
  return (
   <section
id="testimonials"
className="pt-2 pb-20 px-6"
>

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, amount: 0.15, }}
  className="text-center mb-14"
>

  <p className="text-[#4285F4] font-semibold tracking-[0.25em] uppercase text-sm mb-4">
    WHAT PEOPLE SAY
  </p>

  <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-none text-gray-900">
    Testi
    <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
      monials
    </span>
  </h2>

  <div className="mt-6 mx-auto w-28 h-1 rounded-full bg-gradient-to-r from-[#4285F4] via-[#FBBC05] to-[#34A853]"></div>

</motion.div>

<div className="overflow-hidden py-4">

  <div className="testimonial-slider flex gap-8 w-max">

  {[...testimonials, ...testimonials].map((item, index) => (

    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
      }}
      viewport={{ once: true, amount: 0.15 }}
      className="
group
relative

w-[360px]

bg-white/80
backdrop-blur-2xl

border
border-white/70

rounded-[32px]

p-7

overflow-hidden

shadow-[0_18px_55px_rgba(15,23,42,.08)]

hover:shadow-[0_35px_90px_rgba(66,133,244,.18)]

hover:border-[#4285F4]/30

hover:-translate-y-3
hover:scale-[1.02]

transition-all
duration-700
"
    >

      <div
  className="
  absolute
  inset-0
  opacity-0
  group-hover:opacity-100
  transition-opacity
  duration-500
  pointer-events-none
  "
>

  <div
    className="
    absolute
    -top-24
    -right-24
    w-56
    h-56
    rounded-full
    bg-[#34A853]/10
    blur-3xl
    "
  />

  <div
    className="
    absolute
    -bottom-24
    -left-24
    w-56
    h-56
    rounded-full
    bg-[#4285F4]/10
    blur-3xl
    "
  />

</div>

      <span
  className="
  absolute
  top-5
  right-5
  flex
  items-center
  gap-1.5

  px-3
  py-1

  rounded-full

  bg-[#4285F4]/10
  border
  border-[#4285F4]/20

  text-[#4285F4]
  text-xs
  font-semibold
  "
>
  <BadgeCheck size={14} />
  {item.badge}
</span>

      <div className="flex items-center justify-between mb-8">

  <div className="flex items-center gap-4">

    <div
      className="
      w-16
      h-16
      rounded-full

      bg-gradient-to-br
      from-[#4285F4]
via-[#5B7FFF]
to-[#34A853]
shadow-lg
shadow-[#4285F4]/25

      flex
      items-center
      justify-center

      text-white
      text-xl
      font-bold
      "
    >
      {item.name.charAt(0)}
    </div>

    <div>

      <h3 className="text-xl font-bold">
        {item.name}
      </h3>

      <p className="text-[#4285F4] text-sm font-medium">

{item.role} • {item.company}

</p>

    </div>

  </div>

  <div className="text-4xl opacity-20">
    ❝
  </div>

</div>

      <p
        className="
        text-gray-600
text-[15px]
leading-7
font-medium
        "
      >
        "{item.review}"
      </p>

      

      <div
  className="
  mt-6

  flex
  items-center
  gap-1

  text-yellow-400
  text-lg
  "
>
   <div className="mt-6 flex items-center gap-1">

  {Array.from({ length: 5 }).map((_, i) => {

    const fullStars = Math.floor(item.rating);
    const hasHalfStar = item.rating % 1 >= 0.5;

    if (i < fullStars) {
      return (
        <Star
          key={i}
          size={16}
          className="fill-[#FBBC05] text-[#FBBC05]"
        />
      );
    }

    if (i === fullStars && hasHalfStar) {
      return (
        <StarHalf
          key={i}
          size={16}
          className="fill-[#FBBC05] text-[#FBBC05]"
        />
      );
    }

    return (
      <Star
        key={i}
        size={16}
        className="text-gray-300"
      />
    );

  })}

</div>
      </div>

    </motion.div>

 ))}

</div>   {/* testimonial-slider */}

</div>   {/* overflow-hidden */}

    </section>
  );
}

export default Testimonials;