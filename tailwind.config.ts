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
          DEFAULT: "#2563EB", // Modern blue
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#2563EB",
          600: "#1D4ED8",
          700: "#1E40AF",
          800: "#1E3A8A",
          900: "#1E3A8A",
        },
        accent: {
          DEFAULT: "#3DBF7A", // Green from logo
          50: "#E8F8F0",
          100: "#D1F1E1",
          200: "#A3E3C3",
          300: "#75D5A5",
          400: "#47C787",
          500: "#3DBF7A",
          600: "#2FA866",
          700: "#219152",
          800: "#137A3E",
          900: "#05632A",
        },
        blue: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          dark: "#1E40AF",
        },
        green: {
          DEFAULT: "#3DBF7A",
          light: "#47C787",
          dark: "#2FA866",
        },
        background: {
          DEFAULT: "#FAFAFA",
          light: "#FFFFFF",
        },
        text: {
          DEFAULT: "#1F2937",
          light: "#6B7280",
          lighter: "#9CA3AF",
        },
        // Legacy colors for backward compatibility
        navy: {
          DEFAULT: "#1B2951",
          900: "#11163F",
        },
        teal: {
          DEFAULT: "#12A5AD",
          500: "#12A5AD",
        },
        charcoal: {
          DEFAULT: "#2D2D2D",
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
