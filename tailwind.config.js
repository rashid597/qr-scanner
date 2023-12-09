/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit"],
      },
      colors: {
        "p-white": "hsl(0, 0%, 100%)",
        "p-light-gray": "hsl(212, 45%, 89%)",
        "p-grayish-blue": "hsl(220, 15%, 55%)",
        "p-dark-blue": "hsl(218, 44%, 22%)",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
