/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./public/**/*.js"
  ],
  theme: {
    screens: {
      'xs': '300px',
      // => @media (min-width: 320px) { ... }
      'sm': '480px',
      // => @media (min-width: 480px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '976px',
      // => @media (min-width: 976px) { ... }
      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      container: {
        center: true,
        screens: {
          xs: '100%',
          sm: '100%', // Container takes full width up to the md breakpoint
          md: '100%', // Container continues to take full width up to the lg breakpoint
          lg: '100%', // Container still takes full width up to the xl breakpoint
          xl: '1920px', // Maximum width for the container at xl breakpoint and beyond
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["garden", "night", "cmyk"],
  },
}