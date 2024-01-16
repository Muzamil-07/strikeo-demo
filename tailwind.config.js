/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#201F20',
        secondary: '#9F9F9F',
        tertiary: '#B88E2F',
        theme_primary: '#2E2E2E',
        theme_secondary: '#969696',
        theme_tertiary: '#3C3C3C',
        theme_quaternary: '#E2E2E2'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [import('flowbite/plugin')]
}
