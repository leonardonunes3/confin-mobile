/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        primary: '#4A7729',
        link: '#23BDFF'
      },
      fontFamily: {
        light: 'Roboto_300Light',
        regular: 'Roboto_400Regular',
        semibold: 'Roboto_500Medium',
        bold: 'Roboto_700Bold',
      }
    },
    borderRadius: {
      'medium': '32px',
      'large': '64px',
    },
  },
  plugins: []
}

