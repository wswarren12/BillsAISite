# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally, both usually arriving from a LinkedIn or X link on a phone with ~20 seconds of attention:

1. **Recruiters and hiring managers** evaluating Bill for a Head-of-Product / Product Lead role. They need: is he real, what scale has he operated at, is he available, and a résumé to forward.
2. **Founders and CEOs** looking for a product advisor or fractional product lead in AI, web3, gaming, or fintech. They need: what problems he solves, proof he has done it, and how to reach him.

Secondary: peers and collaborators in the Protocol Labs / web3 network who land here from a project subdomain (`gachas.billsai.club`, `wordcraft.billsai.club`).

## Product Purpose

billsai.club is Bill Warren's personal site: a portfolio and point of contact. It exists to convert a cold link into an email. Success is a recruiter or founder emailing `bill@billsai.club` (or downloading the résumé and remembering one sentence).

## Positioning

**Primary claim:** seven years shipping 0→1 products *at scale* in frontier domains — AI, web3, gaming, fintech — before they were safe bets. Evidence: 500K+ platform users and 28M+ tasks (Game7/Summon), $30M+ payroll on smart contracts (Opolis), $400M+ DAO activity (DAOhaus), a venture-backed founder exit-to-acquisition path (Peeps Democracy, ConsenSys spin-out), and now product lead for a first-of-its-kind financial asset (Protocol Labs Alignment Asset).

**Supporting claim (secondary, not identity):** lawyer-turned-builder. Duke Law JD, WilmerHale corporate associate (venture financing, M&A). The legal edge shows up as comfort with regulated, contract-heavy, multi-stakeholder products — it explains *how* he ships in these domains, not *who* he is.

**Also true and distinctive:** he still builds. Live side projects (KidSpinner, WordCraft Mobs) shipped solo — a product lead who codes, not a slide-deck PM.

One-line positioning (confirmed): *"I turn frontier tech into products people actually use."*

## Operating Context

- Current role: **Product Lead, Alignment Asset, Protocol Labs** (June 2026 — present). The Alignment Asset is a novel financial asset backed by a diversified Trust spanning cash, crypto, and 190+ frontier-tech ventures, designed to incentivize collaboration across the Protocol Labs Network.
- Prior: Head of Product, Game7 / Summon (July 2023 — May 2026); Executive Steward, Product, Opolis; Product & Tokenomics, DAOhaus; Founder & CEO, Peeps Democracy; Corporate Associate, WilmerHale.
- Based in Hillsborough, NC. Remote.
- Open to: product leadership roles and advisory / speaking engagements.
- Side projects live on subdomains under the same domain; legal pages (Privacy, ToS) cover those apps and name **Bottle Rocket Labs II, LLC** as the operating entity.

## Capabilities and Constraints

- Single Next.js 16 app (App Router, React 19, Tailwind 4), deployed on Vercel. Contact form posts to `/api/contact` → Resend, with Zod validation and a honeypot. Keep the stack; a redesign replaces the visual layer, not the framework.
- Routes today: `/` (single scroll), `/Privacy`, `/ToS`. **Page structure is open** for the redesign — one scroll or a short front page + Work + About are both acceptable if they serve the two audiences.
- Content is data-driven: `src/data/experience.ts`, `projects.ts`, `education.ts`. **All content and copy is preserved** — facts, metrics, achievements, project descriptions, legal text. Voice may be tuned (see Brand Commitments) but no claims are added or removed.
- Résumé: `public/Bill_Warren_Resume.pdf` (2 pages, exported from the .docx in repo root; predates the Protocol Labs role — user to refresh).
- No CMS, no auth, no analytics dependency.

## Brand Commitments

- Name: **Bill Warren**. Domain/brand: **billsai.club** ("BillsAI Club" in legal page titles). Wordmark treatment is open.
- Voice (confirmed): a balance of **direct-warm-slightly-wry** and **crisp-executive**. Human first, credentials second, outcomes stated plainly. Existing lines that hit it: "Things I've vibe-coded into existence", "Built to help my kindergartener learn to read", "Seven years of shipping at the edge of new platforms." Avoid: Discord-casual, buzzword stacking, humblebrag.
- **No photograph of Bill** on the site (confirmed). Typography and the work carry identity. `public/bill.png` exists but is not to be used.
- Anti-reference (confirmed): crypto/web3 neon — glowing cyan/magenta, glass panels, 3D coins.
- Redesign mandate (confirmed): the incumbent "Studio Terminal" world reads as a generic dev portfolio and as too dark/techy for recruiters and founders; the replacement must be warmer, more credible to a non-technical reader, and distinctly bolder. Nothing from the old visual world is protected.

## Evidence on Hand

- Metrics: 500K+ platform users, 28M+ tasks, $30M+ payroll processed, $400M+ DAO activity (DAOhaus), 190+ ventures in the Alignment Asset trust, 7+ years leading product.
- Roles, achievements, and tags: `src/data/experience.ts` (6 roles with bullets and metric callouts).
- Projects: `src/data/projects.ts` — KidSpinner (Live, gachas.billsai.club), NewsBreef (Beta, no URL), WordCraft Mobs (Live, wordcraft.billsai.club).
- Education & board roles: `src/data/education.ts`.
- Résumé PDF: `public/Bill_Warren_Resume.pdf`.
- Legal: `src/app/Privacy/page.tsx`, `src/app/ToS/page.tsx`.
- Social: LinkedIn, GitHub (`wswarren12`), X, Warpcast — handles in `Contact.tsx`; unverified, user to confirm.
- **Absent — do not fabricate:** testimonials, client logos, press, case-study writeups, screenshots of the products, a headshot for use, an OG image.

## Product Principles

1. **One ask.** Every surface points at `bill@billsai.club`. Résumé is the secondary artifact. No third CTA.
2. **Proof before personality.** Numbers and shipped things first; the JD and the side projects explain and humanize, they don't lead.
3. **Legible to a non-technical reader.** A recruiter who has never heard "tokenomics" should still leave with the one sentence. Jargon appears only where the audience is technical (project tags, timeline bullets).
4. **Both audiences, one page-flow.** Recruiters and founders are served by the same sequence, not by a fork.
5. **Preserve the facts.** Redesign the container; never edit a metric, date, or claim without the user.

## Accessibility & Inclusion

WCAG 2.1 AA as the floor: text ≥4.5:1, visible focus on every interactive element, all interactive content keyboard-operable, `prefers-reduced-motion` honored for any motion >5s, no auto-playing content without a pause. iOS: form inputs ≥16px to prevent zoom. These were failures in the incumbent and are non-negotiable in the replacement.
