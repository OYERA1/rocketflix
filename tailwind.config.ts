import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gradient: {
          1: "hsl(var(--color-gradient-1) / <alpha-value>)",
          2: "hsl(var(--color-gradient-2) / <alpha-value>)",
        },
        bkg: {
          primary: "hsl(var(--color-bkg) / <alpha-value>)",
        },
        blur: {
          primary: "hsl(var(--color-blur-primary) / <alpha-value>",
        },
        content: "rgb(var(--color-text-1) / <alpha-value>)",
      },
      animation: {
        "spin-slower": "spin 35s ease infinite",
        "spin-slow": "spin 25s ease-in-out infinite reverse",
      },
    },
  },
  plugins: [],
};

export default config;
