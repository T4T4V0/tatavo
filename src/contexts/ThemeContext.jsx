import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update CSS custom properties for smooth transitions
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.style.setProperty('--bg-primary', '#0f172a');
      root.style.setProperty('--bg-secondary', '#1e293b');
      root.style.setProperty('--bg-secondary-rgb', '30, 41, 59');
      root.style.setProperty('--text-primary', '#f8fafc');
      root.style.setProperty('--text-secondary', '#94a3b8');
      root.style.setProperty('--accent', '#6366f1');
      root.style.setProperty('--border', '#334155');
      root.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.4)');
      root.style.setProperty('--glow', 'rgba(99, 102, 241, 0.25)');
    } else {
      root.classList.remove('dark');
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f9fafb');
      root.style.setProperty('--bg-secondary-rgb', '249, 250, 251');
      root.style.setProperty('--text-primary', '#1f2937');
      root.style.setProperty('--text-secondary', '#6b7280');
      root.style.setProperty('--accent', '#6366f1');
      root.style.setProperty('--border', '#e5e7eb');
      root.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.08)');
      root.style.setProperty('--glow', 'rgba(99, 102, 241, 0.15)');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      primary: isDark ? '#0f172a' : '#ffffff',
      secondary: isDark ? '#1e293b' : '#f9fafb',
      text: {
        primary: isDark ? '#f8fafc' : '#1f2937',
        secondary: isDark ? '#94a3b8' : '#6b7280',
      },
      accent: '#6366f1',
      border: isDark ? '#334155' : '#e5e7eb',
      shadow: isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.08)',
      glow: isDark ? 'rgba(99, 102, 241, 0.25)' : 'rgba(99, 102, 241, 0.15)',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
