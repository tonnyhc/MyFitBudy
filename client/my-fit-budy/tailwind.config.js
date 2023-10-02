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
        'primary-bg-dark': '#00000',
        'primary-active-blue': '#3C7AB3',
        'button-red': 'rgba(120, 38, 18,255)',
        'grey-bg': "#3c3c3c",
        'nav-bg-dark': "#2c2c2c",
        'nav-pils-color': "#808080"
      }
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
