/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cid-orange': '#F05A22',
        'cid-dark': '#121212',
        'cid-gray': '#1E1E1E',
      },
    },
  },
  plugins: [],
}