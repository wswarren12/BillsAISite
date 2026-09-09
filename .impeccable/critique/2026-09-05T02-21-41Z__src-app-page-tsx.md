---
target: BillsAIClub site homepage
total_score: 24
max_score: 36
na_heuristics: 10
p0_count: 2
p1_count: 2
timestamp: 2026-09-05T02-21-41Z
slug: src-app-page-tsx
---
# Critique: billsai.club (src/app/page.tsx)

Method: dual-agent (A: delegate 424c1c1a · B: delegate c0110c9e). Overlays injected in-page (110 anti-patterns).

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Header scroll-spy omits `contact` (Header.tsx:6-12); form status auto-clears 4s, no aria-live |
| 2 | Match System / Real World | 3 | "vibe-coded", "Executive Steward", "Tokenomics"; SignalStrip fictional status |
| 3 | User Control and Freedom | 2 | No prefers-reduced-motion for 55 animations + 4 canvases; mobile menu no Escape |
| 4 | Consistency and Standards | 2 | /Privacy + /ToS slate palette on dark body; Header 5 vs SideNav 7; "Credentials" vs "Education" |
| 5 | Error Prevention | 3 | Validation only on submit; no required/maxLength |
| 6 | Recognition Rather Than Recall | 3 | NewsBreef card href="#" lifts then jumps to top |
| 7 | Flexibility and Efficiency | 3 | Timeline rows <div onClick> — no keyboard path |
| 8 | Aesthetic and Minimalist Design | 2 | 7 motion systems in first two viewports; fake-affordance skills matrix; mobile destroyed |
| 9 | Error Recovery | 3 | No aria-invalid/aria-describedby |
| 10 | Help and Documentation | n/a | Single-page portfolio |
| **Total** | | **24/36** | **Acceptable (67%)** |

## Design Specificity Verdict
Authored on desktop (Two-Material Rule honored in code, White Button Rule disciplined, content-specific instrumentation). Category-interchangeable on mobile (broken layout) and on legal pages (old slate system).

Deterministic: CLI 18 findings (13 false positives in src/emails/ContactNotification.tsx; site-relevant: Experience.tsx:180 max-height transition, Contact.tsx:105 clamp off ramp, 3 alpha nav backdrops). Runtime: 110 — 42 undersized 10px text, 26 low-contrast (#4b74d8 on paper 3.9:1 ×17; #70708a on ink 3.74:1; #22a06b on paper 3.0:1), 21 line-length >80ch, 6 max-height transitions, 5 tiny text, 5 radial glows, 4 clipped overflow, 3 dark glows, 2 gradient text, 1 all-caps body.

## Priority Issues

### [P0] Mobile layout unusable below ~900px
scrollWidth 522 @ 390 viewport. All inline gridTemplateColumns (About.tsx:9, Experience.tsx:15,71, Projects.tsx:227,275, Skills.tsx:23,77, Education.tsx:14,56, SignalStrip.tsx:24, Hero.tsx:330) fixed-column, no breakpoints; body overflow-x:hidden hides it. Fix: Tailwind responsive grid classes; move timeline node inside gutter; drop body overflow-x hidden. → /impeccable adapt

### [P0] Privacy & ToS illegible on dark body
Privacy/page.tsx:41 text-slate-700/900 on ink-950: h2 1.01:1 (13 invisible), body 1.74:1. Fix: paper shell + ink-on-paper tokens + brand mark + legal eyebrow; explain Bottle Rocket Labs II LLC once in footer. → /impeccable harden

### [P1] Keyboard/screen-reader broken at timeline + form
Experience.tsx:69-84 <div onClick> no tabIndex/role/aria-expanded. Contact.tsx:69 outline:none, no focus ring; submit ring = ink-950 on ink-950. No authored :focus-visible anywhere. 4 canvases no aria-hidden; no skip link; no aria-live. Fix: <button aria-expanded>, global :focus-visible indigo ring, aria-hidden canvases, role=status, aria-invalid. → /impeccable harden

### [P1] Motion budget no ceiling/off-switch
55 CSS animations + 4 rAF canvases at hero; O(n²) particles never pause offscreen; 48 bars animate height; accordion animates max-height; zero prefers-reduced-motion. Fix: reduced-motion media wrap, IntersectionObserver gating, scaleY for bars, grid-template-rows for accordion; consider cutting ticker or signal strip. → /impeccable quieter, /impeccable optimize

### [P2] Two design systems in one repo
Footer.tsx + components/ui/* dead (0 importers); framer-motion used only by dead code; globals.css:3-36 slate/indigo/amber @theme consumed only by dead + legal pages. Fix: delete dead code, remove framer-motion, prune @theme after legal re-token. → /impeccable distill

## Persona Red Flags
Jordan: Hero.tsx:339 "$30M+" over "$ PROCESSED" doubled $; "vibe-coded" tone risk; NewsBreef dead link; header highlights Education on Contact; placeholder-looking social hrefs; layout.tsx:33 OG url billsclub.ai wrong, no OG image.
Casey: all P0#1; period column wraps; no mobile scroll-spy; mobile menu no backdrop/Escape/scroll-lock; status pill wraps; can't pan.
Sam: can't expand timeline; no input focus ring; canvases unlabeled; silent form status; skills rows hover-only fake affordance; SideNav tooltip hover-only; hamburger no aria-expanded; no skip link.

## Minor Observations
- text-3 #70708a 3.74:1 on 33 elements at 10-11px → ~#8a8aa4; indigo-deep 3.9:1 at 11px on paper; #22a06b → ~#1a7d55
- 42 elements of 10px functional text; floor should be 11px
- About paragraphs ~136ch/line at 20px/680px
- "Back to top ↑" ghost slot → "Download résumé" (docx in repo root, not served)
- "05 / Credentials" vs nav "Education"
- Education.tsx:56 gap-15 non-standard
- Ticker literal duplication → ITEMS.concat(ITEMS)
- CountUp setVal per rAF frame
- Timeline node left:-28 floats, no connecting line
- Header "/ product" 11px text-3 contrast + ambiguous
- Tokenize alpha backdrops rgba(7,8,13,…)/rgba(11,13,20,…)

## Questions to Consider
1. If the skills matrix vanished, what would a recruiter lose?
2. Who is Bottle Rocket Labs II, LLC and why does it own a personal brand's legal pages?
3. Which instrument (particles/ticker/waveform/typing/count-ups) would you actually miss?
