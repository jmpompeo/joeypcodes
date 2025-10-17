# Research — Joey P Codes CI Enhancement & Content Fix

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

## Decision: Curate project metadata locally rather than live GitHub API calls
- **Rationale**: Maintaining a `src/data/projects.ts` module keeps the build deterministic, avoids GitHub API rate limits, and ensures the projects page renders even without network access. We can periodically sync descriptions manually while presenting accurate repository links.
- **Alternatives Considered**:
  - Fetching GitHub API during build — risks rate limiting and requires tokens for reliability.
  - Keeping markdown-only content — harder to reuse repository metadata in multiple components and was prone to undefined `data` fields causing runtime errors.

## Decision: Strengthen Astro content schemas for blog posts
- **Rationale**: Enforcing required frontmatter (title, description, tags, published date) through content collections prevents undefined access in templates and stabilizes the blog page rendering.
- **Alternatives Considered**:
  - Runtime null checks only — still allows silent content regressions.
  - Moving posts to an external CMS — overkill for current scope and adds maintenance overhead.
