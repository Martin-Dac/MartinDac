/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'backgroundGif': "url('/public/background.gif')",
      },
      keyframes: {
        'writer': {
          'from':{
            width: '0ch'
          },
          'to':{
            width: '25ch'
          },
        },
      },
      animation:{
        'writer': 'writer 2.5s steps(52, start) 0.4s normal both'
      },
      fontFamily:{
        OpenSans: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
