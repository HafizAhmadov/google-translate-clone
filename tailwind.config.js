/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'theme-color': '#5F6368',
        'hover-color': '#F5F5F5',
        'blue':'#1967D2',
        'border-color': '#DADCE0'
      },
      fontSize:{
        '1.5xl': '1.375rem'
      },
      boxShadow:{
        'xl' : '0 0 16px rgba(0,0,0,.28)',
      },
      fontSize:{
        'xl': ['22px', '24px'],
      },
      fontFamily:{
        'sans': 'Roboto, Arial, sans-serif'
      }
    },
  },
  plugins: [],
}