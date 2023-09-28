/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Poppins"', "sans-serif"],
    },
    extend: {
      colors: {
        "primary-cyan": "hsl(180, 66%, 49%)",
        "primary-cyan-hover": "#7ee2e2",
        "primary-dark-violet": "hsl(257, 27%, 26%)",
        "secondary-red": "hsl(0, 87%, 67%)",
      },
    },
  },
  plugins: [],
};
