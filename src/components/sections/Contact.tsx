"use client";

import { useState } from "react";
import Reveal from "../Reveal";
import ContactDialog from "../ContactDialog";
import { useLanguage } from "../LanguageProvider";
import { profile } from "@/lib/content";

function LinkedInIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8h4.52V24H.24V8zM8.34 8h4.33v2.19h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.52v-6.4c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.38V24H8.34V8z" />
    </svg>
  );
}

function GitHubIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

/**
 * Social pill whose brand icon rolls into view on hover.
 * The icon slot is always reserved (fixed width) so the button never
 * changes size — hovering can't reflow its neighbours.
 */
function SocialButton({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center rounded-full border-2 border-paper/40 px-8 py-3.5 font-display text-lg font-bold transition-colors hover:border-lime hover:text-lime"
    >
      <span
        className="mr-2 flex h-5 w-5 shrink-0 items-center justify-center text-lime opacity-0 transition-all duration-500 ease-out [transform:translateX(-6px)_rotate(-360deg)] group-hover:opacity-100 group-hover:[transform:translateX(0)_rotate(0deg)]"
        aria-hidden
      >
        {icon}
      </span>
      {label}
      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
        ↗
      </span>
    </a>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section id="contact" className="grain relative scroll-mt-28 overflow-hidden bg-ink py-28 text-paper">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-lilac/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            {t.contact.heading1}
            <br />
            <span className="text-lime">{t.contact.heading2}</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-paper/70">{t.contact.body}</p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setDialogOpen(true)}
              className="group inline-flex items-center gap-3 rounded-full bg-lime px-9 py-4 font-display text-lg font-bold text-ink transition-transform hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" aria-hidden>
                <rect x="2" y="4" width="20" height="16" rx="3" fill="currentColor" opacity="0.15" />
                <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
                <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t.contact.emailCta}
            </button>

            <SocialButton href={profile.linkedin} label={t.contact.linkedin} icon={<LinkedInIcon />} />
            <SocialButton href={profile.github} label="GitHub" icon={<GitHubIcon />} />
          </div>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-10 inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-2.5 font-display font-medium text-paper/70">
            📍 {t.contact.location}
          </p>
        </Reveal>
      </div>

      <ContactDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </section>
  );
}
