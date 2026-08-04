import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 95, icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", level: 92, icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", level: 90, icon: SiJavascript, color: "text-yellow-400" },
      { name: "React", level: 90, icon: FaReact, color: "text-cyan-400" },
      { name: "Tailwind", level: 92, icon: SiTailwindcss, color: "text-sky-400" },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.js", level: 80, icon: FaNodeJs, color: "text-green-500" },
      { name: "MongoDB", level: 75, icon: SiMongodb, color: "text-green-400" },
      { name: "Git", level: 90, icon: FaGitAlt, color: "text-orange-600" },
      { name: "GitHub", level: 90, icon: FaGithub, color: "text-white" },
      { name: "Figma", level: 88, icon: FaFigma, color: "text-pink-500" },
      { name: "Canva", level: 92, icon: FaFigma, color: "text-cyan-400" },
    ],
  },
];