# Research Notes — Contrast-Safe Themes

## Decision: Accessible Color Token Strategy
- **Rationale**: Defining CSS variables for `--color-text-dark`, `--color-text-light`, `--color-surface-dark`, `--color-surface-light`, and accent tokens allows both themes to derive from Tailwind configuration without duplicating styles.
- **Outcome**: Adopt paired token sets with contrast ratios ≥ 4.5:1 (body text) and ≥ 3:1 (large text/icons). Dark theme will use light text `#F4F6FB`; light theme will use charcoal text `#111827`.
- **Alternatives Considered**:
  - Keep shared tokens across themes: rejected (fails contrast).
  - Inline per-component colors: rejected (difficult to maintain consistency).

## Decision: Automated Contrast Auditing Tool
- **Rationale**: `pa11y-ci` can crawl exported pages, evaluate WCAG contrast rules, and slot into GitHub Actions CI with minimal setup.
- **Outcome**: Add `pa11y-ci` with a configuration targeting `/`, `/projects`, `/projects/compound-interest-calculator`, `/blog`, `/about`, `/contact`.
- **Alternatives Considered**:
  - Lighthouse CI: broader audits but longer runtime and CI complexity for small site.
  - Custom axe-core + Playwright script: flexible but higher engineering overhead right now.

## Decision: Manual Verification Checklist
- **Rationale**: After automated run, manual spot checks ensure theme toggle works on live pages and embedded widgets inherit tokens.
- **Outcome**: Document toggle smoke test (switch themes, reload page, verify persisted preference), and check embedded code blocks against both theme backgrounds.
- **Alternatives Considered**:
  - Skip manual step relying solely on CI: rejected due to risk of false positives/negatives.
