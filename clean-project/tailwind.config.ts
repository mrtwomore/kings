import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
        light: "var(--light-color)",
        dark: "var(--dark-color)",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        "open-sans": ["var(--font-open-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
