/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"
module.exports = {
  content: ["./src/component/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        60: "15rem",
        128: "30rem",
        200: "45rem",
        256: "64rem",
        300: "99rem",
        512: "128rem",
        40: "13rem",
        1024: "256rem",
        1920: "480rem",
      },
      colors: {
        gray: {
          100: "#B9B9B9",
        },
        fontFamily: {
          DoHyeon: ["DoHyeon"],
          sans: ["SF_HambakSnow", ...defaultTheme.fontFamily.sans],
        },

        boxshadow: {
          "text-shadow-lg": "10px 5px 10px 5px rgba(0,0,0,0.5)",
        },
      },
    },
  },
  plugins: [require("@designbycode/tailwindcss-text-shadow")],
}
