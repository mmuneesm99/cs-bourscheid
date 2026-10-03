import type { Config } from "tailwindcss"

export default {
  theme: {
    extend: {
      fontFamily: {
        display: ["Unbounded", "sans-serif"],
        sans: ["Manrope", "sans-serif"]
      },
      colors: {
        brand: {
          orange: "#D71920",
          orangeHover: "#B01018",
          green: "#121212",
          greenLight: "#1E1E1E",
          dark: "#0D0E12",
          grayBg: "#F8FAFC"
        }
      }
    }
  }
} satisfies Config
