/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontsize: {
        sm: "12px",
        md: "14px",
        lg: "16px",
        xl: "18px",
        twoXL: "20px",
        fourXL: "56px"

      },
      fontWeight: {
        sm: "400",
        md: "600",
        lg: "700",
      }
    },
  },
  plugins: [],
}