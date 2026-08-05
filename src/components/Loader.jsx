import {
  AnimatePresence,
  motion,
  animate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const animatedProgress = useMotionValue(0);

const roundedProgress = useTransform(
  animatedProgress,
  (latest) => Math.round(latest)
);



  const greetings = [
  "Welcome",
  "Launching Experience",
  "Crafting Digital Experiences",
  "Building Premium Experiences",
  "Let's Build Something Great",
  "Creating Something Amazing",
];

const [greeting] = useState(
  greetings[Math.floor(Math.random() * greetings.length)]
);



  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 12;

      if (value >= 100) {
        value = 100;
      }

      setProgress(Math.floor(value));

      animate(animatedProgress, value, {
  duration: 0.35,
  ease: "easeOut",
});

      if (value === 100) {
        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);
        }, 400);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
  opacity: 0,
  scale: 1.08,
  filter: "blur(22px)",
}}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="
          fixed
          inset-0
          z-[99999]
          overflow-hidden
          bg-[#050505]
          flex
          items-center
          justify-center
          "
        >
          {/* Background Glow */}

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="
            absolute
            w-[650px]
            h-[650px]
            rounded-full
            blur-[140px]
            bg-blue-500/20
            "
          />

          <motion.div
            animate={{
              scale: [1.1, 0.9, 1.1],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
            }}
            className="
            absolute
            w-[500px]
            h-[500px]
            rounded-full
            blur-[120px]
            bg-purple-500/20
            "
          />




          {/* Aurora Layer 1 */}

<motion.div
  animate={{
    x: [-120, 120, -120],
    y: [-40, 40, -40],
    rotate: [0, 12, 0],
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
  absolute
  top-[-15%]
  left-[-10%]
  w-[900px]
  h-[300px]
  rounded-full
  bg-gradient-to-r
  from-[#4285F4]/18
via-[#34A853]/12
  to-transparent
  blur-[180px]
  -rotate-12
  "
/>

{/* Aurora Layer 2 */}

<motion.div
  animate={{
    x: [120, -120, 120],
    y: [40, -40, 40],
    rotate: [0, -10, 0],
  }}
  transition={{
    duration: 22,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
  absolute
  bottom-[-10%]
  right-[-10%]
  w-[850px]
  h-[260px]
  rounded-full
  bg-gradient-to-r
  from-[#EA4335]/12
via-[#FBBC05]/10
  to-transparent
  blur-[190px]
  rotate-12
  "
/>





            {[...Array(20)].map((_, i) => (
  <motion.div
    key={i}
    className="absolute rounded-full bg-white/20"
    style={{
      width: Math.random() * 6 + 3,
      height: Math.random() * 6 + 3,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
    animate={{
      y: [-20, 20, -20],
      opacity: [0.2, 1, 0.2],
      scale: [1, 1.8, 1],
    }}
    transition={{
      duration: Math.random() * 6 + 5,
      repeat: Infinity,
      delay: Math.random() * 5,
    }}
  />
))}


          <div className="relative z-20 text-center">

            {/* Logo */}


            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.85,
              }}
              animate={{
  opacity: 1,
  y: 0,
  scale: [1, 1.04, 1],
}}
              transition={{
  duration: 2,
  repeat: Infinity,
}}
              className="
              text-6xl
              md:text-8xl
              font-black
              tracking-tight
              select-none
              "
            >
              <span className="text-[#4285F4]">S</span>
              <span className="text-[#EA4335]">a</span>
              <span className="text-[#FBBC05]">y</span>
              <span className="text-[#4285F4]">a</span>
              <span className="text-[#34A853]">n</span>
              <span className="text-white">.</span>
            </motion.h1>





<motion.h2
  key={greeting}
  initial={{
    opacity: 0,
    y: 12,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.25,
    duration: 0.6,
  }}
  className="
  mt-8
  text-xl
  md:text-2xl

  font-semibold

  text-white

  tracking-tight
  "
>
  {greeting}
</motion.h2>





            {/* Subtitle */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.65 }}
              transition={{ delay: 0.4 }}
              className="
              mt-2
              text-gray-400
              tracking-[0.35em]
              uppercase
              text-sm
              "
            >
              Building Premium Experiences
            </motion.p>

            {/* Progress */}

            <div
              className="
              mt-12
              w-72
              h-[6px]
              rounded-full
              bg-white/10
              overflow-hidden
              mx-auto
              "
            >
              <motion.div
                style={{
  scaleX: progress / 100,
  transformOrigin: "left",
}}
                className="
                relative
overflow-visible
                origin-left
                h-full
                rounded-full
                bg-gradient-to-r
                from-[#4285F4]
                via-[#EA4335]
                to-[#34A853]
                shadow-[0_0_25px_rgba(66,133,244,.8)]
                "
              >
                <div
  className="
  absolute
  right-0
  top-1/2
  -translate-y-1/2

  w-5
  h-5

  rounded-full

  bg-white

  blur-md

  opacity-80
  "
/>
</motion.div>
            </div>

            <motion.p
  className="
  mt-2
  text-gray-400
  text-sm
  font-medium
  tracking-[0.15em]
  tabular-nums
  "
>
  <motion.span
  style={{
    display: "inline-block",
  }}
>
  {roundedProgress}
</motion.span>
  %
</motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;