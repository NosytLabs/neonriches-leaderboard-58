
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
				// Enhanced Royal team colors with richer hues
				team: {
					red: '#B026FF',    // Deeper Royal Purple
					green: '#FFD700',  // Brighter Royal Gold
					blue: '#1E56A0',   // Deeper Royal Blue
				},
				// Enhanced Royal theme colors
				royal: {
					purple: '#B026FF', // Deeper Royal Purple
					gold: '#FFD700',   // Brighter Royal Gold
					blue: '#1E56A0',   // Deeper Royal Blue
					crimson: '#E61C5D',// Brighter Royal Crimson
					emerald: '#3CB371',// Richer Royal Emerald
					amber: '#FFC000',  // Richer Royal Amber
					silver: '#D9D9D9',  // Brighter Royal Silver
					midnight: '#16213E', // New Royal Midnight
					charcoal: '#1A1E2C', // New Royal Charcoal
					pearl: '#F5F3F4',    // New Royal Pearl
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
					'0%, 100%': { filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.6))' },
					'50%': { filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 1))' }
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
				'gradient-royal': 'linear-gradient(135deg, #B026FF 0%, #FFD700 50%, #1E56A0 100%)',
				'gradient-gold': 'linear-gradient(to right, #FFD700, #FFC000, #FFD700)',
				'gradient-purple': 'linear-gradient(to right, #9B26AF, #B026FF, #9B26AF)',
				'gradient-blue': 'linear-gradient(to right, #0055A4, #1E56A0, #0055A4)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
