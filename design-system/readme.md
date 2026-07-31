# Rishi Bajaj — Portfolio Design System

The design system behind **rishibajaj.space**, a personal product-manager portfolio.

**Structure** was distilled from *Product Manager Portfolio (Community)*, a Figma Make starter template (React + TS + Vite + Tailwind + shadcn/ui + lucide-react).
**Brand** is not from that template — it comes from the live site and overrides the template's stock appearance entirely.

> **This is a branded system.** An earlier revision described itself as "a generic, unbranded starter kit… treat its colors/type as a clean neutral baseline to restyle." That is no longer true. The palette and type below are a real identity in production. Do not restyle them away.

## Source of truth

Tokens live in `tokens/` and are consumed by **both** this project and the Next.js app at `rishibajaj-Prodman/Portfolio` (`app/globals.css` imports them directly, and `tailwind.config.js` maps utilities onto them). The two cannot drift. Change the brand here, and the site changes with it.

## Index

- `styles.css` — root stylesheet, imports everything under `tokens/`.
- `tokens/colors.css`, `typography.css`, `spacing.css`, `motion.css` — CSS custom properties.
- `components/core/` — Button, Badge, Card (+Header/Title/Description/Content/Footer), Avatar, Separator.
- `components/forms/` — Input, Textarea, Label, Checkbox, Switch, RadioGroup, Select.
- `components/feedback/` — Alert, Progress, Skeleton, Toast.
- `components/navigation/` — Tabs. `components/overlay/` — Dialog, Tooltip.
- `guidelines/` — foundation specimen cards.
- `ui_kits/portfolio/` — recreation of the template's portfolio screens. **Still carries the template's placeholder content and stock styling; not yet rebranded.**

## Visual foundations

- **Colors:** Four brand anchors — paper `#f5f3ee` (warm off-white ground), ink `#1a1a18` (near-black text), terracotta `#c84b2f` (the single accent), muted `#8a8878` (secondary text). Neutrals are a warm `sand-50…900` ramp anchored at paper and ink, replacing the template's cool grays, which read blue against a warm ground. The template's `blue-600` accent, `purple-600`, and the hero gradient are **removed** — terracotta is the only accent, and this system has no gradients.
- **Accessibility:** terracotta on paper measures **4.21:1** — fine for large text, the accent rule, and UI, but short of the 4.5:1 body-text threshold. Use `--terracotta-text` (`#bf4529`, 4.62:1) for small text: eyebrows, inline links, captions. Both `--positive` and `--negative` clear 4.5:1 on paper.
- **Type:** Serif-first. DM Serif Display for headings and display type; DM Sans for body and UI. The template declared no webfont at all and had no serif — this is the largest single departure from it. DM Serif Display ships one weight; emphasis in display type comes from size and color, never faux bold.
- **Naming divergence:** this brand uses *muted* for secondary **text**; shadcn uses it for a **surface**. The brand meaning wins (the shipped site already relies on `text-muted`). The surface is `--surface-muted`. When porting components, map their `bg-muted` to `bg-sand-200`.
- **Spacing:** 4px base. Sections `py-20`/`py-24`. Content capped at 72rem, prose at 48rem, measure at 65ch.
- **Elevation:** flat. Structure comes from 1px hairline rules at 10% ink and from whitespace — *not* from shadows. The template's four-step shadow ramp on cards is gone; only `--shadow-overlay` and `--shadow-modal` survive, for surfaces that genuinely float.
- **Radius:** near-square (2px base). The template's 10px/14px rounding is inconsistent with an editorial layout.
- **Motion:** a staggered fade-up entrance ladder (`.animate-fade-up` + `.delay-1…10`), 700ms, 24px travel, 100ms between steps. Retime the whole sequence via `--stagger-step`. Guarded by `prefers-reduced-motion`, which resolves to the finished state immediately rather than a slower animation.
- **Accent bar:** a 4rem × 3px terracotta rule under page headers. Tokenized as `--accent-bar-w/h` so every route matches the home page.

## Iconography

lucide, stroke-based, `currentColor`. The CDN build has dropped brand-logo glyphs (linkedin/github/twitter); the UI kit substitutes `link`, `code`, `message-circle`. Flag if a proper brand-icon set becomes available.

## Logo / brand mark

No logo. The nav and footer render the plain-text name where a mark would go. This is deliberate — do not invent a wordmark.

## Component conformance

Audited `Button`, `Card` and `Badge` after the rebrand: all three are driven purely by the semantic tokens above (`--primary`, `--card`, `--border`, `--radius-*`, `--text-*`, `--duration-fast`) with no hardcoded template colors. They inherited the new identity with **zero per-component edits** — Button is terracotta, cards are flat and warm. `Card` already had no resting shadow, so the flat-elevation rule needed no enforcement there.

One nit: `Badge`'s destructive variant hardcodes `#fff` rather than `--destructive-foreground`. Harmless against the dark `--negative`, but worth normalising.

## Known gaps

- `ui_kits/portfolio/` has not been rebranded and still carries the template's placeholder content and stock styling.
- The remaining 16 components have not been individually audited, though the three sampled suggest the set is consistently token-driven.
- 26 shadcn primitives from the source were never built. **Accordion** is the one a case-study page would plausibly want.
- Page-level components (case-study cards, metric callouts, before/after, process steps) do not exist yet — that is the next round.
