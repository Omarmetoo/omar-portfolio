import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center"
    >
      {/* glowing 404 */}
      <div className="relative">
        <p className="select-none text-[8rem] font-black leading-none text-slate-100 dark:text-slate-900 sm:text-[12rem]">
          404
        </p>
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-600/30 blur-3xl" />
      </div>

      <h1 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
        Page not found
      </h1>
      <p className="mt-3 max-w-sm text-sm text-slate-500 dark:text-slate-400">
        The page you're looking for doesn't exist. It might have been moved or the URL is wrong.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-1"
        >
          ← Back to Home
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-300/80 bg-white/60 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
        >
          Contact me
        </Link>
      </div>
    </motion.section>
  );
}
