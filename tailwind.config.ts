
import { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        playfair: ["Playfair Display", "serif"],
        medieval: ["Cinzel", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Royal color scheme
        royal: {
          crimson: "rgb(var(--royal-crimson) / <alpha-value>)",
          gold: "rgb(var(--royal-gold) / <alpha-value>)",
          navy: "rgb(var(--royal-navy) / <alpha-value>)",
          purple: "rgb(var(--royal-purple) / <alpha-value>)",
          mahogany: "rgb(var(--royal-mahogany) / <alpha-value>)",
          velvet: "rgb(var(--royal-velvet) / <alpha-value>)",
        },
        team: {
          red: "rgb(var(--team-red) / <alpha-value>)",
          green: "rgb(var(--team-green) / <alpha-value>)",
          blue: "rgb(var(--team-blue) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%": { transform: "translateY(0px)", opacity: "0" },
          "10%": { opacity: "0.5" },
          "50%": { transform: "translateY(-20px)", opacity: "0.2" },
          "100%": { transform: "translateY(-40px)", opacity: "0" },
        },
        "royal-shine": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "crown-glow": {
          "0%, 100%": { filter: "drop-shadow(0 0 3px rgba(212, 175, 55, 0.7))" },
          "50%": { filter: "drop-shadow(0 0 6px rgba(212, 175, 55, 0.9))" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.4", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        "border-pulse": {
          "0%, 100%": { borderColor: "rgba(212, 175, 55, 0.7)" },
          "50%": { borderColor: "rgba(212, 175, 55, 0.3)" },
        },
        "border-pulse-flame": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "royal-shine": "royal-shine 2s ease infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "crown-glow": "crown-glow 2s ease-in-out infinite",
        "sparkle": "sparkle 1.5s ease-in-out infinite",
        "border-pulse": "border-pulse 2s ease-in-out infinite",
        "border-pulse-flame": "border-pulse-flame 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
