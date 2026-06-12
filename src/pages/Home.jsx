import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const stack = [
  "Next.js", "React", "Node.js", "TypeScript",
  "MongoDB", "Express.js", "TailwindCSS", "Flutter",
];

const roles = [
  "Full-Stack Web Developer",
  "Next.js & React Expert",
  "Backend & API Engineer",
  "AI-Integrated App Builder",
];

const stats = [
  { label: "Projects delivered", value: "10+" },
  { label: "Stack", value: "MERN · Next.js" },
  { label: "Availability", value: "Open to hire" },
];

export default function Home() {
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;
    if (!isDeleting && charIndex <= currentRole.length) {
      timeout = setTimeout(() => {
        setCurrentText(currentRole.slice(0, charIndex));
        setCharIndex((p) => p + 1);
      }, 70);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setCurrentText(currentRole.slice(0, charIndex));
        setCharIndex((p) => p - 1);
      }, 40);
    } else if (!isDeleting && charIndex > currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setRoleIndex((p) => (p + 1) % roles.length);
      setCharIndex(0);
    }
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="relative space-y-16 overflow-hidden">

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center"
      >
        {/* LEFT */}
        <div className="space-y-6">
          {/* Status badge */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-slate-50/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance · Web &amp; Mobile
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white"
          >
            Omar Mohammed
          </motion.h1>

          {/* Typing role */}
          <div className="h-5 text-sm font-medium text-indigo-600 dark:text-indigo-300">
            <span>{currentText}</span>
            <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-indigo-500 dark:bg-indigo-300 rounded-sm" style={{ height: "1em", verticalAlign: "text-bottom" }} />
          </div>

          {/* Value proposition — client-focused */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-base text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            I build <span className="font-semibold text-slate-800 dark:text-slate-100">fast, production-ready web apps</span> for
            startups and businesses — from MVP to full platform. Specialising in
            React, Next.js, Node.js &amp; MongoDB with AI integrations baked in where they add value.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              Hire Me →
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300/80 bg-white/60 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
            >
              View My Work
            </Link>
            {/* TODO: Add your CV as /public/cv.pdf then change href to "/cv.pdf" and remove the disabled styling */}
            <a
              href="#"
              aria-disabled="true"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 cursor-not-allowed select-none"
              title="CV coming soon"
            >
              ↓ Download CV (coming soon)
            </a>
          </motion.div>

          {/* Quick stats */}
          <div className="grid gap-3 text-xs text-slate-600 dark:text-slate-300 sm:grid-cols-3">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900/70"
              >
                <p className="uppercase tracking-wide text-[10px] text-slate-500 dark:text-slate-400">
                  {item.label}
                </p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="relative"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-3xl bg-gradient-to-br from-indigo-500/30 via-sky-400/20 to-emerald-400/30 blur-3xl opacity-80" />
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-60 blur-md" />
                <img
                  src="/omar.jpg"
                  alt="Omar Mohammed — Full-Stack Developer"
                  className="relative h-full w-full rounded-full object-cover border-4 border-white shadow-xl dark:border-slate-800"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Software Engineer
                </p>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Omar Mohammed
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Egypt · Remote-first · US/UK available
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-3 text-xs text-slate-600 dark:text-slate-300">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/70">
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  What I deliver
                </p>
                <p className="mt-1">
                  Full-stack platforms, REST APIs, AI-powered features,
                  real-time systems, and clean UIs — shipped on time.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Frontend", value: "React · Next.js" },
                  { label: "Backend", value: "Node · Express" },
                  { label: "Database", value: "MongoDB · SQL" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-2 dark:border-slate-800 dark:bg-slate-950/70"
                  >
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">{item.label}</p>
                    <p className="text-[11px] font-semibold text-slate-900 dark:text-slate-100">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="text-[11px] font-medium text-indigo-500 underline-offset-4 hover:underline dark:text-indigo-400"
              >
                See case studies →
              </Link>
              <Link
                to="/services"
                className="text-[11px] font-medium text-slate-500 underline-offset-4 hover:underline dark:text-slate-400"
              >
                What I can build for you
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* TECH STRIP */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.05 } },
        }}
        className="space-y-3"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Core Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <motion.span
              key={item}
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700 shadow-sm
                hover:-translate-y-0.5 hover:bg-indigo-50 transition dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-indigo-900/30"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
