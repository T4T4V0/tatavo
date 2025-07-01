import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';
import ThemeToggle from './ui/ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: User, label: 'About', href: '#about' },
    { icon: Code, label: 'Skills', href: '#skills' },
    { icon: Briefcase, label: 'Projects', href: '#projects' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="desktop-nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          position: 'fixed',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '1rem 2rem',
          background: scrolled 
            ? 'rgba(var(--bg-secondary-rgb), 0.8)' 
            : 'rgba(var(--bg-secondary-rgb), 0.6)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--border)',
          borderRadius: '50px',
          boxShadow: '0 8px 32px var(--shadow)',
        }}
      >
        {navItems.map((item, index) => (
          <motion.button
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            className="nav-item"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1rem',
              background: 'transparent',
              border: 'none',
              borderRadius: '25px',
              color: 'var(--text-primary)',
              fontSize: '0.9rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--accent)';
              e.target.style.color = 'white';
              e.target.style.boxShadow = '0 4px 12px var(--glow)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'var(--text-primary)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <item.icon size={16} />
            <span className="nav-label">{item.label}</span>
          </motion.button>
        ))}
      </motion.nav>

      {/* Mobile Navigation Toggle */}
      <motion.button
        className="mobile-nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed',
          top: '2rem',
          left: '2rem',
          zIndex: 1001,
          display: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          width: '48px',
          height: '48px',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border)',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow: '0 4px 12px var(--shadow)',
        }}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </motion.button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '6rem',
              left: '2rem',
              right: '2rem',
              zIndex: 1000,
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '1.5rem',
              boxShadow: '0 16px 48px var(--shadow)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="mobile-nav-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  width: '100%',
                  padding: '1rem',
                  background: 'transparent',
                  border: 'none',
                  borderRadius: '12px',
                  color: 'var(--text-primary)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  marginBottom: index < navItems.length - 1 ? '0.5rem' : 0,
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--accent)';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'var(--text-primary)';
                }}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme Toggle */}
      <ThemeToggle />

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
        
        @media (min-width: 769px) {
          .nav-label {
            display: inline;
          }
        }
        
        @media (max-width: 1024px) {
          .nav-label {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
