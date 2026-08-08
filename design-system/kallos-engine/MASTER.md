# Design System Master File — Kallos Engine (κάλλος)

> **LOGIC:** When building a specific page, first check `design-system/kallos-engine/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** kallos-engine  
**Aesthetic Identity:** Neo-Hellenic Minimalism  
**Design Dials:** Variance 6/10 (Balanced / Modern) | Motion 3/10 (Subtle) | Density 1/10 (Spacious)  

---

## 1. Philosophical & Aesthetic Vision

- **Core Concept (Kallos):** Named after the ancient Greek ideal (κάλλος) where visual beauty is inseparable from structural integrity, balance, and truth.
- **Architectural Precision:** Interfaces feel like modern marble columns or blueprint structures—flat surface planes bounded by crisp, hairline 1px structural framing. No fuzzy, organic drop shadows or heavy Material Design elevations.
- **Spatial Freedom:** Rooted in Swiss spatial discipline. High negative space, generous margins, and an uncompromising 8pt rhythm scale give every element room to breathe and command attention.
- **Modernist Technical Hybrid:** Clean, humanistic sans-serif typography for content and narrative hierarchy, juxtaposed with tactical monospace typography for controls, badges, data metrics, and interactive triggers.

---

## 2. Color Taxonomy & Hellenic Pantheon DNA (60-30-10 Rule)

Color choices enforce the **60-30-10 color distribution rule** to prevent visual chaos, grounded in Greek mythological identity DNA:

### Canvas & Backgrounds (60%) — High-Contrast Canvases
- **Erebus Dark (`#09090B`):** Primordial darkness for deep OLED focus.
- **Aether Light (`#FAFAFA`):** Primordial light for paper-like readability.
- **Parthenon Surface (`#18181B` Dark / `#FFFFFF` Light):** Flat marble planes for cards, sidebars, and modals.
- **Hairline Border (`#27272A` Dark / `#E4E4E7` Light):** Crisp 1px structural framing.

### Structural & Brand Tones (30%)
- **Dionysus Violet / Tyrian Violet (`#A855F7` Dark / `#7E22CE` Light):** Inspired by ancient regal dye. Reserved for primary brand triggers, main headers, and focal actions (≥4.5:1 WCAG compliant in both modes).
- **Poseidon Ultramarine / Aegean Ultramarine (`#3B82F6` Dark / `#1D4ED8` Light):** Inspired by the deep Aegean sea. Applied to secondary triggers, active links, and code/data tokens (≥4.5:1 WCAG compliant in both modes).

### High-Visibility Accent Pop (10%)
- **Helios Amber / Acid Amber (`#D4FF00`):** Sun God's radiant beam. **STRICTLY** reserved for micro-brutalist pill badges, active status indicators, and dark-mode focus rings. Never use as large background fills.

### Hellenic Pantheon Status & System Palette (Feedback DNA)
- **Athena Emerald (Success):** `#10B981` (Dark) / `#047857` (Light) — Goddess of Wisdom & Victory Laurel.
- **Apollo Ochre (Warning):** `#F59E0B` (Dark) / `#B45309` (Light) — God of Sun & Prophecy.
- **Hades Crimson (Error):** `#F43F5E` (Dark) / `#BE123C` (Light) — Stygian Flame / Underworld.
- **Hermes Cyan (Info / Telemetry):** `#06B6D4` (Dark) / `#0E7490` (Light) — Messenger of Telemetry & Speed.

| Role | Deity Token | Hex (Dark OLED) | Hex (Paper Light) | CSS Variable | Semantic Usage |
|------|-------------|-----------------|-------------------|--------------|----------------|
| **Canvas Base (60%)** | Erebus / Aether | `#09090B` | `#FAFAFA` | `--color-bg` | Page background, CLI canvas |
| **Surface Card** | Parthenon Surface | `#18181B` | `#FFFFFF` | `--color-surface` | Card planes, modal surfaces, sidebars |
| **Border (1px Crisp)** | Structural Frame | `#27272A` | `#E4E4E7` | `--color-border` | Hairline structural borders |
| **Text Primary** | Absolute Focus | `#FAFAFA` | `#09090B` | `--color-text-primary` | Headings, main copy (≥15:1 ratio) |
| **Text Muted** | Subtext Stone | `#A1A1AA` | `#71717A` | `--color-text-muted` | Subtitles, metadata, placeholders |
| **Primary Brand (30%)** | Dionysus Violet | `#A855F7` | `#7E22CE` | `--color-primary` | Regal Tyrian Violet — CTAs, titles |
| **Secondary Brand** | Poseidon Ultramarine | `#3B82F6` | `#1D4ED8` | `--color-secondary` | Aegean Ultramarine — Secondary triggers, links |
| **Accent Pop (10%)** | Helios Amber | `#D4FF00` | `#D4FF00` | `--color-accent` | Acid Amber — Badges, status pills, dark focus ring |
| **Focus Ring** | Helios / Dionysus | `#D4FF00` | `#7E22CE` | `--color-focus-ring` | Keyboard focus ring (≥3:1 UI compliance) |
| **Success Status** | Athena Emerald | `#10B981` | `#047857` | `--color-success` | Victory laurel green for positive states |
| **Warning Status** | Apollo Ochre | `#F59E0B` | `#B45309` | `--color-warning` | Solar amber for warnings/alerts |
| **Error Status** | Hades Crimson | `#F43F5E` | `#BE123C` | `--color-error` | Stygian red for errors & destruction |
| **Info / Data** | Hermes Cyan | `#06B6D4` | `#0E7490` | `--color-info` | Telemetry cyan for info badges |

---

## 3. Geometry, Typography & Form Language

### Tactical Corner Radii
- **`radii.none` (`0px`):** Flat containers, structural frames
- **`radii.sharp` (`2px`):** Status pills, micro badges
- **`radii.tactical` (`4px`):** Buttons, text field inputs
- **`radii.card` (`8px`):** Cards, modals (Strict maximum radius allowed)

### Micro-Brutalist Guardrails
- Hairline 1px borders (`var(--color-border)`) enforce container boundaries.
- Interactive controls feature sentence/capital case labels (`textTransform: 'none'`).
- Active focus states pop with a visible 2px outline using `var(--color-focus-ring)` and 2px offset.
- Interactive headings and links utilize high-contrast blocky 3px underlines with 4px offset.

### Modular Typography Scale (Swiss 8pt Rhythm)
- **Heading & Body Font:** `Inter` / `Google Sans` (Sans-Serif)
- **Controls, Badges, Metrics & Triggers:** `JetBrains Mono` / `Fira Code` (Monospace)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap');

:root {
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Typography Scale */
  --text-xs: 0.75rem;    /* 12px / line-height 16px — Micro badges, metrics */
  --text-sm: 0.875rem;   /* 14px / line-height 20px — Controls, triggers, inputs */
  --text-base: 1.0rem;   /* 16px / line-height 24px — Body copy */
  --text-lg: 1.25rem;    /* 20px / line-height 28px — Subtitles, section headers */
  --text-xl: 1.5rem;     /* 24px / line-height 32px — H3 Card Headings */
  --text-2xl: 2.0rem;    /* 32px / line-height 40px — H2 Page Headlines */
  --text-3xl: 2.5rem;    /* 40px / line-height 48px — H1 Hero Display */
}
```

---

## 4. Spacing, Layout & Z-Index Architecture

*Density: 1/10 — Spacious (Swiss 8pt Rhythm)*

| Token | Value | Usage |
| --- | --- | --- |
| `--space-3xs` | `2px` | Micro offsets |
| `--space-2xs` | `4px` | Tight inline gaps |
| `--space-xs` | `8px` | Standard icon gaps |
| `--space-sm` | `12px` | Tight padding |
| `--space-md` | `16px` | Standard padding |
| `--space-lg` | `24px` | Container gaps |
| `--space-xl` | `32px` | Section gaps |
| `--space-2xl` | `48px` | Section margins |
| `--space-3xl` | `64px` | Hero padding |

### Responsive Layout Breakpoints
- `--breakpoint-sm`: `640px` (Mobile landscape)
- `--breakpoint-md`: `768px` (Tablet portrait)
- `--breakpoint-lg`: `1024px` (Tablet landscape / Laptop)
- `--breakpoint-xl`: `1280px` (Standard Desktop Container Max)
- `--breakpoint-2xl`: `1536px` (Widescreen)

### Architectural Z-Index Scale
```css
:root {
  --z-deep:     -1;   /* Background grid patterns */
  --z-base:      0;   /* Default stacking context */
  --z-dropdown: 100;  /* Select popovers, context menus */
  --z-sticky:   200;  /* Sticky header / navbar */
  --z-overlay:  300;  /* Backdrop scrim */
  --z-modal:    400;  /* Modals & dialog drawers */
  --z-popover:  500;  /* Tooltips & floating badges */
  --z-toast:    600;  /* System notifications */
}
```

---

## 5. Component Specifications & Theme Token Architecture

```css
/* Root Variables & Theme Token Mapping */
:root, [data-theme="dark"] {
  --color-bg: #09090B;
  --color-surface: #18181B;
  --color-border: #27272A;
  --color-text-primary: #FAFAFA;
  --color-text-muted: #A1A1AA;
  --color-primary: #A855F7;
  --color-primary-text: #09090B;
  --color-secondary: #3B82F6;
  --color-accent: #D4FF00;
  --color-focus-ring: #D4FF00;
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #F43F5E;
  --color-info: #06B6D4;
}

[data-theme="light"] {
  --color-bg: #FAFAFA;
  --color-surface: #FFFFFF;
  --color-border: #E4E4E7;
  --color-text-primary: #09090B;
  --color-text-muted: #71717A;
  --color-primary: #7E22CE;
  --color-primary-text: #FFFFFF;
  --color-secondary: #1D4ED8;
  --color-accent: #D4FF00;
  --color-focus-ring: #7E22CE;
  --color-success: #047857;
  --color-warning: #B45309;
  --color-error: #BE123C;
  --color-info: #0E7490;
}

/* Primary Trigger (Dionysus Violet — 44px Touch Target Standard) */
.kallos-btn-primary {
  background: var(--color-primary);
  color: var(--color-primary-text);
  padding: 10px 20px;
  min-height: 44px;
  min-width: 44px;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: var(--text-sm);
  text-transform: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 150ms ease, opacity 150ms ease, background-color 150ms ease;
}

.kallos-btn-primary:hover {
  opacity: 0.92;
}

.kallos-btn-primary:active {
  transform: scale(0.98);
}

.kallos-btn-primary:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}

.kallos-btn-primary:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

/* Secondary Trigger (Poseidon Ultramarine) */
.kallos-btn-secondary {
  background: transparent;
  color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
  padding: 10px 20px;
  min-height: 44px;
  min-width: 44px;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: var(--text-sm);
  text-transform: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 150ms ease, color 150ms ease, transform 150ms ease;
}

.kallos-btn-secondary:hover {
  background: rgba(59, 130, 246, 0.08);
}

.kallos-btn-secondary:active {
  transform: scale(0.98);
}

.kallos-btn-secondary:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}

.kallos-btn-secondary:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

/* Micro-Brutalist Badge (Helios Amber Accent Pop) */
.kallos-badge {
  background: var(--color-accent);
  color: #09090B;
  padding: 2px 8px;
  border-radius: 2px;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: var(--text-xs);
  border: 1px solid #09090B;
  display: inline-block;
}

/* Flat Structural Card Plane (Parthenon Marble Plane) */
.kallos-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: var(--space-lg);
  transition: border-color 200ms ease;
}

.kallos-card:hover {
  border-color: var(--color-primary);
}

/* Input Fields & Validation States */
.kallos-input {
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 10px 14px;
  min-height: 44px;
  color: var(--color-text-primary);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  transition: border-color 150ms ease;
}

.kallos-input:hover {
  border-color: var(--color-text-muted);
}

.kallos-input:focus {
  border-color: var(--color-primary);
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 1px;
}

.kallos-input::placeholder {
  color: var(--color-text-muted);
}

.kallos-input-error {
  border-color: var(--color-error) !important;
}

.kallos-field-error {
  color: var(--color-error);
  font-size: var(--text-xs);
  font-family: var(--font-mono);
  margin-top: var(--space-2xs);
}

.kallos-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Erebus Overlay Scrim */
.kallos-scrim {
  background: rgba(9, 9, 11, 0.85);
  position: fixed;
  inset: 0;
  z-index: var(--z-overlay);
}
```

---

## 6. Subtle Motion & Accessibility (Motion 3/10 Calibration)

Motion is restrained to **Motion 3/10 (Subtle)**. Interactive transitions act like precision mechanical switches with fast $150\text{ms}$–$200\text{ms}$ durations and linear-sharp deceleration:

```css
:root {
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --ease-tactical: cubic-bezier(0.16, 1, 0.3, 1);
}

@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 7. Data Visualization Palette (Hellenic Pantheon Series)

For graphs, telemetry metrics, and analytics dashboards, chart colors strictly map to the Greek pantheon DNA:

1. **Series 1 (Dionysus Violet):** `var(--color-primary)` (`#A855F7` / `#7E22CE`)
2. **Series 2 (Poseidon Blue):** `var(--color-secondary)` (`#3B82F6` / `#1D4ED8`)
3. **Series 3 (Helios Amber):** `var(--color-accent)` (`#D4FF00`)
4. **Series 4 (Athena Emerald):** `var(--color-success)` (`#10B981` / `#047857`)
5. **Series 5 (Hermes Cyan):** `var(--color-info)` (`#06B6D4` / `#0E7490`)

---

## 8. Anti-Patterns (Do NOT Use)

* ❌ **Soft, oversized rounded corners** (Never use >8px radii)
* ❌ **Fuzzy Material Design drop shadows** (Use flat planes and 1px hairline borders)
* ❌ **Emojis as structural icons** (Use vector icon libraries: Phosphor Icons `@phosphor-icons/react` as primary, or Heroicons as secondary)
* ❌ **Forced uppercase button text** (Always sentence/capital case)
* ❌ **Helios Amber background fills for main content** (Acid Amber is strictly for micro-badges, status chips, and dark-mode accent pop)
* ❌ **Low contrast focus rings or body text** (Always maintain 4.5:1 minimum contrast for text and 3:1 for focus rings)

---

## 9. Pre-Delivery Checklist

Before delivering any UI code, verify:

* [ ] No emojis used as icons (use Phosphor Icons `@phosphor-icons/react` vector SVGs instead)
* [ ] `cursor-pointer` on all clickable elements
* [ ] Interactive triggers meet minimum 44×44px touch target dimensions
* [ ] Active focus-visible ring uses `var(--color-focus-ring)` (2px outline, 2px offset)
* [ ] Radii scale strictly bounded (0px–8px)
* [ ] Button text uses Monospace font with `textTransform: 'none'`
* [ ] Light & Dark mode text contrast meets 4.5:1 minimum WCAG AA standard
* [ ] Responsive grid tested across breakpoints: 375px, 768px, 1024px, 1440px
