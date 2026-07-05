import { useEffect, useState } from "react";

function LeetCodeStats() {

  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("https://alfa-leetcode-api.onrender.com/userProfile/iamsayanmanna")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section
      id="leetcode"
      className="pt-20 pb-20 px-6"
    >
      <div className="w-[90%] max-w-[1200px] mx-auto">

        <div className="text-center mb-20">

          <p className="text-gray-400 tracking-[0.4em] uppercase mb-4">
            Coding Journey
          </p>

          <h2 className="text-6xl md:text-7xl font-black gradient-text">
            LeetCode Stats
          </h2>

          <div className="mt-6 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500"></div>

        </div>

        <div
          className="
          max-w-[900px]
          mx-auto
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-12
          backdrop-blur-xl
          text-center
          "
        >

          <img
  src="https://leetcard.jacoblin.cool/iamsayanmanna?theme=dark&font=Karma&ext=heatmap"
  alt="LeetCode Stats"
  className="w-full rounded-2xl"
/>

        </div>

      </div>
    </section>
  );
}

export default LeetCodeStats;