/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        iranSans: ["IRANSans", "sans-serif"],
        iranSansFaNum: ["IRANSans_FarsiNumeral", "sans-serif"],
      },
    },
  },
  plugins: [],
}

