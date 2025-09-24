/** @type {import('tailwindcss').Config} */
// tailwind.config.js
import { fontFamily } from "tailwindcss/defaultTheme";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        instrument: ['"Instrument Sans"', "sans-serif"],
      },
      colors: {
        primary: "#F21D97",
        desc: "#2B2B2B",
      },
    },
  },
  plugins: [],
};
