module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      Kaushan: ["Kaushan Script"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
