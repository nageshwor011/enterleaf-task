/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        mySecondPrimary: "#ADD8E6",
      },
    },
  },
  plugins: [],
};
