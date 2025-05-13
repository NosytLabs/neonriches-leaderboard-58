
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'royal-gold': '#D4AF37',
        'royal-gold-bright': '#FFD700',
        'royal-purple': '#7851A9',
        'royal-navy': '#1F4788',
        'royal-crimson': '#9B2335',
        'royal-blue': '#4169E1',
      },
      keyframes: {
        "crown-glow": {
          "0%, 100%": { filter: "drop-shadow(0 0 0.5rem rgba(212, 175, 55, 0.5))" },
          "50%": { filter: "drop-shadow(0 0 1rem rgba(212, 175, 55, 0.8))" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.7 },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "crown-glow": "crown-glow 2s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
