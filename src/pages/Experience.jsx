import React from "react";

export default function Experience() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
        Experience
      </h1>

      <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
        A summary of my hands-on experience across software systems, embedded
        development, and business environments.
      </p>

      <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300">

        {/* SWORD MIDDLE EAST */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
            Software System Intern — Sword Middle East FZ LLC (Dubai)
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
            July 2024 – August 2024
          </p>
          <ul className="space-y-1.5">
            <li>Integrated with APIs and external services to support data exchange between system components.</li>
            <li>Collected and analyzed system data to enhance application behavior and performance.</li>
            <li>Implemented personalized interaction logic based on user patterns and historical data.</li>
            <li>Worked with AI-assisted workflows to refine system output using feedback-based improvements.</li>
            <li>Collaborated with developers to maintain smooth backend communication and system flow.</li>
          </ul>
        </div>

        {/* ITI EMBEDDED SYSTEMS */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
            Embedded Systems Trainee — Information Technology Institute (ITI), Egypt
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
            July 2025 – Present
          </p>
          <ul className="space-y-1.5">
            <li>Worked with AVR microcontrollers and low-level hardware interfacing.</li>
            <li>Developed and debugged embedded applications using C.</li>
            <li>Used embedded toolchains and IDEs for firmware development.</li>
            <li>Gained hands-on experience with Real-Time Operating Systems (RTOS).</li>
            <li>Applied embedded development concepts relevant to automotive systems.</li>
          </ul>
        </div>

        {/* EY – CAPITAL EQUIPMENT */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/70">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
            Capital Equipment Intern — Ernst & Young (EY), Cairo
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
            August 2025 – September 2025
          </p>
          <ul className="space-y-1.5">
            <li>Assisted in capital equipment evaluations and structured data handling for consulting engagements.</li>
            <li>Supported operational and financial analysis related to asset management.</li>
            <li>Worked on documentation reviews, process audits, and internal reporting tasks.</li>
            <li>Collaborated with consultants and analysts to ensure accurate project data flow.</li>
            <li>Developed strong communication and business workflow skills in a corporate environment.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
