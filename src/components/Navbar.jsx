import { useEffect, useState, useRef } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      moreRef.current &&
      !moreRef.current.contains(event.target)
    ) {
      setMoreOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);



  useEffect(() => {
  const sections = ["home", "about", "skills", "projects", "contact"];

  const handleActiveSection = () => {
    const scrollPosition = window.scrollY + 150;

    sections.forEach((section) => {
      const element = document.getElementById(section);

      if (
        element &&
        scrollPosition >= element.offsetTop &&
        scrollPosition < element.offsetTop + element.offsetHeight
      ) {
        setActiveSection(section);
      }
    });
  };

  window.addEventListener("scroll", handleActiveSection);

  return () => {
    window.removeEventListener("scroll", handleActiveSection);
  };
}, []);

  const navItems = [
  { name: "Home", link: "#home", id: "home" },
  { name: "About", link: "#about", id: "about" },
  { name: "Skills", link: "#skills", id: "skills" },
  { name: "Projects", link: "#projects", id: "projects" },
  { name: "Contact", link: "#contact", id: "contact" },
  { name: "More", link: "#more", id: "more" },
];

  return (
    <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">

      <div
        className={`w-full max-w-[1280px] flex items-center justify-between px-10 py-1.5 rounded-[24px] border transition-all duration-300 ${
          scrolled
  ? "bg-white/80 border-gray-200 backdrop-blur-xl shadow-[0_10px_35px_rgba(17,24,39,0.08)]"
  : "bg-white/80 border-gray-200 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        }`}
        
      >

        {/* Logo */}
        <a
          href="#home"
          className="
          text-3xl xl:text-4xl
          font-black
          tracking-tight
          transition-all
          duration-300
          hover:scale-[1.03]
          hover:text-[#4285F4]
          "
        >
          <span
  className="
  text-[1.85rem]
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
  <span className="text-[#EA4335]">.</span>
</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-[18px] font-medium">

          {navItems.map((item, index) => (

            <li
  key={index}
  className="relative group"
  ref={item.name === "More" ? moreRef : null}
>

              {item.name === "More" ? (

  <button
  onClick={() => setMoreOpen(!moreOpen)}
  className="
    flex
    items-center
    gap-2
    text-gray-700
    hover:text-[#4285F4]
    transition-all
    duration-300
  "
>
  More

  <span
    className={`
      transition-transform
      duration-300
      ${moreOpen ? "rotate-180" : ""}
    `}
  >
    ⌄
  </span>

</button>

) : (

  <a
    href={item.link}
    className={`
      inline-block
      text-[18px]
      transition-all
      duration-300
      hover:scale-[1.02]
      px-2.5
py-2
rounded-lg
hover:bg-blue-50
      ${
        activeSection === item.id
  ? "text-[#4285F4] font-semibold bg-blue-50"
  : "text-gray-700 hover:text-[#4285F4]"
      }
    `}
  >
    {item.name}
  </a>

)}

              <span
  className={`
    absolute
    left-0
    -bottom-2
    h-[2px]
    bg-gradient-to-r
    from-[#4285F4]
    via-[#EA4335]
    to-[#34A853]
    transition-all
    duration-300
    ${
      activeSection === item.id
        ? "w-full"
        : "w-0 group-hover:w-full"
    }
  `}
/>


{item.name === "More" && moreOpen && (
  <div
    className="
      absolute
      top-10
      right-0
      w-64
      rounded-3xl
      border
      border-gray-200
      bg-white
      backdrop-blur-xl
      p-4
      shadow-[0_20px_60px_rgba(17,24,39,.10)]
      shadow-blue-500/10
      z-50
    "
  >
    <a
      href="#certificates"
      className="block px-4 py-3 rounded-2xl text-gray-700 hover:bg-blue-50 hover:text-[#4285F4] transition"
    >
      🏆 Certifications
    </a>

    <a
      href="#experience"
      className="block px-4 py-3 rounded-2xl text-gray-700 hover:bg-blue-50 hover:text-[#4285F4] transition"
    >
      💼 Experience
    </a>

    <a
      href="#github-stats"
      className="block px-4 py-3 rounded-2xl text-gray-700 hover:bg-blue-50 hover:text-[#4285F4] transition"
    >
      🐙 GitHub Stats
    </a>

    <a
      href="#leetcode"
      className="block px-4 py-3 rounded-2xl text-gray-700 hover:bg-blue-50 hover:text-[#4285F4] transition"
    >
      ⚡ LeetCode Stats
    </a>

    <a
      href="#testimonials"
      className="block px-4 py-3 rounded-2xl text-gray-700 hover:bg-blue-50 hover:text-[#4285F4] transition"
    >
      ❤️ Testimonials
    </a>

    <a
      href="#blog"
      className="block px-4 py-3 rounded-2xl text-gray-700 hover:bg-blue-50 hover:text-[#4285F4] transition"
    >
      ✍️ Blog
    </a>
  </div>
)}

            </li>

          ))}

        </ul>

        {/* Hire Me Button */}
        <a
          href="#contact"
          className="
          hidden
          lg:flex
          items-center
          justify-center
          px-7
          py-2.5
          rounded-xl
          bg-gradient-to-r
          from-[#4285F4]
          via-[#EA4335]
          to-[#34A853]
          text-white
          text-[18px]
          font-semibold
          shadow-[0_10px_35px_rgba(17,24,39,0.08)]
          hover:scale-110
          hover:shadow-[0_20px_60px_rgba(17,24,39,.10)]
          hover:shadow-purple-500/30
          hover:shadow-blue-500/30
          transition-all
          duration-300
          "
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          className="
          lg:hidden
          text-3xl
          text-gray-900
          "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-4xl font-light">☰</span>
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
          absolute
          top-full
          mt-3
          w-full
          max-w-[1350px]
          bg-white
          border
          border-gray-200
          rounded-[24px]
          p-6
          backdrop-blur-xl
          lg:hidden
          "
        >

          <ul className="flex flex-col gap-5 text-lg">

            {navItems.map((item, index) => (

              <li key={index}>

                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="
                  text-gray-700
                  hover:text-blue-600
                  transition-all
                  duration-300
                  "
                >
                  {item.name}
                </a>

              </li>

            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="
              mt-2
              px-5
              py-2.5
              rounded-xl
              bg-gradient-to-r
              from-[#4285F4]
via-[#EA4335]
to-[#34A853]
              text-gray-900
              font-semibold
              text-center
              "
            >
              Hire Me
            </a>

          </ul>

        </div>
      )}

    </nav>
  );
}

export default Navbar;