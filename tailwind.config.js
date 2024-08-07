/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto':'repeat(auto-fit,minmax(200px ,1fr))'
      },
      animation:{
        spin_slow:'spin 6s linear infinite'
      },
      colors:{
        primarycolor:'#F9E0AE',
        browncolor:'#682C0E',
        darkorange:'#C24914',
        lightorange:'#FC8621',
      },
      boxShadow:{
        'black':'4px_4px_0_#000',
        'white':'4px_4px_0_#fff',
      },
      fontFamily:{
        body:['Poppins']
      }
    },

    darkMode:'selector'
  },
  plugins: [],
}

