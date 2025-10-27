# Accessible Theme Tokens

| Token | Light Theme | Dark Theme | Contrast Notes |
|-------|-------------|------------|----------------|
| Background (`--color-bg`) | #FFFFFF | #0B1120 | Base page background |
| Surface (`--color-surface`) | #F8FAFC | #111827 | Card backgrounds; ≥ 4.5:1 vs text tokens |
| Surface Alt (`--color-surface-alt`) | #EEF2FF | #1E293B | Secondary sections, callouts |
| Text (`--color-text`) | #101828 | #F4F6FB | Body copy; ≥ 4.5:1 vs surfaces |
| Text Muted (`--color-text-muted`) | #475467 | #CBD5F5 | Labels/help text; ≥ 4.5:1 vs surfaces |
| Accent (`--color-accent`) | #2563EB | #63B3FF | Links/buttons; ≥ 4.5:1 vs surfaces |
| Accent Hover (`--color-accent-hover`) | #1E40AF | #7CC4FF | Hover/focus state |
| Border (`--color-border`) | #CBD5F5 | #334155 | Card and divider outlines |
| Focus (`--color-focus`) | #2563EB | #93C5FD | Focus ring; ≥ 3:1 vs adjacent surface |

## Usage Guidelines
- Reference colors via CSS variables (e.g., `var(--color-text)`) rather than hard-coded hex values.
- When introducing new components, pair text tokens with their matching surface tokens (e.g., `--color-text` on `--color-surface`).
- For destructive or success states, select hues that still meet the contrast ratios above.
- Update this document if tokens change or additional states are introduced.
