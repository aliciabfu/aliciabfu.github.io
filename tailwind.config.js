/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      header: ["Inter", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        back: "#ffffff",
        front: "#0f172a",
        lead: "#2563eb",
        "lead-text": "#ffffff",
        muted: "#64748b",
        line: "#e2e8f0",
        surface: "#f8fafc",
      },
      fontSize: {
        display: ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        headline: ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
