/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'bannar1': "url('./assets/1.jpg')",
        'bannar2': "url('./assets/2.jpg')",
        'bannar3': "url('./assets/3.jpg')",
        'bannar': "url('./assets/bannar.jpg')",

        
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

