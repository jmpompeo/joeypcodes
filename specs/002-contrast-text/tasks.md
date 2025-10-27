---
description: "Execution-ready task list for Contrast-Safe Themes"
---

# Tasks: Contrast-Safe Themes

**Input**: Design documents from `/specs/002-contrast-text/`  
**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `quickstart.md`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare tooling and project scaffolding required for contrast auditing.

- [x] T001 Update package dependencies with `pa11y-ci` and related accessibility tooling in site/package.json
- [x] T002 Add npm scripts for accessibility audits (`a11y`, `a11y:ci`) in site/package.json

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish shared theme token infrastructure and documentation relied on by all stories.  
**⚠️ CRITICAL**: Complete this phase before starting user story work.

- [x] T003 Define light/dark theme token palette in site/tailwind.config.cjs
- [x] T004 Synchronize CSS variable declarations with new tokens in site/src/styles/global.css
- [x] T005 Document accessible color pairings for contributors in specs/002-contrast-text/README-tokens.md

---

## Phase 3: User Story 1 – Readable Themes (Priority: P1) 🎯 MVP

**Goal**: Ensure all pages remain legible with WCAG AA contrast in both themes.  
**Independent Test**: Toggle themes across each page (`/`, `/projects`, `/projects/[slug]`, `/blog`, `/about`, `/contact`) verifying manual contrast checks pass and no components regress.

### Implementation Tasks

- [x] T006 [US1] Refactor core layout components (Header, Footer, BaseLayout) to consume CSS variables in site/src/components/
- [x] T007 [US1] Update card and CTA components for token-based foreground/background usage in site/src/components/
- [x] T008 [US1] Adjust ThemeToggle behavior to apply root class and rehydrate preference safely in site/src/components/ThemeToggle.astro
- [x] T009 [US1] Re-style markdown content surfaces to respect theme tokens in site/src/content/styles or layouts
- [x] T010 [US1] Perform manual theme smoke test and capture results in specs/002-contrast-text/qa-notes.md

---

## Phase 4: User Story 2 – Prevent Regressions (Priority: P2)

**Goal**: Automate contrast enforcement so new changes cannot merge with failing accessibility.
**Independent Test**: Run `npm run a11y` locally and confirm GitHub Actions job fails when contrast violations are introduced.

### Implementation Tasks

- [x] T011 [US2] Create `.pa11yci.json` configuration targeting priority pages at site/.pa11yci.json
- [x] T012 [US2] Integrate accessibility audit step into `.github/workflows/ci.yml`
- [x] T013 [US2] Update README accessibility section with audit usage in site/README.md
- [x] T014 [US2] Add quickstart instructions for audit remediation in specs/002-contrast-text/quickstart.md

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Final verification and documentation updates after functional work completes.

- [ ] T015 Run full build plus accessibility scripts (`npm run build`, `npm run a11y`) and archive reports in specs/002-contrast-text/reports/
- [ ] T016 Verify third-party embeds and code snippets honor theme tokens; log findings in specs/002-contrast-text/qa-notes.md
- [ ] T017 Capture before/after screenshots for design reference in specs/002-contrast-text/assets/

---

## Dependencies & Execution Order

- Phase 1 must finish before Phase 2.
- Phase 2 must complete before any user story work (Phases 3–4).
- Phase 3 (US1) precedes Phase 4 (US2) to ensure automation reflects final styling.
- Phase 5 begins only after user story phases reach acceptance.

---

## Parallel Execution Examples

- After Phase 2, T006–T009 can be split among teammates since they touch distinct components, coordinating shared files when needed.
- In Phase 4, configuration tasks (T011, T012) can proceed in parallel with documentation updates (T013, T014).

---

## Implementation Strategy

1. Complete Phase 1–2 to establish contrast tokens and tooling foundation.  
2. Deliver Phase 3 (US1) to achieve MVP legibility across themes.  
3. Layer Phase 4 automation to guard against regressions.  
4. Finish with Phase 5 polish to document audits and visual evidence.
