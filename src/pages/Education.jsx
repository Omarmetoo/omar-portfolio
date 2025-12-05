import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  const sections = [
    {
      title: "British University in Egypt (BUE)",
      subtitle: "Bachelor of Computer Science & Software Engineering",
      desc: "Enrolled in a UK-validated programme delivered in partnership with London South Bank University, following British higher education standards.",
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "London South Bank University (LSBU)",
      subtitle: "Validated Partner University — Degree Alignment",
      desc: "The programme is academically aligned with LSBU, ensuring curriculum quality, academic oversight, and UK higher education validation.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const certifications = [
    "Introduction to Software Engineering – IBM",
    "Introduction to Artificial Intelligence – IBM",
    "Back-End Web Development – Certificate of Completion",
    "Front-End Web Design – Certificate of Completion",
    "Flutter Mobile Apps – Self-Taught (Certificate)",
    "EY Temporary Client Serving Professionals Global – Certificate of Completion",
    "Introduction to Circular Economy – Certificate of Completion",
  ];

  return (
    <section className="relative py-12 space-y-10 overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -top-40 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-indigo-500/40 to-purple-600/40 blur-3xl opacity-60 animate-pulse" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-cyan-400/30 to-indigo-500/40 blur-3xl opacity-60 animate-pulse" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="relative inline-block text-3xl font-bold text-slate-900 dark:text-white">
          Education
          <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-[pulse_2s_infinite]" />
        </h1>
      </motion.div>

      {/* EDUCATION SECTIONS */}
      <div className="space-y-8">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative rounded-2xl border border-white/20 bg-white/60 dark:bg-slate-900/60 
                       backdrop-blur-xl p-6 shadow-xl dark:shadow-[0_0_25px_rgba(99,102,241,0.15)]"
          >
            {/* GRADIENT CORNER ACCENT */}
            <div
              className={`absolute right-0 top-0 h-24 w-24 bg-gradient-to-br ${sec.color} blur-2xl opacity-30`}
            />

            <p className="text-lg font-semibold text-slate-900 dark:text-white">{sec.title}</p>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{sec.subtitle}</p>

            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{sec.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CERTIFICATIONS */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative rounded-2xl border border-white/20 bg-white/60 dark:bg-slate-900/60 
                   backdrop-blur-xl p-6 shadow-xl dark:shadow-[0_0_25px_rgba(99,102,241,0.15)] mt-6"
      >
        <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-2xl opacity-40" />

        <p className="text-lg font-semibold text-slate-900 dark:text-white">
          Courses & Certifications
        </p>

        <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          {certifications.map((cert, i) => (
            <motion.li
              key={i}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex items-start gap-2"
            >
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
              {cert}
            </motion.li>
          ))}
        </ul>
      </motion.div>

    </section>
  );
}
