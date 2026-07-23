"use client";

import Reveal from "../Reveal";
import { useLanguage } from "../LanguageProvider";

function GitHubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

const cardAccents = [
  { badge: "bg-lilac", shadow: "hover:shadow-[6px_6px_0_#cdb4f6]" },
  { badge: "bg-peach", shadow: "hover:shadow-[6px_6px_0_#ffd6c9]" },
  { badge: "bg-lime", shadow: "hover:shadow-[6px_6px_0_#c8f542]" },
  { badge: "bg-lime-soft", shadow: "hover:shadow-[6px_6px_0_#e6fb9b]" },
];

export default function Projects() {
  const { t } = useLanguage();
  const featured = t.projects.items.find((p) => p.featured);
  const rest = t.projects.items.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {t.projects.heading}
            <span className="text-lime">.</span>
          </h2>
        </Reveal>

        {featured && (
          <Reveal delay={100}>
            <article className="mt-14 overflow-hidden rounded-3xl border-2 border-ink bg-lime-soft shadow-[6px_6px_0_#101010]">
              <div className="p-6 sm:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border-2 border-ink bg-lime px-3 py-1 font-display text-xs font-bold uppercase tracking-wide">
                    ★ {t.projects.featured}
                  </span>
                  <span className="font-display text-sm font-semibold text-ink/60">{featured.period}</span>
                </div>

                <h3 className="font-display mt-4 text-3xl font-bold sm:text-4xl">
                  {featured.emoji} {featured.name}
                </h3>
                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink/75">{featured.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-ink/25 bg-white/60 px-3 py-1 text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {featured.link && (
                    <a
                      href={featured.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-display font-semibold text-lime transition-transform hover:-translate-y-0.5"
                    >
                      {t.projects.liveDemo} ↗
                    </a>
                  )}
                  {featured.github && (
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3 font-display font-semibold transition-colors hover:bg-ink hover:text-lime"
                    >
                      <GitHubIcon className="h-5 w-5" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        )}

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {rest.map((project, i) => {
            const accent = cardAccents[i % cardAccents.length];
            return (
              <Reveal key={project.name} delay={i * 80}>
                <article
                  className={`flex h-full flex-col rounded-3xl border-2 border-ink/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-ink ${accent.shadow} sm:p-8`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-ink text-2xl ${accent.badge}`}
                      aria-hidden
                    >
                      {project.emoji}
                    </span>
                    <span className="rounded-full bg-paper px-3 py-1 font-display text-xs font-semibold text-ink/60">
                      {project.period}
                    </span>
                  </div>

                  <h3 className="font-display mt-5 text-2xl font-bold">{project.name}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink/70">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-paper px-3 py-1 text-xs font-semibold text-ink/70">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(project.link || project.github) && (
                    <div className="mt-6 flex flex-wrap gap-3 border-t border-ink/10 pt-5">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2 font-display text-sm font-semibold text-lime transition-transform hover:-translate-y-0.5"
                        >
                          {t.projects.liveDemo} ↗
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink px-5 py-1.5 font-display text-sm font-semibold transition-colors hover:bg-ink hover:text-lime"
                        >
                          <GitHubIcon /> GitHub
                        </a>
                      )}
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
