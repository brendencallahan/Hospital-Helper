/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '1/2w': '50vw',
        '1/3w': '33.333vw',
        '1w': '100vw',
        '1/2h': '50vh',
        '1/3h': '33.333vh',
        '1/4h': '25vh',
      }
    },
  },
  plugins: [],
}