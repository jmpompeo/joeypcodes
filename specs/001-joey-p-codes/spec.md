---
feature: Joey P Codes
goal: Publish a technical portfolio and blog for Joey Pompeo
---

# User Stories

## P1 — Home Page Snapshot

**As** a hiring manager  
**I want** to land on a home page that immediately communicates Joey’s focus, skills, and featured work  
**So that** I can quickly decide whether to explore further or reach out.

### Acceptance Criteria
- Hero section with headline “C#/.NET engineer building Azure-backed apps.” and supporting subhead.
- Skill pillar list showing `.NET`, `Azure Functions`, `CI/CD`, `Bicep`, `Git`, `Unit Testing`.
- Primary call-to-action button linking to `/assets/Joey-Pompeo-Resume.pdf`.
- Featured projects section displaying three project cards sourced from `/projects`.
- Latest posts section displaying up to three recent entries from `/posts`.
- Secondary “Hire Me → Contact” call-to-action linking to contact page.

## P1 — Contact Path

**As** a prospective client  
**I want** a straightforward way to contact Joey  
**So that** I can initiate a conversation without friction.

### Acceptance Criteria
- Contact page with `mailto:joeypompeo@gmail.com` link.
- Social icon links for GitHub and LinkedIn present in header or footer.
- Secondary CTA from home page routes to contact page.

## P2 — About Page Credentials

**As** a hiring manager  
**I want** to understand Joey’s background and certifications  
**So that** I can evaluate credibility and fit.

### Acceptance Criteria
- About page includes provided bio paragraphs.
- Certifications list includes AZ-104, AZ-204, AZ-400 with full titles.
- Résumé download link accessible from page.

## P0 — Projects Content Fix

**As** a site visitor  
**I want** each project to display accurate GitHub details  
**So that** I can assess relevant experience.

### Acceptance Criteria
- Replace markdown project entries with data drawn from specified GitHub repositories:
  - `https://github.com/jmpompeo/CompoundInterestCalculator`
  - `https://github.com/jmpompeo/unit-test-improvements`
  - `https://github.com/jmpompeo/joeypcodes`
- Projects index renders card grid with title, summary, tags, and GitHub link per repository.
- Detail pages show overview, stack, outcomes, and link back to GitHub README or repository.
- Fix current runtime errors arising from missing `data` fields in Astro components.

## P1 — Projects Showcase

**As** a prospective collaborator  
**I want** to review highlighted projects with stack and outcomes  
**So that** I can assess relevant experience.

### Acceptance Criteria
- `/projects` index renders card grid with title, summary, tags, and link.
- Compound Interest Calculator case study includes role, tech stack, outcomes, and GitHub link.
- Unit Test Improvements case study includes role, tech stack, outcomes, and GitHub link.
- Portfolio site case study (Joey P Codes) includes role, tech stack, outcomes, and GitHub link.
- Clicking a project card navigates to a detail page with overview, tech stack, screenshots placeholder, and outcomes.

## P3 — Blog Publishing

**As** a returning reader  
**I want** to browse blog posts by topic  
**So that** I can learn from Joey’s technical insights.

### Acceptance Criteria
- Markdown posts stored under `/posts` with tags (`csharp`, `azure`, `functions`, `ci/cd`).
- `/blog` index lists posts chronologically with tag filter UI (filter implementation may be deferred, but tags displayed).
- Individual post pages support syntax highlighting with Shiki.
- Search functionality deferred to a later phase.

## P0 — Blog Content Fix

**As** a reader  
**I want** posts to display without runtime errors  
**So that** I can read blog content reliably.

### Acceptance Criteria
- Resolve data-fetch errors on `/blog` and individual post pages by ensuring content collections return proper metadata.
- Confirm all existing posts render with titles, descriptions, tags, and body Markdown.

# Non-Functional Requirements

- WCAG 2.1 AA compliant semantics, focus states, and alt text.
- Performance target: Lighthouse ≥ 90 on mobile; optimize assets and keep client scripting minimal.
- Consistent tone: technical, clear, friendly; dark theme default with light toggle.
- No analytics or cookies initially.
- CI guardrails: On every pull request targeting `main`, run a GitHub Actions workflow that installs dependencies, builds the Astro site, and runs dependency vulnerability checks.
