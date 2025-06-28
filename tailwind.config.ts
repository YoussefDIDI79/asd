import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "#e5e7eb",
        background: "#ffffff",
        foreground: "#18181b"
      }
    },
  },
  plugins: [],
} satisfies Config 