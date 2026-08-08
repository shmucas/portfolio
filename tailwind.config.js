/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['DM Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      colors: {
        // Warm black ground. Amber is reserved for genuinely live state only.
        ink: {
          950: '#100e0c', // page ground
          900: '#1a1714', // raised surface
          800: '#2b2622', // hairline border
          700: '#38322c', // stronger border
          600: '#4f473f', // faintest text
          500: '#6d655d', // muted text
          400: '#a09890', // secondary text
          300: '#d6cec6', // body text
          100: '#ece7e1', // emphasis
          50: '#f7f4f0', // headings
        },
      },
    },
  },
  plugins: [],
}
