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
        medieval: ['Cinzel', 'serif'],
        'medieval-text': ['Cormorant Garamond', 'serif'],
        'royal-script': ['Playfair Display', 'serif'],
        'royal-modern': ['Crimson Text', 'serif'],
        'noble-sans': ['Spectral', 'serif'],
        'courtly-display': ['Fredericka the Great', 'cursive'],
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
        
        // Royal colors updated with purple theme
        'royal-gold': '#9B87F5',
        'royal-crimson': '#9B2335',
        'royal-navy': '#4C1D95',
        'royal-purple': '#7851A9',
        'royal-velvet': '#6E59A5',
        'royal-forest': '#2C784A',
        'royal-mahogany': '#A65E44',
        'royal-parchment': '#F5E6CA',
        'royal-blue': '#6D28D9',
        
        // Purple marketing theme
        'purple': {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        
        // Team colors - reusing existing scheme for compatibility
        'team-red': '#9B2335',
        'team-green': '#9B87F5', // now purple
        'team-blue': '#4C1D95', // deep purple
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
        "fade-in": {
          from: { opacity: 0, transform: "translateY(10px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: 0.7 },
          "50%": { opacity: 0.3 },
        },
        "royal-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: 1 },
          "50%": { transform: "scale(1.05)", opacity: 0.9 },
        },
        "sparkle": {
          "0%, 100%": { opacity: 0, transform: "scale(0.8)" },
          "50%": { opacity: 1, transform: "scale(1.2)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        "royal-pulse": "royal-pulse 2s ease-in-out infinite",
        "sparkle": "sparkle 1.5s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-royal': 'linear-gradient(to right, var(--royal-crimson), var(--royal-gold), var(--royal-navy))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
