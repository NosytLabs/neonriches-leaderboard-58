
import { useTheme } from '@/providers/ThemeProvider';

export function useThemeToggle() {
  const { theme, setTheme, isDarkTheme } = useTheme();
  
  // Function to toggle between light and dark modes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return {
    theme,
    setTheme,
    toggleTheme,
    isDark: isDarkTheme
  };
}
