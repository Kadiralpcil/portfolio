import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        headerText: "#41474",
        headerTextHover: "#6e910a",
        verifiedColor: "#1da1f2",
        footerColor: "#fafaf9",
        white: "#ffffff",
        orange: "#FF8911",
      },
    },
  },
  plugins: [],
};
export default config;
