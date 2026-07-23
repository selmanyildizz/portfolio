"use client";

import Reveal from "../Reveal";
import { useLanguage } from "../LanguageProvider";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {t.education.heading}
            <span className="text-lime">.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <Reveal delay={80}>
            <article className="h-full rounded-3xl border-2 border-ink bg-white p-6 shadow-[6px_6px_0_#cdb4f6] sm:p-8">
              <p className="font-display text-sm font-bold uppercase tracking-wide text-ink/50">🎓 {t.education.period}</p>
              <h3 className="font-display mt-3 text-3xl font-bold">{t.education.school}</h3>
              <p className="mt-2 text-lg text-ink/70">{t.education.degree}</p>
              <span className="mt-5 inline-block rounded-full bg-lilac px-4 py-1.5 font-display text-sm font-bold">
                {t.education.gpa}
              </span>
            </article>
          </Reveal>

          <Reveal delay={160}>
            <article className="h-full rounded-3xl border-2 border-ink bg-white p-6 shadow-[6px_6px_0_#c8f542] sm:p-8">
              <p className="font-display text-sm font-bold uppercase tracking-wide text-ink/50">📜 {t.education.certHeading}</p>
              <h3 className="font-display mt-3 text-2xl font-bold">{t.education.certName}</h3>
              <p className="mt-2 text-ink/70">{t.education.certIssuer}</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
