---
target: BillsAIClub site homepage
total_score: 25
max_score: 36
na_heuristics: 10
p0_count: 1
p1_count: 2
timestamp: 2026-09-08T17-12-58Z
slug: src-app-page-tsx
---
# Critique: billsai.club (src/app/page.tsx) — run 2

Method: dual-agent (A: delegate 96eb49d0 · B: delegate 04ffa693). Runtime detector 110 → 53.

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Header marks About active while on hero (spyIds lacks hero) |
| 2 | Match System / Real World | 3 | Hero insider vocabulary; rotating positioning line |
| 3 | User Control and Freedom | 2 | No pause on marquee/rotator/signal/pulse; rotator ignores reduced-motion; mobile menu no outside-tap/scroll lock |
| 4 | Consistency and Standards | 3 | About lacks h2; Contact drops meta-grid; 3 CTA labels |
| 5 | Error Prevention | 2 | Submit-only validation, errors don't clear; email without noValidate; no autoComplete |
| 6 | Recognition Rather Than Recall | 3 | Eyebrow numbers decorative; side-nav dots anonymous |
| 7 | Flexibility and Efficiency | 3 | No résumé download; 6 invisible tab stops before hero CTA |
| 8 | Aesthetic and Minimalist Design | 3 | Nine Bricolage spans in About; hero stacks 5 kinetic devices + marquee |
| 9 | Error Recovery | 3 | aria-invalid/describedby/alert ✓; focus not moved to first invalid |
| 10 | Help and Documentation | n/a | Portfolio |
| **Total** | | **25/36** | **Good (69%)** |

## Design Specificity Verdict
Authored at system level; stock at hero level (particle canvas + grid + glows + rotator + count-ups + marquee = category starter pack). CLI: 21 (13 email false positives; 8 token-drift advisories). Runtime: 53 — low-contrast 16 (indigo-deep #4b74d8 on paper 3.9:1 @11px; chips 3.45:1; LIVE 4.40:1), line-length 21 (Experience bullets ~136ch), tiny-text 4, radial glow 5, dark glow 3, gradient text 2, layout-transition 1 (transition: height), all-caps body 1. Mobile scrollWidth 390/390, zero overflow. Privacy h2 15.4:1. 8/8 tab stops show ring. Accordion Enter verified.

## Priority Issues
### [P0] Side-nav buttons focusable while invisible
SideNav.tsx opacity:0 + pointer-events:none but 6 buttons in tab order → 6 Tab presses with no visible focus on first screen (WCAG 2.4.7/2.4.3). Fix: visibility:hidden or inert when !show + aria-hidden. → /impeccable harden
### [P1] Continuous motion has no pause; rotator ignores reduced-motion
Ticker 40s, TypingRotator 30–55ms forever (no matchMedia), signal strip, pulse dots — none pausable (WCAG 2.2.2). Ticker not aria-hidden (SR reads 22 items). Rotator inside the defining sentence. Fix: reduced-motion static rotator + aria-live=off; marquee pause on hover/focus-within + aria-hidden + hidden static list; consider fixed line. → /impeccable quieter, /impeccable harden
### [P1] No résumé; three different asks
No CV link. Hero "Let's work together" / About "AVAIL. ADVISORY + SPEAKING" 11px mono / Contact "product leadership, advisory, AI/platform strategy". Fix: ghost pill → Résumé (PDF); one plain availability sentence; pick one ask. → /impeccable clarify
### [P2] About has no h2; nine emphasis spans; indigo-deep fails AA at 11px
Only section without h2. Fix: add h2 in pattern; cut emphasis to 2–3; darken --indigo-deep to ~oklch(0.50 0.16 265) (clears eyebrows/chips/LIVE in one token); #1a7d55 → #177050. → /impeccable typeset, /impeccable colorize
### [P2] Contact spends strong slots on weak actions
Secondary CTA "Back to top"; 4 socials between CTAs and form (7 choices); NewsBreef inert div still lifts on hover. Fix: Book 20 min / Download résumé; socials to footer; NewsBreef no lift + Coming soon; response-time line. → /impeccable clarify

## Persona Red Flags
Jordan: no résumé; rotating positioning; availability buried; About active on hero; NewsBreef dead hover; LLC footer as sign-off.
Casey: inputs fontSize 14 → iOS zoom (need ≥16); hero H1 3 lines at 390, metric rail half off-screen; mobile menu no outside-tap/scroll lock; lone Warpcast pill; sticky hover-lift on touch.
Sam: 6 invisible side-nav stops; ticker reads 22 items; rotator mutates text every 55ms; About no heading; Projects aria-label replaces card accessible name; region no aria-labelledby; no footer landmark; scroll-padding-top unset; /Privacy main lacks id=main (skip link dead).

## Minor Observations
- Footer.tsx orphan, slate palette, different GitHub handle
- projects.emoji / education.honors unrendered
- "METRIC METRIC METRIC" label noise
- 4th metric weaker; swap or drop to 3
- Two display clamp scales for the two gradient lines
- ::selection color #fff (only pure white)
- No openGraph.images
- onMouseEnter hover bypasses focus-visible parity
- Experience bullets ~136ch/line
- Hero eyebrow 43 chars uppercase
- /Privacy account/subscription copy confusing from portfolio footer

## Questions to Consider
1. Delete particles/grid/rotator/count-ups/marquee — what's lost, what do paper sections gain?
2. Who is the one person this is for and the one thing they should do?
3. Why is the most differentiated fact (Duke JD → WilmerHale → ConsenSys spin-out → kindergartener game) in paragraph three while the H1 leads with the generic claim?
