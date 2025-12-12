/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#131313',
        secondary: '#DBFF1A',
        'primary-hover': '#1A1A1A',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
