/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        full: "50%",
      },
      boxShadow: {
        sm: "box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
