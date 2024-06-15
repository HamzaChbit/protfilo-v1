'use client'
import React, { useState, useEffect, createContext } from 'react';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }
  return 'light';
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(initialTheme || 'light');

  useEffect(() => {
    const currentTheme = getInitialTheme();
    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      const isDark = theme === 'dark';

      root.classList.remove(isDark ? 'light' : 'dark');
      root.classList.add(theme);

      window.localStorage.setItem('color-theme', theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
