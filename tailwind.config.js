/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        colorPrincipal: "#1fb6ff",
        colorSecundario: "#C8E3F6",
        colorTerciario: "#F0F5FB",
        colorCuaternario: "#FAFAFA",
      },
      fontFamily: {
        nunito: ["Nunito","sans-serif"],
      }
    },
  },
  plugins: [],
};
