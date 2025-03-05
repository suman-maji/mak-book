/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"], // Modern clean font
        montserrat: ["Montserrat", "sans-serif"], // Professional look
      },
      colors: {
        primary: "#6D28D9", // Indigo shade for buttons & highlights
        secondary: "#9333EA", // Purple tone for accents
        darkBg: "#1E1E2E", // Dark mode background
        lightBg: "#F8FAFC", // Light mode background
      },
      animation: {
        border: "borderMove 6s linear infinite",
      },
      keyframes: {
        borderMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundImage: {
        'gradient-border': "linear-gradient(90deg, #6D28D9, #9333EA, #6D28D9)",
      },
    },
  },
  plugins: [],
};
