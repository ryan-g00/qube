/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#14b8a6',
          600: '#0d9488',
        },
        secondary: {
          500: '#64748b',
          600: '#475569',
        }
      },
    },
  },
  plugins: [],
};