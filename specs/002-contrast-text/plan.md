# Implementation Plan: Contrast-Safe Themes

## Technical Context
- Current site stack: Astro 4.x, Tailwind CSS utilities, custom ThemeToggle component storing preference in `localStorage` and toggling `theme-light` class on `documentElement`.
- Typography and surface colors defined via Tailwind theme extensions (`tailwind.config.cjs`) and `src/styles/global.css` CSS variables.
- CI pipeline already runs `npm run check` (Astro diagnostics); no dedicated accessibility tooling in place yet.
- Pages rendered statically; primary targets: `index`, `projects`, `blog`, `about`, dynamic project detail pages.
- Theme tokens presently share the same palette across modes, causing insufficient contrast in dark surfaces.

## Constitution Check
- No conflicting mandates discovered (constitution template placeholder does not impose additional constraints). Proceeding aligns with accessibility focus.

## Gates & Open Questions
- All requirements trace directly to WCAG 2.1 AA contrast compliance; no blocking unknowns identified. No clarification gates pending after `/speckit.clarify`.

## Phase 0 – Research & Decisions
**Goal**: Confirm tooling and color strategy that guarantee WCAG AA compliance without violating brand constraints.

| Task | Description | Owner | Notes |
|------|-------------|-------|-------|
| R0.1 | Inventory existing color tokens, compute current contrast ratios for dark/light pairings | Dev | Use tools (e.g., contrast-ratio.com) to catalogue failing combinations |
| R0.2 | Select automated contrast audit tooling for static pages | Dev | Decision: adopt `pa11y-ci` to run against built site (fast, headless, emits CI-friendly reports) |
| R0.3 | Establish accessible color palette adjustments | Design/Dev | Adjust Tailwind theme (`primary`, `surface`, `text`) ensuring ≥ 4.5:1 contrast |
| R0.4 | Determine coverage pages for audits | Dev | Audit `index`, `projects`, `projects/[slug]`, `blog`, `about`, `contact` |

**Outputs**: `research.md` capturing chosen palette ranges, pa11y-ci usage pattern, audited page list.

## Phase 1 – Design & Modeling
**Goal**: Describe data structures and documentation artifacts supporting themed colors.

- Produce `data-model.md` summarising theme tokens (light/dark surfaces, text, accent, state colors) and relationships (e.g., each text token pairs with specific background token).
- No external API contracts required; document that in `contracts/README.md` for completeness.
- Draft `quickstart.md` describing how to run contrast audits (`npm run check && npm run a11y`), manual toggle verification steps, and acceptance test script.
- Update agent knowledge via `.specify/scripts/bash/update-agent-context.sh codex` with theme/a11y considerations.

## Phase 2 – Implementation Outline
**Goal**: Map high-level build flow (actual coding handled later during execution).

1. **Token Overhaul**
   - Update Tailwind config and global CSS variables with new light/dark tokens (body, surface, card, accent, interactive, focus states).
   - Ensure ThemeToggle toggles a single root class; align CSS variables accordingly.
2. **Component Audit**
   - Refactor key components (Header, Footer, cards, buttons) to consume tokens via CSS variables instead of hardcoded colors.
   - Verify hover/focus/disabled states maintain contrast.
3. **Automated Testing**
   - Add `pa11y-ci` dev dependency and config to scan built pages; integrate into CI (e.g., `npm run a11y`).
   - Document remediation workflow when checks fail.
4. **Manual Verification**
   - Define smoke checklist: toggle at runtime, confirm no layout shift, inspect embedded content fallback styling.

**Key Risks & Mitigations**
- *Risk*: Brand primary color may not meet AA on dark background. *Mitigation*: Introduce lighter tint for text accent or adjust primary for dark mode only.
- *Risk*: Pa11y false positives on hidden elements. *Mitigation*: Use `ignore` config for known, intentional cases or ensure hidden content is removed from DOM.
- *Risk*: Third-party embeds (e.g., GitHub gists) ignore theme. *Mitigation*: provide wrapper with forced background/foreground overrides or document as known limitation.

## Success Readiness Checklist
- Research complete with documented palette + tooling.
- `data-model.md`, `quickstart.md`, and `contracts/README.md` authored.
- Agent context updated.
- Implementation sequencing and risks captured (above).

Once Phase 2 artifacts ready, proceed to coding & task execution.
