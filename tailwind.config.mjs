/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        gold:    '#f5c842',
        'gold-dim': '#c9a234',
        'bg':    '#0a1628',
        'bg-2':  '#0f1e35',
        'bg-3':  '#152540',
        'border':'#1e3a5f',
        muted:   '#4a6fa0',
        puck:    '#b388ff',
        'puck-dim': '#9c6fef',
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'twinkle':  'twinkle 3s ease-in-out infinite alternate',
        'float':    'float 6s ease-in-out infinite',
        'blink':    'blink 1s step-end infinite',
        'shimmer':  'shimmer 2s linear infinite',
      },
      keyframes: {
        twinkle:  { from: { opacity: 0.3, transform: 'scale(0.8)' }, to: { opacity: 1, transform: 'scale(1.2)' } },
        float:    { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        blink:    { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        shimmer:  { from: { backgroundPosition: '-200% 0' }, to: { backgroundPosition: '200% 0' } },
      },
    },
  },
};
