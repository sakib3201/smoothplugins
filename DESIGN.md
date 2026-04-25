---
name: Smooth Plugins
description: Performance-first WordPress plugins powered by Rust and WebAssembly.
colors:
  ink: "#111111"
  smoke: "#F4F4F6"
  surface: "#FFFFFF"
  ash: "#666666"
  void: "#0A0A0B"
  obsidian: "#1A1A1D"
  mist-ash: "#A0A0A0"
  signal-violet: "#9D8DF1"
  warm-amber: "#FFC062"
  data-mist: "#AEE2FF"
  soft-rose: "#FFB8D2"
  rust-flare: "#E76F51"
  status-green: "#4ADE80"
typography:
  display:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(3rem, 2.25rem + 3.75vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 2rem + 2.5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.7rem + 1.5vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "0"
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0.025em"
  mono:
    fontFamily: "'SF Mono', Monaco, 'Cascadia Code', Consolas, monospace"
    fontSize: "0.9em"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
rounded:
  pill: "999px"
  lg: "32px"
  md: "24px"
  sm: "10px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "60px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 30px"
  nav-pill:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "6px"
  nav-item:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  nav-item-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  card-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-signal-violet:
    backgroundColor: "{colors.signal-violet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-warm-amber:
    backgroundColor: "{colors.warm-amber}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-data-mist:
    backgroundColor: "{colors.data-mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  tech-badge:
    backgroundColor: "{colors.smoke}"
    textColor: "{colors.ash}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
---

# Design System: Smooth Plugins

## 1. Overview: The Precision Engine

**Creative North Star: "The Precision Engine"**

A perfectly tuned machine with no excess. Smooth Plugins communicates through restraint: neutral surfaces, a tightly controlled typographic hierarchy, and accent colors deployed singly — never in chorus. Where other performance-tool marketing sites pile on simultaneous saturated accents and gradient heroes, this system speaks in one voice at a time. Visual weight comes from typography: scale, weight, and spacing. Color marks meaning, not territory.

The palette is near-neutral by default. Three named accents (Signal Violet, Warm Amber, Data Mist) take turns by context rather than appearing together. Animation confirms state; it does not perform. Shadows are earned by interaction or CTA priority. Monospace fragments — compile targets, architecture labels — signal technical credibility without decoration.

This system explicitly rejects: a SaaS landing page with hero metrics, a multi-color card grid where lavender, peach, blue, and pink compete as siblings, glassmorphism used decoratively, gradient text, and consumer-warm e-commerce aesthetics. It is designed for developers and store owners who use Linear and Vercel daily and notice when a tool is sloppy.

**Key Characteristics:**
- Flat at rest; depth is earned through hover state or CTA priority
- One accent color per screen section — Signal Violet, Warm Amber, and Data Mist rotate, never stack
- Typographic hierarchy carries the visual weight; color amplifies, it does not substitute
- Monospace fragments as technical credibility signals, not decoration
- State-confirmative motion only; no entrance choreography on repeat views

## 2. Colors: The Single Voice Palette

A near-neutral base with three named accents that rotate by context. The palette reads as technical confidence, not exuberance. Dark mode is a full inversion of the neutral base with the same accent colors lightened for contrast.

### Primary
- **Ink** (`#111111`): The anchor. Primary text, button backgrounds, active nav states, dark card variant. Near-black with a faint cool undertone. In dark mode, roles invert: the page background is Void and Ink becomes the text-on-dark surface color.
- **Signal Violet** (`#9D8DF1`, dark mode `#B8A9FF`): Brand identity color. Reserved for identity-forward moments — focus rings on all interactive elements, lavender card sections, and the logo dot hover state. Never the dominant accent on a screen where Warm Amber is already present.

### Secondary
- **Warm Amber** (`#FFC062`, dark mode `#FFD699`): The flagship product color. Smooth Search hero card, product feature sections, the primary commercial surface. Warm without being consumer-casual. One section at a time.

### Tertiary
- **Data Mist** (`#AEE2FF`, dark mode `#C4E8FF`): Technical and feature contexts. Compatibility cards, feature callouts. The coolest of the three — conveys precision over personality.
- **Soft Rose** (`#FFB8D2`): Rarely deployed. Reserved for future product differentiation or campaigns. Not for general UI use.
- **Rust Flare** (`#E76F51`): Thermal energy signal. Used in 3D decorative objects (the WASM orb gradient). Not for text, not for standalone card backgrounds.
- **Status Green** (`#4ADE80`): System health indicator only. "All Systems Operational" status dot, success states.

### Neutral
- **Smoke** (`#F4F4F6`): Light mode page background. Also hover state on neutral interactive surfaces and tech badge background.
- **Surface** (`#FFFFFF`): Light mode card and nav backgrounds.
- **Ash** (`#666666`): Secondary text in light mode. Captions, descriptions, kicker labels on white and smoke surfaces.
- **Void** (`#0A0A0B`): Dark mode page background. Near-black with a near-imperceptible cool undertone.
- **Obsidian** (`#1A1A1D`): Dark mode card and nav surface.
- **Mist Ash** (`#A0A0A0`): Dark mode secondary text. Lighter than Ash to maintain 4.5:1 contrast on dark surfaces.

### Named Rules
**The One Voice Rule.** One accent color per screen section. Signal Violet, Warm Amber, and Data Mist take turns — they never appear at full saturation in the same section. When Warm Amber anchors the hero, the next section should be neutral before another accent appears.

**The Reserve Rule.** Soft Rose and Rust Flare are not general-purpose accent colors. Rust Flare belongs to 3D decorative objects. Soft Rose is held for future product differentiation. Neither may be used as a card background or button color in standard layouts.

## 3. Typography: Three Voices, One System

**Hero Font:** Manrope (weight 800, reserved for the single largest statement on any page)
**Display / Heading Font:** Space Grotesk (weights 600–700, all heading levels and card titles)
**Body / Label Font:** Inter (weights 400–600, body copy, labels, kickers, all UI text)
**Mono Font:** SF Mono / Monaco / Cascadia Code / Consolas (technical badges, code fragments, compile targets)

**Character:** Manrope opens with maximum authority at the top of the page and steps back entirely — it appears once per page, in the hero. Space Grotesk carries structure through sections with geometric precision and tight tracking. Inter is neutral and trustworthy at reading sizes. Monospace accents punctuate technical claims; their plainness is their meaning.

### Hierarchy
- **Display** (800 weight, clamp 3rem → 5.5rem, leading 1.08, tracking -0.02em): The single hero statement per page. Manrope exclusively. Homepage `h1` only.
- **Headline** (700 weight, clamp 2.5rem → 4rem, leading 1.1, tracking -0.02em): Section anchors and primary page titles. Space Grotesk.
- **Title** (600–700 weight, clamp 2rem → 3rem, leading 1.1, tracking -0.02em): Card primary titles. Space Grotesk.
- **Body** (400 weight, clamp 1rem → 1.125rem, leading 1.75): Prose, card descriptions, feature text. Inter. Hard cap at 65–75ch line length on flowing text.
- **Label** (600 weight, 12–14px clamp, tracking 0.025em, uppercase): Kickers above headings, section labels, tech badge text, footer section headers. Inter. Always rendered at 70% opacity when used as a kicker above a heading — it orients, it does not compete.

### Named Rules
**The Kicker Rule.** All section labels above a heading are Inter, uppercase, tracking 0.025em, opacity 0.7. A kicker that matches the visual weight of the title beneath it has failed its job.

**The Mono Signal Rule.** Monospace text is 0.9em relative size, normal weight, not italic. Its plainness is the signal. Never use monospace for decoration — only for technical artifacts: compile targets, version strings, architecture labels.

**The One Hero Rule.** Manrope at display weight appears once per page, in the top-of-page hero. Repeating it in subheadings dilutes the authority it was designed to project.

## 4. Elevation

The system is flat at rest. Content surfaces — cards, containers, sections — sit flush with the background with no border and no shadow until they earn one.

Two categories of elevation exist: state-earned (hover, focus) and priority-earned (CTAs, structural navigation).

**State-earned:** Cards lift on hover (`transform: translateY(-4px) scale(1.005)`, `box-shadow: 0 20px 40px rgba(0,0,0,0.08)`). The transition runs at 0.6s on the smooth ease — deliberate, not snappy.

**Priority-earned:** Primary CTAs carry a resting shadow (`0 4px 15px rgba(0,0,0,0.08)`) that deepens on hover (`0 8px 25px rgba(0,0,0,0.15)`). The nav pill floats with an ambient shadow (`0 10px 30px rgba(0,0,0,0.08)`) to distinguish it from any canvas it overlays, including the Three.js background.

### Shadow Vocabulary
- **Ambient Float** (`0 10px 30px rgba(0,0,0,0.08)`): Nav pill and footer container. Structural — signals the navigation layer above page content.
- **CTA Rest** (`0 4px 15px rgba(0,0,0,0.08)`): Primary buttons at rest. Signals affordance before interaction.
- **CTA Hover** (`0 8px 25px rgba(0,0,0,0.15)`): Primary buttons on hover. Amplifies the rest state.
- **Card Hover** (`0 20px 40px rgba(0,0,0,0.08)`): Cards on pointer hover. State response only.

### Named Rules
**The Earned Elevation Rule.** If a surface has a shadow at rest, it must be a primary CTA or a structural navigation element. Content cards and containers are flat at rest. A resting shadow on a content card signals affordance that doesn't exist — don't set expectations the interaction cannot fulfill.

## 5. Components

Quiet and precise. Pill shapes for all interactive controls. Generous color-block cards. No card borders, no nested cards.

### Buttons
All buttons are pill-shaped (radius 999px). No square or rounded-rectangle buttons.

- **Primary CTA:** Ink (`#111111`) background, Surface (`#FFFFFF`) text, 16px 32px padding. Carries CTA Rest shadow at rest — the only button with a resting shadow. Hover: `scale(1.05)` + shadow deepens to CTA Hover. Active: `scale(1.02) translateY(1px)`. Typically contains an arrow-right icon (20px SVG) that translates 4px rightward on hover. Focus: 2px solid Signal Violet, offset 4px.
- **Secondary / Ghost:** Transparent background, Ink text, 1.5px solid border at `rgba(0,0,0,0.15)`, 14px 30px padding. No shadow at rest or hover. Hover: border at `rgba(0,0,0,0.4)`, background tints to `rgba(0,0,0,0.04)`.
- **Focus ring (universal):** 2px solid Signal Violet (`#9D8DF1`), offset 4px. Applied to all focusable elements via `:focus-visible`.

### Cards
Flat color-block containers. No card outline borders. No nested cards.

- **Shape:** 32px radius across all variants. Internal padding: 40px desktop, 30px tablet, 24px mobile.
- **Default:** Surface (`#FFFFFF`) background, Ink text.
- **Dark:** Ink (`#111111`) background, Surface text.
- **Signal Violet:** `#9D8DF1` background, Ink text. Dark mode: `#1f1830` background, `#B8A9FF` text.
- **Warm Amber:** `#FFC062` background, Ink text. Dark mode: `#3d2815` background, `#FFD699` text.
- **Data Mist:** `#AEE2FF` background, Ink text. Dark mode: `#0f2a38` background, `#C4E8FF` text.
- **Entrance animation:** Cards fade in (opacity 0 → 1) and slide up (translateY 20px → 0) via IntersectionObserver at 0.1 threshold. One-shot per page load. Skipped entirely when `prefers-reduced-motion: reduce` is set.
- **Hover state:** `translateY(-4px) scale(1.005)` + Card Hover shadow. Transition: 0.6s `cubic-bezier(0.2, 0.8, 0.2, 1)`.

### Navigation
A floating pill island that separates the navigation layer from page content.

- **Container:** Surface background, Ambient Float shadow, 999px radius, 6px internal padding. No border.
- **Item default:** Transparent background, Ink text, 500 weight, 14px, 12px 24px padding, 999px radius.
- **Item hover:** Smoke (`#F4F4F6`) background.
- **Item active:** Ink background, Surface text.
- **Logo:** Space Grotesk 700, `--text-xl`, tracking -0.02em. Accompanied by a 12px circle dot that transitions to Signal Violet with a glow on logo hover.
- **Mobile:** Items slide in from the right as a full-height panel (max 320px wide) with a `backdrop-filter: blur(4px)` overlay behind. Items stagger-reveal on open. Tooltips hidden on mobile.

### Tech Badges
Monospace pill tags for technical artifacts only.

- **Style:** Smoke (`#F4F4F6`) background, Ash (`#666666`) text, 1px solid `rgba(0,0,0,0.1)` border, 999px radius, 6px 12px padding.
- **Font:** 0.75rem monospace, 600 weight, tracking 0.025em.
- **Use:** Architecture labels, technology stack callouts, compile targets (`TARGET: WASM32-UNKNOWN`, `Rust`, `WASM`). Not for general category labels or UI chips.

### Tooltips
Dark frosted panels below trigger elements.

- **Light mode:** `rgba(17,17,17,0.95)` background, white text, `backdrop-filter: blur(12px)`, 10px radius, 1px solid `rgba(255,255,255,0.1)` border.
- **Dark mode:** Dark surface gradient background with Signal Violet glow border and glow shadow.
- **Reveal:** 0.15s delay on hover-enter, 0.3s opacity + translateY(-8px → 0) transition. Hidden on mobile — `display: none` on pointer-less viewports.
- **Arrow:** 6px triangle pointing up from the tooltip toward the trigger.

## 6. Do's and Don'ts

### Do:
- **Do** use one accent color per screen section. When Warm Amber anchors the hero card, the next section should be neutral before another accent appears.
- **Do** render all kickers as Inter, uppercase, tracking 0.025em, opacity 0.7. They orient the reader; they must not compete with the heading.
- **Do** use monospace text for technical artifacts only: compile targets, version strings, architecture labels. Plainness is the signal.
- **Do** keep all content cards flat at rest. Elevation appears on hover, not at rest.
- **Do** apply Signal Violet (`#9D8DF1`) as the universal focus ring (2px solid, offset 4px) on every interactive element.
- **Do** use `cubic-bezier(0.2, 0.8, 0.2, 1)` at 0.6s for card transitions, 0.3s for quick UI interactions. Consistent, controlled, not bouncy.
- **Do** check `prefers-reduced-motion`: all animations must disable or instant-cut when this is set.
- **Do** maintain WCAG AA contrast minimums: 4.5:1 for body text, 3:1 for large text and UI components.
- **Do** use dark mode color variants for accent card backgrounds — the light mode accent colors fail contrast on dark canvas.

### Don't:
- **Don't** stack multiple accent colors in the same screen section. A card row with a lavender card, a peach card, a blue card, and a pink card in sequence is the primary anti-pattern this system is built to prevent. Each accent dilutes every other.
- **Don't** use gradient text (`background-clip: text` combined with a gradient). The existing `.hero-title-accent` gradient word is a legacy exception and should be replaced with a solid color on any redesign of the hero.
- **Don't** use a multi-color gradient stripe as a decorative border. The existing footer top border — a gradient through all five accents — violates the One Voice Rule and should be replaced with a single accent or removed.
- **Don't** use glassmorphism decoratively. Backdrop blur is permitted functionally in tooltips (contrast against unknown backgrounds) and the mobile nav overlay (scrim). Nowhere else.
- **Don't** use the hero-metric template: large vanity stat + small label + gradient accent graphic. Credible metrics are fine; decorative stat displays built for visual impact are not.
- **Don't** use `border-left` greater than 1px as a colored accent stripe on cards, callouts, or list items.
- **Don't** add resting shadows to content cards. The Earned Elevation Rule is strict: resting shadows on non-CTA surfaces imply clickability that doesn't exist.
- **Don't** add Soft Rose or Rust Flare as card backgrounds or standalone button colors. They are reserved for 3D decorative objects and future product differentiation respectively.
- **Don't** nest cards inside cards.
- **Don't** use bounce or elastic easing. Ease-out only (`cubic-bezier(0.2, 0.8, 0.2, 1)` or steeper). The precision engine does not wobble.
