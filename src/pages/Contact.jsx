import React, { useState } from "react";
import { motion } from "framer-motion";

// TODO: Sign up at https://formspree.io, create a new form, and paste your form ID below.
// The ID looks like "xabcdefg" — replace YOUR_FORMSPREE_ID with it.
const FORMSPREE_ID = "mlgkpvpd";

const contactLinks = [
  {
    label: "Email",
    value: "omarmetoo2@gmail.com",
    href: "mailto:omarmetoo2@gmail.com",
    color: "text-indigo-500 dark:text-indigo-400",
  },
  {
    label: "WhatsApp",
    value: "+201010603300",
    href: "https://wa.me/201010603300",
    color: "text-green-500 dark:text-green-400",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/omar-mohammed-7729442b3",
    href: "https://www.linkedin.com/in/omar-mohammed-7729442b3",
    color: "text-blue-500 dark:text-blue-400",
  },
  {
    label: "GitHub",
    // TODO: Confirm your GitHub username is correct
    value: "github.com/Omarmetoo",
    href: "https://github.com/Omarmetoo",
    color: "text-slate-700 dark:text-slate-300",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (FORMSPREE_ID === "YOUR_FORMSPREE_ID") {
      alert("Contact form not yet configured. See TODO in Contact.jsx — add your Formspree ID.");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative py-10 space-y-10 overflow-hidden">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -top-32 left-0 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-600/30 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-gradient-to-br from-cyan-400/20 to-indigo-500/30 blur-3xl opacity-50" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="relative inline-block text-3xl font-bold text-slate-900 dark:text-white">
          Contact
          <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />
        </h1>
        <p className="mt-4 max-w-lg text-sm text-slate-600 dark:text-slate-300">
          Ready to start a project, ask a question, or just say hi? I typically respond within 24 hours.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-[1fr_320px]">

        {/* CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-2xl border border-white/20 bg-white/60 p-6 shadow-xl backdrop-blur-lg dark:bg-slate-900/60"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-indigo-500 to-purple-600" />

          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Send a message</h2>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 rounded-xl bg-emerald-50 p-5 text-center dark:bg-emerald-900/20"
            >
              <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                Message sent! I'll get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                    Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project enquiry / question"
                  className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-700 dark:text-slate-300">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project — what you need, your timeline, and budget (if you know it)."
                  className="mt-1.5 w-full resize-none rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500"
                />
              </div>

              {status === "error" && (
                <p className="text-xs text-rose-500">
                  Something went wrong. Try emailing me directly at omarmetoo2@gmail.com
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-px hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Send Message →"}
              </button>
            </form>
          )}
        </motion.div>

        {/* SIDEBAR */}
        <div className="space-y-4">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-white/20 bg-white/60 p-5 shadow-xl backdrop-blur-lg dark:bg-slate-900/60"
          >
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Direct contact
            </h3>
            <div className="mt-3 space-y-3">
              {contactLinks.map((link) => (
                <div key={link.label}>
                  <p className="text-[10px] uppercase tracking-wide text-slate-400 dark:text-slate-500">
                    {link.label}
                  </p>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className={`mt-0.5 block text-xs font-medium transition hover:opacity-70 ${link.color}`}
                  >
                    {link.value}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CV Download */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl border border-white/20 bg-white/60 p-5 shadow-xl backdrop-blur-lg dark:bg-slate-900/60"
          >
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Resume / CV
            </h3>
            {/* TODO: Add your CV as public/cv.pdf, then change href to "/cv.pdf" and remove the disabled state */}
            <a
              href="#"
              aria-disabled="true"
              onClick={(e) => e.preventDefault()}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-50 py-2.5 text-xs font-medium text-slate-400 cursor-not-allowed dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500"
            >
              ↓ Download CV (coming soon)
            </a>
            <p className="mt-2 text-[10px] text-slate-400 dark:text-slate-500">
              Add your CV to <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">public/cv.pdf</code> to enable this
            </p>
          </motion.div>

          {/* Availability note */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl border border-emerald-200/60 bg-emerald-50/60 p-4 dark:border-emerald-800/40 dark:bg-emerald-950/30"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                Currently available
              </p>
            </div>
            <p className="mt-1 text-[10px] text-emerald-600 dark:text-emerald-500">
              Open to new projects. Responds within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
