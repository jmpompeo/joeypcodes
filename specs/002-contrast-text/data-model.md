# Data Model — Contrast-Safe Themes

## Theme Tokens

| Token ID | Theme | Purpose | Notes |
|----------|-------|---------|-------|
| text.base.light | Light | Primary body text color | Must contrast ≥ 4.5:1 with surface.base.light |
| text.base.dark | Dark | Primary body text color | Must contrast ≥ 4.5:1 with surface.base.dark |
| surface.base.light | Light | Default page background | Supports elevated surfaces |
| surface.base.dark | Dark | Default page background | Supports elevated surfaces |
| surface.card.light | Light | Card/section background | Maintain 4.5:1 vs text.base.light |
| surface.card.dark | Dark | Card/section background | Maintain 4.5:1 vs text.base.dark |
| accent.primary.light | Light | Links/buttons text color | Maintain 4.5:1 vs surface it sits on |
| accent.primary.dark | Dark | Links/buttons text color | Maintain 4.5:1 vs surface it sits on |
| border.focus.light | Light | Focus outline | ≥ 3:1 against adjacent surface |
| border.focus.dark | Dark | Focus outline | ≥ 3:1 against adjacent surface |

## Relationships & Constraints
- Each `text.*` token pairs with a matching `surface.*` token (light or dark) to satisfy WCAG AA ratios.
- Components should reference tokens indirectly via CSS variables (`var(--color-text)`) that ThemeToggle swaps.
- Focus/hover state colors must reference corresponding border tokens to retain contrast.
- Token values stored in `tailwind.config.cjs` (`theme.extend.colors`) and exposed as CSS variables in `src/styles/global.css`.

## Lifecycle
- Tokens defined at build time; no runtime mutation aside from theme toggling. Preference stored in `localStorage` and applied on initial page load.
