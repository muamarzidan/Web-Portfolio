/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xx': "320px",
        'xz': "375px",
        'xm': "428px",
      },
      container: {
        center: true,
        screens: {
          'xx': "320px",
          'xz': "375px",
          'xm': "428px",
          'xs': "520px",
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1286px",
          '2xl' : "1540px",
        },
      },
      colors: {
        'primary': '#000957',
        'secondary': '#344CB7',
        'tertiary': '#FFEB00',
      },
    },
  },
  plugins: [],
}