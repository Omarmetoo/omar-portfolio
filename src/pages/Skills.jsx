import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    color: "from-indigo-500 to-purple-600",
    skills: [
      { name: "React.js", level: "expert" },
      { name: "Next.js", level: "advanced" },
      { name: "TypeScript", level: "advanced" },
      { name: "JavaScript (ES6+)", level: "expert" },
      { name: "TailwindCSS", level: "expert" },
      { name: "Framer Motion", level: "intermediate" },
      { name: "HTML5 / CSS3", level: "expert" },
    ],
  },
  {
    title: "Backend & APIs",
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "Node.js", level: "advanced" },
      { name: "Express.js", level: "advanced" },
      { name: "REST API Design", level: "advanced" },
      { name: "JWT / Auth", level: "advanced" },
      { name: "Socket.io (real-time)", level: "intermediate" },
      { name: "Python (ML services)", level: "intermediate" },
    ],
  },
  {
    title: "Databases",
    color: "from-emerald-500 to-teal-600",
    skills: [
      { name: "MongoDB", level: "advanced" },
      { name: "Mongoose ODM", level: "advanced" },
      { name: "SQL (basics)", level: "intermediate" },
    ],
  },
  {
    title: "AI & ML",
    color: "from-violet-500 to-purple-600",
    skills: [
      { name: "VADER Sentiment Analysis", level: "used-in-prod" },
      { name: "TF-IDF Recommendations", level: "used-in-prod" },
      { name: "OpenAI API", level: "intermediate" },
      { name: "AI Chatbot Integration", level: "used-in-prod" },
    ],
  },
  {
    title: "Mobile",
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "Flutter", level: "intermediate" },
      { name: "Dart", level: "intermediate" },
    ],
  },
  {
    title: "Tools & DevOps",
    color: "from-slate-500 to-slate-600",
    skills: [
      { name: "Git & GitHub", level: "advanced" },
      { name: "Postman", level: "advanced" },
      { name: "Figma", level: "intermediate" },
      { name: "VS Code", level: "expert" },
      { name: "Vercel", level: "intermediate" },
      { name: "Android Studio", level: "intermediate" },
    ],
  },
];

const levelLabel = {
  expert: { text: "Expert", cls: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300" },
  advanced: { text: "Advanced", cls: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" },
  intermediate: { text: "Intermediate", cls: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400" },
  "used-in-prod": { text: "Production", cls: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" },
};

export default function Skills() {
  return (
    <section className="relative py-10 space-y-10 overflow-hidden">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -top-32 left-0 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-indigo-600/30 to-purple-600/30 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-cyan-400/20 to-indigo-500/30 blur-3xl opacity-50" />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="relative inline-block text-3xl font-bold text-slate-900 dark:text-white">
          Skills
          <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />
        </h1>
        <p className="mt-3 max-w-xl text-sm text-slate-600 dark:text-slate-300">
          Technologies I use day-to-day, with honest proficiency levels.{" "}
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">Production</span> = shipped in a real project.
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
        className="grid gap-5 md:grid-cols-2"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="relative rounded-2xl border border-white/20 bg-white/60 p-5 shadow-xl backdrop-blur-lg dark:bg-slate-900/60 dark:shadow-[0_0_25px_rgba(99,102,241,0.1)] overflow-hidden"
          >
            {/* accent line */}
            <div className={`pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${cat.color}`} />

            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">{cat.title}</h2>

            <ul className="mt-3 flex flex-wrap gap-2">
              {cat.skills.map((skill) => {
                const lv = levelLabel[skill.level];
                return (
                  <motion.li
                    key={skill.name}
                    whileHover={{ scale: 1.07, y: -2 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex items-center gap-1.5 rounded-full border border-slate-300/50 bg-white/60 px-3 py-1
                               text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm
                               dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200"
                  >
                    {skill.name}
                    <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-semibold ${lv.cls}`}>
                      {lv.text}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
