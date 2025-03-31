
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
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        medieval: ["Cinzel", "serif"],
        'medieval-text': ['Crimson Text', 'serif'],
        'royal-script': ['Playfair Display', 'serif'],
      },
      colors: {
        'royal-gold': '#D4AF37',
        'royal-gold-bright': '#FFC125',
        'royal-purple': '#7851A9',
        'royal-navy': '#1F4788',
        'royal-blue': '#3B82F6',
        'royal-red': '#9B2335',
        'royal-crimson': '#9B2335',
        'team-red': '#9B2335',
        'team-green': '#2C784A',
        'team-blue': '#1F4788',
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
        bg: {
          dark: "#0D0D20",
          darker: "#070714",
          light: "#1A1A30"
        },
        text: {
          primary: "#FFFFFF",
          secondary: "rgba(255, 255, 255, 0.8)",
          muted: "rgba(255, 255, 255, 0.6)"
        },
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
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "crown-glow": {
          "0%, 100%": { filter: "drop-shadow(0 0 3px rgba(212, 175, 55, 0.7))" },
          "50%": { filter: "drop-shadow(0 0 8px rgba(212, 175, 55, 1))" }
        },
        "pulse-slow": {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 }
        },
        "royal-shine": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" }
        },
        "float-rotate": {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(5deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
        "border-pulse-flame": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        "sparkle": {
          "0%, 100%": { opacity: "0.4", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        "border-pulse": {
          "0%, 100%": { borderColor: "rgba(212, 175, 55, 0.7)" },
          "50%": { borderColor: "rgba(212, 175, 55, 0.3)" },
        },
        "ripple": {
          "0%": { transform: "scale(0) translate(-50%, -50%)", opacity: 1 },
          "50%": { opacity: 0.5 },
          "100%": { transform: "scale(3) translate(-50%, -50%)", opacity: 0 },
        },
        "badge-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212, 175, 55, 0.4)" },
          "50%": { boxShadow: "0 0 0 5px rgba(212, 175, 55, 0)" },
        },
        "royal-entrance": {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "crown-glow": "crown-glow 2s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "royal-shine": "royal-shine 3s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "float-rotate": "float-rotate 4s ease-in-out infinite",
        "border-pulse-flame": "border-pulse-flame 3s ease-in-out infinite",
        "sparkle": "sparkle 1.5s infinite",
        "border-pulse": "border-pulse 2s ease-in-out infinite",
        "ripple": "ripple 2s ease-out forwards",
        "badge-pulse": "badge-pulse 2s infinite",
        "royal-entrance": "royal-entrance 0.8s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
