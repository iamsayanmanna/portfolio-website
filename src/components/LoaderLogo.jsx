import { motion } from "framer-motion";

function LoaderLogo({ logoExit }) {
  return (
    <motion.div
    initial={false}
     animate={
  logoExit
    ? {
        scale: 1,
        y: 0,
      }
    : {
        scale: 1,
        y: 0,
      }
}
     transition={{
  layout: {
    type: "spring",
    stiffness: 120,
    damping: 18,
  },
}}
      className="inline-block"
    >
      <motion.h1
        layoutId="brand-logo"
        layout="position"
        initial={false}
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
    </motion.div>
  );
}

export default LoaderLogo;