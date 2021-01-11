module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Overpass", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        violet: "#0B1622",
        gray: "rgb(201, 215, 227)",
        blue: "#3577FF",
        "violet-800": "#152232",
        "gray-800": "rgb(173, 192, 210)",
        "gray-700": "rgb(139, 160, 178)",
        white: "#E5EBF1",
        "white-800": "#FBFBFB",
        black: "#26343F",
        "black-800": "#404E5C",
        "black-700": "#647380",
        "white-neutral": "#FFF",
      },
      spacing: {
        "108": "34rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
