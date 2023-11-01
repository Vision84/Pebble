/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'pebble-blue': {
          DEFAULT:'#0087fa',
          'light': '#00aafd',
          'dark': '#005df4'
        },
        'bg': {
          'light': '#fafafa',
          'dark': '#17181a',
        },
        'off-white': '#f0f1f2',
      },
    },
  },
  plugins: [],
}

