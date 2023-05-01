/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Overpass"],
    },
    colors: {
      "main-bg": "hsl(216, 12%, 8%)",
      "cont-bg": "hsl(213, 19%, 18%)",
      "star-bg": "hsl(211,19%,24%)",
      "ligth-blue": "#262E38",
      white: "#FFFFFF",
      "light-grey": "#969FAD",
      orange: "#FC7614",
      "dark-blue": "#262E38",
      "med-grey": "#7C8798",
    },
    gradientColorStops: {},
    extend: {
      width: {
        327: "327px",
        412: "412px",
        168: "168px",
      },
      padding: {
        5: "5px",
        514: "514px",
      },
    },
  },
  plugins: [],
};
