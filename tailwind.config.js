/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // If using Next.js App Router
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF9E3',
        warmyellow: '#FFD851',
        darkbrown: '#222112',
      },
    },
  },
  plugins: [],
}
