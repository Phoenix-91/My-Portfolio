import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { bg: "#0a0a0a", accent: "var(--accent)" }, fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"] } } },
} satisfies Config;
