import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(68.8deg, rgb(174, 33, 255) 15.4%, rgb(255, 33, 33) 111.3%)",
      },
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
      },
      animation: {
        typing: "typing 2s steps(30, end) forwards, blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;
