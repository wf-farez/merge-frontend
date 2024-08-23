/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        //'custom-gray': 'rgb(25, 25, 25)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      height: {
        '90vh': '87vh',
      }
    },
  },
  plugins: [],
}