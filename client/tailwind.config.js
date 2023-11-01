/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",

  theme: {
    extend: {},

    colors: {
      yellow: "#FFB81C",
      yellow_2: "rgba(255, 184, 28, 0.48)",
      blue: "#3C5896",
      black: "#000000",
      white: "#fff",
      background_shade_2: "rgba(219, 219, 219, 1)",
      background_shade: "rgba(220, 220, 220, 0.3)",
      dark_1: "#121212",
      dark_2: "#212121",
      dark_3: "#535353",
      dark_4: "#b3b3b3",
      red: "RGB(220, 53, 69)",
    },
  },
  plugins: [],
};
