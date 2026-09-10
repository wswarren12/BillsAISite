---
target: homepage (src/app/page.tsx)
total_score: 29
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 1
timestamp: 2026-09-09T20-07-26Z
slug: src-app-page-tsx
---
# Critique: billsai.club — homepage (src/app/page.tsx)

Method: dual-agent (A: design review a06c8cf6 · B: detector + browser evidence af4cbb0a). Both ran isolated and parallel. Runtime detector: exit 2, 16 advisory hits. Live inspection at 1440x900 and 390x844 on the running dev server.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Scrollspy tabs + "Current step" badge work; send-button status is aria-live-only with no visual spinner; mobile menu doesn't lock background scroll. |
| 2 | Match System / Real World | 4 | Instruction-book vocabulary maps to a universally known object; zero jargon in the chrome. |
| 3 | User Control and Freedom | 3 | Esc closes the mobile menu and accordions toggle freely, but no outside-tap dismiss and no scroll lock on the menu. |
| 4 | Consistency and Standards | 3 | Rigorous token/.box/.btn system; broken by "Show 1 sub-steps" plurality bug and an H1->H3 heading skip. |
| 5 | Error Prevention | 3 | Honeypot + inline validation + noValidate; reasonable email regex; disables on submit. |
| 6 | Recognition Rather Than Recall | 4 | Everything needed is on screen; sticky nav names sections; nothing to memorize. |
| 7 | Flexibility and Efficiency | n/a | Single-page Persuade surface; power-user accelerators don't apply. |
| 8 | Aesthetic and Minimalist Design | 4 | One typeface, one container, one illustration system, flat paper, zero ornamental noise. |
| 9 | Error Recovery | 2 | On invalid submit, focus is NOT moved to the first error and field errors lack role=alert/aria-live. |
| 10 | Help and Documentation | n/a | Not applicable to a one-screen portfolio. |
| Total | | 29/32 | Excellent (91%) |

## Design Specificity Verdict

Strongly product-specific; the concept earns itself. The "brick build-instruction book" is load-bearing metaphor, not a skin. The six-brick model on a base plate (Cover.tsx:86) turns Bill's seven-year arc into a single object grasped before reading a word. Step diagrams show prior roles as ghosted/dashed bricks and the new role as a solid colored piece dropping in along a dashed arrow onto a highlighted seat (Brick.tsx:145-172). Clears the legibility bar for a non-technical recruiter; no decode tax on the critical path to the email. The retired "Studio Terminal" world (particles, glows, rotator, count-ups, marquee, indigo/Bricolage) is fully gone; no residue survives.

Deterministic scan: 16 advisory hits, all design-system drift, no functional slop — 15 off-ramp font-size literals and 1 hardcoded color (#ff6f6a, decorative aria-hidden stud highlight, Header.tsx:43). No false positives of the regex-on-a-word kind. Overlay (injection succeeded): flagged em-dash overuse (16, verified), the skipped heading (real), a gradient-text hit NOT reproducible in computed styles (false positive), and 7 shape-assembled-illustration SVGs (the brick models — informational).

## Overall Impression

A genuinely excellent, out-of-distribution portfolio — a metaphor that adds comprehension instead of costing it, executed with ruthless system discipline. The biggest single opportunity is not aesthetic: the one conversion path (the contact form) is quietly broken for keyboard/screen-reader users. Fix that plus a handful of sub-floor text sizes and tap targets and it's ship-ready.

## What's Working

1. Concept-to-execution integrity — ghosted-prior/solid-new brick system parses instantly for a non-technical reader.
2. Accessibility fundamentals right by construction — 16px inputs (no iOS zoom), real skip link to main#main, global 3px focus-visible ring, prefers-reduced-motion honored, decorative bricks aria-hidden, strong contrast where it counts.
3. Zero motion debt — no continuously-animating elements; the old un-pausable-motion WCAG problem is resolved.

## Priority Issues

### [P1] Contact form errors don't move focus or announce to assistive tech
validate() (Contact.tsx:24-31) sets error state but never focuses the first invalid field; error <p>s (Contact.tsx:108,113,119) have no role=alert/aria-live. Verified live: empty submit left focus put, errors appeared silently. Fails WCAG 3.3.1 and breaks the single conversion path for Sam. Fix: focus first invalid input after setErrors; add role=alert / aria-live=assertive; optional summary line. -> /impeccable harden

### [P2] Nine instances of 11px text below the 12px legibility floor
B measured 11px on the finished-model company legend (Cover.tsx:92) and Steps labels/dimension tags (Steps.tsx:51,72). The legend is also desktop-only. Fix: raise 11px labels to >=12px; reconcile 15 off-ramp sizes to the type ramp. -> /impeccable typeset

### [P2] Sub-44px tap targets on social and footer links
At 390px the four social links are 36px tall and footer Privacy/Terms links only 20px tall — below the 44px floor for one-handed mobile (Casey). Fix: pad to >=44px height. -> /impeccable layout

### [P2] Heading outline skips H1->H3 and all five sections are unnamed landmarks
Outline goes H1 -> H3 role cards, with the only H2 far down in Contact; five <section>s carry no aria-label/aria-labelledby. Fix: add section-head H2 to Steps/Sets/Extras; aria-labelledby each section to its heading. -> /impeccable harden

### [P2] The one ask is doubled and competes with ~7 targets in the first viewport
Email CTA appears as both the Cover button (Cover.tsx:33) and header "Email me" (Header.tsx:74), alongside a 5-item nav and the resume button — the only cognitive-load failure. Fix: demote header "Email me" or reveal after Cover scrolls away; keep resume secondary. -> /impeccable distill

## Persona Red Flags

- Jordan (non-technical recruiter): brick-color->company legend invites an optional decode task; "vibe-coded into existence" (Sets.tsx:51) is insider phrasing; Sets side-projects may read as hobbies and muddy seniority.
- Casey (distracted mobile user): mobile menu no scroll lock / no outside-tap dismiss; silent form errors; 36px social targets; six repetitive step cards before the Contact payoff.
- Sam (accessibility-dependent): the P1 form-error announcement is the one real blocker; otherwise well served.

## Minor Observations
- "Show 1 sub-steps" plurality bug on Step 01 (Steps.tsx:108).
- 16 em-dashes in body copy — slightly overused.
- Longest body line ~83 CPL (Steps bullets at 1440px) — marginally over comfort range.
- WilmerHale (Step 01) is the thinnest, least-visual first card; lawyer->PM angle presented as weakest piece.
- #ff6f6a hardcoded on brand stud dots — pull into a token.
- NewsBreef card non-interactive but shows "Coming soon" with no affordance — confirm intentional.
- Latent palette risk: brick-deep on yellow = 3.74:1 — keep error text off yellow.

## Questions to Consider
1. If a recruiter reads only the Cover, could the inventory metrics become the one sentence, fusing proof and pitch?
2. Should the six career steps be operable (click a brick to reveal a role) rather than a scroll-marathon?
3. The site refuses a photo — where does the person live? Is the kindergartener-reading-game detail buried too deep?
