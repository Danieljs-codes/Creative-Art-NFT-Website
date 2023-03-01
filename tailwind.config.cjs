/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        canela_trial: ['canela_trial', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#D3F85A',
        secondary: '#131E3A',
        tertiary: '#FFFFFD',
        accent: '#090F1D',
      },
      screens: {
        xxl: '1400px',
      },
    },
  },
  plugins: [],
};
