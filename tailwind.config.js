/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        greyDark: '#CFCFCF',
        blueDark: '#7FB5FF',
        pinkDark: '#F178B6',
        orangeDark: '#F2994A',
        greenDark: '#27AE60',
        greyLight: '#F9F9F9',
        blueLight: '#9EC5FA',
        pinkLight: '#FEF0F6',
        orangeLight: '#FAEBBD',
        greenLight: '#A6D5BA'

      }
    }
  },
  plugins: []
}
