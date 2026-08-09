import { motion } from "framer-motion";

function SharedLogo({
  layout = true,
  className = "",
  animated = false,
}) {
  return (
    <motion.h1
      layout={layout}
      layoutId="brand-logo"
      initial={false}
      animate={
        animated
          ? {
              scale: [1, 1.03, 1],
            }
          : {}
      }
      transition={{
        layout: {
          type: "spring",
          stiffness: 150,
          damping: 18,
        },
        scale: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={`
      font-black
      tracking-tight
      select-none
      whitespace-nowrap
      ${className}
      `}
    >
      <span className="text-[#4285F4]">S</span>
      <span className="text-[#EA4335]">a</span>
      <span className="text-[#FBBC05]">y</span>
      <span className="text-[#4285F4]">a</span>
      <span className="text-[#34A853]">n</span>
      <span className="text-white">.</span>
    </motion.h1>
  );
}

export default SharedLogo;