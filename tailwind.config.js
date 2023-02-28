/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          a: {
            color: {
              light: "text-gray-700",
              dark: "text-white",
            },
            textDecoration: "underline",
          },
          "a:hover": {
            color: {
              light: "text-gray-900",
              dark: "text-gray-300",
            },
            textDecoration: "none",
          },
        },
      }),
    },
  },

  variants: {
    extend: {
      // Enable the hover variant for the color property
      color: ["hover"],
    },
  },
  plugins: [],
  darkMode: "class",
};
