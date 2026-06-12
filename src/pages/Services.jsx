import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    icon: "⚡",
    title: "Full-Stack Web Application",
    client: "You have an idea or spec. I ship the product.",
    desc: "I build the whole thing — frontend, backend, database, auth, API. React or Next.js on the front, Node/Express on the back, MongoDB or SQL underneath. You get a production-ready app, not a prototype.",
    good_for: "SaaS products, dashboards, marketplaces, internal tools",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: "🎯",
    title: "Frontend / UI Development",
    client: "You have a backend or design. I make it beautiful and fast.",
    desc: "Pixel-perfect React/Next.js UIs that load fast and feel natural. I work from Figma designs, wireframes, or verbal descriptions. Clean components, smooth animations, fully responsive.",
    good_for: "Landing pages, dashboards, client portals, redesigns",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: "🔌",
    title: "Backend API & Integrations",
    client: "You need a robust API or third-party integrations done right.",
    desc: "REST APIs, authentication flows (JWT/OAuth), database design, webhooks, and third-party integrations (payments, maps, AI APIs, email services). Secure, documented, and ready to scale.",
    good_for: "API-first apps, Stripe/payment integrations, webhook systems",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: "🤖",
    title: "AI Feature Integration",
    client: "You want AI capabilities inside your existing product.",
    desc: "I wire AI into your app using OpenAI APIs, custom ML models (VADER, TF-IDF), vector search, or chatbot flows. I built AI-powered search and review analysis into Mkank — I can do the same for you.",
    good_for: "Chatbots, recommendation engines, content analysis, smart search",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: "📱",
    title: "Mobile App (Flutter)",
    client: "You need one app that runs on both Android and iOS.",
    desc: "Cross-platform Flutter apps with clean architecture and native-feeling UX. One codebase, two platforms, zero compromises on performance or design.",
    good_for: "Business apps, travel apps, booking systems, utility tools",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: "🚀",
    title: "Landing Page & Business Website",
    client: "You need a site that converts visitors to leads.",
    desc: "Fast, SEO-ready landing pages and business websites. I focus on load speed, clear copy hierarchy, and strong calls-to-action. Deployed and optimised out of the box.",
    good_for: "Product launches, agencies, freelancers, small businesses",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: "🔍",
    title: "Code Review & Rescue",
    client: "Your project is messy, slow, or broken. I fix it.",
    desc: "I audit codebases, identify bottlenecks, fix bugs, improve architecture, and bring performance up. Useful when you've inherited a project or outgrown your MVP.",
    good_for: "Inherited codebases, performance issues, security fixes",
    color: "from-slate-500 to-slate-600",
  },
  {
    icon: "💡",
    title: "Technical Consultation",
    client: "You need help choosing the right stack or planning the architecture.",
    desc: "I help you make the right technical decisions early — stack selection, database schema, API design, project structure. Hourly sessions available.",
    good_for: "Pre-development planning, architecture review, tech interviews",
    color: "from-amber-500 to-yellow-500",
  },
];

export default function Services() {
  return (
    <section className="relative py-10 space-y-10 overflow-hidden">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -top-32 left-0 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-600/30 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-cyan-400/20 to-indigo-500/30 blur-3xl opacity-50" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="relative inline-block text-3xl font-bold text-slate-900 dark:text-white">
          Services
          <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />
        </h1>
        <p className="mt-4 max-w-xl text-sm text-slate-600 dark:text-slate-300">
          What I can build for you. Every service is described from your perspective as a client —
          what problem it solves, and what you walk away with.
        </p>
      </motion.div>

      {/* SERVICES GRID */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.08 } },
        }}
        className="grid gap-5 md:grid-cols-2"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 160 }}
            className="relative rounded-2xl border border-white/20 bg-white/60 p-6 shadow-xl backdrop-blur-lg dark:bg-slate-900/60 dark:shadow-[0_0_25px_rgba(99,102,241,0.1)] overflow-hidden"
          >
            {/* accent top line */}
            <div className={`pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${service.color}`} />

            <div className="flex items-start gap-3">
              <span className="text-xl leading-none" aria-hidden="true">{service.icon}</span>
              <div className="flex-1">
                <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h2>
                <p className="mt-0.5 text-[11px] italic text-indigo-500 dark:text-indigo-400">
                  "{service.client}"
                </p>
              </div>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              {service.desc}
            </p>

            <p className="mt-3 text-[10px] text-slate-500 dark:text-slate-500">
              <span className="font-semibold text-slate-600 dark:text-slate-400">Good for: </span>
              {service.good_for}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50 to-purple-50 p-6 text-center dark:border-indigo-800/40 dark:from-indigo-950/40 dark:to-purple-950/40"
      >
        <p className="text-sm font-semibold text-slate-900 dark:text-white">
          Not sure which service fits? Let's talk.
        </p>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          I'll help you figure out what you actually need before any contract is signed.
        </p>
        <Link
          to="/contact"
          className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-px hover:shadow-xl"
        >
          Get in touch →
        </Link>
      </motion.div>

    </section>
  );
}
