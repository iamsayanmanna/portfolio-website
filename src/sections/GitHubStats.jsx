import { motion } from "framer-motion";

function GitHubStats() {
  return null;
  return (
    <section
      id="github-stats"
      className="pt-10 pb-20 px-6"
    >
      <div className="w-[92%] max-w-[1400px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-gray-400 text-sm tracking-[0.4em] uppercase">
            Open Source Journey
          </p>

          <div className="h-8"></div>

          <h2 className="text-7xl md:text-8xl font-black gradient-text">
            GitHub Stats
          </h2>

          <div className="mt-8 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

        </motion.div>


        <div className="grid lg:grid-cols-2 gap-10">

  <div
    className="
    bg-white/5
    border
    border-white/10
    rounded-3xl
    p-6
    backdrop-blur-xl
    "
  >
    <img
      src="https://github-readme-stats-sigma-five.vercel.app/api?username=iamsayanmanna&show_icons=true&theme=tokyonight&hide_border=true"
      alt="GitHub Stats"
      className="w-full rounded-2xl"
    />
  </div>

  <div
    className="
    bg-white/5
    border
    border-white/10
    rounded-3xl
    p-6
    backdrop-blur-xl
    "
  >
    <img
      src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=iamsayanmanna&layout=compact&theme=tokyonight&hide_border=true"
      alt="Top Languages"
      className="w-full rounded-2xl"
    />
  </div>

</div>

      </div>
    </section>
  );
}

export default GitHubStats;