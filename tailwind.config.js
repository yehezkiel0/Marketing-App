/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b3286",
          light: "#5245b1",
          dark: "#30286f",
        },
        background: {
          DEFAULT: "#F3F4F6", // Light gray background
          paper: "#FFFFFF",
          start: "#232041", // Keeping old bg variables just in case
          mid: "#6C64B5",
          end: "#857CB D",
        },
        saas: {
          text: {
            main: "#1F2937", // Gray 800
            secondary: "#6B7280", // Gray 500
          },
          green: "#10B981",
          red: "#EF4444",
          blue: "#3B82F6",
        },
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Nunito", "sans-serif"],
      },
      fontWeight: {
        hairline: 100,
        "extra-light": 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        "extra-bold": 800,
        black: 900,
      },
      animation: {
        "scale-in": "scaleIn 0.2s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
