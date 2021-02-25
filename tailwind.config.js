module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tearLight: '#38B2AC',
        tearDark: '#004340',

        Silver: "#E0E0E0",
        lightSilver: "#FAFAFA",

        grayLight: "#BDBDBD",
        grayMedium: "#7B7F82",
        grayDark: "#5C5C5C",

        lightBlack: "#212121",
        baseWhite: '#F4F9F9',
        darkBlack: '#212121'

      },
      fontFamily: {
        sans: ['Roboto']
      },
      borderRadius: {
        'custom': '4px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
