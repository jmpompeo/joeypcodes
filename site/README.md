# Joey P Codes

A fast Astro + Tailwind portfolio for Joey Pompeo that highlights Azure-focused .NET work, projects, and technical writing.

## Prerequisites

- Node.js 18+
- npm 9+

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:4321` to explore the site locally. Content lives in `src/content` and pages in `src/pages`.

## Available Scripts

| Script | Description |
| ------ | ----------- |
| `npm run dev` | Start the Astro dev server with hot reload |
| `npm run build` | Generate the static production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run check` | Run Astro type and accessibility checks |
| `npm run lint` | Lint `.astro` and TypeScript files |
| `npm run format` | Check formatting with Prettier |
| `npm run format:write` | Format project files in place |
| `npm run a11y` | Build then run pa11y-ci accessibility audits locally |
| `npm run a11y:ci` | Run pa11y-ci using `.pa11yci.json` (used in CI) |

## Content Model

- `src/content/projects/*.md` – project case studies using `ProjectLayout`
- `src/content/posts/*.md` – blog posts using `PostLayout`
- `src/content/pages/*.md` – optional long-form pages

## Deployment (Netlify)

1. Push changes to the main branch.
2. Netlify builds the site with `npm run build` and publishes `dist/`.
3. Ensure the résumé file lives at `public/assets/Joey-Pompeo-Resume.pdf` before releasing.

## Tooling

- Tailwind CSS with custom theme tokens and typography plugin
- ESLint + Prettier enforced via `simple-git-hooks` and `lint-staged`
- Shiki-powered syntax highlighting in blog posts

## Updating Content

1. Edit or add markdown files under `src/content`.
2. Update frontmatter – entries are typed with Astro content collections.
3. Commit changes; linting and formatting run automatically on commit.

## Accessibility

- Semantic headings and navigation structures
- Keyboard accessible focus states and theme toggle
- Skip link leading to the main content region
- Dual theme color tokens meeting WCAG 2.1 AA contrast, verified via `npm run a11y`

## Performance Notes

- Tailwind purge settings scope styles to the `src/` directory and markdown content
- Minimal client-side JavaScript (theme toggle only)
- Ready for Netlify edge caching out of the box
