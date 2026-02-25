import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        'yips-pink':       '#ff1493',
        'yips-yellow':     '#ffe135',
        'yips-blue':       '#89cff0',
        'yips-input-pink': '#ffccff',
        accent: {
          DEFAULT: '#6366f1',
          hover: '#4f46e5',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
        invert: {
          css: {
            '--tw-prose-body': 'rgb(209 213 219)',
            '--tw-prose-headings': 'rgb(249 250 251)',
            '--tw-prose-lead': 'rgb(156 163 175)',
            '--tw-prose-links': '#ff1493',
            '--tw-prose-bold': 'rgb(249 250 251)',
            '--tw-prose-counters': 'rgb(156 163 175)',
            '--tw-prose-bullets': 'rgb(75 85 99)',
            '--tw-prose-hr': 'rgb(55 65 81)',
            '--tw-prose-quotes': 'rgb(249 250 251)',
            '--tw-prose-quote-borders': '#ff1493',
            '--tw-prose-captions': 'rgb(156 163 175)',
            '--tw-prose-code': '#89cff0',
            '--tw-prose-pre-code': 'rgb(209 213 219)',
            '--tw-prose-pre-bg': 'rgb(17 24 39)',
            '--tw-prose-th-borders': 'rgb(55 65 81)',
            '--tw-prose-td-borders': 'rgb(31 41 55)',
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
