/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1080px",
    },
    extend: {
      colors: {
        primary: "#42A4F5",
        secondary: "#333233",
        darkBackground: "#23283E",
        primaryLight: "#444444",
        secondaryLight: "#3178B5",
        primaryDark: "#CDCDFF",
        secondaryDark: "#91A0D9",
      },
    },
  },
  plugins: [],
};
