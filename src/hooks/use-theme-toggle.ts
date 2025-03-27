
import { useEffect } from 'react';
import { useTheme } from '@/providers/theme-provider';

export function useThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  // Function to toggle between light and dark modes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  // Set a class on the body for additional styling
  useEffect(() => {
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);
  
  return {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark'
  };
}
