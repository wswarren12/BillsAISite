---
name: Bill Warren — billsai.club
description: A career as a brick build-instruction book — sky paper, 2px keylines, isometric bricks, Rubik at 900.
colors:
  sky: "#a9dbff"
  ink: "#111111"
  ink-2: "#2a2f36"
  brick: "#e53935"
  brick-deep: "#c62828"
  brick-pressed: "#b3231f"
  yellow: "#ffcd00"
  blue: "#147bd1"
  blue-deep: "#0d5fa3"
  green: "#2e9e5b"
  plate: "#d9d9d9"
  slate: "#3a3f4a"
  paper: "#ffffff"
typography:
  display:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "clamp(56px, 10.5vw, 164px)"
    fontWeight: 900
    lineHeight: 0.85
    letterSpacing: "-0.04em"
  step-numeral:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "clamp(72px, 10vw, 140px)"
    fontWeight: 900
    lineHeight: 0.85
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "clamp(40px, 5vw, 64px)"
    fontWeight: 900
    lineHeight: 0.85
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "clamp(24px, 2.5vw, 32px)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  subtitle:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "clamp(15px, 1.5vw, 20px)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  lead:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "clamp(18px, 1.6vw, 21px)"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "clamp(14px, 1.2vw, 16px)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  metric:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "clamp(22px, 2vw, 28px)"
    fontWeight: 900
    lineHeight: 0.85
    letterSpacing: "-0.04em"
  label:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.06em"
  button:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  sm: "4px"
  md: "6px"
  full: "9999px"
spacing:
  2xs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  stud: "24px"
  lg: "32px"
  xl: "40px"
  section: "48px"
  section-lg: "80px"
components:
  button-primary:
    backgroundColor: "{colors.brick-deep}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.brick-pressed}"
    textColor: "{colors.paper}"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "56px"
  button-blue:
    backgroundColor: "{colors.blue-deep}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "56px"
  button-yellow:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "56px"
  nav-tab:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    padding: "0 16px"
    height: "56px"
  nav-tab-active:
    backgroundColor: "{colors.blue-deep}"
    textColor: "{colors.paper}"
  box:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "24px"
  box-sky:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "24px"
  box-yellow:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "24px"
  chip-metric:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "6px 12px"
  tag-status-live:
    backgroundColor: "{colors.green}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "4px 10px"
  tag-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  input-error:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.brick-deep}"
---

# Design System: Bill Warren — billsai.club

## Overview

**Creative North Star: "The Build Instructions"**

The site is a brick build-instruction book. A career is one model; six numbered steps each add a piece to it, and the reader follows them in order to the current step and then emails the builder. Everything on the page is drawn the way an instruction book draws: flat sky-blue paper ruled by a stud grid, black keyline boxes for every panel, oversized step numerals, a 1:1 call-out of the piece being added, a dashed landing zone and a blue arrow showing where it goes, and a parts inventory pinned to the cover. The isometric bricks are the only illustration system; there is no photography and no decorative imagery.

The mood is warm, precise, confident, and playful-but-executive. The voice balances direct-warm-wry ("Things I've vibe-coded into existence", "Build complete.") with crisp-executive (metrics first, outcomes stated plainly). The world is dense with boxes but never crowded: each box carries one job, the type is large and heavy, and generous 24px gutters keep the page breathing. It is a deliberate refusal of the dark dev-portfolio hero — no particles, no count-ups, no gradient text — and of crypto/web3 neon: no glowing cyan or magenta, no glass panels, no 3D coins.

The material is printed paper. Nothing floats, glows, or blurs. The only depth is the 4px hard underside on a button (which presses down when you push it) and the isometric drawing of a brick. Every container is a 2px ink keyline; every control is a block. It reads as a physical kit.

**Key Characteristics:**
- Sky-blue instruction paper with a 24px stud-grid dot pattern as the page ground
- 2px ink keyline boxes with a 6px radius as the only container; internal dividers are the same 2px ink
- Rubik as the single typeface, weight 900 for oversized numerals and display, 800/700 for headings and labels, 400–600 for rules text
- Isometric SVG bricks drawn with a 2px ink stroke; ghost pieces for what is built, red for what is being added, blue for the arrow and landing zone
- Buttons are blocks with a hard 4px ink underside that press down 2px on hover and 4px on press
- Flat paper: no blur shadows, gradients, glass, or glow anywhere
- Uppercase 12–13px tracked labels as the book's set-metadata register, at the head or foot of a box

## Colors

A printed-kit palette: one sky ground, one ink, and the five brick colors of the set, each deepened only when it must carry white text.

### Primary
- **Brick Red** (`brick`, #e53935): the piece being added right now — the current-role brick (step 06), the brand block in the header, the "190+ Ventures in the trust" inventory stud, the error-state input border. Never carries white text.
- **Brick Red Deep** (`brick-deep`, #c62828): the text-bearing red. The primary email button (`btn-brick`), the mobile-menu "Email me" row, and inline validation copy. White on this is ≈6:1.
- **Brick Red Pressed** (`brick-pressed`, #b3231f): the hover fill of the primary button only.

### Secondary
- **Control Blue** (`blue`, #147bd1): the control layer in the drawing — the pulsing arrow, the dashed landing zone (18% fill), the DAOhaus brick (step 03), the `:focus-visible` ring (3px), and the "In development" status tag. Marks and drawn controls only.
- **Control Blue Deep** (`blue-deep`, #0d5fa3): the text-bearing blue. The active nav tab fill (white text), the form submit button (`btn-blue`), and every company / tagline / degree sub-head under a title. Also legal-page links.
- **Build Yellow** (`yellow`, #ffcd00): inventory and stock. The "Pieces in this set" cover box, the "Build complete." contact box, metric chips, the "Current step" tag, the "Coming soon" tag, the Education / Board section heads, the skip link, and text selection. Always with ink text.

### Tertiary
- **Set Green** (`green`, #2e9e5b): the Opolis brick (step 04), the "$30M+ Payroll processed" stud, the "In stock" status tag, and WordCraft Mobs box art.
- **Slate Brick** (`slate`, #3a3f4a): the WilmerHale brick (step 01) — ink reads flat in isometric, so the first piece is a slate that still reads as black.
- **Plate Gray** (`plate`, #d9d9d9): the base plate every model sits on, the "Experiment" status tag, and box-art plates.

### Neutral
- **Instruction Sky** (`sky`, #a9dbff): the page ground and the diagram panel inside step and set boxes (`box-sky`). Carries the 24px stud-grid dot pattern at 22% ink.
- **Keyline Ink** (`ink`, #111111): every keyline, every heading, every numeral, button text on paper and yellow, the button underside, and the brick stroke.
- **Rules Ink** (`ink-2`, #2a2f36): rules text — descriptions, achievements, legal body copy, period metadata.
- **Paper White** (`paper`, #ffffff): the fill of every keyline box, the outline button, the Game7 brick (step 05), and text on the deep reds and blues.

### Named Rules
**The Added-Piece Rule.** Brick Red marks what is being added right now — the current piece, the primary email button, the brand block. Ghost pieces (dashed 45% ink stroke, 35% white fill) mark what is already built. Control Blue marks the control layer only: the arrow, the landing zone, the active tab, the submit button, the focus ring, and company/tagline sub-heads. Build Yellow holds inventory and metrics.

**The Deep-For-Text Rule.** When red or blue must carry white text, use the deep tint: Brick Red deepens to Brick Red Deep (#c62828) and Control Blue deepens to Control Blue Deep (#0d5fa3). The bright tints (#e53935, #147bd1) are for drawn pieces and marks only, never under white type.

## Typography

**Display Font:** Rubik (with system-ui, sans-serif)
**Body Font:** Rubik (with system-ui, sans-serif)
**Label/Mono Font:** none — Rubik at 700, tabular figures on

**Character:** One geometric face doing every job. Rubik's rounded, heavy 900 makes the step numerals read as printed block numbers on an instruction page; the same face at 400–600 with `font-feature-settings: "tnum"` sets the rules text so metrics line up. There is no second voice — weight and size carry the whole hierarchy.

### Hierarchy
- **Display** (900, clamp(56px, 10.5vw, 164px), 0.85, -0.04em): the cover title "Bill Warren" and the contact "Build complete." Set with the `.numeral` register (tabular figures).
- **Step numeral** (900, clamp(72px, 10vw, 140px), 0.85, -0.04em): the "01"–"06" in each step's diagram panel; aria-hidden, decorative to the step title.
- **Headline** (900, clamp(40px, 5vw, 64px), 0.85, -0.04em): section heads inside their intro box — "Steps 01–06", "Sets", "Also included".
- **Title** (800, 26–32px, 1.05, -0.025em): role titles in steps; 24px for set names; 20px for institution / organization names.
- **Subtitle** (600, 18–20px, Control Blue Deep): the company under a role title; 15px for a set tagline or degree.
- **Lead** (500, 18–21px, 1.4): the fixed cover sentence and section intros; max-width 36–52ch; `text-wrap: pretty`.
- **Body** (400, 14–16px, 1.6, Rules Ink): descriptions and achievements; max-width 60–62ch.
- **Metric** (900, 24–28px, 0.85, -0.04em): inventory counts ("500K+"), "1x" call-out counts, and sub-step indices ("06.1" at 15px). Always `.numeral`.
- **Label** (700, 12–13px, 0.06em, UPPERCASE): the set-metadata register — "PIECES IN THIS SET", "FINISHED MODEL", "SET", "EDUCATION", the step period, status tags. Lives at the head or foot of a box, never above a heading as a kicker.
- **Button** (700, 16px, 1): all `.btn` text; 14px for in-box secondary actions ("Show 4 sub-steps") and nav tabs.

### Named Rules
**The One Face Rule.** Rubik is the only typeface on the site — display, headings, rules text, labels, numerals and buttons all set in it. Weight does the differentiating: 900 for numerals and display, 800/700 for headings and labels, 400–600 for rules text. A second face, a monospace, or a system display face never appears.

## Layout

The page is a stack of keyline boxes on sky paper, capped at a 1320px page width (`--page-max`) with 16px gutters on mobile and 24px from `md`. Sections have 48px vertical rhythm on mobile and 80px from `md`; boxes within a section sit 24px apart. Every section opens with an intro box (headline left, lead paragraph right-aligned at `md`), then its grid.

Grids are two-column at `lg` for the cover (1.05fr / 1fr), each step (1fr / 1.1fr: sky diagram panel left, paper rules text right), and contact (1fr / 1fr); sets run 2-up from `sm` and 3-up from `lg`; extras 2-up from `md`. On mobile everything is a single column, the step's diagram panel stacks above its text with a 2px ink divider, and a compact model (s=16) appears inside the cover box so a phone visitor sees a brick in the first viewport.

The header is fixed, 56px tall, padded 12px (16px from `md`): brand box left, tab nav and red "Email me" block right at `md`+, a 56px hamburger box on mobile that opens a keyline menu of 56px rows. `scroll-padding-top` is 88px so anchored sections clear it.

Box padding follows the stud: 20px/28px (step panels, set cards), 24px/32px (intro boxes, form), 24px/40px (cover title, contact). Chips and tags use 10–12px horizontal, 4–6px vertical.

### Named Rules
**The Stud Module Rule.** The stud is 24px. The page ground is a dot grid on that module, and alignment snaps to it: 24px section padding and gutters, 24px card gaps, 48px/80px section rhythm, 56px controls aligned to the header row.

## Elevation & Depth

This is flat paper. The system uses no blur shadows, no tonal layering, no glass, and no gradients. Depth is conveyed in exactly two ways: the isometric drawing of a brick (top face at the piece's color, right face mixed 22% toward ink, left face 38% toward ink, all stroked 2px ink) and the hard 4px ink underside on a button. Boxes stack by keyline alone; a sky panel inside a paper box reads as a different sheet, not a different height.

### Shadow Vocabulary
- **Hard underside** (`box-shadow: 0 4px 0 var(--ink)`): every `.btn` at rest. Hover: `translateY(2px)` and `0 2px 0`. Active: `translateY(4px)` and `0 0 0`. 120ms ease-out. Under `prefers-reduced-motion` the underside holds at 4px with no transition.

### Named Rules
**The Hard-Underside Rule.** Buttons — and only buttons — carry a hard 4px ink underside (box-shadow: 0 4px 0 var(--ink)). Hover drops the block 2px and the underside to 2px; active drops it the full 4px to zero. Boxes, chips, tags and inputs sit flat.

**The Flat Paper Rule.** No blur shadows anywhere. Depth exists in exactly two forms: the hard 4px underside on a button and the isometric drawing of a brick. Nothing else lifts.

## Shapes

Softened-block geometry. Every container and control is a 2px solid ink keyline (`--keyline`) with a 6px radius — boxes, buttons, inputs, metric chips, status tags, the "1x" badge. Small tags (skill tags, social links, the header brand block) tighten to 4px; the stud dots in the brand block and inventory swatches are full circles; legend swatches are 2px squares. Dashed variants (`box-dashed`, ghost bricks at "4 3", landing zone at "5 4") mark what is not yet solid. Internal dividers are always the same 2px ink — a step's diagram/text split, education rows, nav tab separators, the cover's foot rule — never a hairline or a tint. Corners are never pill-shaped.

The bricks themselves are the signature silhouette: an isometric projection at cos 0.866 / sin 0.5, studs as short cylinders (radius 0.3 stud, height 0.18 stud), plates at 0.4 stud tall and bricks at 1.2.

### Named Rules
**The Keyline Rule.** Every container is a 2px solid ink keyline with a 6px radius on paper or sky. There is no other container: no borderless card, no tinted panel without a keyline, no hairline divider (internal dividers are the same 2px ink).

## Components

### Buttons
A block from the kit: a keyline box you can press.
- **Shape:** 6px radius, 2px ink keyline, 56px min-height, 0 24px padding, inline-flex with a 10px gap to a trailing drawn icon; 700 / 16px / line-height 1.
- **Primary (`btn-brick`):** Brick Red Deep fill, Paper White text; hover fill Brick Red Pressed. Used for the one ask: `bill@billsai.club` (cover, contact) and "Email me" (header).
- **Outline (`btn`):** Paper White fill, ink text. "Résumé (PDF)" with the download mark; "Show n sub-steps" accordion trigger at 48px min-height / 14px.
- **Blue (`btn-blue`):** Control Blue Deep fill, white text; the form submit, full width, centered.
- **Yellow (`btn-yellow`):** Build Yellow fill, ink text; the skip link.
- **Hover / Active:** translateY(2px) with underside 0 2px 0; translateY(4px) with underside 0 0 0; 120ms ease-out. Focus: 3px Control Blue outline, 3px offset. Disabled: 60% opacity, no transform.

### Chips
Set metadata stamped on a box.
- **Metric chip:** Build Yellow keyline box, 800 / 13px ink, 12px × 6px padding. Sits under a step description in a wrapped row with 8px gaps.
- **Status tag:** keyline box with 800 / 12px UPPERCASE 0.06em; fill by status — Set Green "In stock", Build Yellow "Coming soon" and "Current step" (with an 8px ink dot), Control Blue "In development", Plate Gray "Experiment". Ink text on all.
- **Skill / social tag:** 2px ink outline at 4px radius, 700 / 12–13px, transparent fill, 10px × 4px padding; social tags are 36px tall with an up-right arrow.

### Cards / Containers
- **Corner Style:** 6px.
- **Background:** `box` Paper White; `box-sky` Instruction Sky (the diagram panel in steps, the box-art panel in sets, the "Finished model" panel); a `box` with Build Yellow fill for inventory and the contact CTA.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 2px ink keyline; internal splits are 2px ink.
- **Internal Padding:** 20/28px (step panels, set cards), 24/32px (intro, form), 24/40px (cover, contact).
- **Header/foot labels:** UPPERCASE label register at the top-left; small `box` badges ("1x") top-right; period or piece-count at the foot.

### Inputs / Fields
- **Style:** a `box` — Paper White, 2px ink, 6px radius, 16px × 12px padding, 500 / 16px (≥16px prevents iOS zoom). Label above at 700 / 14px with 6px gap. Placeholder in the same face.
- **Focus:** the global ring — 3px Control Blue outline at 3px offset.
- **Error:** keyline turns Brick Red; message below at 600 / 13px in Brick Red Deep; `aria-invalid` and `aria-describedby` wired. Server error is a `box` with Brick Red keyline and Brick Red Deep text.

### Navigation
- **Style:** a `box` of tabs, each 700 / 14px with a `numeral` short-code at 12px / 70% opacity ("00", "01–06"), 16px horizontal padding, 56px tall, separated by 2px ink left borders. Active tab fills Control Blue Deep with white text (`aria-current`). Hidden below `md`; replaced by a 56px hamburger `box` (2.5-stroke drawn lines) that opens a stacked keyline menu of 56px rows with the same active fill and a Brick Red Deep "Email me" row at the bottom.
- **Brand block:** a `box` holding a 2×2 red brick seen top-down (Brick Red fill, four 9px stud circles, 2px ink) and "Bill Warren" at 800 / 15px.

### Isometric Brick Model (signature)
`Model` renders a set of `Piece`s as isometric SVG: top face at the piece color, right/left faces mixed 22%/38% toward ink, 2px ink stroke, round joins, studs as cylinders. A step passes `ghostIds` (prior pieces: dashed 1.5px 45% ink stroke, 35%/20%/10% white fills), `hideIds` (later pieces), and `highlightId` (the piece being added), which draws a dashed Control Blue landing zone (18% blue fill, 2px stroke, "5 4" dash) under the seat and a pulsing dashed blue arrow (`arrowPulse` 1.4s, 6px travel) above it. The highlighted piece holds invisible (`piece-wait`) until the step scrolls 35% into view, then drops in along the arrow (`dropIn` 700ms cubic-bezier(0.2, 0.9, 0.2, 1), travel = arrow length). `Callout` draws one piece alone for the 1:1 call-out box ("1x" metric + "2×2" label). Set cards hover their box art up 4px over 300ms.

### Step numeral + call-out (signature)
Each step's sky panel opens with the step numeral (900, clamp(72px, 10vw, 140px)) top-left and a `box` call-out top-right: the piece drawn alone at s=12, "1x" at 900 / 22px, and the footprint ("2×2") as an 11px UPPERCASE label. The period sits as a label at the bottom-left; the current step carries a Build Yellow "Current step" tag bottom-right.

### Accordion
Sub-steps expand with `grid-template-rows: 0fr → 1fr` over 300ms ease-out (none under reduced motion); the chevron rotates 180° in 200ms. Sub-step indices ("06.1") are `numeral` at 15px in a 44px column.

### Named Rules
**The Drawn-Arrow Rule.** Icons are stroked SVG drawn at 2.5 stroke weight with round caps and joins, inheriting currentColor — the arrow, the download mark, the menu lines. No icon fonts, no glyph characters, no filled icon sets.

## Do's and Don'ts

### Do:
- **Do** put every piece of content inside a keyline box (2px ink, 6px radius) on Paper White or Instruction Sky; divide inside it with the same 2px ink.
- **Do** give every button the hard 4px underside and the 2px/4px press on hover/active; keep min-height 56px (48px for in-box secondary actions).
- **Do** set metadata labels as UPPERCASE 12–13px weight 700 with 0.06em tracking, and place them at the head or foot of a box.
- **Do** set numerals — step numbers, metric counts, "1x" counts — in the `.numeral` register: weight 900, line-height 0.85, tracking -0.04em, tabular figures.
- **Do** use Build Yellow keyline chips for metrics and Set Green / Build Yellow / Control Blue / Plate Gray keyline tags for status, always with ink text.
- **Do** draw icons as 2.5-weight stroked SVG in currentColor, 14–18px, sitting after the label with a 10px gap.
- **Do** honor `prefers-reduced-motion`: pieces appear without dropIn, arrows stop pulsing, the accordion snaps, and buttons hold their 4px underside without transitions.
- **Do** snap padding and gaps to the 24px stud module (24px gutters and card gaps, 48/80px section rhythm).

### Don't:
- **Don't** use blur shadows, glows, glass panels, or gradients — the only depth is the button underside and the isometric brick.
- **Don't** add a second typeface, a monospace, or a system display face; Rubik at another weight is the answer.
- **Don't** put white text on bright Brick Red (#e53935) or Control Blue (#147bd1); use Brick Red Deep or Control Blue Deep.
- **Don't** use glyph characters or icon fonts for arrows and marks; draw them.
- **Don't** set an uppercase label as a kicker above a heading; labels belong to a box's head or foot.
- **Don't** use a container without a keyline — no borderless cards, no tinted panels, no hairline dividers.
- **Don't** reach for crypto/web3 neon (cyan/magenta glow), dark heroes, particles, count-up numbers, or gradient text.
- **Don't** use a radius other than 6px on boxes and buttons and 4px on tags and the brand block; corners are never pill-shaped except the stud dots.
