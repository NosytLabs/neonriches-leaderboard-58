
import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system' | 'royal';

const THEME_STORAGE_KEY = 'spendthrone-theme';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Try to get the theme from localStorage
    const storedTheme = typeof window !== 'undefined' 
      ? localStorage.getItem(THEME_STORAGE_KEY) as Theme
      : null;
    
    return storedTheme || 'system';
  });

  // Update theme in localStorage and document when theme changes
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    }
  };

  // Update the document with the right theme classes
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all theme classes first
    root.classList.remove('light', 'dark', 'royal');
    
    // Determine which theme to apply
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  // Listen for system theme changes if using system theme
  useEffect(() => {
    if (theme !== 'system') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(mediaQuery.matches ? 'dark' : 'light');
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return {
    theme,
    setTheme,
  };
}

export default useTheme;
