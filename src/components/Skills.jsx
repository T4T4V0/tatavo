import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'JavaScript', level: 90, color: '#61dafb' },
        { name: 'TypeScript', level: 85, color: '#3178c6' },
        { name: 'Next.js', level: 80, color: '#000000' },
        { name: 'Tailwind CSS', level: 88, color: '#06b6d4' },
        { name: 'Vite', level: 75, color: '#000000' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: '#339933' },
        { name: 'Python', level: 80, color: '#3776ab' },
        { name: 'Java', level: 82, color: '#000000' },
        { name: 'Ruby', level: 75, color: '#dc382d' },
        { name: 'C++', level: 75, color: '#FFFFFF' },
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', level: 85, color: '#336791' },
        { name: 'MongoDB', level: 80, color: '#47a248' },
        { name: 'Redis', level: 70, color: '#dc382d' },
        { name: 'SQL Server', level: 70, color: '#47a248' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Docker', level: 78, color: '#2496ed' },
        { name: 'Git', level: 90, color: '#f05032' },
        { name: 'AWS', level: 70, color: '#ff9900' },
        { name: 'Arduino', level: 75, color: '#00979d' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" style={{
      minHeight: '100vh',
      padding: '6rem 2rem',
      background: 'var(--bg-primary)',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1rem, 3vw, 2rem)',
            marginTop: '3rem'
          }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="inset-card"
              style={{
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
                color: 'var(--text-primary)',
                textAlign: 'center'
              }}>
                {category.title}
              </h3>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    whileHover={{ scale: 1.02 }}
                    style={{
                      position: 'relative',
                      padding: '1rem',
                      background: 'var(--bg-secondary)',
                      borderRadius: '12px',
                      border: '1px solid var(--border)',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: hoveredSkill === `${categoryIndex}-${skillIndex}` 
                        ? `0 8px 25px ${skill.color}20, 0 0 20px ${skill.color}30`
                        : '0 2px 8px var(--shadow)'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        fontSize: '1rem'
                      }}>
                        {skill.name}
                      </span>
                      <span style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        fontWeight: 500
                      }}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div style={{
                      width: '100%',
                      height: '6px',
                      background: 'var(--border)',
                      borderRadius: '3px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        style={{
                          height: '100%',
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                          borderRadius: '3px',
                          position: 'relative'
                        }}
                      >
                        <motion.div
                          animate={{
                            boxShadow: hoveredSkill === `${categoryIndex}-${skillIndex}`
                              ? `0 0 20px ${skill.color}, 0 0 40px ${skill.color}50`
                              : 'none'
                          }}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: '3px'
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Floating Skill Icon */}
                    <motion.div
                      animate={{
                        scale: hoveredSkill === `${categoryIndex}-${skillIndex}` ? 1.2 : 1,
                        rotate: hoveredSkill === `${categoryIndex}-${skillIndex}` ? 5 : 0
                      }}
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        width: '8px',
                        height: '8px',
                        background: skill.color,
                        borderRadius: '50%',
                        boxShadow: `0 0 10px ${skill.color}50`
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Category Glow Effect */}
              <motion.div
                animate={{
                  opacity: hoveredSkill?.startsWith(categoryIndex.toString()) ? 0.1 : 0
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'var(--accent)',
                  borderRadius: '16px',
                  pointerEvents: 'none'
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(45deg, var(--accent), transparent)',
          borderRadius: '50%',
          opacity: 0.1,
          animation: 'float 8s ease-in-out infinite'
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(135deg, var(--accent), transparent)',
          borderRadius: '30%',
          opacity: 0.05,
          animation: 'float 10s ease-in-out infinite reverse'
        }} />
      </div>
    </section>
  );
};

export default Skills;
