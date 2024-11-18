/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      screens: {
        'xxl': '2560px', // Custom breakpoint for large screens (e.g., 4K TVs)
      },
    },
  },
  plugins: [],
}
