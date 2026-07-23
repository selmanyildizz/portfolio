"use client";

import Reveal from "../Reveal";
import { useLanguage } from "../LanguageProvider";

const accents = ["bg-lime", "bg-lilac", "bg-peach", "bg-lime", "bg-lilac", "bg-peach"];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="grain relative scroll-mt-28 bg-ink py-24 text-paper">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {t.skills.heading}
            <span className="text-lime">.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.groups.map((group, i) => (
            <Reveal key={group.name} delay={i * 80}>
              <div className="h-full rounded-3xl border border-paper/15 bg-paper/[0.04] p-6">
                <div className="flex items-center gap-3">
                  <span className={`h-3 w-3 rounded-full ${accents[i % accents.length]}`} />
                  <h3 className="font-display text-xl font-bold">{group.name}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-paper/20 px-3 py-1.5 text-sm font-medium text-paper/80 transition-colors hover:border-lime hover:text-lime"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
