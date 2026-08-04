import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[6px]">
            MY SKILLS
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-8 text-cyan-400">
                {category.title}
              </h3>

              <div className="space-y-7">
                {category.skills.map((skill, i) => {
                  const Icon = skill.icon;

                  return (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          <Icon className={`text-2xl ${skill.color}`} />
                          <span>{skill.name}</span>
                        </div>

                        <span>{skill.level}%</span>
                      </div>

                      <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1 }}
                          viewport={{ once: true }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}