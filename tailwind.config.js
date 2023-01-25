/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "white-bgc":"#F7F7F9",
        "purple-elements":"#7445FB",
        "notification":"#EA4D4D",
        "black-text":"#0A041C",
        "grey-text":"rgba(10, 4, 28, 0.4)",
        "green-text":"#2DC78F",
      },
      width: {
        "16.5":"264px",
      }
    },
  },
  plugins: [],
}
