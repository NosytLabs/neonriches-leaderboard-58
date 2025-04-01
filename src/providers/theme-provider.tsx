
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// Define allowed theme values
export type Theme = "dark" | "light" | "system" | "royal";

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

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark", // Keep dark as default for SpendThrone theme
  storageKey = "spendthrone-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove("light", "dark", "royal");
    
    let effectiveTheme: "dark" | "light" = "dark";
    
    if (theme === "system") {
      effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } else if (theme === "royal") {
      // Royal theme is based on dark theme with royal styles
      effectiveTheme = "dark";
      if (!root.classList.contains("royal")) {
        root.classList.add("royal");
      }
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
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
