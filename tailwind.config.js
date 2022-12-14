/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  mode: "jit",
  darkMode: "className",
  content: [
    "./pages/**/*.js",
    "./components/**/*.js",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
