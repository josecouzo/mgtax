---
name: MG Tax Maker LLC
description: Bilingual tax and financial services in Louisville, KY. A blue-hour night world with frosted glass and one gold voice.
colors:
  canvas: "#0c111d"
  canvas-deep: "#080b14"
  graphite: "#131a2a"
  obsidian: "#1b2337"
  ivory: "#ededf3"
  ash: "#b9bdcc"
  muted: "#8f95aa"
  gold: "#b2905d"
  gold-hi: "#c9a874"
  gold-ink: "#dcc296"
  brand-navy: "#071d38"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.6rem + 4.3vw, 4.75rem)"
    fontWeight: 470
    lineHeight: 1.04
    letterSpacing: "-0.018em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.5rem + 1.2vw, 2.625rem)"
    fontWeight: 480
    lineHeight: 1.12
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo Variable, Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.25rem + 0.6vw, 1.75rem)"
    fontWeight: 470
    lineHeight: 1.15
    fontVariation: "'wdth' 112"
  body:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'cv11', 'ss01'"
  body-lg:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.08rem + 0.25vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.3
rounded:
  control: "999px"
  card: "14px"
  panel: "22px"
  console: "28px"
  inner-choice: "14px"
spacing:
  gutter: "clamp(1rem, 0.5rem + 2.5vw, 2.5rem)"
  section: "clamp(4.5rem, 3rem + 6vw, 8.5rem)"
  card-padding: "clamp(1.5rem, 1.1rem + 1.6vw, 2.5rem)"
  max-width: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.gold-hi}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ivory}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "52px"
  button-quiet:
    backgroundColor: "{colors.obsidian}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "52px"
  card:
    backgroundColor: "{colors.graphite}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-padding}"
  chip:
    backgroundColor: "rgb(237 237 243 / 0.06)"
    textColor: "{colors.ash}"
    rounded: "{rounded.control}"
    padding: "6px 13px"
---

# Design System: MG Tax Maker LLC

## Overview

**Creative North Star: "Louisville at Blue Hour"**

The site is a night view of the city the firm serves: Louisville's skyline over the Ohio River, with warm lights in the water. Everything that floats above that scene is frosted glass. Below the hero, the photograph gives way to a calm, navy-tinted onyx ground. Faint gold and blue fields of light carry the atmosphere down the page, the way city light lingers in a night sky. The system descends from the Mercury style reference (`design/reference-mercury.md`). It keeps Mercury's monochrome discipline, graphite surfaces, pill controls and intermediate-weight wide display type. Mercury's cobalt is replaced by the brand's own gold, taken from the lion mark.

The voice is measured and premium, never loud. Hierarchy comes from scale and the wide-set display face, not from bold weights or color. Density is spacious. Sections breathe with generous vertical rhythm, and dense passages (the services index, the checklist) are followed by quiet ones (the founder, the closing view of the river).

**Key Characteristics:**
- Dark world chosen on purpose: a premium, after-hours feel, with high-contrast ivory type.
- One chromatic voice: brand gold, reserved for the action of booking.
- Glass only where something floats over light (nav on scroll, hero console, checklist, contact panel, mobile action bar).
- Wide Archivo display at weight 470–480 (`wdth` 112); Inter for everything read.
- Real imagery only: the city at night and the founder's portrait, never illustrations or stock handshakes.

## Colors

A restrained palette: neutrals tinted toward the brand navy, plus one gold voice.

### Primary
- **Lion Gold** (`gold`): the single chromatic action. Primary buttons ("book a free consultation"), checked checklist boxes, the progress bar and the process line's draw. Text on it is canvas-dark.
- **Lamplight Gold** (`gold-hi`): hover state of gold surfaces and focus rings.
- **Gilded Ink** (`gold-ink`): gold used as text or icon color on dark surfaces (icons in lists, active tab icons, the calculator result, small role labels). Meets AA on canvas.

### Neutral
- **Blue-Hour Onyx** (`canvas`): page ground. Mercury's onyx, pulled toward the brand navy.
- **Midnight** (`canvas-deep`): the footer and the process band; the deepest step.
- **Graphite** (`graphite`): cards and grouped surfaces, one step lighter than canvas.
- **Obsidian** (`obsidian`): interactive fills (quiet buttons, selected tabs, icon discs).
- **Ivory** (`ivory`): primary text and icons. Never pure white for body copy.
- **Ash** (`ash`): secondary copy, descriptions, unselected controls.
- **Fog** (`muted`): captions, counters, legal lines, column labels.
- **Brand Navy** (`brand-navy`): the logo's navy. It is used in the light-background logo variant and as the tint source for the canvas, not as a page surface.

### Named Rules
**The One Gold Voice Rule.** Gold fills only the booking action and the states that confirm progress toward it (checked boxes, progress). It is never decoration, never a section background. Keep at least 32px between two gold fills.

**The Tinted Night Rule.** Every neutral leans toward navy. A neutral gray (`#888`, `#222`) on this page is a bug.

## Typography

**Display Font:** Archivo Variable (self-hosted via @fontsource; falls back to the system sans)
**Body Font:** Inter Variable (self-hosted via @fontsource)

**Character:** A wide-set grotesk at an in-between weight gives the headings an architectural calm, like Mercury's Söhne Breit. Inter keeps long Spanish sentences easy to read on a phone.

### Hierarchy
- **Display** (470, `clamp(2.5rem → 4.75rem)`, 1.04): the hero headline only. Its second line is set in Ash for a two-tone read.
- **Headline** (480, `clamp(1.75rem → 2.625rem)`, 1.12): section titles.
- **Title** (470, `clamp(1.375rem → 1.75rem)`, 1.15): service names, panel titles, FAQ questions (at body-lg size).
- **Body** (400, ~16–17px, 1.55): all reading text, 52–62ch measure.
- **Body Large** (400, ~18–21px, 1.5): section subtitles and the hero subcopy.
- **Label** (500, 13px): control labels, chips, small meta lines. Footer column heads use 600 uppercase with 0.08em tracking.

### Named Rules
**The Never-Bold Rule.** Display and headings stay at 460–480. Emphasis comes from size and the wide axis, never weight 700.

**The No-Eyebrow Rule.** No kicker labels above headings; the heading speaks for itself.

## Layout

Content sits in a 1200px max column with a fluid gutter (`clamp(1rem → 2.5rem)`). The base section rhythm is `clamp(4.5rem → 8.5rem)` top and bottom.

The rhythm varies on purpose. A section that continues the previous thought takes the `tight` modifier: no top padding, and the previous section's bottom shrinks to 0.8×, roughly 110px at desktop. Tight sections are Audiences, Process, Community and FAQ. The full gap is kept only before major turns: Founder, Booking, Calculator and the closing Contact view.

The home page alternates density:
1. Full-bleed photographic hero.
2. Editorial service index (full-width rows, not cards).
3. Two-panel audience split.
4. Five-node process line.
5. Portrait and copy split.
6. Tabbed booking with checklist.
7. Calculator split.
8. Community bento.
9. Sticky-title FAQ.
10. Full-bleed closing view of the river.

Breakpoints:
- **1080px**: inline nav links collapse.
- **960px**: the process line turns vertical.
- **900/860px**: two-column splits stack.
- **760px**: mobile mode. Menu sheet, icon-only WhatsApp in the hero, two-by-two segmented controls, and the floating action bar.

The mobile first viewport always shows the headline, the service picker and the booking button without scrolling.

## Elevation & Depth

Depth comes from three things: tonal steps (canvas → graphite → obsidian), frosted glass over light, and ambient light fields. There is no shadow vocabulary for resting cards; they sit flat, as in Mercury. Glass surfaces carry the only shadows: a 1px inner top highlight and one soft drop (`0 24px 60px -24px rgb(0 0 0 / .6)`).

Ambient light fields are large blurred radial glows (gold `rgb(178 144 93 / .13)`, blue `rgb(52 78 140 / .2)`) behind selected sections. Their top and bottom edges fade out with a mask, so they never cut off at a section boundary.

### Named Rules
**The Glass Has a Reason Rule.** Glass (`blur(22px) saturate(150%)` over `rgb(16 22 37 / .58)`) is used only on an element that floats over something luminous: the photo, a light field, or scrolled content. Glass on a flat, empty background is decoration and is not allowed. Without `backdrop-filter` support, glass falls back to a solid 78% fill.

## Shapes

- **Pills** (999px): every interactive control (buttons, segmented options, tabs, chips, the nav bar itself).
- **Cards** (14px): resting surfaces.
- **Panels** (22–28px): larger glass panels such as the console, checklist and contact panel. On mobile, inner segmented choices tighten to 14–18px.
- **Circles**: icon discs, step nodes and the social buttons.
- **Hairlines**: lists are separated by 1px dividers at 10% ivory, never boxed.

## Components

### Buttons
- **Shape:** full pill (999px), 52–56px tall (42px small variant).
- **Primary:** Lion Gold fill, canvas text, weight 600. Hover moves to Lamplight Gold; the trailing arrow nudges 3px right; press scales to 0.97.
- **Ghost:** transparent with a 50% ivory hairline. Hover brightens the border to full ivory over a 6% wash.
- **Quiet:** Obsidian fill. Used for secondary actions beside a primary (leave a review, payment methods).

### Segmented control (hero console, calculator)
- **Style:** a 45%-black recessed track holding pill options. The selected option rises with a 13% ivory fill, an inner top highlight and a small drop. Its icon turns Gilded Ink.
- **Mobile:** four options reflow two by two; three options stack at ≤420px.

### Cards / Containers
- **Corner Style:** 14px.
- **Background:** Graphite. Hover on linked cards steps to Obsidian.
- **Shadow Strategy:** none (see Elevation).
- **Internal Padding:** `clamp(1.5rem → 2.5rem)`.

### Navigation
A floating pill (64px tall). It is transparent over the hero and becomes glass after 24px of scroll. The lockup logo sits left, centered links on desktop, and on the right the globe language switch, Portal and a small gold "Book". Under 760px it becomes logo + Book + a menu button that opens a full-screen frosted sheet with large display-type links.

### Documents checklist (signature)
A glass panel listing the documents to bring. Each checkbox fills gold and draws its check stroke in 0.4s. A gold progress bar and an "n of t ready" counter track completion, and a reset pill appears once anything is checked. Progress persists per service in localStorage. It is reused on the home booking tabs (short list) and on each service page (full list).

### Services index
Full-width rows separated by hairlines: an icon disc, the service name in Title type, the description, three chips and a circular arrow. On hover the row washes to translucent graphite, the arrow disc fills gold and rotates 45°.

## Do's and Don'ts

### Do:
- **Do** keep gold for the booking action and its confirmations only.
- **Do** use the real city photo or the founder portrait when imagery is needed; color-grade any new night photo toward navy (pull magenta skies to blue, keep warm lights).
- **Do** draw icons from Lucide (UI, 1.75 stroke) or Simple Icons (brands). Never emoji.
- **Do** test every change at 390, 768, 1024 and 1440px. The hero's booking button must stay in the mobile first viewport.
- **Do** theme browser surfaces: gold selection, gold focus ring, dark scrollbar.

### Don't:
- **Don't** add a second accent color or use cobalt from the Mercury reference.
- **Don't** set headings in bold (700+) or add eyebrow labels above them.
- **Don't** put glass on a flat background, or drop shadows on resting cards.
- **Don't** build sections as rows of identical icon + heading + text cards.
- **Don't** use pure white (`#fff`) for body text, or neutral grays without navy tint.
- **Don't** show testimonials, ratings, client counts or credentials that are not confirmed by the client.
