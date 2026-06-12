import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Education from "./pages/Education.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {}
  return "dark";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      {/* soft background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-[-10rem] h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl dark:bg-indigo-500/40" />
        <div className="absolute right-[-5rem] top-[30%] h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-400/40" />
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="mt-10 border-t border-slate-200/60 pt-6 dark:border-slate-800">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <p className="text-xs text-slate-500 dark:text-slate-500">
              © {new Date().getFullYear()} Omar Mohammed. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
              <a
                href="mailto:omarmetoo2@gmail.com"
                className="transition hover:text-indigo-500 dark:hover:text-indigo-400"
              >
                omarmetoo2@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/omar-mohammed-7729442b3"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-indigo-500 dark:hover:text-indigo-400"
              >
                LinkedIn
              </a>
              {/* TODO: Replace # with your actual GitHub profile URL */}
              <a
                href="https://github.com/Omarmetoo"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-indigo-500 dark:hover:text-indigo-400"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
