module.exports = {
  mode: "jit",
  content: ["./src/*.{html,js,tsx}"],
  theme: {
    extend: {},
  },
  variant: {},
  plugins: [require("@tailwindcss/forms")],
};
