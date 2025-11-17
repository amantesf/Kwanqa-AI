/** @type {import('tailwindcss').Config} */
module.exports = {
  // Use the `dark` class on <html> to control dark mode
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        kwanqa: {
          cream: '#f3e7d1',
          creamSoft: '#f9f0e1',
          creamBorder: '#e0cfad',
          darkBg: '#020617',
          accentTeal: '#0f766e',
          accentBlue: '#0369a1',
        },
      },
    },
  },
  plugins: [],
};