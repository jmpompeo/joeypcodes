---
description: "Execution-ready task list for Joey P Codes feature"
---

# Tasks: Joey P Codes

**Input**: Design documents from `/specs/001-joey-p-codes/`  
**Prerequisites**: `plan.md`, `spec.md`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Scaffold the Astro project, tooling, and deployment baseline.

- [x] T001 Bootstrap Astro project skeleton in site/ using `npm create astro@latest`
- [x] T002 Enable strict TypeScript configuration in site/tsconfig.json
- [x] T003 Install Tailwind CSS integration via @astrojs/tailwind in site/package.json
- [x] T004 Set up Netlify deployment configuration in site/netlify.toml
- [x] T005 Configure ESLint, Prettier, and lint-staged hooks in site/package.json
- [x] T006 Add résumé asset placeholder at site/public/assets/Joey-Pompeo-Resume.pdf

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish shared theming, layouts, components, and content scaffolding required by all user stories.  
**⚠️ CRITICAL**: Complete this phase before starting any user story work.

- [x] T007 Define Tailwind theme tokens and dark mode settings in site/tailwind.config.cjs
- [x] T008 [P] Create global stylesheet with CSS variables and typography defaults in site/src/styles/global.css
- [x] T009 [P] Configure Astro markdown and Shiki highlighting in site/astro.config.mjs
- [x] T010 [P] Build BaseLayout with theme classes and SEO slots in site/src/layouts/BaseLayout.astro
- [x] T011 [P] Implement Header component with navigation placeholders in site/src/components/Header.astro
- [x] T012 [P] Implement Footer component with copyright placeholders in site/src/components/Footer.astro
- [x] T013 [P] Implement ThemeToggle component with client script in site/src/components/ThemeToggle.astro
- [x] T014 [P] Implement CTAButton component for reusable CTAs in site/src/components/CTAButton.astro
- [x] T015 [P] Implement ProjectCard component with tag rendering in site/src/components/ProjectCard.astro
- [x] T016 [P] Implement PostCard component with tag badges in site/src/components/PostCard.astro
- [x] T017 Define Astro content collections for pages, projects, and posts in site/src/content/config.ts
- [x] T018 [P] Implement PageLayout wrapper for static pages in site/src/layouts/PageLayout.astro
- [x] T019 [P] Implement ProjectLayout for project detail markdown in site/src/layouts/ProjectLayout.astro
- [x] T020 [P] Implement PostLayout for blog markdown in site/src/layouts/PostLayout.astro
- [x] T021 [P] Seed compound interest project stub in site/src/content/projects/compound-interest-calculator.md
- [x] T022 [P] Seed serverless automation project stub in site/src/content/projects/serverless-automation-toolkit.md
- [x] T023 [P] Seed DevOps dashboard project stub in site/src/content/projects/devops-dashboard.md
- [x] T024 [P] Seed Azure Functions blog post stub in site/src/content/posts/azure-functions-best-practices.md
- [x] T025 [P] Seed .NET CI/CD blog post stub in site/src/content/posts/dotnet-ci-pipeline-notes.md
- [x] T026 [P] Seed Infrastructure as Code blog post stub in site/src/content/posts/infrastructure-as-code-bicep.md

---

## Phase 3: User Story 0 – Content Fix (Priority: P0) 🔧

**Goal**: Resolve runtime errors on projects and blog pages by sourcing accurate GitHub metadata and hardening post schemas.  
**Independent Test**: Visit `/projects`, each project detail page, `/blog`, and each blog post; confirm no runtime errors, GitHub links render correctly, and all titles/descriptions/tags display.

### Implementation Tasks

- [ ] T056 [US0] Create typed project metadata module with GitHub details in site/src/data/projects.ts
- [ ] T057 [US0] Update ProjectCard to consume typed project model and guard optional fields in site/src/components/ProjectCard.astro
- [ ] T058 [US0] Refactor projects index to use data module and remove undefined field access in site/src/pages/projects.astro
- [ ] T059 [US0] Refactor project detail route to load metadata from data module with safe fallbacks in site/src/pages/projects/[slug].astro
- [ ] T060 [US0] Tighten blog post schema and add required fields validation in site/src/content/config.ts
- [ ] T061 [US0] Ensure blog index handles missing metadata gracefully in site/src/pages/blog.astro
- [ ] T062 [US0] Harden PostLayout against undefined frontmatter values in site/src/layouts/PostLayout.astro
- [ ] T063 [US0] Verify blog post markdown includes required frontmatter and adjust content in site/src/content/posts/

---

## Phase 4: User Story 1 – Home Page Snapshot (Priority: P1) 🎯 MVP

**Goal**: Present Joey’s focus, skills, featured projects, and latest posts on the landing page.  
**Independent Test**: Navigate to `/` and confirm hero messaging, skill pillars, three featured projects, three latest posts, and both résumé and Hire Me calls-to-action are present and functional.

### Implementation Tasks

- [x] T027 [US1] Build hero section with headline, subhead, and résumé CTA in site/src/pages/index.astro
- [x] T028 [US1] Render skill pillars list beneath the hero in site/src/pages/index.astro
- [x] T029 [US1] Wire featured projects grid using ProjectCard components in site/src/pages/index.astro
- [x] T030 [US1] Wire latest posts list using PostCard components in site/src/pages/index.astro
- [x] T031 [US1] Add Hire Me CTA targeting /contact in site/src/pages/index.astro
- [x] T032 [US1] Apply BaseLayout and page metadata configuration in site/src/pages/index.astro

---

## Phase 5: User Story 2 – Contact Path (Priority: P1)

**Goal**: Offer a frictionless contact route via mailto link and social profiles.  
**Independent Test**: Visit `/contact` to confirm the mailto link works, then verify header/footer navigation exposes contact, GitHub, and LinkedIn entries with accessible labels.

### Implementation Tasks

- [x] T033 [US2] Create contact page with mailto:joeypompeo@gmail.com link in site/src/pages/contact.astro
- [x] T034 [US2] Add GitHub and LinkedIn social icons with aria labels in site/src/components/Footer.astro
- [x] T035 [US2] Update navigation to include Contact link in site/src/components/Header.astro

---

## Phase 6: User Story 3 – About Page Credentials (Priority: P2)

**Goal**: Communicate Joey’s background and certifications with résumé access.  
**Independent Test**: Visit `/about` and confirm biography paragraphs, certification list (AZ-104, AZ-204, AZ-400 with full titles), and résumé download CTA are visible and linked correctly.

### Implementation Tasks

- [x] T036 [US3] Create About page structure with BaseLayout in site/src/pages/about.astro
- [x] T037 [US3] Populate About page with Joey’s bio content in site/src/pages/about.astro
- [x] T038 [US3] Add certifications list and résumé CTA to About page in site/src/pages/about.astro

---

## Phase 7: User Story 4 – Projects Showcase (Priority: P2)

**Goal**: Display project cards and case study detail pages sourced from markdown.  
**Independent Test**: Navigate to `/projects` to verify the card grid, then open the Compound Interest project page to confirm overview, role, stack, outcomes, and GitHub placeholder render correctly.

### Implementation Tasks

- [x] T039 [US4] Expand compound interest project markdown with overview, role, stack, outcomes, and GitHub link in site/src/content/projects/compound-interest-calculator.md
- [x] T040 [US4] Build projects index page rendering ProjectCard entries in site/src/pages/projects.astro
- [x] T041 [US4] Implement project detail route consuming ProjectLayout in site/src/pages/projects/[slug].astro
- [x] T042 [US4] Enrich serverless automation project metadata for cards in site/src/content/projects/serverless-automation-toolkit.md
- [x] T043 [US4] Enrich DevOps dashboard project metadata for cards in site/src/content/projects/devops-dashboard.md

---

## Phase 8: User Story 5 – Blog Publishing (Priority: P3)

**Goal**: Publish tagged markdown posts with syntax highlighting and list view.  
**Independent Test**: Visit `/blog` to verify chronological listing and tag filter UI, then open each post to confirm content renders with Shiki highlighting and correct tag metadata.

### Implementation Tasks

- [x] T044 [US5] Populate Azure Functions post with full content, tags, and PostLayout reference in site/src/content/posts/azure-functions-best-practices.md
- [x] T045 [US5] Populate .NET CI/CD post with full content, tags, and PostLayout reference in site/src/content/posts/dotnet-ci-pipeline-notes.md
- [x] T046 [US5] Populate Infrastructure as Code post with full content, tags, and PostLayout reference in site/src/content/posts/infrastructure-as-code-bicep.md
- [x] T047 [US5] Build blog index with chronological listing in site/src/pages/blog.astro
- [x] T048 [US5] Implement tag filter UI elements (non-interactive for now) in site/src/pages/blog.astro
- [x] T049 [US5] Implement blog post detail route leveraging PostLayout in site/src/pages/posts/[slug].astro

---

## Phase 9: Polish & Cross-Cutting Concerns

**Purpose**: Finalize quality, performance, and documentation across the site.

- [x] T050 Review page semantics and focus order for WCAG 2.1 AA compliance in site/src/pages/
- [x] T051 Optimize Tailwind purge settings and production build in site/tailwind.config.cjs
- [x] T052 Document setup and deployment workflow in site/README.md
- [x] T053 Run `astro check` and resolve warnings in site/

---

## Dependencies & Execution Order

- **Phase 1 → Phase 2**: Setup must complete before foundational work.  
- **Phase 2 → Phases 3–8**: Foundational assets (layouts, components, content stubs) are prerequisites for all user stories and fixes.  
- **User Story Order**: US0 (P0) → US1 (P1) → US2 (P1) → US3 (P2) → US4 (P2) → US5 (P3). Each story can begin once Phase 2 is complete and earlier-priority stories are delivered, but stories for the same priority may run in parallel if files do not conflict.  
- **Phase 9** begins after all targeted user stories are feature-complete.

---

## Parallel Execution Examples

- **US0**: T056–T059 touch different files (`data/projects.ts`, components, pages) and can proceed in parallel once the data module is in place.  
- **US1**: After T027, T028–T031 can be coded sequentially within `index.astro`, while T032 finalizes metadata.  
- **US2**: T033 (contact page) can proceed while T034 updates the footer, provided coordination on shared components.  
- **US4**: T040 (projects index) and T041 (detail route) can move in parallel once T039 updates content, as they affect separate files.  
- **US5**: T044–T046 can be authored concurrently since each touches a separate markdown file; T047 and T048 can pair while T049 focuses on the dynamic route.

---

## Implementation Strategy

1. **MVP First**: Complete Phases 1–4 to deliver the home page experience (US1) after resolving content fixes.  
2. **Incremental Delivery**: Layer on US2 (contact) and US3–US5 in priority order, validating each route independently before proceeding.  
3. **Quality Gate**: Reserve Phase 8 for cross-cutting polish after all desired user stories are merged.  
4. **Collaboration**: Use [P]-marked tasks to parallelize work on distinct files without merge conflicts.
