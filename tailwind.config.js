/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['open-sans']
    },
    container : {
      center: true,
      padding: '16px',
    },
    extend: {
      screen : {
        '2xl' : '1320px',
      },
      scale : {
        '175' : '1.75',
      },
    },
  },
  plugins: [],
}

