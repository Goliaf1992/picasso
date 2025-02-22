import type { Config } from "tailwindcss";

export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Основной шрифт
        heading: ["Montserrat", "sans-serif"], // Шрифт для заголовков
      },
      
    },
  },
  plugins: [],
} satisfies Config;
