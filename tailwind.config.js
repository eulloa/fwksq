const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      blue: '#031f30',
      gray: colors.gray,
      offwhite: '#fefbfb',
      transparent: 'transparent',
      white: colors.white,
    },
    extend: {},
  },
  variants: {
    textColor: ['dark', 'responsive', 'hover', 'focus'],
    backgroundColor: [
      'responsive',
      'hover',
      'disabled',
      'focus',
      'odd',
      'even',
      'checked',
      'dark',
    ],
  },
  plugins: [],
};
