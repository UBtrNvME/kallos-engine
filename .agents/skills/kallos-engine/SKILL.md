---
name: kallos-engine
description: Design system guidelines, token usage, and component patterns for Kallos Engine (κάλλος) apps.
---

# Kallos Engine Design System (κάλλος)

Use this skill when building pages, components, or UI extensions for **Kallos Engine**.

## Source of Truth Architecture

- **Master File**: [`design-system/kallos-engine/MASTER.md`](file:///home/aitemir/Projects/My/kallos-engine/design-system/kallos-engine/MASTER.md)
- **Page Overrides**: Check `design-system/kallos-engine/pages/[page-name].md` before generating code.
- **W3C Tokens**: [`design-system/kallos-engine/tokens.json`](file:///home/aitemir/Projects/My/kallos-engine/design-system/kallos-engine/tokens.json)
- **shadcn Mapping**: [`components.json`](file:///home/aitemir/Projects/My/kallos-engine/components.json)

---

## Hellenic Pantheon Palette & Tokens

Always use semantic Tailwind / CSS variable tokens instead of hardcoded hex values:

| Deity / Role | Dark OLED | Paper Light | CSS Variable | Tailwind Utility |
|---|---|---|---|---|
| **Erebus / Aether Base** | `#09090B` | `#FAFAFA` | `--color-bg` | `bg-background` / `bg-canvas` |
| **Parthenon Surface** | `#18181B` | `#FFFFFF` | `--color-surface` | `bg-card` / `bg-surface` |
| **Hairline Border** | `#27272A` | `#E4E4E7` | `--color-border` | `border-border` |
| **Text Primary** | `#FAFAFA` | `#09090B` | `--color-text-primary` | `text-foreground` |
| **Text Muted** | `#A1A1AA` | `#71717A` | `--color-text-muted` | `text-muted-foreground` |
| **Dionysus Violet (Primary)** | `#A855F7` | `#7E22CE` | `--color-primary` | `bg-primary text-primary-foreground` |
| **Poseidon Ultramarine (Secondary)** | `#3B82F6` | `#1D4ED8` | `--color-secondary` | `border-secondary text-secondary` |
| **Helios Amber (Accent Pop)** | `#D4FF00` | `#D4FF00` | `--color-accent` | `bg-accent text-accent-foreground` |
| **Helios / Dionysus Focus** | `#D4FF00` | `#7E22CE` | `--color-focus-ring` | `focus-visible:outline-focus-ring` |
| **Athena Emerald (Success)** | `#10B981` | `#047857` | `--color-success` | `text-success border-success/30` |
| **Apollo Ochre (Warning)** | `#F59E0B` | `#B45309` | `--color-warning` | `text-warning border-warning/30` |
| **Hades Crimson (Error)** | `#F43F5E` | `#BE123C` | `--color-error` | `text-error border-error/30` |
| **Hermes Cyan (Info)** | `#06B6D4` | `#0E7490` | `--color-info` | `text-info border-info/30` |

---

## Non-Negotiable Component Rules

1. **Monospace Triggers**: All interactive triggers, buttons, input labels, badges, and metrics MUST use monospace font (`font-mono` / `JetBrains Mono`). Narrative copy uses sans-serif (`font-sans` / `Inter`).
2. **Capital / Sentence Case**: Buttons MUST maintain normal capital case (`textTransform: 'none'`). NEVER use forced uppercase (`uppercase`).
3. **44px Minimum Touch Targets**: Interactive controls MUST meet minimum `min-h-[44px]` and `min-w-[44px]`.
4. **Helios Amber Focus Rings**: Keyboard focus MUST present a visible 2px outline using `var(--color-focus-ring)` with 2px offset (`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring`).
5. **Bounded Corner Radii (0px - 8px)**:
   - `0px` (`rounded-none`): Structural containers
   - `2px` (`rounded-sharp`): Status pills & micro badges
   - `4px` (`rounded-tactical` / `rounded-md`): Buttons & text inputs
   - `8px` (`rounded-card` / `rounded-lg`): Cards & dialog modals (Strict maximum)
6. **No Soft Drop Shadows**: Use flat planes bounded by 1px hairline borders (`border border-border`).
7. **Phosphor Icons**: Default vector icon library is `@phosphor-icons/react`. Emojis as icons are strictly prohibited.

---

## Pre-Delivery Verification Checklist

Before shipping UI code for `kallos-engine`:
- [ ] Checked `design-system/kallos-engine/pages/[page-name].md` for overrides
- [ ] No emojis used as structural icons (used `@phosphor-icons/react`)
- [ ] Monospace font applied to controls, triggers, inputs, and metrics
- [ ] Touch targets meet `min-h-[44px] min-w-[44px]`
- [ ] Active focus-visible outline is 2px `var(--color-focus-ring)`
- [ ] Radii scale strictly bounded within 0px–8px
- [ ] WCAG AA text contrast ($\ge 4.5:1$) satisfied in both Light & Dark modes
