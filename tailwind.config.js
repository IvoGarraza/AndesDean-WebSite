/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Calibri', 'sans-serif'],
        'sans-italic': ['Calibri Italic', 'sans-serif'],
        'sans-bold': ['Calibri Bold', 'sans-serif'],
        'sans-bold-italic': ['Calibri Bold Italic', 'sans-serif'],
        OpenSans:['Open Sans']
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

