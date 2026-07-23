"use client";

import { useLanguage } from "../LanguageProvider";
import { profile } from "@/lib/content";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-paper/10 bg-ink py-8 text-center text-sm text-paper/50">
      <p>
        © {new Date().getFullYear()} {profile.name} — {t.footer}
      </p>
    </footer>
  );
}
