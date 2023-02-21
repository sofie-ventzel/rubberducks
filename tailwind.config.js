/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      'darkRed': '#4f000b',
      'warmRed': '#720026',
      'rosyPink': '#ce4257',
      'warmOrange': '#ff7f51',
      'darkYellow': '#ff9b54',
      },
  plugins: [],
  }
}