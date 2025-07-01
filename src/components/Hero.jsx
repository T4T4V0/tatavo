import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import FloatingGeometry from './3d/FloatingGeometry';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section className="hero-section" style={{
      height: '100vh',
      position: 'relative',
      background: isDark
        ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)'
        : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
    }}>
      {/* 3D Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }}>
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={isDark ? 0.3 : 0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={isDark ? 0.8 : 1}
            color={isDark ? '#3b82f6' : '#ffffff'}
          />
          <pointLight
            position={[-10, -10, -5]}
            intensity={isDark ? 0.5 : 0.3}
            color={isDark ? '#8b5cf6' : '#3b82f6'}
          />

          <Suspense fallback={null}>
            <FloatingGeometry />
            <Environment preset={isDark ? 'night' : 'dawn'} />
          </Suspense>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      {/* Dark Blur Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: isDark
          ? 'rgba(10, 10, 10, 0.7)'
          : 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(8px)',
        zIndex: 1.5
      }} />

      {/* Content Overlay */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 2rem',
        textAlign: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="hero-title">
            Gustavo Feitosa
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            fontWeight: 500,
            color: 'var(--accent)',
            marginBottom: '1.5rem',
            maxWidth: '600px',
            letterSpacing: '0.02em'
          }}
        >
          Full Stack Developer
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            maxWidth: '520px',
            lineHeight: 1.7,
            fontWeight: 400
          }}
        >
          Software Engineering Student specializing in modern web technologies and scalable solutions
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <motion.button
            className="btn-3d"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              fontSize: '0.95rem',
              padding: '14px 28px',
              background: 'var(--accent)',
              color: 'white',
              border: 'none',
              fontWeight: 500,
              letterSpacing: '0.01em'
            }}
          >
            View Portfolio
          </motion.button>

          <motion.button
            className="btn-3d"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              fontSize: '0.95rem',
              padding: '14px 28px',
              fontWeight: 500,
              letterSpacing: '0.01em'
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>


      </div>
    </section>
  );
};

export default Hero;
