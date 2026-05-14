/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#030306",
        ink: "#0a0a0f",
        mist: "#12121a",
        frost: "rgba(255, 255, 255, 0.06)",
        line: "rgba(255, 255, 255, 0.08)",
        glow: {
          cyan: "rgba(120, 220, 255, 0.45)",
          violet: "rgba(160, 120, 255, 0.5)",
          rose: "rgba(255, 140, 180, 0.35)",
        },
      },
      fontFamily: {
        display: ["Syne", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #030306 85%), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "64px 64px",
      },
      animation: {
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
        drift: "drift 18s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.75", transform: "scale(1.05)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(3%, -2%) rotate(1deg)" },
          "66%": { transform: "translate(-2%, 2%) rotate(-1deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};
