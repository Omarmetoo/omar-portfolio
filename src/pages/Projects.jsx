import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Beiti – Full-Stack Real Estate Platform",
      stack: "MongoDB · Express.js · React.js · TailwindCSS · Node.js",
      type: "Full-Stack Web Application",
      desc: "Developed a fully professional real estate platform including authentication, admin dashboard, responsive UI, and dynamic property listings with real-time updates."
    },
    {
      title: "Restoro – Food Ordering System",
      stack: "Java · OOP · SOLID · Design Patterns · JUnit",
      type: "Team-Based Software Project",
      desc: "Architected a structured food ordering system applying SOLID principles, design patterns, clean code practices, and JUnit testing for reliability."
    },
    {
      title: "Zara Redesign – HCI UI/UX Project",
      stack: "Figma · UI/UX · Prototyping",
      type: "UI/UX Redesign",
      desc: "Redesigned the Zara e-commerce interface with usability improvements and a modern UI based on research and prototyping."
    },
    {
      title: "TripGo – Travel Mobile Application",
      stack: "Dart · Flutter",
      type: "Mobile Application",
      desc: "A cross-platform travel app built using Flutter with clean navigation, components, and smooth UI for both Android and iOS."
    },
    {
      title: "Mkank – Real Estate Concept",
      stack: "React · Tailwind",
      type: "Concept / Planning",
      desc: "A clean UI/UX concept for real estate browsing, focusing on layout, simplicity, and modern front-end structure."
    },
    {
      title: "Additional 5+ UI & Front-End Projects",
      stack: "React · Tailwind · JavaScript",
      type: "Various Projects",
      desc: "Landing pages, dashboards, and multiple mini-web apps created for clients, practice, and UI improvement."
    }
  ];

  return (
    <section className="relative py-10 space-y-10 overflow-hidden">

      {/* BACKGROUND GRADIENT BLOBS */}
      <div className="pointer-events-none absolute -top-32 left-0 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-indigo-600/40 to-purple-600/40 blur-3xl opacity-70 animate-pulse" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-cyan-400/30 to-indigo-500/40 blur-3xl opacity-60 animate-pulse" />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="relative inline-block text-3xl font-bold text-slate-900 dark:text-white drop-shadow">
          Projects
          <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-[pulse_1.8s_infinite]" />
        </h1>

        <p className="mt-4 text-sm max-w-xl text-slate-600 dark:text-slate-300">
          A collection of my best work across full-stack development, UI/UX, mobile applications, and software engineering.
        </p>
      </motion.div>

      {/* PROJECTS GRID */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="grid gap-6 md:grid-cols-2"
      >
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 170 }}
            className="relative rounded-2xl border border-white/20 bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg
                       p-6 shadow-xl dark:shadow-[0_0_25px_rgba(99,102,241,0.15)] overflow-hidden"
          >
            {/* SHINE LINE */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />

            {/* GRADIENT CORNER */}
            <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-2xl opacity-40" />

            {/* STACK */}
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
              {p.stack}
            </p>

            {/* TITLE */}
            <h2 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
              {p.title}
            </h2>

            {/* TYPE */}
            <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
              {p.type}
            </p>

            {/* DESCRIPTION */}
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
