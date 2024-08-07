import type { Config } from "tailwindcss";



const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
    fontFamily:{
      Inter: ["Inter", "sans-serif"],
      covered_by_grace: ["Covered By Your Grace", "cursive"]
    },
    colors:{
      orange: "#FF6D2C",
      sectionBg: "#E0F8F2",
      green: "#009387",
      DarkGray: "#2E2F35",
      black: "#080B1D",
      LightGray: "#58595D",
      RedishColor: "#A89B90",
      white: "#FFFFFF",
    }

  },
  plugins: [],
};
export default config;

