import React from "react";

export default function Services() {
  const services = [
    {
      title: "Full-Stack Web Development",
      desc: "Building complete and scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implementing authentication, dashboards, responsive UI, and API integrations."
    },
    {
      title: "Frontend Development",
      desc: "Creating fast, modern, and clean user interfaces with React.js and TailwindCSS. Component-based development, responsive layouts, and smooth UI/UX interactions."
    },
    {
      title: "Mobile App Development",
      desc: "Developing cross-platform mobile applications using Flutter and Dart. Clean architecture, reusable components, smooth navigation, and responsive UI for Android and iOS."
    },
    {
      title: "Backend Development & API Design",
      desc: "Building backend logic, API endpoints, authentication systems, and structured server-side applications using Node.js and Express.js."
    },
    {
      title: "UI/UX & Prototyping",
      desc: "Designing clean, modern, and user-friendly interfaces using Figma. Creating wireframes, detailed prototypes, and design systems ready for development."
    },
    {
      title: "Java Desktop / System Development",
      desc: "Developing structured Java systems using OOP, SOLID principles, and design patterns. Writing clean, testable code with JUnit and maintainable architecture."
    },
    {
      title: "Landing Pages & Business Websites",
      desc: "Creating responsive landing pages and business websites optimized for speed, clarity, and user experience. Ideal for startups and small businesses."
    },
    {
      title: "Code Cleanup & Refactoring",
      desc: "Improving existing projects by rewriting messy code, organizing structure, fixing bugs, and applying best practices for readability and performance."
    },
    {
      title: "Project Planning & Technical Consultation",
      desc: "Helping individuals and teams choose tech stacks, plan architecture, structure databases, and define realistic development timelines."
    }
  ];

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
        Services
      </h1>

      <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
        These are the areas I work in as a full-stack and mobile developer. I believe in clear communication,
        realistic expectations, and delivering clean, maintainable work across web, mobile, backend, and UI design.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
          >
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
              {service.title}
            </h2>
            <p className="mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
