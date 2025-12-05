import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Software System Intern — Sword Middle East FZ LLC (Dubai)",
      date: "July 2024 – August 2024",
      points: [
        "Integrated with APIs and external services to support data exchange between system components.",
        "Collected and analyzed system data to enhance application behavior and performance.",
        "Implemented personalized interaction logic based on user patterns and historical data.",
        "Worked with AI-assisted workflows to refine system output using feedback-based improvements.",
        "Collaborated with developers to maintain smooth backend communication and system flow.",
      ],
      color: "from-indigo-500 to-purple-600",
    },

    {
      title: "Embedded Systems Trainee — Information Technology Institute (ITI), Egypt",
      date: "July 2025 – Present",
      points: [
        "Worked with AVR microcontrollers and low-level hardware interfacing.",
        "Developed and debugged embedded applications using C.",
        "Used embedded toolchains and IDEs for firmware development.",
        "Gained hands-on experience with Real-Time Operating Systems (RTOS).",
        "Applied embedded development concepts relevant to automotive systems.",
      ],
      color: "from-cyan-500 to-blue-500",
    },

    {
      title: "Capital Equipment Intern — Ernst & Young (EY), Cairo",
      date: "August 2025 – September 2025",
      points: [
        "Assisted in capital equipment evaluations and structured data handling for consulting engagements.",
        "Supported operational and financial analysis related to asset management.",
        "Worked on documentation reviews, process audits, and internal reporting tasks.",
        "Collaborated with consultants and analysts to ensure accurate project data flow.",
        "Developed communication and business workflow skills in a corporate environment.",
      ],
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="relative py-12 space-y-10 overflow-hidden">

      {/* BACKGROUND GLOW EFFECTS */}
      <div className="pointer-events-none absolute -top-40 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-indigo-500/40 to-purple-600/40 blur-3xl opacity-60 animate-pulse" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-400/30 to-indigo-500/40 blur-3xl opacity-60 animate-pulse" />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="relative inline-block text-3xl font-bold text-slate-900 dark:text-white">
          Experience
          <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-[pulse_2s_infinite]" />
        </h1>

        <p className="mt-4 text-sm max-w-xl text-slate-600 dark:text-slate-300">
          A summary of my hands-on experience across software engineering, embedded systems, and business environments.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative mt-10 space-y-12">

        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-[3px] bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 opacity-50 rounded-full" />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-14"
          >
            {/* TIMELINE DOT */}
            <div
              className={`absolute left-0 top-2 h-6 w-6 rounded-full bg-gradient-to-br ${exp.color} shadow-lg shadow-indigo-500/30`}
            />

            {/* CARD */}
            <div className="rounded-2xl border border-white/20 bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg p-6 shadow-xl dark:shadow-[0_0_20px_rgba(99,102,241,0.18)]">
              <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
                {exp.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-3">{exp.date}</p>

              <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                {exp.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
