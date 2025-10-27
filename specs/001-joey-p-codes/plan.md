---
feature: Joey P Codes
owner: Joey Pompeo
summary: Astro + Markdown portfolio and blog highlighting Azure-focused .NET work.
---

# Architecture Overview

- **Framework:** Astro (content-first static site generator)
- **Styling:** Tailwind CSS with a custom navy primary palette
- **Language:** TypeScript
- **Content:** Markdown content collections (`/src/content/pages`, `/src/content/projects`, `/src/content/posts`)
- **Routing:** Astro file-based routing
- **Deployment:** Static export deployed via Netlify
- **Source Control:** GitHub repository with Netlify CI/CD

# Technology Stack

| Layer | Tool / Library | Purpose |
|-------|----------------|----------|
| Frontend Framework | Astro | Static-first architecture with minimal client JS |
| Styling | Tailwind CSS | Utility-first styling for quick iteration |
| Language | TypeScript | Type safety and cleaner DX |
| Markdown System | Astro Content Collections | Typed schema for blog posts and projects |
| Syntax Highlighting | Shiki | Code block highlighting |
| Theme Toggle | Lightweight client script | Dark/light mode switching |
| Contact | `mailto:` link | Minimal contact method |
| Analytics | _None_ | Add privacy-friendly analytics later |
| SEO | Astro SEO helpers + sitemap plugin | Metadata, sitemap, robots.txt |
| CI/CD | GitHub → Netlify | Automated builds and deploys |

# Directory Structure

```
joeypcodes/
├── src/
│   ├── content/
│   │   ├── posts/
│   │   ├── projects/
│   │   └── pages/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── PostLayout.astro
│   │   ├── ProjectLayout.astro
│   │   └── PageLayout.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ProjectCard.astro
│   │   ├── PostCard.astro
│   │   ├── ThemeToggle.astro
│   │   └── CTAButton.astro
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       ├── projects.astro
│       ├── blog.astro
│       └── contact.astro
├── public/
│   └── assets/
│       └── Joey-Pompeo-Resume.pdf
├── package.json
├── astro.config.mjs
├── tailwind.config.cjs
└── netlify.toml
```

# UI & Layout Flow

- Global frame: Header → Main content → Footer
- Default dark theme with light-mode toggle
- System font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`)
- Max content width around 720px for readability
- Page sequencing:
  - Home: Hero → skills → featured projects → latest posts → Hire Me CTA
  - About: Bio, certifications, résumé link
  - Projects: Cards linking to case studies
  - Blog: Post index with tag filter (search deferred)
  - Contact: `mailto:` link plus GitHub/LinkedIn icons

# Content Fix Strategy

- Replace markdown project entries with a typed data source (`src/data/projects.ts`) that maps to Joey’s public repositories:
  - `jmpompeo/CompoundInterestCalculator`
  - `jmpompeo/unit-test-improvements`
  - `jmpompeo/joeypcodes`
- Augment project layouts to consume repository metadata (name, description, tech stack, outcomes, GitHub URL); ensure defensive checks for missing fields to avoid runtime errors.
- Ensure Astro content queries for posts and projects guard against absent `data` properties by using type-safe accessors and fallback messaging.
- Keep markdown posts but validate frontmatter fields (`title`, `description`, `tags`, `published`) with stricter schemas to prevent undefined values during rendering.

# Color & Typography Tokens

| Token | Value | Description |
|--------|--------|-------------|
| `--color-primary` | `#0A2342` | Navy blue primary |
| `--color-bg-dark` | `#000000` | Dark background |
| `--color-bg-light` | `#FFFFFF` | Light background |
| `--color-text-dark` | `#FFFFFF` | Text in dark mode |
| `--color-text-light` | `#111111` | Text in light mode |

# Build & Deployment

## Local Development

```bash
npm install
npm run dev
```

## Deployment (Netlify)

1. Push repository to GitHub.
2. Connect repo to Netlify.
3. Build command: `npm run build`.
4. Publish directory: `dist/`.
5. Use Node.js 18 or later.

## Continuous Integration

- Add a GitHub Actions workflow at `.github/workflows/ci.yml`.
- Trigger the workflow on `pull_request` events where `base` is `main`.
- Steps:
  1. Checkout repository and set up Node.js 18.x.
  2. Install dependencies with `npm ci`.
  3. Run `npm run build` to compile the Astro site.
  4. Run `npm audit --production` to surface dependency vulnerabilities; fail the job on findings.
  5. Upload build artifacts (optional) for preview if needed.
- Complement the audit step with repository-level Dependabot alerts; ensure Dependabot is enabled for npm ecosystem.

# Quality Checks

- ESLint + Prettier via `lint-staged` for formatting and linting.
- `astro check` for accessibility basics and link validation.
- Lighthouse audit targeting ≥ 90 mobile performance score.

# Future Enhancements (Phase 2)

- Netlify/Resend contact form.
- Client-side blog search and tag filtering.
- Privacy-friendly analytics (Plausible/Umami).
- Automatic OG image generation.
- RSS feed for blog posts.
- Expanded project imagery and About timeline.
