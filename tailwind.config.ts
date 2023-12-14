import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        mobile: "url('/assets/back-image-mobile.jpg')",
        tablet: "url('/assets/back-image-tablet.jpg')",
        laptop: "url('/assets/back-image-laptop.jpg')",
        desktop: "url('/assets/back-image-desktop.jpg')",
      },

      screens: {
        mobile: "360px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1200px",
      },

      colors: {
        lightGray: "#F8F8F8",
        blue: "#00BDD3",
        yellow: "#F4E041",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
