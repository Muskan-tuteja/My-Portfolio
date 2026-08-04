import { motion } from "framer-motion";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[6px] text-cyan-400">
            EXPERIENCE
          </p>

          <h2 className="text-5xl font-bold mt-4">
            My Journey
          </h2>
        </div>

        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>

          <div className="space-y-16">

            {experience.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative pl-16"
              >

                {/* Circle */}
                <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-cyan-400 shadow-[0_0_30px_#22d3ee]"></div>

                {/* Card */}

                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition">

                  <span className="text-cyan-400">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-bold mt-2">
                    {item.role}
                  </h3>

                  <h4 className="text-purple-400 mb-4">
                    {item.company}
                  </h4>

                  <p className="text-gray-400 leading-8">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">

                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}