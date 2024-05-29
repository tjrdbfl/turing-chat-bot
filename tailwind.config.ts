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
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein300: "slidein 1s ease 300ms forwards",
        slidein400: "slidein 1s ease 400ms forwards",
        slidein500: "slidein 1s ease 500ms forwards",
        slidein600: "slidein 1s ease 600ms forwards",
        slidein700: "slidein 1s ease 700ms forwards",
        slidein800: "slidein 1s ease 800ms forwards",
        slidein900: "slidein 1s ease 900ms forwards",
      }
    },
  },
  plugins: [
  ],
  darkMode:"class"
};
export default config;
