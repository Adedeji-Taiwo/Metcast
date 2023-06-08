/** @type {import('tailwindcss').Config} */
import formsPlugin from "@tailwindcss/forms";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4264fb",
        "primary-light": "#e7eef9",
        secondary: "#57a7dd",
        "secondary-dark": "#0d75bc",
        blackish: "#333333",
        "dashboard-bg": "#fafdff",
        "dashboard-navy": "#1d1d41",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      screens: {
        xs: "400px",
        xl: "1536px",
      },
      boxShadow: {
        customDesktop:
          "0px 5.44px 5.44px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        customMobile: "0px 3.58px 3.58px 0px rgba(0, 0, 0, 0.25)",
        dbButtonActive: "0px 12.34px 37.01px rgba(136, 51, 255, 0.1)",
        dbButton: "0px 2.47px 6.17px rgba(38, 51, 77, 0.03)",
      },
      height: {
        "calc-100vh-4rem": "calc(100vh - 4rem)",
      },
    },
  },
  plugins: [formsPlugin],
};
