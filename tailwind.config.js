/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        primary: "#0F0C29",
        lightPrimary: "#0C2E82",
        lightText: "#F7FAFC",
        darkText: "#333333",
        CTAbuttonGreen: "#10B981",
        CTAbuttonPink: "#FF385C",
        secondary: "#EDEDED",
        lightBackground: "",
        linearlight: "#59599B",
        linearmid: "#24243E",
        lineardark: "#0F0C29",
        border:"#4e03a9"  },
    },
  },
  plugins: [],
};
