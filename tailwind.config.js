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
        secondary: "#5D8F27",
        link: '#23BDFF',
        gray: '#D9D9D9',
        chartColor1: "#CD1C1C",
        chartColor2: "#294077",
        chartColor3: "#ED7547",
        chartColor4: "#93471B",
        chartColor5: "#85B6FF",
        chartColor6: "#FBD203",
        chartColor7: "#A3A3A3",
        chartColor8: "#4ECB71",
      },
      fontFamily: {
        light: 'Roboto_300Light',
        regular: 'Roboto_400Regular',
        semibold: 'Roboto_500Medium',
        bold: 'Roboto_700Bold',
      }
    },
    borderRadius: {
      'small': 8,
      'medium': 32,
      'large': 64,
    },
  },
  plugins: []
}

