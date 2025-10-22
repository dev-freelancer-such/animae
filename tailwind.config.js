/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Custom max-width breakpoints
        "xs-max": { max: "479px" },
        "sm-max": { max: "639px" },
        "md-max": { max: "767px" },
        "lg-max": { max: "1023px" },
        "xl-max": { max: "1279px" },

        // Custom min-width breakpoints
        "xs-min": "480px",
        "sm-min": "640px",
        "md-min": "768px",
        "lg-min": "1024px",
        "xl-min": "1280px",
        "2xl-min": "1536px",
      },
      flexBasis: {
        "1/7": "14.285714%",
        "1/8": "12.5%",
        "2/7": "28.571429%",
        "3/7": "42.857143%",
        "4/7": "57.142857%",
        "5/7": "71.428571%",
        "6/7": "85.714286%",
      },
    },
  },
  plugins: [],
};
