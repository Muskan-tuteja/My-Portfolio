import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-cyan-400">CONTACT</p>

          <h2 className="text-5xl font-bold mt-4">
            Let's <span className="text-cyan-400">Work Together</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear
            from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >
            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-7">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <FaEnvelope className="text-cyan-400 text-xl" />
                </div>

                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="font-medium">
                    muskantuteja714@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <FaLocationDot className="text-cyan-400 text-xl" />
                </div>

                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="font-medium">
                    Haryana, India
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-5 mt-10">
              <a
                href="https://github.com/Muskan-tuteja"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition"
              >
                <FaGithub className="text-2xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/muskan-90b1b2322"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.form
            action="https://formsubmit.co/muskantuteja466@gmail.com"
            method="POST"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 space-y-6"
          >
            {/* Hidden Fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Contact Message"
            />
            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl bg-slate-900/70 border border-white/10 px-5 py-4 outline-none focus:border-cyan-400"
            />
            <input
  type="hidden"
  name="_next"
   value="https://my-portfolio-muskan-30c0.vercel.app/"
/>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl bg-slate-900/70 border border-white/10 px-5 py-4 outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full rounded-xl bg-slate-900/70 border border-white/10 px-5 py-4 outline-none focus:border-cyan-400"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
              className="w-full rounded-xl bg-slate-900/70 border border-white/10 px-5 py-4 outline-none resize-none focus:border-cyan-400"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-4 font-semibold text-lg hover:scale-[1.02] transition"
            >
              Send Message 🚀
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}