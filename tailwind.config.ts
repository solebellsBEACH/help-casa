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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        text: "var(--text-color)",
        gray: {
          DEFAULT: "var(--gray)",
          dark: "var(--gray-dark)",
        },
        success: {
          DEFAULT: "var(--success)",
          dark: "var(--dark-success)",
        },
        danger: {
          DEFAULT: "var(--danger)",
          dark: "var(--dark-danger)",
        },
      },
    },
    colors: {
      "color": "var(--color)"
    }
  },
  plugins: [],
};
export default config;
