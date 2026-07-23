"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";

type Status = "idle" | "sending" | "success" | "error";

/** Envelope flying along an arc into the recipient — plays while the mail is sent. */
function SendingAnimation({ label }: { label: string }) {
  return (
    <div className="py-6 text-center" role="status" aria-live="polite">
      <div className="relative mx-auto h-28 w-[300px]">
        <svg viewBox="0 0 300 110" className="absolute inset-0 h-full w-full" aria-hidden>
          <path
            className="path-draw"
            d="M16 84 Q150 -6 284 84"
            fill="none"
            stroke="#101010"
            strokeWidth="2.5"
            strokeDasharray="6 8"
            strokeLinecap="round"
            opacity="0.35"
          />
        </svg>

        {/* Sender (outbox) on the left */}
        <div className="absolute left-0 bottom-1 flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-ink bg-white text-xl">
          📤
        </div>

        {/* Flying envelope following the arc */}
        <div className="envelope-fly absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-xl border-2 border-ink bg-lime text-lg shadow-[2px_2px_0_#101010]">
          ✉️
        </div>

        {/* Recipient on the right, with a check that pops in on arrival */}
        <div className="recipient-pop absolute right-0 bottom-1 flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-lilac text-xl">
          🧑‍💻
          <span className="check-in absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-ink bg-lime text-[10px] font-bold text-ink">
            ✓
          </span>
        </div>
      </div>
      <p className="mt-4 font-display font-semibold text-ink/70">{label}</p>
    </div>
  );
}

export default function ContactDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    setStatus("idle");
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    // Let the send animation play fully even if the API responds quickly.
    const minAnimation = new Promise((resolve) => setTimeout(resolve, 1500));
    try {
      const [res] = await Promise.all([
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data.get("name"),
            email: data.get("email"),
            message: data.get("message"),
          }),
        }),
        minAnimation,
      ]);
      if (!res.ok) throw new Error("send failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={t.contact.form.title}
        className="w-full max-w-lg rounded-3xl border-2 border-ink bg-paper p-6 text-ink shadow-[8px_8px_0_#c8f542] sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-bold">
            {t.contact.form.title}
            <span className="text-lime">.</span>
          </h3>
          <button
            onClick={onClose}
            aria-label={t.contact.form.close}
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink/20 font-bold transition-colors hover:border-ink"
          >
            ✕
          </button>
        </div>

        {status === "success" ? (
          <div className="mt-8 text-center">
            <p className="text-4xl">🎉</p>
            <p className="mt-3 text-lg font-medium">{t.contact.form.success}</p>
            <button
              onClick={onClose}
              className="mt-6 rounded-full bg-ink px-7 py-3 font-display font-semibold text-lime"
            >
              {t.contact.form.close}
            </button>
          </div>
        ) : status === "sending" ? (
          <SendingAnimation label={t.contact.form.sending} />
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              name="name"
              required
              maxLength={100}
              placeholder={t.contact.form.name}
              className="w-full rounded-2xl border-2 border-ink/15 bg-white px-4 py-3 outline-none transition-colors focus:border-ink"
            />
            <input
              name="email"
              type="email"
              required
              maxLength={200}
              placeholder={t.contact.form.email}
              className="w-full rounded-2xl border-2 border-ink/15 bg-white px-4 py-3 outline-none transition-colors focus:border-ink"
            />
            <textarea
              name="message"
              required
              maxLength={5000}
              rows={5}
              placeholder={t.contact.form.message}
              className="w-full resize-none rounded-2xl border-2 border-ink/15 bg-white px-4 py-3 outline-none transition-colors focus:border-ink"
            />
            {status === "error" && (
              <p className="rounded-xl bg-peach px-4 py-2.5 text-sm font-medium">⚠ {t.contact.form.error}</p>
            )}
            <button
              type="submit"
              className="w-full rounded-full bg-ink py-3.5 font-display font-semibold text-lime transition-transform hover:-translate-y-0.5"
            >
              {t.contact.form.send} →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
