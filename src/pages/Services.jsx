import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Full-Stack Web Development",
      desc: "Building complete and scalable web applications using the MERN stack. Authentication, dashboards, APIs, real-time updates, and clean architecture."
    },
    {
      title: "Frontend Development",
      desc: "Modern, fast, and aesthetic user interfaces using React.js and TailwindCSS. Smooth interactions and pixel-perfect components."
    },
    {
      title: "Mobile App Development",
      desc: "Cross-platform Flutter apps built with clean architecture, reusable components, and responsive UI for both Android and iOS."
    },
    {
      title: "Backend Development & APIs",
      desc: "Designing secure backend systems, scalable APIs, authentication, database modeling, and server logic using Node.js & Express."
    },
    {
      title: "UI/UX & Prototyping",
      desc: "Creating modern interfaces on Figma, including prototypes, design systems, and clean wireframes ready for development."
    },
    {
      title: "Java Desktop / System Development",
      desc: "Developing desktop applications using Java, OOP, SOLID principles, and clean, testable code with JUnit."
    },
    {
      title: "Landing Pages & Business Websites",
      desc: "High-converting landing pages & business websites optimized for speed, SEO, and clarity. Ideal for startups and small businesses."
    },
    {
      title: "Code Cleanup & Refactoring",
      desc: "Fixing messy projects, improving code quality, structuring files, removing bugs, and boosting performance."
    },
    {
      title: "Project Planning & Tech Consultation",
      desc: "Helping clients choose the right tech stack, design architectures, plan databases, and structure project goals."
    }
  ];

  return (
    <section className="relative py-10 space-y-10 overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -top-32 left-0 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-indigo-500/40 to-purple-600/40 blur-3xl opacity-70 animate-pulse" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-cyan-400/30 to-indigo-500/40 blur-3xl opacity-60 animate-pulse" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="relative inline-block text-3xl font-bold text-slate-900 dark:text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
          Services
          <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-indigo-500 to-purple-600 animate-[pulse_1.8s_infinite]" />
        </h1>

        <p className="mt-4 text-sm max-w-xl text-slate-600 dark:text-slate-300">
          These are the areas I work in as a full-stack and mobile developer. I focus on writing clean,
          maintainable code and delivering high-quality results across web, mobile, backend, and UI design.
        </p>
      </motion.div>

      {/* SERVICES GRID */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.09 } },
        }}
        className="grid gap-6 md:grid-cols-2"
      >
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 160 }}
            className="relative rounded-2xl border border-white/20 bg-white/60 dark:bg-slate-900/60 backdrop-blur-lg
                       p-6 shadow-xl dark:shadow-[0_0_25px_rgba(99,102,241,0.15)] overflow-hidden"
          >
            {/* CARD SHINE */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />

            {/* GRADIENT CORNER ACCENT */}
            <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-2xl opacity-40" />

            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
              {service.title}
            </h2>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
