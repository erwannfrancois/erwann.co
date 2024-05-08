import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        primary: ["tenon", "sans-serif"],
        mono: ["antarctican-mono", "sans-serif"],
      },
      fontSize: {
        lg: ["22px", "28px"],
        xl: ["24px", "32px"],
        display: ["36px", "46px"],
      },
      colors: {
        border: {
          DEFAULT: "rgb(var(--border) / <alpha-value>)",
          secondary: "rgb(var(--border-secondary) / <alpha-value>)",
          primary: "rgb(var(--border-primary) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "rgb(var(--surface-default) / <alpha-value>)",
          inverse: "rgb(var(--surface-inverse) / <alpha-value>)",
          primary: "rgb(var(--surface-primary) / <alpha-value>)",
        },
        foreground: {
          DEFAULT: "rgb(var(--foreground-default) / <alpha-value>)",
          inverse: "rgb(var(--foreground-inverse) / <alpha-value>)",
          secondary: "rgb(var(--foreground-secondary) / <alpha-value>)",
          primary: "rgb(var(--foreground-primary) / <alpha-value>)",
          on_primary: "rgb(var(--foreground-on-primary) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
} satisfies Config;

export default config;
