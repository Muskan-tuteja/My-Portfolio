import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#050816] text-white flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-lg mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Muskan
            <span className="text-cyan-400"> Tuteja</span>
          </h1>

          <h2 className="text-2xl mt-5 font-semibold">
            <Typewriter
              words={[
                "Frontend Developer",
                "MERN stack developer",
                "UI/UX design"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
            />
          </h2>

          <p className="text-gray-400 mt-6 leading-8 max-w-xl">
            I create beautiful, fast and responsive web applications using
            React, Tailwind CSS and modern technologies. I also design creative
            graphics and AI-powered solutions.
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">
            <a
              href="#contact"
              className="bg-cyan-500 hover:bg-cyan-400 px-8 py-3 rounded-full font-semibold transition"
            >
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-full font-semibold transition"
            >
              Download Resume
            </a>
          </div>

          <div className="flex gap-5 text-3xl mt-10">
            <a href="https://github.com/yourgithub">
              <FaGithub className="hover:text-cyan-400 transition" />
            </a>

            <a href="https://linkedin.com/in/yourlinkedin">
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-80 h-80 bg-cyan-500 blur-[120px] opacity-20 rounded-full"></div>

          <img
            src={profile}
            alt="profile"
            className="w-80 h-80 object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_50px_#22d3ee]"
          />

          <FaReact className="absolute top-0 left-0 text-6xl text-cyan-400 animate-bounce" />

          <FaHtml5 className="absolute bottom-8 left-6 text-orange-500 text-5xl animate-pulse" />

          <FaCss3Alt className="absolute top-20 right-0 text-blue-500 text-5xl animate-bounce" />

          <FaJsSquare className="absolute bottom-0 right-10 text-yellow-400 text-5xl animate-pulse" />
        </motion.div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-10">
        <a href="#about">
          <div className="w-8 h-14 border-2 border-cyan-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="w-2 h-2 bg-cyan-400 rounded-full mt-2"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;