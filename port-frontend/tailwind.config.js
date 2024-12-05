/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Lora", "serif"],
        titleFont: ["Montserrat", "sans-serif"],
        welcome: ["Sacramento", "cursive"],
      },
      colors: {
        navColor: "rgb(0 0 0)",
        bodyColor: "#212428",
        grayText: "#c4cfde",
        lightText: "rgb(255 255 255)",
        highlightText: "rgb(103 232 249)",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        shadowTwo: "5px 5px 6px -1px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        grow: {
          "0%": { width: "0%", height: "0%" },
          "100%": { width: "60%", height: "60%" },
        },
      },
      animation: {
        grow: "grow 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
