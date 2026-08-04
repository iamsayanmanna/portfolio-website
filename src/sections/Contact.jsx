import { motion } from "framer-motion";
import {
  User,
  Mail,
  MessageSquare,
  FileText,
} from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
emailjs.init("kVenJPacmhp5WfCtB");

function Contact() {

  const formRef = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  console.log("Clicked");

  emailjs
    .sendForm(
      "service_uktcq7o",
      "template_atd8lyp",
      formRef.current,
      "kVenJPacmhp5WfCtB"
    )
    .then(() => {
      alert("✅ Message Sent Successfully!");
      formRef.current.reset();
    })
    .catch((error) => {
      console.log(error);
      alert("❌ Failed to send message.");
    });
};
  return (
    <section
  id="contact"
  className="contact-section pt-12 pb-32 px-6"
>
      <div className="w-[90%] max-w-[1200px] mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="
text-[#4285F4]
font-semibold
tracking-[0.25em]
uppercase
text-sm
mb-4
">
LET'S CONNECT
</p>

          <h2 className="
contact-title
text-4xl
sm:text-5xl
md:text-6xl
lg:text-7xl
xl:text-8xl
font-black
gradient-text
mb-10
">
            Contact
<span className="
bg-gradient-to-r
from-[#4285F4]
via-[#EA4335]
to-[#34A853]
bg-clip-text
text-transparent
">
 Me
</span>
          </h2>


<div className="
mt-6
mx-auto
w-28
h-1
rounded-full
bg-gradient-to-r
from-[#4285F4]
via-[#FBBC05]
to-[#34A853]
"></div>

<p className="
max-w-[850px]
mx-auto
text-gray-300
text-base
sm:text-lg
lg:text-2xl
leading-8
lg:leading-10
px-4
">
           Available for internships, freelance opportunities and exciting collaborations.

Whether you're building a startup, scaling a product or looking for a frontend developer, I'd love to hear from you.
          </p>
        </motion.div>

        {/* Availability */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="
  mt-20
  grid
  lg:grid-cols-2
  gap-10
  items-start
  "
>

  {/* LEFT SIDE */}

<div className="space-y-6">

  <h3 className="text-3xl font-black text-gray-900">
    Contact Information
  </h3>

  <p className="text-gray-500 leading-8">
    Feel free to reach out for internships, freelance projects,
    collaborations or simply to say hello. I'll do my best to
    respond as soon as possible.
  </p>

  {/* Email */}

  <a
    href="mailto:sayanmanna.in@gmail.com"
    className="
    group
    flex
    items-center
    gap-5

    p-6

    rounded-3xl

    bg-white/80
    backdrop-blur-2xl

    border
    border-white/70

    shadow-[0_18px_55px_rgba(15,23,42,.08)]

    hover:border-[#4285F4]/30
    hover:-translate-y-2
    hover:shadow-[0_25px_60px_rgba(66,133,244,.18)]

    transition-all
    duration-500
    hover:scale-[1.02]
    "
  >

    <div className="
    w-14
    h-14
    rounded-2xl

    flex
    items-center
    justify-center

    bg-gradient-to-br
    from-[#4285F4]
    to-[#7B61FF]

    text-white
    hover:scale-[1.02]
    ">

      <Mail size={24} />

    </div>

    <div>

      <h4 className="font-bold text-gray-900">
        Email
      </h4>

      <p className="text-gray-500 text-sm">
        sayanmanna.in@gmail.com
      </p>

    </div>

  </a>

  <a
  href="https://wa.me/916289846778?text=Hello%20Sayan,%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20discuss%20a%20project%20with%20you."
  target="_blank"
  rel="noopener noreferrer"
  className="
  group
  flex
  items-center
  gap-5

  p-6

  rounded-3xl

  bg-white/80
  backdrop-blur-2xl

  border
  border-white/70

  shadow-[0_18px_55px_rgba(15,23,42,.08)]

  hover:border-[#25D366]/30
  hover:-translate-y-2
  hover:shadow-[0_25px_60px_rgba(37,211,102,.18)]

  transition-all
  duration-500
  hover:scale-[1.02]
  "
>

  <div
    className="
    w-14
    h-14
    rounded-2xl

    flex
    items-center
    justify-center

    bg-gradient-to-br
    from-[#25D366]
    to-[#128C7E]

    text-white
    text-2xl
    hover:scale-[1.02]
    "
  >
    💬
  </div>

  <div>

    <h4 className="font-bold text-gray-900">
      WhatsApp
    </h4>

    <p className="text-gray-500 text-sm">
      Chat with me instantly
    </p>

  </div>

</a>

<a
  href="https://www.linkedin.com/in/iamsayanmanna/"
  target="_blank"
  rel="noopener noreferrer"
  className="
  group
  flex
  items-center
  gap-5

  p-6

  rounded-3xl

  bg-white/80
  backdrop-blur-2xl

  border
  border-white/70

  shadow-[0_18px_55px_rgba(15,23,42,.08)]

  hover:border-[#0A66C2]/30
  hover:-translate-y-2
  hover:shadow-[0_25px_60px_rgba(10,102,194,.18)]

  transition-all
  duration-500
  hover:scale-[1.02]
  "
>

  <div
    className="
    w-14
    h-14
    rounded-2xl

    flex
    items-center
    justify-center

    bg-gradient-to-br
    from-[#0A66C2]
    to-[#004182]

    text-white
    text-2xl
    hover:scale-[1.02]
    "
  >
    💼
  </div>

  <div>

    <h4 className="font-bold text-gray-900">
      LinkedIn
    </h4>

    <p className="text-gray-500 text-sm">
      Connect Professionally
    </p>

  </div>

</a>

<div
  className="
  flex
  items-center
  gap-5

  p-6

  rounded-3xl

  bg-white/80
  backdrop-blur-2xl

  border
  border-white/70

  shadow-[0_18px_55px_rgba(15,23,42,.08)]
  hover:scale-[1.02]
  "
>

  <div
    className="
    w-14
    h-14
    rounded-2xl

    flex
    items-center
    justify-center

    bg-gradient-to-br
    from-[#34A853]
    to-[#0F9D58]

    text-white
    text-2xl
    hover:scale-[1.02]
    "
  >
    📍
  </div>

  <div>

    <h4 className="font-bold text-gray-900">
      Location
    </h4>

    <p className="text-gray-500 text-sm">
      Kolkata, West Bengal, India
    </p>

  </div>

</div>

</div>

  {/* RIGHT SIDE */}

  <div
  className="
  bg-white/80
  backdrop-blur-2xl

  border
  border-white/70

  rounded-[32px]

  p-10

  shadow-[0_18px_55px_rgba(15,23,42,.08)]
  hover:border-[#4285F4]/30
hover:shadow-[0_35px_90px_rgba(66,133,244,.18)]
transition-all
duration-700
  "
>

  <h3
    className="
    text-3xl
    font-black
    text-gray-900
    mb-8
    "
  >
    Send a Message
  </h3>

  <form
  ref={formRef}
  onSubmit={sendEmail}
  className="space-y-6"
>

    {/* Name */}

    <div className="relative">

  <User
    size={20}
    className="
    absolute
    left-5
    top-1/2
    -translate-y-1/2
    text-gray-400
    "
  />

  <input
  name="name"
    type="text"
    placeholder="Your Name"
    className="
    w-full
    pl-14
    pr-5
    py-4

    rounded-2xl

    border
    border-gray-200

    bg-white

    outline-none

    focus:border-[#4285F4]
    focus:ring-4
    focus:ring-[#4285F4]/10

    transition-all
    "
  />

</div>

    {/* Email */}

    <div className="relative">

  <Mail
    size={20}
    className="
    absolute
    left-5
    top-1/2
    -translate-y-1/2
    text-gray-400
    "
  />

  <input
   name="email"
    type="email"
    placeholder="Your Email"
    className="
    w-full
    pl-14
    pr-5
    py-4

    rounded-2xl

    border
    border-gray-200

    bg-white

    outline-none

    focus:border-[#4285F4]
    focus:ring-4
    focus:ring-[#4285F4]/10

    transition-all
    "
  />

</div>

    {/* Subject */}

    <div className="relative">

  <FileText
    size={20}
    className="
    absolute
    left-5
    top-1/2
    -translate-y-1/2
    text-gray-400
    "
  />

  <input
  name="subject"
    type="text"
    placeholder="Subject"
    className="
    w-full
    pl-14
    pr-5
    py-4

    rounded-2xl

    border
    border-gray-200

    bg-white

    outline-none

    focus:border-[#4285F4]
    focus:ring-4
    focus:ring-[#4285F4]/10

    transition-all
    "
  />

</div>

    {/* Message */}

    <div className="relative">

  <MessageSquare
    size={20}
    className="
    absolute
    left-5
    top-6
    text-gray-400
    "
  />

  <textarea
  name="message"
    rows="6"
    placeholder="Write your message..."
    className="
    w-full

    pl-14
    pr-5
    py-4

    rounded-2xl

    border
    border-gray-200

    bg-white

    resize-none

    outline-none

    focus:border-[#4285F4]
    focus:ring-4
    focus:ring-[#4285F4]/10

    transition-all
    "
  />

</div>

    {/* Button */}

   <button
  type="submit"
  className="
  w-full

  py-4

  rounded-2xl

  font-bold
  text-white
  text-lg

  bg-gradient-to-r
  from-[#4285F4]
  via-[#5B7FFF]
  to-[#34A853]

  shadow-lg
  shadow-[#4285F4]/20

  hover:shadow-[0_25px_60px_rgba(66,133,244,.35)]
  hover:-translate-y-1
  hover:scale-[1.02]

  active:scale-95

  transition-all
  duration-500
  "
>
  Send Message →
</button>


<p
  className="
  mt-5

  text-center

  text-sm

  text-gray-500
  "
>
  Usually I reply within <b>24 hours.</b>
</p>

  </form>

</div>

</motion.div>

      </div>
    </section>
  );
}

export default Contact;