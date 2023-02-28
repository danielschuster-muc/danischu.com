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
      colors: {
        light: {
          link: "text-gray-700", // light mode link color
          "link-hover": "text-gray-900", // light mode link color on hover
        },
        dark: {
          link: "text-white", // dark mode link color
          "link-hover": "text-gray-300", // dark mode link color on hover
        },
      },
      global: {
        a: {
          color: "inherit", // Inherit text color from parent element
          textDecoration: "underline", // Add underline
          transitionProperty: "color", // Animate color change on hover
          transitionDuration: "150ms", // Duration of the color transition
          "&:hover": {
            color: "var(--tw-text-opacity)", // Use the default text color on hover
          },
          // Define light and dark mode styles for the link
          "&.dark": {
            color: "light.link",
            "&:hover": {
              color: "light.link-hover",
            },
          },
          "&.light": {
            color: "dark.link",
            "&:hover": {
              color: "dark.link-hover",
            },
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
