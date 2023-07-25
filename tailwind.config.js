/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent:"transparent",
      teal: {
        light: "#2DD4BF",
        dark: "#12ae9d"
      },
      gray: {
        light: "#F1F5F9",
        dark: "#E2E8F0"
      },
      red: {
        light: "#F87171",
        dark: "#EF4444"
      },
      text: {
        light: "#d0d4d7",
        dark: "#9ca3a9"
      },
      transparents: {
        dark: "rgba(0,0,0,0.83)",
        darkest:"rgb(0,0,0)"
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

