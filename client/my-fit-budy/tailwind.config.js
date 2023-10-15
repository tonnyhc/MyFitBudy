/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // minHeight: {
    //   "4/5": "80%",
    // },
    // maxHeight: {
    //   "9/10": "90%",
    // },
    // width: {
    //   '9/10': "90%",
    // },
    transitionProperty: {
      translate: "translate",
      scale: "scale",
    },
    extend: {
      keyframes: {
        sideNavAnimation: {
          "0%": { left: "100%" },
          "100%": { left: "0%" },
        },
      },
      width: {
        "9/10": "90%",
      },
      maxHeight: {
        "9/10": "90%",
      },
      minHeight: {
        "4/5": "80%",
      },
      animation: {
        sideNavAnimation: "sideNavAnimation .3s linear",
      },
      colors: {
        "primary-bg-dark": "#00000",
        "primary-active-blue": "#3C7AB3",
        "button-red": "rgba(120, 38, 18,255)",
        "button-grey": "rgba(100, 100, 100, 0.76)",
        "grey-bg": "#3c3c3c",
        "nav-bg-dark": "#2c2c2c",
        "nav-pils-color": "#808080",
        "border-grey": "rgba(206, 206, 206, 1)",
        "light-grey": "#7F7E7E",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
