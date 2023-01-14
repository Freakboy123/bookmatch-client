/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ChivoMono: ["Chivo Mono", "monospace"],
        Montserrat: ["Montserrat", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
