module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        "1/2": "50%",
        full: "100%",
      },
      border: {
        thin: "1px solid",
      }
    },
  },
  plugins: [],
}
