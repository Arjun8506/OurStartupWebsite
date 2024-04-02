/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        polygon: 'polygon(0 0, 100% 0%, 100% 100%, 0 90%)',
      },
      clipPath: {
        polygon: 'polygon(0 5%, 100% 0, 100% 95%, 0% 100%)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-polygon': {
          clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 90%)',
        },
        '.clip-polygon-2' : {
          clipPath: 'polygon(0 2%, 100% 0, 100% 99%, 0% 100%)',
        }
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}