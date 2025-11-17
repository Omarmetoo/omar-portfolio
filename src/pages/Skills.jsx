import React from "react";

export default function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "TailwindCSS", "JavaScript (ES6+)", "HTML", "CSS"]
    },
    {
      title: "Mobile Development",
      skills: ["Flutter", "Dart"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "SQL Basics"]
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git & GitHub",
        "Figma",
        "Postman",
        "VS Code",
        "Android Studio",
        "JUnit (Java)"
      ]
    }
  ];

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
        Skills
      </h1>

      <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
        Technologies and tools I work with across full-stack development and mobile application development.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/70"
          >
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
              {cat.title}
            </h2>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
              {cat.skills.map((skill) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
