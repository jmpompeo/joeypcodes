# Quickstart — Contrast-Safe Themes

## Prerequisites
- Node.js 18+
- npm 9+

## Install Dependencies
```bash
npm install
```

## Manual Verification Steps
1. Run `npm run dev` and open `http://localhost:4321`.
2. Toggle between light and dark modes using the header control.
3. Reload the page to confirm the stored preference persists.
4. Inspect cards, buttons, navigation, and footers in both modes for readable contrast.
5. Check embedded content (e.g., code snippets) on a project page to ensure wrapper tokens apply.

## Automated Contrast Audit
```bash
npm run a11y
```
- Configuration lives in `.pa11yci.json`; the script builds the site and runs pa11y-ci against key pages.
- CI uses `npm run a11y:ci` inside GitHub Actions to block regressions.

## Troubleshooting
- If pa11y reports violations, adjust the relevant Tailwind token, re-run `npm run a11y`, and commit both code and updated reports.
- For false positives on hidden content, update pa11y `ignore` rules per component.
