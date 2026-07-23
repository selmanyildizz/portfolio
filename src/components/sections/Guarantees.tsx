"use client";

import Reveal from "../Reveal";
import { useLanguage } from "../LanguageProvider";

const numberAccents = ["bg-lime", "bg-lilac", "bg-peach", "bg-peach", "bg-lime", "bg-lilac"];

export default function Guarantees() {
  const { t } = useLanguage();

  return (
    <section id="how-i-work" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="inline-block rounded-full border-2 border-ink bg-lime px-4 py-1.5 font-display text-sm font-bold uppercase tracking-wide">
            ✓ {t.guarantees.kicker}
          </p>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {t.guarantees.heading}
            <span className="text-lime">.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink/65">{t.guarantees.tagline}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.guarantees.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <article className="flex h-full flex-col rounded-3xl border-2 border-ink/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-ink hover:shadow-[6px_6px_0_#101010] sm:p-8">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-ink font-display text-lg font-bold ${numberAccents[i % numberAccents.length]}`}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-5 text-xl font-bold leading-snug">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
