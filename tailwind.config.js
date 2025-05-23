// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 80%, 100%": { opacity: "0" },
          "40%": { opacity: "1" },
        },
      },
      animation: {
        blink: "blink 1s infinite",
        "blink-delay-200": "blink 1s infinite 0.2s",
        "blink-delay-400": "blink 1s infinite 0.4s",
      },
    },
  },
  plugins: [],
};
