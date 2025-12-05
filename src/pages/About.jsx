import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative overflow-hidden py-10">

      {/* BACKGROUND BLOBS */}
      <div className="pointer-events-none absolute -top-32 -left-10 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/40 to-purple-600/40 blur-3xl opacity-70 animate-pulse" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-400/30 to-indigo-500/40 blur-3xl opacity-60 animate-pulse" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="relative inline-block text-4xl font-bold text-slate-900 dark:text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
          About Me
          {/* GLITCH HIGHLIGHT BAR */}
          <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-[pulse_1.8s_ease-in-out_infinite]" />
        </h1>

        <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-600 dark:text-slate-400">
          Who I am — How I think — What I build
        </p>
      </motion.div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto max-w-4xl rounded-3xl border border-white/20 bg-white/60 dark:bg-slate-900/60 
                   shadow-[0_8px_40px_rgba(99,102,241,0.25)] backdrop-blur-xl p-8 space-y-10"
      >
        {/* CARD TOP SHINE */}
        <div className="pointer-events-none absolute inset-x-10 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />

        {/* INTRO */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed"
        >
          I’m a <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Software Engineer</span> who loves
          building digital experiences that feel modern, smooth, and meaningful.  
          I work across <span className="font-semibold text-purple-600 dark:text-purple-400">Full-Stack development</span>,
          mobile applications, and scalable backend systems — always focusing on clarity, speed, and elegance.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-700 dark:text-slate-300 leading-relaxed"
        >
          I enjoy taking ideas from zero → production, transforming them into systems that are easy to use, cleanly
          engineered, and ready to evolve. Whether it's a cross-platform mobile app or a full-stack platform, I aim
          to build with precision and deliver something that actually makes sense in the real world.
        </motion.p>

        {/* SECTION GRID */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* WHAT I’M LEARNING */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white relative">
              What I’m Learning
              <span className="absolute -bottom-1 left-0 h-[2px] w-10 bg-indigo-500 rounded-full" />
            </h2>

            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {[
                "Advanced React patterns & performance tuning",
                "Deep backend architecture & authentication flows",
                "API scalability with Node.js & distributed systems",
                "Flutter animation & mobile UI structuring",
                "AI models & practical ML integration",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* INTERESTS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-3"
          >
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white relative">
              Areas of Interest
              <span className="absolute -bottom-1 left-0 h-[2px] w-10 bg-purple-500 rounded-full" />
            </h2>

            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {[
                "Full-stack systems & clean architecture",
                "Cross-platform mobile development",
                "Performance optimization & scalability",
                "Human-centered UI/UX design",
                "Automation, AI tooling, and workflow enhancement",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* SOFT SKILLS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-3"
          >
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white relative">
              Soft Skills
              <span className="absolute -bottom-1 left-0 h-[2px] w-10 bg-cyan-500 rounded-full" />
            </h2>

            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {[
                "Strong analytical problem-solving",
                "Clear & structured communication",
                "High attention to detail",
                "Fast learning & adaptability",
                "Leadership through clarity & responsibility",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* GOALS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-3"
          >
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white relative">
              My Goals
              <span className="absolute -bottom-1 left-0 h-[2px] w-10 bg-pink-500 rounded-full" />
            </h2>

            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {[
                "Master full-stack architecture with scalable systems",
                "Release high-quality production mobile apps",
                "Build real client solutions & improve real-world workflows",
                "Expand into cloud infrastructure & DevOps fundamentals",
                "Create tools that genuinely make people’s work easier",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
