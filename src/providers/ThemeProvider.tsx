
import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'royal' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  setTheme: () => null
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  // Initialize theme from localStorage or user preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  // Update document classes when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('light-theme', 'dark-theme', 'royal-theme');
    
    // Add appropriate class based on theme
    if (theme === 'system') {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.classList.add('dark-theme');
      } else {
        root.classList.add('light-theme');
      }
    } else {
      root.classList.add(`${theme}-theme`);
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const value = {
    theme,
    setTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
