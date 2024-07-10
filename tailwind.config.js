/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: "20px",
      },
      colors: {
        primary: {
          100: "#c9e4ca",
          200: "#87bba2",
          300: "#28666e",
        },
        dark: "#3b6064",
        body: "#364958",
        back: "#FAF8F5",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
