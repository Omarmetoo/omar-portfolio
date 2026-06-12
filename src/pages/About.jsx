import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: "🎓",
    title: "BUE — Software Engineering",
    desc: "Graduate of the British University in Egypt, Informatics & Computer Science (Software Engineering pathway), validated by London South Bank University.",
    color: "indigo",
  },
  {
    icon: "🏢",
    title: "EY Egypt Internship",
    desc: "Interned at Ernst & Young (EY) Cairo in Capital Equipment consulting — gained corporate-grade skills in structured data handling, process audits, and working within large professional teams.",
    color: "purple",
  },
  {
    icon: "🌍",
    title: "Remote-First",
    desc: "Based in Egypt, serving clients in the US, UK, and beyond. Comfortable with async workflows, clear written communication, and Upwork/freelance delivery standards.",
    color: "emerald",
  },
  {
    icon: "🤖",
    title: "AI-Ready Stack",
    desc: "I've built real AI features in production — VADER sentiment analysis, TF-IDF recommendation engines, and AI chatbot integrations. Not just buzzwords.",
    color: "cyan",
  },
];

const principles = [
  "Ship working code, not polished excuses",
  "Communicate early, communicate clearly",
  "Clean architecture now saves rewrites later",
  "UX is engineering — slow or confusing is a bug",
];

export default function About() {
  return (
    <section className="relative overflow-hidden py-10">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -top-32 -left-10 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-600/30 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-400/20 to-indigo-500/30 blur-3xl opacity-50" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h1 className="relative inline-block text-4xl font-bold text-slate-900 dark:text-white">
          About Me
          <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />
        </h1>
        <p className="mt-4 text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
          Who I am · How I work · What I care about
        </p>
      </motion.div>

      {/* INTRO CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto rounded-3xl border border-white/20 bg-white/60 p-7 shadow-[0_8px_40px_rgba(99,102,241,0.18)] backdrop-blur-xl dark:bg-slate-900/60"
      >
        <div className="pointer-events-none absolute inset-x-10 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />

        <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start">
          {/* Avatar */}
          <div className="flex justify-center md:justify-start">
            <div className="relative h-24 w-24 shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-60 blur-md" />
              <img
                src="/omar.jpg"
                alt="Omar Mohammed"
                className="relative h-full w-full rounded-full border-4 border-white object-cover shadow-xl dark:border-slate-800"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-3">
            <p className="text-lg font-semibold text-slate-900 dark:text-white">
              Omar Mohammed — Full-Stack Developer
            </p>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              I'm a <span className="font-semibold text-indigo-600 dark:text-indigo-400">software engineering graduate</span> from
              the British University in Egypt, and a{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">full-stack developer</span> who
              builds modern web platforms and mobile apps using React, Next.js, Node.js, and MongoDB.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              I've taken projects from zero to production — including{" "}
              <Link to="/projects" className="font-medium text-indigo-500 underline-offset-4 hover:underline dark:text-indigo-400">
                Mkank
              </Link>
              , a smart rental platform with AI-powered recommendations, 360° tours, real-time chat, and sentiment
              analysis on reviews. I've also interned at EY Egypt, which means I can communicate clearly in
              professional and corporate environments — a real advantage when working with US/UK clients.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              I'm available for freelance engagements on Upwork and direct contracts. Remote-friendly,
              async-capable, and clear about timelines and expectations.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-indigo-500/30 transition hover:-translate-y-px"
              >
                Work with me →
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-700 transition hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                See my work
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* HIGHLIGHTS GRID */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="relative rounded-2xl border border-white/20 bg-white/60 p-5 shadow-xl backdrop-blur-lg dark:bg-slate-900/60"
          >
            <div className="flex items-start gap-3">
              <span className="text-xl leading-none" aria-hidden="true">{h.icon}</span>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{h.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{h.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* WORKING PRINCIPLES */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8 rounded-2xl border border-white/20 bg-white/60 p-6 shadow-xl backdrop-blur-lg dark:bg-slate-900/60"
      >
        <h2 className="relative inline-block text-sm font-semibold text-slate-900 dark:text-white">
          How I work
          <span className="absolute -bottom-1 left-0 h-[2px] w-8 rounded-full bg-indigo-500" />
        </h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {principles.map((p) => (
            <li key={p} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
              {p}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* LEARNING & INTERESTS */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-white/20 bg-white/60 p-5 shadow-xl backdrop-blur-lg dark:bg-slate-900/60"
        >
          <h2 className="relative inline-block text-sm font-semibold text-slate-900 dark:text-white">
            Currently deepening
            <span className="absolute -bottom-1 left-0 h-[2px] w-8 rounded-full bg-purple-500" />
          </h2>
          <ul className="mt-3 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
            {[
              "Advanced Next.js patterns (App Router, RSC)",
              "TypeScript strict mode best practices",
              "Cloud infrastructure & deployment (Vercel, AWS basics)",
              "Vector databases and RAG for AI apps",
              "Performance profiling and Core Web Vitals optimisation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-white/20 bg-white/60 p-5 shadow-xl backdrop-blur-lg dark:bg-slate-900/60"
        >
          <h2 className="relative inline-block text-sm font-semibold text-slate-900 dark:text-white">
            What drives me
            <span className="absolute -bottom-1 left-0 h-[2px] w-8 rounded-full bg-cyan-500" />
          </h2>
          <ul className="mt-3 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
            {[
              "Shipping real products that solve real problems",
              "Clean architecture that teams can actually maintain",
              "AI features that genuinely improve user workflows",
              "Human-centered UI that reduces friction, not adds to it",
              "Building systems that work at scale without breaking",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
