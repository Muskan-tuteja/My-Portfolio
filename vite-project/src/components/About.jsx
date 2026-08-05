import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import {
  FaReact,
  FaCode,
  FaPaintBrush,
  FaGraduationCap,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaReact className="text-3xl text-cyan-400" />,
    title: "Frontend",
    desc: "Building responsive and modern React applications with clean UI.",
  },
  {
    icon: <FaPaintBrush className="text-3xl text-pink-400" />,
    title: "UI/UX Design",
    desc: "Creating attractive interfaces using Figma, Canva and Photoshop.",
  },
  {
    icon: <FaCode className="text-3xl text-green-400" />,
    title: "Development",
    desc: "JavaScript, React, Tailwind CSS, Node.js and modern web technologies.",
  },
  {
    icon: <FaGraduationCap className="text-3xl text-yellow-400" />,
    title: "Learning",
    desc: "Always exploring AI tools and improving my development skills.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-transparent text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cyan-400 uppercase tracking-[6px]">
            Get To Know Me
          </p>

          <h2 className="text-5xl font-bold mt-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-cyan-500 blur-[90px] opacity-20"></div>

              <img
                 src={profile}
                alt="profile"
                className="relative w-340px rounded-3xl border border-cyan-400/40 shadow-2xl hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
    Frontend  & MERN Stack Developer
</h3>

<p className="text-gray-300 leading-8 text-lg">
  I'm <span className="text-cyan-400 font-semibold">Muskan Tuteja</span>, a passionate Frontend Developer with hands-on experience in building responsive and interactive web applications using React, JavaScript, Tailwind CSS, Node.js, Express.js, and MongoDB. I enjoy developing full-stack projects, exploring AI-powered solutions, and writing clean, maintainable code to deliver seamless user experiences.
</p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    rotateX: 8,
                    rotateY: -8,
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg"
                >
                  {card.icon}

                  <h4 className="font-bold text-xl mt-4">
                    {card.title}
                  </h4>

                  <p className="text-gray-400 mt-3 text-sm leading-7">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-block rounded-full bg-cyan-500 px-8 py-3 font-semibold hover:bg-cyan-400 transition"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}