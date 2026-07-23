"use client";

import Reveal from "../Reveal";
import { useLanguage } from "../LanguageProvider";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="grain relative scroll-mt-28 bg-ink py-24 text-paper">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-outline-lime mr-3 select-none" aria-hidden>
              ✦
            </span>
            {t.experience.heading}
            <span className="text-lime">.</span>
          </h2>
        </Reveal>

        <div className="mt-14 space-y-6">
          {t.experience.items.map((job, i) => (
            <Reveal key={job.company} delay={i * 100}>
              <article className="group rounded-3xl border border-paper/15 bg-paper/[0.04] p-6 transition-colors hover:border-lime/50 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl font-bold">
                    {job.role} <span className="text-lime">@ {job.company}</span>
                  </h3>
                  <span className="font-display text-sm font-semibold text-paper/60">{job.period}</span>
                </div>
                <p className="mt-1 text-sm text-paper/50">{job.location}</p>

                <ul className="mt-5 space-y-2.5">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-paper/80">
                      <span className="mt-1 text-lime">—</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-paper/20 px-3 py-1 text-xs font-semibold text-paper/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
