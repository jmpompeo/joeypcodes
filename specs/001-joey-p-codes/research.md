# Research — Joey P Codes CI Enhancement

## Decision: GitHub Actions for CI checks on PRs to main
- **Rationale**: GitHub Actions integrates directly with repository events, supports caching and Node.js matrices, and keeps the workflow co-located with the codebase. Running `npm run build` validates Astro compilation, while `npm audit --production` surfaces vulnerable dependencies early.
- **Alternatives Considered**:
  - Netlify Build Plugins — good for deploy-time checks but lack pre-merge gating.
  - External CI (CircleCI, Azure DevOps) — more configuration overhead for a single-site project.

## Decision: Dependabot alerts instead of scheduled workflow runs
- **Rationale**: GitHub Dependabot already scans npm dependencies daily and raises alerts/PRs with minimal configuration. Coupling `npm audit` within the CI job adds an immediate fail-fast signal without duplicating Dependabot scanning logic.
- **Alternatives Considered**:
  - Separate `dependabot` GitHub Action on a schedule — redundant with built-in alerts.
  - Manual vulnerability scans — slower feedback.
