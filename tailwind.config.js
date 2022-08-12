/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
    aspectRatio: {
      // defaults to {}
      none: 0,
      square: [1, 1], // or 1 / 1, or simply 1
      "16/9": [16, 9], // or 16 / 9
      "4/3": [4, 3], // or 4 / 3
      "21/9": [21, 9], // or 21 / 9
    },
    variants: {
      aspectRatio: ["responsive"], // defaults to ['responsive']
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
