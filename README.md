# Portfolio — Selman Yıldız

Bilingual (TR/EN) personal portfolio for a full-stack developer.

**Live:** [selmanyildiz.vercel.app](https://selmanyildiz.vercel.app)

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **react-three-fiber** / **drei** — animated 3D hero
- **Brevo API** — contact form delivery

## Features

- Full TR/EN translation with a persisted language toggle
- Interactive 3D hero that tracks the pointer
- Contact form with a server-side API route, animated send state, and a branded HTML email
- Testimonials as a snap-scroll row on desktop, stacked deck slider on mobile
- Reveal-on-scroll animations that honour `prefers-reduced-motion`

## Project structure

```
src/
├─ app/
│  ├─ api/contact/route.ts   # Brevo mail delivery
│  ├─ layout.tsx
│  ├─ page.tsx               # section order
│  └─ globals.css            # theme tokens + keyframes
├─ components/
│  ├─ LanguageProvider.tsx   # TR/EN context
│  ├─ Hero3D.tsx
│  ├─ ContactDialog.tsx
│  └─ sections/              # one file per page section
└─ lib/
   └─ content.ts             # ALL copy, both languages
```

All text lives in `src/lib/content.ts` — edit that file to change any copy.

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in your Brevo credentials
npm run dev
```

| Variable | Purpose |
| --- | --- |
| `BREVO_API_KEY` | Brevo API key used to send contact-form mail |
| `BREVO_SENDER_EMAIL` | A sender address verified in your Brevo account |

Without these the site still runs; only the contact form returns an error.

## Deployment

Deployed on Vercel and connected to this repository — pushes to `main` deploy automatically.
