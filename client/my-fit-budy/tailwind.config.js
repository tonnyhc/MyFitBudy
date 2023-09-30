/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        sideNavAnimation: {
          "0%": { left: "100%" },
          "100%": { left: "0%" },
        },
      },
      animation: {
        sideNavAnimation:
          "sideNavAnimation .3s linear",
      },
      colors: {
        'primary-bg-dark': '#191B20',
        'primary-active-blue': '#3C7AB3'
      }
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
