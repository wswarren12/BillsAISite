"use client";

import { FiLinkedin, FiGithub, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Bill Warren. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/billwarren"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-indigo-600"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="https://github.com/billwarren"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-indigo-600"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="ml-2 rounded-full border border-slate-200 p-2 text-slate-400 transition-colors hover:border-indigo-200 hover:text-indigo-600"
            aria-label="Back to top"
          >
            <FiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
