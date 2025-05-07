"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getInitialTheme = (): Theme => {
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      return storedTheme;
    }
  }
  return "dark"; // fallback
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const storedTheme = getInitialTheme();
    setTheme(storedTheme);
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("theme", theme);

      // 👇 Add or remove `dark` class on <html>
      if (typeof document !== "undefined") {
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    }
  }, [theme, isHydrated]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  if (!isHydrated) {
    return null; // or a small spinner
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
