import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const stack = [
    "React",
    "Node.js",
    "Flutter",
    "Dart",
    "MongoDB",
    "Express.js",
    "Java",
    "TailwindCSS",
  ];

  return (
    <section className="space-y-10">
      {/* HERO */}
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
        {/* LEFT SIDE */}
        <div className="space-y-5">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-slate-50/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Software Engineer · Web & Mobile
          </p>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Omar Mohammed
          </h1>

          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Full-Stack & Mobile Developer · Informatics & Computer Science - Software Engneering 
          </p>

          <p className="max-w-xl text-sm text-slate-600 dark:text-slate-300">
            I design and build modern web and mobile applications using React, Node.js,
            and Flutter. I care about clean architecture, readable code, and interfaces
            that feel natural to use — whether it&apos;s a business dashboard, a booking
            system, or a mobile app.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300/80 bg-slate-50 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              Contact Me
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 underline-offset-4 hover:underline dark:text-slate-400"
            >
              Download CV (soon)
            </a>
          </div>

          {/* QUICK HIGHLIGHTS */}
          <div className="grid gap-3 text-xs text-slate-600 dark:text-slate-300 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900/70">
              <p className="uppercase tracking-wide text-[10px] text-slate-500 dark:text-slate-400">
                Focus
              </p>
              <p className="mt-1 font-medium text-slate-900 dark:text-slate-100">
                Web & mobile apps
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900/70">
              <p className="uppercase tracking-wide text-[10px] text-slate-500 dark:text-slate-400">
                Stack
              </p>
              <p className="mt-1 font-medium text-slate-900 dark:text-slate-100">
                MERN · Flutter · Java
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900/70">
              <p className="uppercase tracking-wide text-[10px] text-slate-500 dark:text-slate-400">
                Availability
              </p>
              <p className="mt-1 font-medium text-slate-900 dark:text-slate-100">
                Open for remote work
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – PROFILE CARD */}
        <div className="relative">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-3xl bg-gradient-to-br from-indigo-500/40 via-sky-400/30 to-emerald-400/40 blur-2xl dark:from-indigo-500/40 dark:via-sky-500/25 dark:to-emerald-400/40" />
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
            <div className="flex items-center gap-4">
              {/* Avatar – replace src with your real pfp in /public */}
             <div className="relative h-16 w-16">
  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-emerald-400 opacity-70 blur-sm" />
  <div className="relative flex h-full w-full items-center justify-center rounded-full border border-slate-200 bg-slate-950 overflow-hidden dark:border-slate-700">
    <img src="/omar.jpg" alt="Omar Mohammed" className="h-full w-full object-cover" />
  </div>
</div>


              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Software Engineer
                </p>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Omar Mohammed
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Egypt · Web & Mobile Development
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-3 text-xs text-slate-600 dark:text-slate-300">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/70">
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  What I do
                </p>
                <p className="mt-1">
                  Full-stack web apps, Flutter mobile apps, system design, and
                  UI implementation from Figma to production.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 dark:border-slate-800 dark:bg-slate-950/70">
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    Web
                  </p>
                  <p className="text-[11px] font-semibold text-slate-900 dark:text-slate-100">
                    React · Node
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 dark:border-slate-800 dark:bg-slate-950/70">
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    Mobile
                  </p>
                  <p className="text-[11px] font-semibold text-slate-900 dark:text-slate-100">
                    Flutter
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 dark:border-slate-800 dark:bg-slate-950/70">
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    Backend
                  </p>
                  <p className="text-[11px] font-semibold text-slate-900 dark:text-slate-100">
                    APIs · Auth
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                to="/experience"
                className="text-[11px] font-medium text-slate-500 underline-offset-4 hover:underline dark:text-slate-400"
              >
                View experience
              </Link>
              <span className="text-[11px] text-slate-400 dark:text-slate-500">
                •
              </span>
              <Link
                to="/services"
                className="text-[11px] font-medium text-slate-500 underline-offset-4 hover:underline dark:text-slate-400"
              >
                What I can help with
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* STACK STRIP */}
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
