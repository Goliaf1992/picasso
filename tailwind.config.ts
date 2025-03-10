import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customPurple: "#661c71",
        customPurpleLight: "#8e2685",
        textLight: "#f3f4f6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Основной шрифт
        heading: ["Montserrat", "sans-serif"], // Шрифт для заголовков
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "fade-in-delay": "fadeIn 1.5s ease-in-out", // версия с задержкой
      },
    },
  },
  plugins: [],
} satisfies Config;
