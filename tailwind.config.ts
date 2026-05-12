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
        brand: {
          50: "#f0f5ff",
          100: "#e0ebff",
          200: "#c2d5ff",
          300: "#93b4fd",
          400: "#6090fa",
          500: "#3b6ff5",
          600: "#2556e8",
          700: "#1d44d5",
          800: "#1e37ae",
          900: "#1e318a",
          950: "#172054",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "fade-up-delay-1": "fadeUp 0.5s ease-out 0.1s forwards",
        "fade-up-delay-2": "fadeUp 0.5s ease-out 0.2s forwards",
        "fade-up-delay-3": "fadeUp 0.5s ease-out 0.3s forwards",
        "fade-up-delay-4": "fadeUp 0.5s ease-out 0.4s forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
        "pulse-heart": "pulseHeart 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseHeart: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;