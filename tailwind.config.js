/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#050505', // Deep Black
        secondary: '#FFFFFF', // White
        accent: '#FF3333', // Vibrant Red
        'accent-dark': '#CC0000', // Darker Red for hover
        surface: '#121212', // Slightly lighter black for cards
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        script: ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}