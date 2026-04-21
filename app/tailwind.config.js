/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          50:  "#EEF1FB",
          100: "#D8DEF3",
          200: "#A9B5E1",
          300: "#6C7BC4",
          500: "#2B3D8E",
          700: "#172560",
          900: "#0F1B4C",
          950: "#0A1236",
        },
        violet: {
          DEFAULT: "#6C55E0",
          soft:    "#8B5CF6",
          dark:    "#4F3BCC",
        },
        teal: {
          DEFAULT: "#0DD1C8",
          soft:    "#54E3DC",
        },
      },
      fontFamily: {
        poppins: ['"Poppins"', "system-ui", "sans-serif"],
        mono:    ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #0F1B4C 0%, #6C55E0 50%, #0DD1C8 100%)",
        "brand-radial":   "radial-gradient(60% 50% at 50% 40%, rgba(108,85,224,0.18) 0%, rgba(13,209,200,0.10) 40%, rgba(255,255,255,0) 70%)",
      },
      animation: {
        "marquee":     "marquee 40s linear infinite",
        "fade-up":     "fade-up 0.6s ease-out both",
        "gradient-x":  "gradient-x 6s linear infinite",
        "float":       "float 6s ease-in-out infinite",
        "shine":       "shine 2s linear infinite",
        "pulse-ring":  "pulse-ring 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%":   { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "gradient-x": {
          "0%,100%": { "background-position": "0% 50%" },
          "50%":     { "background-position": "100% 50%" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-12px)" },
        },
        shine: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%":       { transform: "scale(0.33)", opacity: 1 },
          "80%,100%": { transform: "scale(1.8)",  opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
