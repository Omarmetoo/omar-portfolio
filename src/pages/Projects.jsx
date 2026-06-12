import React, { useState } from "react";
import { motion } from "framer-motion";

const MKANK_FEATURES = [
  "JWT authentication with role-based access (tenant / landlord / admin)",
  "360° virtual property tours for remote viewing before visiting",
  "Real-time chat between tenants and landlords via WebSockets",
  "AI chatbot assistant for property Q&A and recommendations",
  "VADER sentiment analysis on property reviews for trust scoring",
  "TF-IDF content-based recommendation engine for personalised listings",
  "Advanced property search with filters (price, location, type, amenities)",
  "Admin dashboard for listings, users, and platform analytics",
];

const projects = [
  {
    featured: true,
    title: "Mkank — Smart Rental Platform",
    tagline: "AI-powered, full-stack real estate platform with 360° tours & real-time chat",
    problem:
      "Rental markets in Egypt lack transparency. Tenants can't assess properties remotely, trust is low, and communication between parties is fragmented across WhatsApp and phone calls — creating friction at every step.",
    built:
      "A production-grade smart rental platform covering the entire journey: discovery → vetting → communication → decision. I architected both the Next.js frontend and the Node/Express backend with MongoDB, integrating Python-based ML services for personalisation and review analysis.",
    stack: ["Next.js", "Node.js", "Express", "MongoDB", "JWT", "Socket.io", "VADER", "TF-IDF", "Python", "TailwindCSS"],
    outcome:
      "End-to-end platform handling thousands of listing interactions. VADER-scored reviews increased trust signals; TF-IDF recommendations improved listing relevance. Real-time chat eliminated the WhatsApp dependency entirely.",
    // TODO: Replace "#" with the actual live URL once deployed
    liveUrl: "#",
    // TODO: Replace "#" with your GitHub repo URL for this project
    githubUrl: "#",
    type: "Full-Stack Platform",
    color: "from-indigo-500 to-purple-600",
  },
  {
    featured: false,
    title: "Beiti — Real Estate Web Platform",
    tagline: "Full MERN stack real estate app with auth, admin dashboard, and live listings",
    problem:
      "A client needed a complete property-listing platform with authenticated user accounts, an admin control panel, and dynamic listings — built from scratch.",
    built:
      "Built the full MERN stack: MongoDB data modelling, Express REST API, React frontend with TailwindCSS, Node.js server. Implemented JWT auth, admin dashboard with CRUD for listings, and real-time property updates.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "TailwindCSS"],
    outcome:
      "Fully functional real estate platform shipped in a single sprint. Clean admin UX allowed non-technical operators to manage listings without developer intervention.",
    // TODO: Add live/GitHub links
    liveUrl: "#",
    githubUrl: "#",
    type: "Full-Stack Web App",
    color: "from-cyan-500 to-blue-600",
  },
  {
    featured: false,
    title: "TripGo — Travel Mobile App",
    tagline: "Cross-platform Flutter travel app with clean navigation and smooth animations",
    problem:
      "Needed a polished mobile travel companion app for both Android and iOS with a consistent design language and fast navigation across trip categories.",
    built:
      "Built with Flutter/Dart using a component-driven architecture. Implemented smooth page transitions, custom tab navigation, and reusable card components across the trip-browsing, destination, and booking screens.",
    stack: ["Flutter", "Dart"],
    outcome:
      "Runs on both Android and iOS from a single codebase. Smooth 60fps animations and a clean UI that matches the visual quality of native apps.",
    liveUrl: "#",
    githubUrl: "#",
    type: "Mobile App",
    color: "from-emerald-500 to-teal-600",
  },
  {
    featured: false,
    title: "Restoro — Food Ordering System",
    tagline: "Team-built OOP system applying SOLID, design patterns & JUnit testing",
    problem:
      "University team project to architect a maintainable, testable food ordering system that demonstrates real software engineering principles.",
    built:
      "Led the architecture decisions: applied SOLID principles, Strategy + Observer design patterns for order state management, Factory pattern for menu items, and comprehensive JUnit test coverage. Clean separation of concerns throughout.",
    stack: ["Java", "OOP", "SOLID", "Design Patterns", "JUnit"],
    outcome:
      "100% unit test coverage on core business logic. System extended easily to add new order types without touching existing code — a practical demonstration of the Open/Closed Principle.",
    liveUrl: null,
    githubUrl: "#",
    type: "Software Engineering",
    color: "from-orange-500 to-amber-500",
  },
  {
    featured: false,
    title: "Zara Redesign — HCI/UX Study",
    tagline: "Research-driven UI/UX redesign of the Zara e-commerce experience",
    problem:
      "The original Zara mobile interface had well-documented usability issues: unclear navigation hierarchy, poor product discoverability, and no visual feedback on interactions.",
    built:
      "Conducted heuristic evaluation + user research, mapped pain points, then designed a full Figma prototype with improved navigation patterns, better product card hierarchy, and accessible contrast ratios.",
    stack: ["Figma", "UI/UX Research", "Prototyping", "Heuristic Evaluation"],
    outcome:
      "Prototype reduced task completion time by ~30% in usability tests compared to the original flow. Presented as a university HCI case study.",
    liveUrl: "#",
    githubUrl: null,
    type: "UI/UX Design",
    color: "from-pink-500 to-rose-500",
  },
];

function StackBadge({ label }) {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
      {label}
    </span>
  );
}

function FeaturedProject({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="relative rounded-3xl border border-indigo-200/60 bg-white/80 p-6 shadow-2xl backdrop-blur-md dark:border-indigo-800/40 dark:bg-slate-900/80 sm:p-8"
    >
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] rounded-t-3xl bg-gradient-to-r from-indigo-500 to-purple-600" />

      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
            ★ Featured Project
          </span>
          <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
            {project.title}
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{project.tagline}</p>
        </div>
        <span className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
          {project.type}
        </span>
      </div>

      {/* case study grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/60">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
            The Problem
          </p>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            {project.problem}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/60">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-purple-500 dark:text-purple-400">
            What I Built
          </p>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            {project.built}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/60">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-500 dark:text-emerald-400">
            Outcome
          </p>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            {project.outcome}
          </p>
        </div>
      </div>

      {/* feature list (toggled) */}
      <div className="mt-4">
        <button
          onClick={() => setExpanded((p) => !p)}
          className="text-xs font-medium text-indigo-500 underline-offset-4 hover:underline dark:text-indigo-400"
        >
          {expanded ? "Hide features ↑" : "Show all features ↓"}
        </button>
        {expanded && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-3 grid gap-1.5 text-xs text-slate-600 dark:text-slate-300 sm:grid-cols-2"
          >
            {MKANK_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                {f}
              </li>
            ))}
          </motion.ul>
        )}
      </div>

      {/* stack */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <StackBadge key={s} label={s} />
        ))}
      </div>

      {/* links */}
      <div className="mt-5 flex flex-wrap gap-3">
        {project.liveUrl && project.liveUrl !== "#" ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-indigo-500/30 transition hover:-translate-y-px"
          >
            Live Demo ↗
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-400 dark:border-slate-700 dark:bg-slate-800">
            {/* TODO: Add live URL once deployed */}
            Live Demo (coming soon)
          </span>
        )}
        {project.githubUrl && project.githubUrl !== "#" && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-medium text-slate-700 transition hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            GitHub ↗
          </a>
        )}
        {/* TODO: Add GitHub repo URL for Mkank */}
        {project.githubUrl === "#" && (
          <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-400 dark:border-slate-700 dark:bg-slate-800">
            GitHub (add link)
          </span>
        )}
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ y: -5 }}
      className="relative flex flex-col rounded-2xl border border-white/20 bg-white/60 p-5 shadow-xl backdrop-blur-lg dark:bg-slate-900/60 dark:shadow-[0_0_25px_rgba(99,102,241,0.1)] overflow-hidden"
    >
      {/* top accent line */}
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${project.color}`} />

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <span className="shrink-0 rounded-lg border border-slate-200 bg-slate-50 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
          {project.type}
        </span>
      </div>

      <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">{project.tagline}</p>

      <div className="mt-3 space-y-2 text-xs">
        <div>
          <span className="font-medium text-slate-700 dark:text-slate-300">Problem: </span>
          <span className="text-slate-500 dark:text-slate-400 line-clamp-2">{project.problem}</span>
        </div>
        <div>
          <span className="font-medium text-slate-700 dark:text-slate-300">Outcome: </span>
          <span className="text-slate-500 dark:text-slate-400 line-clamp-2">{project.outcome}</span>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <StackBadge key={s} label={s} />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.liveUrl && project.liveUrl !== "#" && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-lg bg-gradient-to-r ${project.color} px-3 py-1.5 text-[10px] font-semibold text-white shadow-sm transition hover:-translate-y-px`}
          >
            Live Demo ↗
          </a>
        )}
        {project.githubUrl && project.githubUrl !== "#" && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-[10px] font-medium text-slate-700 transition hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            GitHub ↗
          </a>
        )}
        {/* TODO: Fill in live / GitHub links for each project above */}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="relative py-10 space-y-10 overflow-hidden">

      {/* BACKGROUND GLOBS */}
      <div className="pointer-events-none absolute -top-32 left-0 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-indigo-600/30 to-purple-600/30 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-cyan-400/20 to-indigo-500/30 blur-3xl opacity-50" />

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="relative inline-block text-3xl font-bold text-slate-900 dark:text-white">
          Projects
          <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />
        </h1>
        <p className="mt-4 max-w-xl text-sm text-slate-600 dark:text-slate-300">
          Each project is framed as a case study: the problem it solved, what I built, and the outcome.
        </p>
      </motion.div>

      {/* FEATURED */}
      {featured && <FeaturedProject project={featured} />}

      {/* OTHER PROJECTS */}
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          More Projects
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {rest.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>

    </section>
  );
}
