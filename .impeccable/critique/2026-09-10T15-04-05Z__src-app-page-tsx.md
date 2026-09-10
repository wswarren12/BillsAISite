---
target: homepage (src/app/page.tsx) post-reorg
total_score: 26
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 1
timestamp: 2026-09-10T15-04-05Z
slug: src-app-page-tsx
---
# Critique: billsai.club — homepage (run 2, post-reorg)

Method: dual-agent (A: design review a3fa67fe · B: detector/browser a8db7bf1), isolated + parallel. Live-inspected at 1440x900 and 390x844. Detector exit 2, 15 advisory font-size hits only.

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|-----------|-------|-----------|
| 1 | Visibility of status | 4 | Scroll-spy, current-role badge, form aria-live all clear |
| 2 | Match real world | 2 | Reversed diagram now dis-assembles as you scroll 01->06 |
| 3 | Control & freedom | 4 | Collapsible highlights, skip link, esc-close, non-blocking |
| 4 | Consistency | 2 | Register split: plain "Experience/Projects" beside "Set No 2026 / Pieces in this set" |
| 5 | Error prevention | 4 | Validation, honeypot, focus-to-first-error |
| 6 | Recognition | 3 | "01 = most recent" inverts the universal "01 = first" |
| 7 | Flexibility | n/a | Persuade surface |
| 8 | Aesthetic/minimal | 3 | Cover right rail shows the model 3x |
| 9 | Error recovery | 4 | Human messages, role=alert |
| 10 | Help/docs | n/a | - |
| Total | | 26/32 | Good (81%) |

## Design Specificity Verdict
Still strongly authored. The Projects "View live app" edit strengthened the concept (touchable proof). The recency reversal + language easing half-landed: reversing content order is right for recruiters, but applied to a diagram authored to assemble upward it now reads as teardown; and the easing left plain headings beside surviving deep jargon. Detector: 15 advisory font-size hits only (12px label register + display sizes); no functional slop.

## What's Working
1. "View live app" system — in-world blue buttons (56px, new tab, 6.6:1), Live badges, honest "Coming soon" for NewsBreef.
2. One-ask discipline — header "Email me" suppressed while Cover is in view.
3. The brick engine as brand; recency order verified 01 Protocol Labs -> 06 WilmerHale; a11y hardening intact (form focus, role=alert, 16px inputs, heading outline, section labels, no overflow).

## Priority Issues
### [P0] Reversed brick diagram reads as dis-assembly
Each card ghosts older bricks + solidifies its own piece. Reversed, card 01 shows 5 ghosts, card 06 shows 0 — scrolling empties the model, reading as decline where the content claims accumulation; also makes the most-important role (01) the most cluttered diagram. Fix: show the full model outline on every card (all pieces ghosted) with only THIS card's piece solid/highlighted — a stable "you-are-here" highlight that reads cleanly in any order. -> /impeccable shape/polish

### [P1] Register split (plain headings vs surviving book jargon)
"Experience"/"Projects" plain headings sit beside "Build instructions . Set No 2026", "Pieces in this set", "Finished model". Half-eased voice reads like an edit seam. NOTE: the user deliberately chose the medium easing tier that KEEPS these charming bits, so this is a known, accepted trade-off rather than an oversight.

### [P2] "In development" status badge contrast 4.30:1
ink #111 on --blue #147bd1 = 4.30:1, below AA 4.5 for small bold text (detector + browser confirmed). Latent (no current project uses that status) but real in the STATUS map. Fix: lighten that badge fill.

### [P2] "Vibe Coded" tag still on WordCraft Mobs
projects.ts still carries a "Vibe Coded" tag on a live product — undercuts credibility for a non-technical reader next to a "View live app" button. Leftover from the intro edit. Fix: rename/remove.

### [P3] Cover right rail triples the model
Inventory + Finished model + numbered role legend = three representations of one object in the first viewport; the legend pre-empts the Experience section. Fix: consider dropping the legend. (Held: it decodes the finished model's colors and the user asked to keep the design; low priority.)

## Persona Red Flags
- Jordan (non-technical recruiter): "Vibe Coded" tag; busy ghost stack on card 01.
- Casey (mobile): served well — email CTA ~448px (above fold), tap targets 48-56px.
- Sam (a11y): strong baseline; only the ghost-vs-solid brick meaning is visual-only (text content covers it). No AA blocker beyond the latent In-development badge.

## Minor Observations
- Nav mixes numbered ("00 Cover", "01-06 Experience") and bare tabs.
- "Also included" keeps book voice while neighbors went plain.
- "Build complete." closer earns its metaphor (paired with a brick) — keep.
- NewsBreef shows "Coming soon" in both badge and CTA slot — honest, slightly redundant.

## Questions to Consider
1. If the brick stack can't assemble in recency order without looking like teardown, should the assembled tower live only on the Cover while Experience uses a stable highlight?
2. Did the easing soften the wrong 20% — keeping the most insider phrases ("Set No 2026")?
3. Would a 20s visitor reach the email faster with fewer brick diagrams to decode?
