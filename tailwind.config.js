/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2F80ED",
        lightBlue: "#97BEF4",
        background: "#FAFAFB",
        green: "#219653",
        "gray-2": "#4F4F4F",
        "gray-3": "#828282",
        "gray-4": "#BDBDBD",
        "gray-5": "#F6F8FB",
        "gray-6": "#F2F2F2",
        "gray-7": "#E0E0E0",
      },
      keyframes: {
        loading: {
          "0%": { width: "0%", left: "0%" },
          "100%": { width: "100%", left: "100%" },
        },
      },
      animation: {
        loading: "loading 1s linear infinite",
      },
    },
  },
  plugins: [],
};
