/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "640px" },
        // => @media (min-width: 640px) { ... }

        md: { max: "1024px" },
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  plugins: [],
};
