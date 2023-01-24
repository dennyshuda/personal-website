/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      },
    },
  },
  plugins: [],
};
