import { motion } from "framer-motion";
import { Copy, ExternalLink } from "lucide-react";
import {
  SiGmail,
  SiWhatsapp,
  SiGooglemaps,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

import {
  User,
  Mail,
  MessageSquare,
  FileText,
} from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
emailjs.init("kVenJPacmhp5WfCtB");

function Contact() {

  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);

  console.log("Clicked");

  emailjs
    .sendForm(
      "service_uktcq7o",
      "template_atd8lyp",
      formRef.current,
      "kVenJPacmhp5WfCtB"
    )
    .then(() => {

setLoading(false);

alert("✅ Message Sent Successfully!");

formRef.current.reset();

})
    .catch((error) => {
      setLoading(false);
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

  <div>

  <p className="
  uppercase
  tracking-[0.28em]
  text-[#4285F4]
  font-semibold
  text-sm
  mb-4
  ">
    GET IN TOUCH
  </p>

  <h3 className="
  text-5xl
  font-black
  tracking-[-0.04em]
  text-gray-900
  leading-tight
  ">
    Contact
    <span className="text-[#34A853]">.</span>
  </h3>

  <p className="
  mt-6
  max-w-[520px]
  text-lg
  leading-8
  text-gray-500
  ">
    Open to internships, freelance projects and meaningful
    collaborations. Feel free to reach out anytime.
  </p>

</div>

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
w-16
h-16

rounded-2xl

bg-white

border
border-gray-200

flex
items-center
justify-center

shadow-[0_8px_25px_rgba(0,0,0,.06)]

group-hover:scale-110
group-hover:shadow-[0_18px_45px_rgba(66,133,244,.18)]

transition-all
duration-500
">

      <SiGmail
  size={30}
  className="text-[#EA4335]"
/>

    </div>

    <div>

      <h4
  className="
  text-[18px]
  font-bold
  tracking-[-0.02em]
  text-gray-900
  "
>
  Email
</h4>

<p
  className="
  mt-1
  text-[15px]
  text-gray-500
  "
>
  sayanmanna.in@gmail.com
</p>

    </div>

    <div
  className="
  ml-auto

  text-gray-300

  text-2xl

  transition-all
  duration-300

  group-hover:text-[#4285F4]
  group-hover:translate-x-1
  "
>
  →
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
  before:absolute
before:inset-0
before:rounded-[32px]
before:bg-gradient-to-r
before:from-[#4285F4]/0
before:via-[#4285F4]/5
before:to-[#34A853]/0
before:opacity-0
hover:before:opacity-100
before:transition-all
before:duration-700
relative
overflow-hidden

  transition-all
  duration-500
  hover:scale-[1.02]
  "
>

  <div
    className="
w-16
h-16

rounded-2xl

bg-white

border
border-gray-200

flex
items-center
justify-center

shadow-[0_8px_25px_rgba(0,0,0,.06)]

group-hover:scale-110
group-hover:shadow-[0_18px_45px_rgba(66,133,244,.18)]

transition-all
duration-500
"
  >
   <SiWhatsapp
  size={30}
  className="text-[#25D366]"
/>
  </div>

  <div>

    <h4
  className="
  text-[18px]
  font-bold
  tracking-[-0.02em]
  text-gray-900
  "
>
  WhatsApp
</h4>

<p
  className="
  mt-1
  text-[15px]
  text-gray-500
  "
>
  Chat with me instantly
</p>

  </div>
  <div
  className="
  ml-auto

  text-gray-300

  text-2xl

  transition-all
  duration-300

  group-hover:text-[#4285F4]
  group-hover:translate-x-1
  "
>
  →
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
w-16
h-16

rounded-2xl

bg-white

border
border-gray-200

flex
items-center
justify-center

shadow-[0_8px_25px_rgba(0,0,0,.06)]

group-hover:scale-110
group-hover:shadow-[0_18px_45px_rgba(66,133,244,.18)]

transition-all
duration-500
"
  >
   <FaLinkedin
  size={30}
  className="text-[#0A66C2]"
/>
  </div>

  <div>

    <h4
  className="
  text-[18px]
  font-bold
  tracking-[-0.02em]
  text-gray-900
  "
>
  LinkedIn
</h4>

<p
  className="
  mt-1
  text-[15px]
  text-gray-500
  "
>
  Connect Professionally
</p>

  </div>
  <div
  className="
  ml-auto

  text-gray-300

  text-2xl

  transition-all
  duration-300

  group-hover:text-[#4285F4]
  group-hover:translate-x-1
  "
>
  →
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
w-16
h-16

rounded-2xl

bg-white

border
border-gray-200

flex
items-center
justify-center

shadow-[0_8px_25px_rgba(0,0,0,.06)]

group-hover:scale-110
group-hover:shadow-[0_18px_45px_rgba(66,133,244,.18)]

transition-all
duration-500
"
  >
    <SiGooglemaps
  size={30}
  className="text-[#34A853]"
/>
  </div>

  <div>

   <h4
  className="
  text-[18px]
  font-bold
  tracking-[-0.02em]
  text-gray-900
  "
>
  Location
</h4>

<p
  className="
  mt-1
  text-[15px]
  text-gray-500
  "
>
  Kolkata, West Bengal, India
</p>

  </div>

  <div
  className="
  ml-auto

  text-gray-300

  text-2xl

  transition-all
  duration-300

  group-hover:text-[#4285F4]
  group-hover:translate-x-1
  "
>
  →
</div>

</div>

<div
  className="
  mt-8

  rounded-[28px]

  bg-white/80
  backdrop-blur-2xl

  border
  border-white/70

  p-7

  shadow-[0_18px_55px_rgba(15,23,42,.08)]
  "
>

  <div className="flex items-center justify-between py-3 border-b border-gray-100">

    <span className="text-gray-500">
      Availability
    </span>

    <span className="font-semibold text-[#34A853]">
      Open to Work
    </span>

  </div>

  <div className="flex items-center justify-between py-3 border-b border-gray-100">

    <span className="text-gray-500">
      Response Time
    </span>

    <span className="font-semibold text-gray-900">
      Within 24 Hours
    </span>

  </div>

  <div className="flex items-center justify-between pt-3">

    <span className="text-gray-500">
      Time Zone
    </span>

    <span className="font-semibold text-gray-900">
      GMT +5:30 (IST)
    </span>

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
transition-[transform,box-shadow,border-color]
duration-300
will-change-transform
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
    required

    autoComplete="off"
spellCheck={false}
autoCapitalize="words"

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

     transition-colors
duration-200
text-gray-900
caret-[#4285F4]

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
    required

    autoComplete="off"
spellCheck={false}
inputMode="email"

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

     transition-colors
duration-200
text-gray-900
caret-[#4285F4]

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
    required

    autoComplete="off"
spellCheck={false}

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

     transition-colors
duration-200
text-gray-900
caret-[#4285F4]
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
    required

    autoComplete="off"
spellCheck={false}

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

    transition-colors
duration-200
text-gray-900
caret-[#4285F4]
    "
  />

</div>

    {/* Button */}

   <button
type="submit"
disabled={loading}
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
  {loading ? "Sending..." : "Send Message →"}
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