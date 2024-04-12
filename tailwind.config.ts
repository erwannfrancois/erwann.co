import type { Config } from "tailwindcss";

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
      fontSize: {
        xs: ["14px", "16px"],
        sm: ["16px", "22px"],
        base: ["18px", "24px"],
        lg: ["22px", "28px"],
        xl: ["24px", "32px"],
        display: ["48px", "54px"],
      },
      colors: {
        border: {
          DEFAULT: "rgb(var(--border) / <alpha-value>)",
          secondary: "rgb(var(--border-secondary) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "rgb(var(--surface-default) / <alpha-value>)",
          inverse: "rgb(var(--surface-inverse) / <alpha-value>)",
          secondary: "rgb(var(--surface-secondary) / <alpha-value>)",
          accent_primary: "rgb(var(--surface-accent-primary) / <alpha-value>)",
          accent_secondary:
            "rgb(var(--surface-accent-secondary) / <alpha-value>)",
        },
        foreground: {
          DEFAULT: "rgb(var(--foreground-default) / <alpha-value>)",
          inverse: "rgb(var(--foreground-inverse) / <alpha-value>)",
          secondary: "rgb(var(--foreground-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--foreground-tertiary) / <alpha-value>)",
          on_accent: "rgb(var(--foreground-on-accent) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
} satisfies Config;

export default config;
