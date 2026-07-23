"use client";

import dynamic from "next/dynamic";
import { useLanguage } from "../LanguageProvider";

const Hero3D = dynamic(() => import("../Hero3D"), { ssr: false });

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="grain relative overflow-hidden pt-32 pb-16 sm:pt-40">
      {/* decorative floating dots */}
      <div className="pointer-events-none absolute left-[8%] top-40 h-3 w-3 rounded-full bg-lilac" />
      <div className="pointer-events-none absolute right-[12%] top-32 h-2 w-2 rounded-full bg-peach" />
      <div className="pointer-events-none absolute left-[45%] bottom-24 h-2.5 w-2.5 rounded-full bg-lime" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-1.5 text-sm font-medium">
            <span className="h-2 w-2 animate-pulse rounded-full bg-lime" />
            {t.hero.openTo}
          </p>

          <p className="font-display text-lg font-medium text-ink/70">{t.hero.greeting}</p>

          <h1 className="font-display mt-2 text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            {t.hero.title1}
            <br />
            <span className="relative inline-block">
              <span className="text-outline absolute inset-0 translate-x-1.5 translate-y-1.5 select-none" aria-hidden>
                {t.hero.title2}
              </span>
              <span className="relative">
                {t.hero.title2}
                <span className="text-lime">.</span>
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">{t.hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-ink px-7 py-3.5 font-display font-semibold text-lime transition-transform hover:-translate-y-0.5"
            >
              {t.hero.ctaProjects}
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-ink px-7 py-3 font-display font-semibold transition-colors hover:bg-ink hover:text-lime"
            >
              {t.hero.ctaContact} ↗
            </a>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-3">
            {t.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-ink/10 bg-white/70 px-4 py-4 text-center"
              >
                <div className="font-display text-3xl font-bold">{stat.value}</div>
                <div className="mt-1 text-xs font-medium text-ink/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
          <Hero3D />
          <div className="absolute -left-2 top-6 -rotate-6 rounded-full border-2 border-ink bg-lime px-4 py-1.5 font-display text-sm font-bold shadow-[3px_3px_0_#101010]">
            Java / Spring Boot
          </div>
          <div className="absolute -right-2 bottom-10 rotate-3 rounded-full border-2 border-ink bg-white px-4 py-1.5 font-display text-sm font-bold shadow-[3px_3px_0_#101010]">
            React ⚛
          </div>
          <div className="absolute bottom-0 left-8 -rotate-3 rounded-full border-2 border-ink bg-lilac px-4 py-1.5 font-display text-sm font-bold shadow-[3px_3px_0_#101010]">
            📍 {t.hero.location}
          </div>
        </div>
      </div>
    </section>
  );
}
