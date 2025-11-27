export type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  tech: string[];
  tags: string[];
  outcomes: string[];
  github: string;
  order: number;
};

export const projects: ProjectMeta[] = [
  {
    slug: 'compound-interest-calculator',
    title: 'Compound Interest Calculator',
    summary:
      'Azure Functions app that models compound interest scenarios with configurable contributions and schedules.',
    role: 'Creator',
    tech: ['C#', '.NET 8', 'Azure Functions', 'Bicep', 'Playwright'],
    tags: ['Fintech', 'Automation'],
    outcomes: [
      'Supports monthly, quarterly, and annual compounding with repeatable validation.',
      'Playwright regression suite keeps UI and calculation logic in sync.',
      'Infrastructure as Code templates enable one-click environment provisioning.',
    ],
    github: 'https://github.com/jmpompeo/CompoundInterestCalculator',
    order: 1,
  },
  {
    slug: 'unit-test-improvements',
    title: 'Unit Test Improvements',
    summary:
      'Experimental .NET project demonstrating approaches for writing clearer, more maintainable unit tests.',
    role: 'Creator',
    tech: ['C#', '.NET', 'xUnit', 'Moq'],
    tags: ['Testing', 'Developer Experience'],
    outcomes: [
      'Showcases practical patterns for improving test readability and coverage.',
      'Introduces shared fixtures and builders to reduce duplication.',
      'Documents a checklist for identifying brittle tests before they ship.',
    ],
    github: 'https://github.com/jmpompeo/unit-test-improvements',
    order: 2,
  },
  {
    slug: 'joeypcodes',
    title: 'Joey P Codes Portfolio',
    summary:
      'This Astro + Tailwind portfolio highlighting Azure-focused automation work and technical writing.',
    role: 'Creator',
    tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'Netlify'],
    tags: ['Web', 'DevOps'],
    outcomes: [
      'Content-first Astro architecture keeps the site fast and low maintenance.',
      'GitHub Actions pipeline runs build and dependency audits on every pull request.',
      'Markdown-driven posts and projects make updates easy without a CMS.',
    ],
    github: 'https://github.com/jmpompeo/joeypcodes',
    order: 3,
  },
  {
    slug: 'pregnancytracker',
    title: 'Pregnancy Tracker',
    summary:
      'This Vite & Tailwind Typescript focused app allows people to track pregnancy.',
    role: 'Creator',
    tech: ['Vite', 'TypeScript', 'Tailwind CSS', 'Netlify'],
    tags: ['Web', 'DevOps'],
    outcomes: [
      'Content-first Vite architecture keeps the site fast and low maintenance.',
      'GitHub Actions pipeline runs build and dependency audits on every pull request.',
      'Markdown-driven posts and projects make updates easy without a CMS.',
    ],
    github: 'https://github.com/jmpompeo/pregnancy-tracker',
    order: 4,
  }
];
