import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Zap, Leaf, Database } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Agricultural Management System',
      description: 'A comprehensive web application for managing agricultural operations, crop monitoring, and farm analytics with real-time data visualization.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'Express'],
      features: [
        'Real-time crop monitoring',
        'Weather integration',
        'Harvest predictions',
        'Financial analytics'
      ],
      icon: Leaf,
      color: '#22c55e',
      gradient: 'linear-gradient(135deg,rgb(34, 197, 72), #16a34a)',
      status: 'In Development',
      year: '2025'
    },
    {
      id: 2,
      title: 'Sumo Automated Robot System',
      description: 'This project involves developing an autonomous sumo robot using Arduino microcontroller as the central processing unit. The robot is designed to compete in sumo wrestling matches where two robots attempt to push each other out of a circular ring.',
      technologies: ['Arduino', 'C++', 'Iot'],
      features: [
        'Automated Robot',
        'C/C++ language support with Arduino framework',
        'Timer functions for precise timing control',
        'Ultrasonic sensor support (HC-SR04) for distance measurement'
      ],
      icon: Zap,
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
      status: 'Completed',
      year: '2024'
    },
    {
      id: 3,
      title: 'Object Recognition Using AI',
      description: 'This project utilizes Convolutional Neural Networks (CNNs) to classify product images into three main categories: fruits, vegetables, and packages. After the primary classification, detailed classification is performed to identify the specific type of fruit, vegetable, or package.',
      technologies: ['TensorFlow', 'JavaScript', 'Pandas', 'Numpy', 'Python'],
      features: [
        'Multi-Stage CNN Classification',
        'Real-Time Processing & API Integration',
        'Classification accuracy metrics and reporting',
        'Support for multiple image formats (JPEG, PNG, etc.)',
        'Multi-class prediction with confidence scores'
      ],
      icon: Database,
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
      status: 'Completed',
      year: '2024'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" style={{
      minHeight: '100vh',
      padding: '6rem 2rem',
      background: 'var(--bg-secondary)',
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
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            marginBottom: '4rem',
            maxWidth: '600px',
            margin: '0 auto 4rem'
          }}
        >
          Explore my latest projects showcasing modern web development and innovative solutions
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(1rem, 3vw, 2rem)'
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card-3d"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                background: hoveredProject === project.id 
                  ? `linear-gradient(135deg, ${project.color}10, var(--bg-primary))`
                  : 'var(--bg-primary)',
                border: hoveredProject === project.id 
                  ? `1px solid ${project.color}30`
                  : '1px solid var(--border)'
              }}
            >
              {/* Project Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <motion.div
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                      rotate: hoveredProject === project.id ? 5 : 0
                    }}
                    style={{
                      width: '48px',
                      height: '48px',
                      background: project.gradient,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 4px 20px ${project.color}30`
                    }}
                  >
                    <project.icon size={24} color="white" />
                  </motion.div>
                  
                  <div>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem'
                    }}>
                      {project.title}
                    </h3>
                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'center'
                    }}>
                      <span style={{
                        fontSize: '0.8rem',
                        color: project.color,
                        fontWeight: 600,
                        padding: '0.25rem 0.75rem',
                        background: `${project.color}20`,
                        borderRadius: '12px'
                      }}>
                        {project.status}
                      </span>
                      <span style={{
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)'
                      }}>
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>


              </div>

              {/* Project Description */}
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
                fontSize: '0.95rem'
              }}>
                {project.description}
              </p>

              {/* Technologies */}
              <div style={{
                marginBottom: '1.5rem'
              }}>
                <h4 style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Technologies
                </h4>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                      style={{
                        fontSize: '0.8rem',
                        padding: '0.25rem 0.75rem',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        borderRadius: '12px',
                        color: 'var(--text-primary)',
                        fontWeight: 500
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  Key Features
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {project.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.5rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      <div style={{
                        width: '4px',
                        height: '4px',
                        background: project.color,
                        borderRadius: '50%'
                      }} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                animate={{
                  opacity: hoveredProject === project.id ? 0.1 : 0,
                  scale: hoveredProject === project.id ? 1 : 0.8
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: project.gradient,
                  borderRadius: '16px',
                  pointerEvents: 'none'
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
