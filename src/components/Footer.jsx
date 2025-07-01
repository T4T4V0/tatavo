import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      padding: '3rem 2rem 2rem',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {/* Logo/Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            marginBottom: '2rem'
          }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, var(--accent), #8b5cf6)',
            borderRadius: '16px',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1rem',
            boxShadow: '0 8px 25px var(--glow)'
          }}>
            GH
          </div>
          <h3 style={{
            fontSize: '1.2rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '0.5rem'
          }}>
            Gustavo Henrique
          </h3>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
          }}>
            Full Stack Developer & Software Engineering Student
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '2rem',
            flexWrap: 'wrap'
          }}
        >
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
            <motion.button
              key={item}
              onClick={() => {
                const element = document.getElementById(item.toLowerCase());
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--accent)';
                e.target.style.background = 'var(--bg-primary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--text-secondary)';
                e.target.style.background = 'transparent';
              }}
            >
              {item}
            </motion.button>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            height: '1px',
            background: 'var(--border)',
            margin: '2rem auto',
            maxWidth: '400px'
          }}
        />

        {/* Copyright & Made with love */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
          }}>
            © {currentYear} Gustavo Henrique. All rights reserved.
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
          }}>
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={16} color="#ef4444" fill="#ef4444" />
            </motion.div>
            <span>,</span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Code size={16} color="var(--accent)" />
            </motion.div>
            <span>and</span>
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Coffee size={16} color="#f59e0b" />
            </motion.div>
          </div>
        </motion.div>

        {/* Tech Stack Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          style={{
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}
        >
          {['React', 'Three.js', 'Framer Motion', 'Vite'].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              style={{
                fontSize: '0.8rem',
                padding: '0.25rem 0.75rem',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                color: 'var(--text-secondary)',
                fontWeight: 500
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(45deg, var(--accent), transparent)',
          borderRadius: '50%',
          opacity: 0.05,
          animation: 'float 6s ease-in-out infinite'
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, var(--accent), transparent)',
          borderRadius: '30%',
          opacity: 0.03,
          animation: 'float 8s ease-in-out infinite reverse'
        }} />
      </div>
    </footer>
  );
};

export default Footer;
