/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',

  theme: {
    extend: {
    },
    colors:{
        yellow : "#FFB81C",
        yellow_2 : "rgba(255, 184, 28, 0.48)",
        blue : "#3C5896",
        black : "#000000",
        white : "#fff",
        background_shade : "rgba(217, 217, 217, 1)",
        // background_shade_2: "rgba(0, 0, 0, 0.03)"
      },
  },
  plugins: [],
}
