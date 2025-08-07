// tailwind.config.js
module.exports = {
  darkMode: 'class', // <-- Important: enables class-based dark mode
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // adjust based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'], // Optional if you're using the Rubik font
      },
    },
  },
  plugins: [],
}
