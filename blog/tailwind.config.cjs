/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    screens:{
      sm: "600px",
      md: "768px",
      lg: "1060px",
      xl: "1700px",
    }
  },
  plugins: [],

}
