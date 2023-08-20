/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-beaver': 'rgb(158, 127, 102)',
        'neo-cod-gray': 'rgb(17, 17, 17)',
        'neo-mirage': 'rgb(23, 25, 43)',
        'neo-ebony-clay': 'rgb(36, 43, 55)',
        'neo-shuttle-gray': 'rgb(92, 103, 121)',
        'neo-btn': 'rgb(76, 76, 76)',
        'neo-inactive': 'rgb(142, 142, 142)',
        'neo-active': 'rgb(17, 17, 17)',
        'neo-error': 'rgb(181, 73, 73)',
      },
      fontFamily: {
        'spartan': 'League Spartan',
      },
      screens: {
        'TB': '768px',
        'DT': '1440px',
      }
    },
  },
  plugins: [],
}