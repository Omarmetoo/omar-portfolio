import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Beiti – Full-Stack Real Estate Platform",
      stack: "MongoDB · Express.js · React.js · TailwindCSS · Node.js",
      type: "Full-Stack Web Application",
      desc: "Developed a fully professional real estate platform, implementing both the frontend and backend. Features include secure authentication, an admin dashboard, responsive UI, and dynamic property listings with real-time updates."
    },

    {
      title: "Restoro – Food Ordering System",
      stack: "Java · OOP · SOLID · Design Patterns · JUnit",
      type: "Team-Based Software Project",
      desc: "Architected a structured food ordering system following the SDLC. Applied SOLID principles, clean code practices, multiple design patterns, and JUnit testing to ensure reliability and maintainable backend logic."
    },

    {
      title: "Zara Redesign – HCI UI/UX Project",
      stack: "Figma · UI/UX · Prototyping",
      type: "UI/UX Redesign",
      desc: "Redesigned the Zara e-commerce interface as part of an HCI course project. Conducted a full UI/UX evaluation, improved usability, and delivered a clean, modern prototype supported by research and data-driven decisions."
    },

    {
      title: "TripGo – Travel Mobile Application",
      stack: "Dart · Flutter",
      type: "Mobile Application",
      desc: "A cross-platform travel app built using Flutter. Designed clean navigation, reusable components, and a smooth UI optimized for both Android and iOS."
    },

    {
      title: "Mkank – Real Estate Concept",
      stack: "React · Tailwind",
      type: "Concept / Planning",
      desc: "A modern UI concept for browsing and viewing real estate listings, focusing on clean layouts, responsiveness, and front-end structure."
    },

    {
      title: "Additional 5+ UI & Front-End Projects",
      stack: "React · Tailwind · JavaScript",
      type: "Various Projects",
      desc: "Including landing pages, dashboards, and several small web applications created for practice, client previews, and improving front-end development skills."
    }
  ];

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
        Projects
      </h1>

      <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
        A collection of the most relevant projects I’ve built across full-stack development,
        UI/UX design, mobile development, and software engineering.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
          >
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                {p.stack}
              </p>
              <h2 className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                {p.title}
              </h2>
              <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                {p.type}
              </p>
              <p className="mt-2">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
