
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				team: {
					red: '#8B0000',    // Deeper crimson
					green: '#CFB53B',  // Royal gold
					blue: '#000080',   // Navy blue
				},
				royal: {
					crimson: '#8B0000',   // Deep red
					gold: '#D4AF37',      // Richer gold
					navy: '#000080',      // Navy blue
					purple: '#4B0082',    // Royal purple
					bronze: '#CD7F32',    // Bronze
					silver: '#C0C0C0',    // Silver
					parchment: '#F5DEB3', // Parchment
					amber: '#FFBF00',     // Amber
					mahogany: '#C04000',  // Mahogany
					velvet: '#5D0033',    // Velvet
					ink: '#1A1A1A',       // Ink black
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'scale-out': {
					from: { transform: 'scale(1)', opacity: '1' },
					to: { transform: 'scale(0.95)', opacity: '0' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(20px)' }
				},
				'glow': {
					'0%, 100%': { filter: 'brightness(1)' },
					'50%': { filter: 'brightness(1.5)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '-200% 0' }
				},
				'crown-glow': {
					'0%, 100%': { filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.6))' },
					'50%': { filter: 'drop-shadow(0 0 20px rgba(212, 175, 55, 1))' }
				},
				'royal-pulse': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.08)' }
				},
				'sparkle': {
					'0%, 100%': { opacity: '0' },
					'50%': { opacity: '1' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'bounce-subtle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.4s ease-out',
				'fade-out': 'fade-out 0.4s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'scale-out': 'scale-out 0.3s ease-out',
				'slide-in': 'slide-in 0.4s ease-out',
				'slide-right': 'slide-right 0.4s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'float': 'float 4s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'shimmer': 'shimmer 7s linear infinite',
				'crown-glow': 'crown-glow 3s ease-in-out infinite',
				'royal-pulse': 'royal-pulse 2s ease-in-out infinite',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 12s linear infinite',
				'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite'
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(20px)'
			},
			fontFamily: {
				'serif': ['Playfair Display', 'Georgia', 'serif'],
				'royal': ['Cinzel', 'serif'],
				'sans': ['Inter', 'sans-serif']
			},
			backgroundImage: {
				'gradient-royal': 'linear-gradient(135deg, #8B0000 0%, #D4AF37 50%, #000080 100%)',
				'gradient-gold': 'linear-gradient(to right, #D4AF37, #FFBF00, #D4AF37)',
				'gradient-crimson': 'linear-gradient(to right, #8B0000, #B22222, #8B0000)',
				'gradient-navy': 'linear-gradient(to right, #000080, #191970, #000080)',
				'gradient-velvet': 'linear-gradient(to right, #5D0033, #800020, #5D0033)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
