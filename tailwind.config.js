// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#f37028',
          400: '#f48a4f',
        }
      },
      screens: {
        'xxxl': '1600px',
      }
    },
  },
  plugins: [],
}