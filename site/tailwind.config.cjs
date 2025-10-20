/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './src/content/**/*.{md,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          accent: '#2563EB',
          accentHover: '#1E40AF',
        },
        theme: {
          light: {
            background: '#FFFFFF',
            surface: '#F8FAFC',
            surfaceMuted: '#EEF2FF',
            text: '#101828',
            textMuted: '#475467',
            border: '#CBD5F5',
            focus: '#2563EB',
          },
          dark: {
            background: '#0B1120',
            surface: '#111827',
            surfaceMuted: '#1E293B',
            text: '#F4F6FB',
            textMuted: '#CBD5F5',
            border: '#334155',
            focus: '#93C5FD',
          },
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '45rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
