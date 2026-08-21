
function Footer() {
  return (
    <footer
  className="
  relative
  bg-white
  border-t
  border-gray-200
  py-20
  px-6
  "
>

      <div className="w-[92%] max-w-[1400px] mx-auto">

        {/* Main Footer */}
        <div
  className="
  grid
  grid-cols-1
  lg:grid-cols-[1.4fr_.9fr_.9fr]

  gap-20

  mt-12

  items-start
  "
>

          {/* Left Side */}
          <div className="text-center md:text-left">

  <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
  Sayan
  <span className="text-[#34A853]">.</span>
</h2>

<p className="mt-4 text-[#4285F4] font-semibold tracking-[0.2em] uppercase text-sm">
FULL STACK DEVELOPER
</p>

<p className="mt-8 max-w-[420px] text-lg leading-8 text-gray-500">
  Building modern web experiences with clean code,
  thoughtful design and scalable architecture.
</p>

<div className="mt-8 flex w-fit items-center gap-3 rounded-full border border-[#34A853]/20 bg-[#34A853]/10 px-5 py-3">
  <span className="h-2.5 w-2.5 rounded-full bg-[#34A853]"></span>

  <span className="text-sm font-medium text-gray-700">
    Available for Internships & Freelance
  </span>
</div>
</div>

          {/* Right Side */}
          <div className="space-y-6">

  <h3 className="text-2xl font-black text-[#111827]">
    Connect
  </h3>

  <p className="text-gray-500 leading-7">
    Feel free to reach out through any of these platforms.
  </p>

  <a
    href="mailto:sayanmanna.in@gmail.com"
    className="footer-link flex items-center justify-between"
  >
    <span>Email</span>
    <span>↗</span>
  </a>

  <a
    href="https://www.linkedin.com/in/iamsayanmanna/"
    target="_blank"
    rel="noreferrer"
    className="footer-link flex items-center justify-between"
  >
    <span>LinkedIn</span>
    <span>→</span>
  </a>

  <a
    href="https://github.com/iamsayanmanna"
    target="_blank"
    rel="noreferrer"
    className="footer-link flex items-center justify-between"
  >
    <span>GitHub</span>
    <span>→</span>
  </a>

  <a
    href="https://drive.google.com/file/d/17YRki0CXNrrmnG14CkjJxYXHfAJfXS_K/view?usp=sharing"
    target="_blank"
    rel="noreferrer"
    className="footer-link flex items-center justify-between"
  >
    <span>Resume</span>
    <span>→</span>
  </a>

</div>

<div className="space-y-6">

  <h3 className="text-2xl font-black text-[#111827]">
    Navigation
  </h3>

  <p className="text-gray-500 leading-7">
    Explore different sections of my portfolio.
  </p>

  <a href="#about" className="footer-link flex justify-between">
    <span>About</span>
    <span>→</span>
  </a>

  <a href="#skills" className="footer-link flex justify-between">
    <span>Skills</span>
    <span>→</span>
  </a>

  <a href="#projects" className="footer-link flex justify-between">
    <span>Projects</span>
    <span>→</span>
  </a>

  <a href="#certificates" className="footer-link flex justify-between">
    <span>Certificates</span>
    <span>→</span>
  </a>

  <a href="#contact" className="footer-link flex justify-between">
    <span>Contact</span>
    <span>→</span>
  </a>

</div>
</div>

        {/* Bottom Line */}
       <div
  className="
  mt-20
  pt-8

  border-t
  border-gray-300

  flex
  flex-col
  md:flex-row

  items-center
  justify-between

  gap-3
  "
>

  <p className="text-gray-500 text-sm">
    © {new Date().getFullYear()} Sayan Manna. All rights reserved.
  </p>

 <div
  className="
    text-center
    md:text-right
    text-sm
    text-gray-500
    leading-6
  "
>
  <span>
    Crafted with React • Tailwind CSS • Framer Motion
  </span>
</div>

</div>

      </div>

    </footer>
  );
}

export default Footer;