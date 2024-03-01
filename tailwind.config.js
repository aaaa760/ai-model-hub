/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#4ABDF8',
      },
      fontFamily: {
        anta: ['Anta' , 'sans-serif'],
      },
    },
  },
  plugins: [],
}