import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        authorPicWidth: "30vw",
      },
      boxShadow: {
        custom: "0 0 1rem #0ef",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        background1: "#1f242d",
        background2: "#323946",
        textColor: "#fff",
        mainColor: "#0ef",
      },
    },
  },
  plugins: [],
};
export default config;
