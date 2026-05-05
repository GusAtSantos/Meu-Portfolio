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
        purple: {
          deep: "#0f0520",
          dark: "#1e0845",
          mid: "#5b21b6",
          bright: "#8b5cf6",
          glow: "#a78bfa",
          light: "#ede9fe",
        },
        accent: {
          pink: "#e879f9",
          cyan: "#67e8f9",
        },
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, #5b21b6 0px, transparent 50%), radial-gradient(at 80% 0%, #e879f9 0px, transparent 50%), radial-gradient(at 0% 50%, #1e0845 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
