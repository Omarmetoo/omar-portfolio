import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "TailwindCSS", "JavaScript (ES6+)", "HTML", "CSS"]
    },
    {
      title: "Mobile Development",
      skills: ["Flutter", "Dart"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "SQL Basics"]
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git & GitHub",
        "Figma",
        "Postman",
        "VS Code",
        "Android Studio",
        "JUnit (Java)"
      ]
    }
  ];

  return (
    <section className="relative py-10 space-y-10 overflow-hidden">

      {/* BACKGROUND GLOW EFFECTS */}
      <div className="pointer-events-none absolute -top-32 left-0 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-indigo-600/40 to-purple-600/40 blur-3xl opacity-70 animate-pulse" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-cyan-400/30 to-indigo-500/40 blur-3xl opacity-60 animate-pulse" />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="relative inline-block text-3xl font-bold text-slate-900 dark:text-white drop-shadow">
          Skills
          <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-[pulse_2s_infinite]" />
        </h1>

        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 max-w-xl">
          Technologies and tools I work with across full-stack and mobile development.
        </p>
      </motion.div>

      {/* SKILLS GRID */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.08 } },
        }}
        className="grid gap-6 md:grid-cols-2"
      >
        {categories.map((cat, index) => (
          <motion.div
            key={cat.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="relative rounded-2xl border border-white/20 bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg
                       p-6 shadow-xl dark:shadow-[0_0_25px_rgba(99,102,241,0.15)] overflow-hidden"
          >
            {/* TOP SHINE LINE */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />

            {/* CORNER GRADIENT */}
            <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-2xl opacity-40" />

            {/* TITLE */}
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
              {cat.title}
            </h2>

            {/* SKILLS LIST */}
            <ul className="mt-3 flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <motion.li
                  key={skill}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-slate-300/50 bg-white/40
                             dark:bg-slate-800/60 dark:border-slate-700 text-slate-700 dark:text-slate-200
                             backdrop-blur-sm shadow-sm"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
