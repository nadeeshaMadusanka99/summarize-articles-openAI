/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi" ,"sans-serif"],
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}