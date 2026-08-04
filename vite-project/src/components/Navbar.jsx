import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/10 px-6 py-4 backdrop-blur-lg shadow-lg mt-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-white tracking-wide"
        >
          Muskan<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="transition duration-300 hover:text-cyan-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          className="hidden md:block rounded-full bg-cyan-500 px-5 py-2 font-semibold text-white transition hover:bg-cyan-400"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-white md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="mx-4 mt-3 rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col items-center gap-6 py-6 text-white">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg hover:text-cyan-400"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <a
              href="/resume.pdf"
              className="rounded-full bg-cyan-800 px-6 py-2 font-semibold"
            >
              Resume
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;