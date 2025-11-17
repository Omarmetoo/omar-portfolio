import React from "react";


export default function About() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
        About Me
      </h1>

      <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">

        {/* MAIN ABOUT */}
        <p>
          A dedicated Software Engineer with a strong passion for Full-Stack Development,
          Mobile App Development, and AI-driven solutions.  I enjoy turning complex ideas
          into practical, clean, and efficient software systems.
        </p>

        <p>
          I focus on building scalable, intuitive web and mobile applications using modern
          technologies like React, Node.js, Flutter, and Dart. My approach combines clean
          architecture, strong problem-solving, and attention to detail to ensure that the
          products I build are both high-quality and user-friendly.
        </p>

        <p>
          Whether I’m developing full-stack platforms, designing mobile interfaces, or
          structuring backend logic, I aim to deliver work that is reliable, maintainable,
          and tailored to real business needs. I value clarity, communication, and writing
          code that can be easily understood, extended, and improved over time.
        </p>

        {/* WHAT I'M CURRENTLY LEARNING */}
        <div>
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
            What I’m Currently Learning
          </h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>Advanced React patterns & component architecture</li>
            <li>Backend optimization & secure authentication flows</li>
            <li>Scalable API design with Node.js & Express</li>
            <li>Mobile UI structure & state management in Flutter</li>
            <li>AI concepts and practical applications</li>
          </ul>
        </div>

        {/* INTERESTS */}
        <div>
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
            Areas I’m Interested In
          </h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>Full-Stack application architecture</li>
            <li>Mobile app development & cross-platform solutions</li>
            <li>Clean code, best practices & system design</li>
            <li>AI-assisted development & automation tools</li>
            <li>UI/UX design and improving user experience</li>
          </ul>
        </div>

        {/* SOFT SKILLS */}
        <div>
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
            Soft Skills
          </h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>Strong problem-solving and analytical thinking</li>
            <li>Clear communication and teamwork mindset</li>
            <li>Attention to detail and structured approach to tasks</li>
            <li>Fast learner with the ability to adapt to new tools and technologies</li>
            <li>Time management and multitasking across multiple responsibilities</li>
          </ul>
        </div>

        {/* GOALS */}
        <div>
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
            My Goals
          </h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>Become a strong full-stack engineer with clean architectural thinking</li>
            <li>Build production-ready mobile apps using Flutter</li>
            <li>Contribute to real-world client projects and gain industry experience</li>
            <li>Expand into cloud services, DevOps basics, and scalable systems</li>
            <li>Develop high-quality tools that solve real problems</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
