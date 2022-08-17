/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '1/2w': 'max(185px, 50vw)',
        '1/3w': 'max(185px, 33.333vw)',
        '1w': 'max(185px, 100vw)',
        '1/2h': 'max(185px, 50vh)',
        '1/3h': 'max(185px, 33.333vh)',
        '1/4h': 'max(185px, 25vh)',
      }
    },
  },
  plugins: [],
}