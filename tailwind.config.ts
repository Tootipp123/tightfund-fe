import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  // darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: { max: "385px" },
      ...defaultTheme.screens,
    },
    fontFamily: {
      cormorant: ["Cormorant", "serif"],
      inria: ["Inria", "serif"],
      work: ["Work", "sans"],
      // 'body': 'BlinkMacSystemFont',
      // 'sans': 'Helvetica, Arial, sans-serif',
      // 'mono': 'Times New Roman'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-main": "#FAF3EA",
        "light-secondary": "#F5EADC",
        "light-tertiary": "#BCB2A4",
        "dark-main": "#0C3C26",
      },
    },
  },
  plugins: [],
};
export default config;
