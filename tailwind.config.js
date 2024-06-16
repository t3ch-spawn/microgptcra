/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "-1200": { max: "1200px" },
      "-1100": { max: "1100px" },
      "-1024": { max: "1024px" },
      "-950": { max: "950px" },
      "-768": { max: "768px" },
      "-500": { max: "500px" },
    },
    extend: {
      fontFamily: {
        manrope: "Manrope",
        worksans: "Work Sans",
      },
      spacing: {
        sectionGap: "100px",
      },
    },
  },
  plugins: [],
};
