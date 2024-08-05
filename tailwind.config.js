/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#55D6BE",
        secondary: "#6c757d",
        success: "#198754",
        info: "#0dcaf0",
        warning: "#ffc107",
        danger: "#dc3545",
        light: "#F7FAFC",
        dark: "#2A303C",
        primaryDark: "#242933",
      },
    },
  },
  plugins: [
  ],
  darkMode: "class"
}
