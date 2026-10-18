# AMCWU 2026 — 1st African Multidisciplinary Conference of Wigwe University

Official Web Application for the **1st African Multidisciplinary Conference of Wigwe University (AMCWU 2026)**.

- **Theme:** Harnessing Emerging Technologies for Green Economy Transition and Sustainable Development in Africa
- **Dates:** 18th–19th November 2026
- **Format:** Hybrid (In-Person at Main Auditorium, Wigwe University, Isiokpo, Rivers State, Nigeria & Virtual)

---

## Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 & CSS Variables
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** `next-themes` (Dark/Light Mode with Class Strategy)

---

## Local Development Setup

### Prerequisites
- Node.js 18.x or later
- npm 9.x or later

### Steps
1. Clone the repository and navigate into the project directory:
   ```bash
   cd amcwu
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build & Quality Checks

Run the following commands to ensure TypeScript types, ESLint rules, and Next.js static builds compile cleanly:

```bash
# Type check
npx tsc --noEmit

# Lint check
npm run lint

# Production build test
npm run build
```

---

## Vercel Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/):

1. Push your changes to GitHub.
2. Import the repository into your Vercel Dashboard.
3. Keep default build settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
4. Click **Deploy**. No custom environment variables or secrets are required.

---

## How to Update Content

All conference content, dates, fees, speaker profiles, sub-themes, and contact details are centralized in `src/data/` as the single source of truth.

To update content, edit the corresponding TypeScript files:

- `src/data/conference.ts` — Conference titles, full theme statement, and key facts.
- `src/data/dates.ts` — Timeline dates, abstract submission deadlines, and acceptance dates.
- `src/data/fees.ts` — Registration fee tiers (early bird vs. standard rates) and certificate options.
- `src/data/speakers.ts` — Keynote speakers, topics, bios, and organizing committee profiles.
- `src/data/subthemes.ts` — The 14 multidisciplinary sub-themes and focus areas.
- `src/data/contacts.ts` — LOC Chairman, Secretary contact details, phone numbers, email addresses, and university events link.

Pages and components automatically consume data from these files.

---

## License & Organization

© 2026 Wigwe University, Isiokpo, Rivers State, Nigeria. All rights reserved.
