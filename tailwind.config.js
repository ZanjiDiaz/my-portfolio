/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor:{
        'txtColor':'#232320',
      },
      fontFamily:{
        Poppins: ['Poppins', 'sans-serif'],
      },
      backgroundColor:{
        'primary': '#111111',
      },
      height:{
        'halfh': '50vh',
      },
      width:{
        'halfw': '50vw',
      },
      animation: {
        text: 'text 5s ease infinite',
  
      },

      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      
      },
      
    },
  },
  plugins: [],
}