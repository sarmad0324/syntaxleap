import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#16A3AD",
          50: "#E0F7F8",
          100: "#B3EBED",
          200: "#80DEE2",
          300: "#4DD1D7",
          400: "#26C7CE",
          500: "#16A3AD",
          600: "#128A93",
          700: "#0E6F77",
          800: "#0A555B",
          900: "#063A3F",
        },
        accent: {
          DEFAULT: "#31D0C9",
          50: "#E8F9F8",
          100: "#C5F0ED",
          200: "#9EE7E2",
          300: "#77DED7",
          400: "#50D5CC",
          500: "#31D0C9",
          600: "#28B5AF",
          700: "#1F9A95",
          800: "#167F7B",
          900: "#0D6461",
        },
        background: {
          DEFAULT: "#F7FAFB",
          light: "#FFFFFF",
        },
        text: {
          DEFAULT: "#0F153C",
          body: "#223042",
          light: "#5B7280",
          lighter: "#9CA3AF",
        },
        border: {
          DEFAULT: "#E2EEF0",
        },
        // Legacy colors for backward compatibility
        navy: {
          DEFAULT: "#0F153C",
          900: "#0A0F2A",
        },
        teal: {
          DEFAULT: "#16A3AD",
          500: "#16A3AD",
        },
        charcoal: {
          DEFAULT: "#223042",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        "plus-jakarta": ["var(--font-plus-jakarta)", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
