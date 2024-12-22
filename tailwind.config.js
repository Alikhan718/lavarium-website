/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005B88', // 0 / 91 /136
        secondary: '#4C2600', // 100 / 33 / 0 / 47
        accent: '#8B9B69', // PANTONE COATED 74-69-C
        highlight: '#1A5173', // RAL 5019
        inverse: '#EDE4D6', // 237 / 228 / 214
        border: 'hsl(var(--border))',
      },
    },
  },
  plugins: [],
}

