/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-color": "rgb(var(--accent-color) / <alpha-value>)",
        "accent-color-light": "rgb(var(--accent-color-light) / <alpha-value>)",
        "shade-900": "rgb(var(--shade-900) / <alpha-value>)",
      },
      keyframes: {
        "move-wave": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(var(--wave-tile-width))" },
        },
      },
      animation: {
        "move-wave": "move-wave 2s linear infinite",
      },
    },
  },
  plugins: [],
};
