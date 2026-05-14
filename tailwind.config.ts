import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ep: {
          black: "#120807",
          brown: "#27100B",
          orange: "#F26A1B",
          amber: "#FFB23F",
          gold: "#D8A84F",
          bronze: "#7A3518",
          crimson: "#8F1D12",
          ivory: "#FFF1D2",
          parchment: "#E8C995",
          violet: "#6F2DA8",
        },
      },
      fontFamily: {
        ceremonial: ["Cinzel Decorative", "Cinzel", "serif"],
        display: ["Cinzel", "serif"],
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"],
        metric: ["Rajdhani", "Inter", "sans-serif"],
      },
      boxShadow: {
        ember: "0 0 40px rgba(242, 106, 27, 0.24)",
        gold: "0 0 32px rgba(216, 168, 79, 0.22)",
      },
      backgroundImage: {
        "ep-hero":
          "radial-gradient(circle at 50% 0%, rgba(122, 53, 24, 0.9) 0%, rgba(39, 16, 11, 0.78) 35%, #120807 100%)",
        "ep-premium": "linear-gradient(135deg, #E8C995, #D8A84F, #7A3518)",
        "ep-fire": "linear-gradient(135deg, #FFB23F, #F26A1B, #8F1D12)",
      },
    },
  },
  plugins: [],
} satisfies Config;
