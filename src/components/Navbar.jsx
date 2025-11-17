import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/60 bg-slate-50/80 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* logo + name */}
        <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 rounded-full overflow-hidden border border-slate-300 dark:border-slate-700">
  <img
    src="/omar.jpg"
    alt="Omar Mohammed"
    className="h-full w-full object-cover"
  />
</div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Full-Stack Developer
            </p>
            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
              Omar Mohammed
            </p>
          </div>
        </div>

        {/* desktop links */}
        <div className="hidden items-center gap-5 md:flex">
          {links.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-xs font-medium transition ${
                  active
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <button
            onClick={toggleTheme}
            className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:scale-105 hover:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        {/* mobile menu (simple) */}
        <details className="relative md:hidden">
          <summary className="list-none">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
              ☰
            </div>
          </summary>
          <div className="absolute right-0 mt-2 w-44 rounded-2xl border border-slate-200 bg-white p-2 text-sm shadow-lg dark:border-slate-700 dark:bg-slate-900">
            {links.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block rounded-lg px-2 py-1 text-xs ${
                    active
                      ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              onClick={toggleTheme}
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </button>
          </div>
        </details>
      </nav>
    </header>
  );
}
