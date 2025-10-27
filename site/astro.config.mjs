import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://docs.  astro.build/en/reference/configuration-reference/
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    drafts: false,
    syntaxHighlight: 'shiki',
    shikiConfig: {
      themes: {
        light: 'github-light-default',
        dark: 'github-dark-default',
      },
      wrap: true,
    },
  },
  server: {
    host: true,
  },
});
