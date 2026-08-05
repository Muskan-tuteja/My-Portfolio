import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold">
              Muskan<span className="text-cyan-400">.</span>
            </h2>

            <p className="text-gray-400 mt-2">
              Frontend Developer | React Developer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">

            <a
              href="https://github.com/Muskan-tuteja"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/muskan-90b1b2322"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="#home"
              className="w-11 h-11 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center transition duration-300"
            >
              <FaArrowUp />
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-6 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Muskan Tuteja. ❤️
        </div>

      </div>
    </footer>
  );
}