import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Future Teammate",
    role: "Software Developer",
    review:
      "Sayan consistently demonstrates curiosity, dedication and a strong willingness to learn. His passion for building practical software solutions makes him a promising developer to collaborate with.",
    badge: "Demo Preview",
  },

  {
    name: "Future Mentor",
    role: "Senior Software Engineer",
    review:
      "With continuous improvement in Python, React and Cloud technologies, Sayan shows excellent potential for real-world software engineering and professional growth.",
    badge: "Demo Preview",
  },

  {
    name: "Sayan Manna",
    role: "Developer's Note",
    review:
      "Every project I build teaches me something new. My mission is to keep learning, solve meaningful problems and become a software engineer who creates technology that truly makes an impact.",
    badge: "Personal Note",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="pt-20 pb-20 px-6"
    >
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

  {testimonials.map((item, index) => (

    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      className="
      group
      relative
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-8
      overflow-hidden

      hover:bg-white/10
      hover:border-pink-500/30
      hover:-translate-y-3
      hover:shadow-[0_20px_50px_rgba(236,72,153,.18)]

      transition-all
      duration-500
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
    bg-pink-500/10
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
    bg-purple-500/10
    blur-3xl
    "
  />

</div>

      <span
        className="
        absolute
        top-5
        right-5

        text-xs
        font-semibold

        px-3
        py-1

        rounded-full

        bg-pink-500/10
        border
        border-pink-500/20

        text-pink-300
        "
      >
        {item.badge}
      </span>

      <div className="flex items-center justify-between mb-8">

  <div className="flex items-center gap-4">

    <div
      className="
      w-14
      h-14
      rounded-full

      bg-gradient-to-br
      from-pink-500
      to-purple-500

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

      <p className="text-pink-400 text-sm">
        {item.role}
      </p>

    </div>

  </div>

  <div className="text-4xl opacity-20">
    ❝
  </div>

</div>

      <p
        className="
        text-gray-300
        leading-8
        italic
        "
      >
        "{item.review}"
      </p>

      <div className="mt-8">

        <h3
          className="
          text-2xl
          font-bold
          "
        >
          {item.name}
        </h3>

        <p
          className="
          text-pink-400
          mt-2
          "
        >
          {item.role}
        </p>

      </div>

      <div
  className="
  mt-8

  flex
  items-center
  gap-1

  text-yellow-400
  text-lg
  "
>
        ⭐⭐⭐⭐⭐
      </div>

    </motion.div>

  ))}

</div>
    </section>
  );
}

export default Testimonials;