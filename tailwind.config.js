/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slap: {
          // Light-mode semantic tokens (inverted from original dark theme)
          black:  '#faf8f5',   // page background — warm white
          dark:   '#f0ebe5',   // footer / alt-section background
          card:   '#ffffff',   // card / surface background
          char:   '#faf6f2',   // callout box background
          smoke:  '#e5dfd8',   // border color
          orange: '#e05500',   // primary accent
          ember:  '#c14800',   // hover accent
          deep:   '#b83200',   // active / pressed
          gold:   '#c07800',   // amber gold (darkened for white-bg contrast)
          amber:  '#a06000',   // deep amber
          cream:  '#1c1917',   // primary text (inverted — was light cream, now near-black)
          muted:  '#6b6460',   // secondary text
          warm:   '#9e8f85',   // tertiary / placeholder text
          red:    '#c41c10',   // red accent
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
