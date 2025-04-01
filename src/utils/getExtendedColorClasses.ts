
import { Config } from 'tailwindcss';

export function getExtendedColorClasses(): Partial<Config["theme"]["extend"]> {
  return {
    colors: {
      // Royal Colors
      'royal-gold': {
        DEFAULT: '#FFD700',
        'bright': '#FFDF00',
        'dark': '#DAA520',
      },
      'royal-crimson': {
        DEFAULT: '#DC143C',
        'bright': '#E91E63', 
        'dark': '#B71C1C',
      },
      'royal-purple': {
        DEFAULT: '#8A2BE2',
        'bright': '#9370DB',
        'dark': '#6A0DAD',
      },
      
      // Team Colors
      'red': {
        DEFAULT: '#ef4444',
        '50': '#fef2f2',
        '100': '#fee2e2',
        '200': '#fecaca',
        '300': '#fca5a5',
        '400': '#f87171',
        '500': '#ef4444',
        '600': '#dc2626',
        '700': '#b91c1c',
        '800': '#991b1b',
        '900': '#7f1d1d',
        '950': '#450a0a',
      },
      'blue': {
        DEFAULT: '#3b82f6',
        '50': '#eff6ff',
        '100': '#dbeafe',
        '200': '#bfdbfe',
        '300': '#93c5fd',
        '400': '#60a5fa',
        '500': '#3b82f6',
        '600': '#2563eb',
        '700': '#1d4ed8',
        '800': '#1e40af',
        '900': '#1e3a8a',
        '950': '#172554',
      },
      'green': {
        DEFAULT: '#22c55e',
        '50': '#f0fdf4',
        '100': '#dcfce7',
        '200': '#bbf7d0',
        '300': '#86efac',
        '400': '#4ade80',
        '500': '#22c55e',
        '600': '#16a34a',
        '700': '#15803d',
        '800': '#166534',
        '900': '#14532d',
        '950': '#052e16',
      },
      'purple': {
        DEFAULT: '#a855f7',
        '50': '#faf5ff',
        '100': '#f3e8ff',
        '200': '#e9d5ff',
        '300': '#d8b4fe',
        '400': '#c084fc',
        '500': '#a855f7',
        '600': '#9333ea',
        '700': '#7e22ce',
        '800': '#6b21a8',
        '900': '#581c87',
        '950': '#3b0764',
      },
      'amber': {
        DEFAULT: '#f59e0b',
        '50': '#fffbeb',
        '100': '#fef3c7',
        '200': '#fde68a',
        '300': '#fcd34d',
        '400': '#fbbf24',
        '500': '#f59e0b',
        '600': '#d97706',
        '700': '#b45309',
        '800': '#92400e',
        '900': '#78350f',
        '950': '#451a03',
      },
    },
    boxShadow: {
      'gold': '0 0 15px rgba(255, 215, 0, 0.5)',
      'purple': '0 0 15px rgba(138, 43, 226, 0.5)',
      'crimson': '0 0 15px rgba(220, 20, 60, 0.5)',
    },
    animation: {
      'royal-pulse': 'royal-pulse 2s infinite',
      'royal-entrance': 'royal-entrance 0.5s ease-out forwards',
    },
    keyframes: {
      'royal-pulse': {
        '0%': { boxShadow: '0 0 0 0 rgba(255, 215, 0, 0.4)' },
        '70%': { boxShadow: '0 0 0 10px rgba(255, 215, 0, 0)' },
        '100%': { boxShadow: '0 0 0 0 rgba(255, 215, 0, 0)' },
      },
      'royal-entrance': {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
  };
}
