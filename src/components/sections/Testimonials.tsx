"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "../Reveal";
import { useLanguage } from "../LanguageProvider";

const avatarColors = ["bg-lime", "bg-lilac", "bg-peach", "bg-lime-soft", "bg-lilac"];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-lg" aria-label={`${rating}/5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? "text-ink" : "text-ink/20"}>
          ★
        </span>
      ))}
    </div>
  );
}

function Card({
  item,
  index,
  className = "",
}: {
  item: { name: string; role: string; text: string; rating: number };
  index: number;
  className?: string;
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl border-2 border-ink/10 bg-white p-6 transition-colors hover:border-ink sm:p-8 ${className}`}
    >
      <Stars rating={item.rating} />
      <p className="mt-4 flex-1 leading-relaxed text-ink/75">“{item.text}”</p>
      <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink font-display font-bold ${avatarColors[index % avatarColors.length]}`}
          aria-hidden
        >
          {item.name.charAt(0)}
        </span>
        <div>
          <p className="font-display font-bold">{item.name}</p>
          <p className="text-sm text-ink/55">{item.role}</p>
        </div>
      </div>
    </article>
  );
}

function ArrowButton({
  direction,
  onClick,
  disabled,
}: {
  direction: 1 | -1;
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 1 ? "Next" : "Previous"}
      className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink font-bold transition-all hover:bg-ink hover:text-lime disabled:cursor-not-allowed disabled:border-ink/20 disabled:text-ink/25 disabled:hover:bg-transparent disabled:hover:text-ink/25"
    >
      {direction === 1 ? "→" : "←"}
    </button>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  const items = t.testimonials.items;

  // Desktop: scroll-snap row state
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const step = card ? card.clientWidth + 24 : 360;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  // Mobile: deck slider state
  const [active, setActive] = useState(0);
  const touchX = useRef<number | null>(null);

  const go = (direction: 1 | -1) => {
    setActive((current) => Math.min(items.length - 1, Math.max(0, current + direction)));
  };

  const deckStyle = (i: number): React.CSSProperties => {
    const offset = i - active;
    if (offset < 0) {
      return { transform: "translateX(-120%) rotate(-8deg)", opacity: 0, zIndex: 40, pointerEvents: "none" };
    }
    if (offset > 2) {
      return { transform: "translateY(-32px) scale(0.88)", opacity: 0, zIndex: 0, pointerEvents: "none" };
    }
    return {
      transform: `translateY(${offset * -16}px) scale(${1 - offset * 0.06})`,
      opacity: 1,
      zIndex: 30 - offset * 10,
      pointerEvents: offset === 0 ? "auto" : "none",
    };
  };

  return (
    <section id="testimonials" className="scroll-mt-28 overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {t.testimonials.heading}
              <span className="text-lime">.</span>
            </h2>
            {/* Desktop arrows */}
            <div className="hidden gap-2 sm:flex">
              <ArrowButton direction={-1} onClick={() => scrollByCard(-1)} disabled={!canPrev} />
              <ArrowButton direction={1} onClick={() => scrollByCard(1)} disabled={!canNext} />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Desktop / tablet: horizontal snap row */}
      <Reveal delay={100} className="hidden sm:block">
        <div
          ref={trackRef}
          onScroll={updateArrows}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto scroll-smooth px-[max(1rem,calc((100vw-72rem)/2+1rem))] pb-4"
        >
          {items.map((item, i) => (
            <div key={item.name} className="w-[360px] shrink-0 snap-start">
              <Card item={item} index={i} />
            </div>
          ))}
        </div>
      </Reveal>

      {/* Mobile: stacked deck slider (swipe or arrows) */}
      <Reveal delay={100} className="sm:hidden">
        <div
          className="relative mx-auto mt-16 h-[380px] max-w-sm px-4"
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const delta = e.changedTouches[0].clientX - touchX.current;
            if (delta < -40) go(1);
            if (delta > 40) go(-1);
            touchX.current = null;
          }}
        >
          {items.map((item, i) => (
            <div
              key={item.name}
              className="absolute inset-x-4 top-0 h-full transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
              style={deckStyle(i)}
              aria-hidden={i !== active}
            >
              <Card item={item} index={i} className="shadow-[0_10px_30px_rgba(16,16,16,0.08)]" />
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <ArrowButton direction={-1} onClick={() => go(-1)} disabled={active === 0} />
          <div className="flex gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`${i + 1}/${items.length}`}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-6 bg-ink" : "w-2 bg-ink/20"
                }`}
              />
            ))}
          </div>
          <ArrowButton direction={1} onClick={() => go(1)} disabled={active === items.length - 1} />
        </div>
      </Reveal>
    </section>
  );
}
