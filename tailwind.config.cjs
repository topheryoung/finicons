/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Space Grotesk", "system-ui", "sans-serif"],
      display: ["Syne", "sans-serif"],
    },
    colors: {
      lime: "#CAFB7C",
      black: "#1E141E",
      grey: "#C0C0C0",
      white: "#ffffff",
    },
    extend: {
      dropShadow: {
        lg: "2px 2px 0 rgba(202, 251, 124, 1)",
        xl: "4px 4px 0 rgba(30, 20, 30, 1)",
        xldark: "4px 4px 0 rgba(255, 255, 255, 1)",
        xlactive: "4px 4px 0 rgba(202, 251, 124, 1)",
      },
      colors: {
        lime: "#CAFB7C",
        black: "#1E141E",
        grey: "#C0C0C0",
        white: "#ffffff",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(124px, 1fr))",
      },
    },
  },
  plugins: [],
};
