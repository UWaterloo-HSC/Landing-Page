/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#ede8d0",
        lightText: "#b82204",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
      },
    },
  },
  plugins: [],
};
