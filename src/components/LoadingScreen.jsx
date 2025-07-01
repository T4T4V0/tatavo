import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { isDark } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onLoadingComplete(), 500);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: isDark 
              ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
              : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              width: '120px',
              height: '120px',
              background: 'linear-gradient(135deg, var(--accent), #8b5cf6)',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '2rem',
              boxShadow: '0 20px 60px var(--glow)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <motion.div
              animate={{ 
                background: [
                  'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  'linear-gradient(135deg, #8b5cf6, #3b82f6)',
                  'linear-gradient(135deg, #3b82f6, #8b5cf6)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '24px'
              }}
            />
            <span style={{ position: 'relative', zIndex: 1 }}>GH</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '0.5rem',
              textAlign: 'center'
            }}
          >
            Gustavo Henrique
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              marginBottom: '3rem',
              textAlign: 'center'
            }}
          >
            Full Stack Developer
          </motion.p>

          {/* Progress Bar */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '300px', opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              width: '300px',
              height: '4px',
              background: 'var(--border)',
              borderRadius: '2px',
              overflow: 'hidden',
              marginBottom: '1rem'
            }}
          >
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, var(--accent), #8b5cf6)',
                borderRadius: '2px',
                boxShadow: '0 0 10px var(--glow)'
              }}
            />
          </motion.div>

          {/* Progress Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              fontWeight: 500
            }}
          >
            {Math.round(progress)}%
          </motion.div>

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
              style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                background: 'var(--accent)',
                borderRadius: '50%',
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 2) * 40}%`,
                boxShadow: '0 0 10px var(--glow)'
              }}
            />
          ))}

          {/* Loading Text Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            style={{
              position: 'absolute',
              bottom: '3rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
              fontSize: '0.9rem'
            }}
          >
            <span>Loading amazing experience</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              style={{
                width: '16px',
                height: '16px',
                border: '2px solid var(--border)',
                borderTop: '2px solid var(--accent)',
                borderRadius: '50%'
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
