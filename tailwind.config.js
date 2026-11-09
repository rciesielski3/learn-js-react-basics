/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  safelist: [
    'bg-blue-600',
    'bg-gray-600',
    'bg-orange-600',
    'bg-purple-600',
    'bg-slate-600',
    'bg-slate-800',
    'bg-yellow-600',
    'text-orange-600',
    'text-yellow-600',
    'text-purple-600',
    'gap-6',
    'mt-2',
    'my-5',
    'py-2',
    'pt-10'
  ],
  theme: {
    extend: {
      colors: {
        // Shared dark palette (matches the home page .jh tokens)
        jt: {
          bg: '#050608',
          surface: '#0b0d10',
          ink: '#eef3ef',
          muted: '#a3ada8',
          js: '#d7ff4a',
          react: '#38e1d0',
          next: '#ff9a4d'
        },
        // Per-section accent, set by PageShell via the --accent CSS variable
        accent: 'var(--accent)'
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 5px rgba(0, 0, 0, 0.6)'
        },
        '.text-shadow-xl': {
          textShadow: '3px 3px 5px rgba(0, 0, 0, 0.75)'
        }
      });
    }
  ]
};
