/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s infinite',
      },
      fontFamily: {
        Archivo: ['Archivo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        clashDisplay: ['clash-display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
