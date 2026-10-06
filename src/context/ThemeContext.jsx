import React, { createContext, useContext, useState, useLayoutEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      return saved ? saved === 'dark' : true;
    } catch {
      return true;
    }
  });

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    try {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    } catch {}
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);