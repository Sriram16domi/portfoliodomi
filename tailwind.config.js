/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      grayscale:{
        70:'70%',
      },
      height:{
        '70':'75%'
      }
  
    },
    fontFamily:{
      'hero-font':'Marcellus'
    },
    
  },
  plugins: [],
}

