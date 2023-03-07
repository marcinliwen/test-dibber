/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      maxWidth: {
        narrow: "39ch",
      },
      fontFamily: {
        serif: ["DibberStabilGrotesk", "sans-serif"],
      },
      fontSize: {
        h1: ["100px", "100px"],
      },
      colors: {
        primary: {
          100: "#F8F7EF",
          200: "#C2F291",
          300: "#2F991E",
          400: "#094F0C",
          500: "#EAFADA",
          600: "#B5F484",
        },
        secondary: {
          100: "#F1F4F0",
          200: "#D1DCCF",
          300: "#E5E0C3",
          400: "#A79B42",
        },
        neutral: {
          100: "#F8F7EE",
          200: "#EFEBD9",
          300: "#E5E0C3",
          400: "#F0F4F0",
        },
        educational: {
          play: "#C50C7B",
          maths: "#2961CE",
          social: "#DF2839",
          language: "#FF7647",
          nature: "#2B8C27",
          creative: "#671BB2",
          movement: "#35BCB5",
        },
      },
      borderRadius: {
        r_20: "1.25rem",
      },
      transitionTimingFunction: {
        morph: "cubic-bezier(0.53, 0.00, 0.43, 1.00)",
      },
      screens: {
        desk: "1140px",
      },
    },
  },
  plugins: [],
};
