"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

const links = [
  { id: "how-i-work", key: "guarantees" },
  { id: "projects", key: "projects" },
  { id: "skills", key: "skills" },
  { id: "education", key: "education" },
  { id: "experience", key: "experience" },
  { id: "contact", key: "contact" },
] as const;

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-ink/10 bg-paper/80 px-4 py-3 backdrop-blur-md sm:px-6">
          <a href="#top" className="font-display text-xl font-bold tracking-tight">
            SY<span className="text-lime">.</span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {t.nav[link.key]}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex rounded-full border border-ink/15 p-0.5 text-xs font-semibold">
              {(["tr", "en"] as const).map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
                    lang === code ? "bg-ink text-lime" : "text-ink/60 hover:text-ink"
                  }`}
                  aria-pressed={lang === code}
                >
                  {code}
                </button>
              ))}
            </div>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-ink/15 md:hidden"
              aria-label="Menu"
              aria-expanded={open}
            >
              <span className={`h-0.5 w-4 bg-ink transition-transform ${open ? "translate-y-1 rotate-45" : ""}`} />
              <span className={`h-0.5 w-4 bg-ink transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-ink/10 bg-paper/95 p-3 backdrop-blur-md md:hidden">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-ink/80 hover:bg-ink/5"
              >
                {t.nav[link.key]}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
