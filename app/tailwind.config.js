/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0B",
        surface: "#101012",
        surface2: "#16161A",
        line: "#222226",
        ink: "#F5F5F7",
        mute: "#9B9BA3",
        gold: {
          DEFAULT: "#E9B949",
          soft: "#F5D182",
          dark: "#B8902F",
        },
        accent: "#7CC4FF",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Instrument Serif"', "serif"],
      },
      backgroundImage: {
        "mesh-hero":
          "radial-gradient(60% 50% at 50% 0%, rgba(233,185,73,0.18) 0%, rgba(233,185,73,0) 60%), radial-gradient(40% 40% at 85% 20%, rgba(124,196,255,0.12) 0%, rgba(124,196,255,0) 60%), radial-gradient(40% 40% at 10% 80%, rgba(233,185,73,0.10) 0%, rgba(233,185,73,0) 60%)",
        grain:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(233,185,73,0.25), 0 20px 60px -20px rgba(233,185,73,0.35)",
        card: "0 1px 0 rgba(255,255,255,0.05) inset, 0 0 0 1px rgba(255,255,255,0.04)",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
