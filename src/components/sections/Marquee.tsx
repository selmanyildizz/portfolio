"use client";

import { useLanguage } from "../LanguageProvider";

export default function Marquee() {
  const { t } = useLanguage();
  const items = [...t.marquee, ...t.marquee];

  return (
    <div className="relative -rotate-1 overflow-hidden border-y-2 border-ink bg-ink py-3">
      <div className="animate-marquee flex w-max items-center gap-8 pr-8">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap font-display text-lg font-semibold text-lime">
            {item}
            <span className="text-paper/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
