import React from "react";

export default function Contact() {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
        Contact
      </h1>

      <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
        You can contact me directly through email or WhatsApp. I usually respond
        quickly.
      </p>

      {/* CONTACT INFO ONLY */}
      <div className="grid gap-4 md:grid-cols-3">
        
        {/* EMAIL */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/70">
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Email
          </p>
          <a
            href="mailto:omarmetoo2@gmail.com"
            className="mt-1 block font-medium text-indigo-500 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            omarmetoo2@gmail.com
          </a>
        </div>

        {/* WHATSAPP */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/70">
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            WhatsApp
          </p>
          <a
            href="https://wa.me/201010603300"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block font-medium text-green-500 hover:text-green-400 dark:text-green-400 dark:hover:text-green-300"
          >
            +201010603300
          </a>
        </div>

        {/* LINKEDIN */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/70">
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            LinkedIn
          </p>
          <a
            href="https://www.linkedin.com/in/omar-mohammed-7729442b3"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block font-medium text-indigo-500 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            www.linkedin.com/in/omar-mohammed-7729442b3
          </a>
        </div>

      </div>
    </section>
  );
}
