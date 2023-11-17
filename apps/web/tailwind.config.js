/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fcdd6c',
        'primary-hover': '#eeca48',
        'text-color': '#d0d0d0',
      }
    },
  },
  plugins: [
    
  ],
}