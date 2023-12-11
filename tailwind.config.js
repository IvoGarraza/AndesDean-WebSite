/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Calibri', 'sans-serif'],
        'sans-italic': ['Calibri Italic', 'sans-serif'],
        'sans-bold': ['Calibri Bold', 'sans-serif'],
        'sans-bold-italic': ['Calibri Bold Italic', 'sans-serif'],
        OpenSans:['Open Sans']
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '7': 'repeat(7, minmax(0, 1fr))',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      }
    },
    colors:{
      primary:'#052A49',
      secondary:'#A22224',
      tertiary:'#69686C',
      nav: 'rgba(28,28,28,1)'
    },
    backgroundImage:{
      services: "url('./assets/images/Imagenes/servicios.jpg')",
      why: "url('./assets/images/Imagenes/gif.gif')"
    }

  },
  plugins: [],
}

