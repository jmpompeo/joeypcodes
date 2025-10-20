# Theme Toggle QA Notes

_Date_: 2025-10-19
_Tested By_: Codex CLI Agent

## Manual Smoke Test

| Page | Dark Theme | Light Theme | Notes |
|------|------------|-------------|-------|
| `/` | Text, buttons, cards readable; skip link contrast acceptable. | Same content legible; cards retain border contrast. | Skill chips and CTAs inherit token colors. |
| `/projects` | Card titles and tags pass contrast; GitHub buttons readable. | Same results with light backgrounds. | | 
| `/projects/compound-interest-calculator` | Metadata cards and outcomes list use new tokens; prose readable. | Same results with light theme. | | 
| `/blog` | Header, badge buttons, empty-state panel meet contrast. | Link accents visible, empty-state panel readable. | | 
| `/about` | Certification cards readable, headings use theme tokens. | Same results with light theme. | | 
| `/contact` | Call-to-action and availability list legible. | Same results with light theme. | |

## Additional Checks
- Theme toggle persists preference after reload via `localStorage`.
- Browser prefers-color-scheme change respects stored preference unless cleared.
- Third-party icons (GitHub/LinkedIn) follow hover/focus accent tokens.

No contrast issues observed during manual pass.
