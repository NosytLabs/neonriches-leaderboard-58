
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDarkTheme: boolean;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  isDarkTheme: true,
};

const ThemeContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "spendthrone-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove("light", "dark");
    
    let effectiveTheme: "dark" | "light" = "dark";
    
    if (theme === "system") {
      effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } else {
      effectiveTheme = theme;
    }
    
    root.classList.add(effectiveTheme);
    setIsDarkTheme(effectiveTheme === "dark");
    
    // Add medieval-theme class for consistent styling
    if (!root.classList.contains("medieval-theme")) {
      root.classList.add("medieval-theme");
    }
    
    // Set CSS variables for enhanced royal colors
    document.documentElement.style.setProperty('--royal-gold-opacity', effectiveTheme === 'dark' ? '1' : '0.85');
    document.documentElement.style.setProperty('--royal-parchment', effectiveTheme === 'dark' ? 'rgba(245, 222, 179, 0.05)' : 'rgba(245, 222, 179, 0.15)');
    document.documentElement.style.setProperty('--royal-gradient-opacity', effectiveTheme === 'dark' ? '0.9' : '0.7');
    
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    isDarkTheme,
  };

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  
  return context;
};
