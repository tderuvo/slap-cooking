/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slap: {
          black:  '#0d0a07',
          dark:   '#1a1510',
          card:   '#1e1912',
          orange: '#ff4500',
          deep:   '#cc3700',
          gold:   '#f5a623',
          cream:  '#faf5ee',
          muted:  '#b5a898',
          red:    '#e8271a',
        },
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.18'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
