import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="theme-toggle"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
      animate={{
        backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
        borderColor: isDark ? '#333333' : '#e5e7eb',
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="toggle-track"
        animate={{
          backgroundColor: isDark ? '#3b82f6' : '#f1f5f9',
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="toggle-thumb"
          animate={{
            x: isDark ? 24 : 0,
            backgroundColor: isDark ? '#ffffff' : '#3b82f6',
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          <motion.div
            animate={{ rotate: isDark ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isDark ? (
              <Moon size={12} color="#0a0a0a" />
            ) : (
              <Sun size={12} color="#ffffff" />
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
