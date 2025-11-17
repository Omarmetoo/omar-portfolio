import React from "react";

export default function Education() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
        Education
      </h1>

      {/* BUE */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">
          British University in Egypt (BUE)
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Bachelor of Computer Science & Software Engineering
        </p>
        <p className="mt-2">
          Enrolled in a UK-validated programme delivered in partnership with
          London South Bank University, following British higher education
          standards.
        </p>
      </div>

      {/* LSBU */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">
          London South Bank University (LSBU)
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Validated Partner University — Degree Alignment
        </p>
        <p className="mt-2">
          The programme is academically aligned with LSBU, ensuring the same
          curriculum quality, academic oversight, and UK higher education
          validation.
        </p>
      </div>

      {/* COURSES & CERTIFICATIONS */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">
          Courses & Certifications
        </p>

        <ul className="mt-2 space-y-1.5">
          <li>• Introduction to Software Engineering – IBM</li>
          <li>• Introduction to Artificial Intelligence – IBM</li>
          <li>• Back-End Web Development – Certificate of Completion</li>
          <li>• Front-End Web Design – Certificate of Completion</li>
          <li>• Flutter Mobile Apps – Self-Taught (Certificate)</li>

          <li>• EY Temporary Client Serving Professionals Global (IND103.1GG) – Certificate of Completion</li>

          <li>• Introduction to Circular Economy – Certificate of Completion</li>
        </ul>
      </div>
    </section>
  );
}
