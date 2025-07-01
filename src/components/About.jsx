import React from 'react';
import { motion } from 'framer-motion';
import { Code, GraduationCap, MapPin, Calendar, Coffee, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '20+', color: '#3b82f6' },
    { icon: Coffee, label: 'Cups of Coffee', value: '30+', color: '#f59e0b' },
    { icon: Zap, label: 'Technologies', value: '12+', color: '#22c55e' },
    { icon: Calendar, label: 'Years Learning', value: '3+', color: '#8b5cf6' },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Full Stack Developer',
      company: 'Freelance',
      description: 'Developing web applications using React, Node.js, and modern frameworks for various clients.',
      color: '#22c55e'
    },
    {
      year: '2022',
      title: 'Software Engineering Student',
      company: 'iCEV',
      description: 'Currently pursuing Software Engineering degree, focusing on modern development practices and emerging technologies.',
      color: '#3b82f6'
    },
    {
      year: '2022',
      title: 'Started Programming Journey',
      company: 'Self-taught',
      description: 'Began learning programming with Python and web development fundamentals.',
      color: '#f59e0b'
    }
  ];

  return (
    <section id="about" style={{
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
          About Me
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(2rem, 5vw, 3rem)',
          alignItems: 'start'
        }}>
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inset-card"
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, var(--accent), #8b5cf6)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                color: 'white',
                boxShadow: '0 8px 25px var(--glow)'
              }}>
                GF
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem'
                }}>
                  Gustavo Feitosa
                </h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-secondary)'
                }}>
                  <MapPin size={16} />
                  <span>Teresina, PI, Brazil</span>
                </div>
              </div>
            </div>

            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              fontSize: '1rem',
              marginBottom: '2rem'
            }}>
              Passionate Full Stack Developer and Software Engineering student with a love for creating
              innovative digital solutions. I specialize in modern web technologies and enjoy building
              applications that solve real-world problems.
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <GraduationCap size={20} color="var(--accent)" />
              <div>
                <div style={{
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem'
                }}>
                  Software Engineering
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)'
                }}>
                  iCEV - Currently Studying
                </div>
              </div>
            </div>

            <div style={{
              padding: '1.5rem',
              background: 'var(--bg-primary)',
              borderRadius: '12px',
              border: '1px solid var(--border)'
            }}>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                Languages
              </h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                    Portuguese
                  </span>
                  <span style={{
                    color: 'var(--accent)',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}>
                    Native
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                    English
                  </span>
                  <span style={{
                    color: 'var(--accent)',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}>
                    Intermediary
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats & Timeline */}
          <div>
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '1rem',
                marginBottom: '3rem'
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="card-3d"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    textAlign: 'center',
                    padding: '1.5rem 1rem'
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    boxShadow: `0 4px 20px ${stat.color}30`
                  }}>
                    <stat.icon size={20} color="white" />
                  </div>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="inset-card"
            >
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                My Journey
              </h3>

              <div style={{
                position: 'relative'
              }}>
                {/* Timeline Line */}
                <div style={{
                  position: 'absolute',
                  left: '20px',
                  top: '0',
                  bottom: '0',
                  width: '2px',
                  background: 'var(--border)'
                }} />

                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    style={{
                      position: 'relative',
                      paddingLeft: '3rem',
                      paddingBottom: index < timeline.length - 1 ? '2rem' : 0
                    }}
                  >
                    {/* Timeline Dot */}
                    <div style={{
                      position: 'absolute',
                      left: '12px',
                      top: '0.5rem',
                      width: '16px',
                      height: '16px',
                      background: item.color,
                      borderRadius: '50%',
                      boxShadow: `0 0 10px ${item.color}50`
                    }} />

                    <div style={{
                      background: 'var(--bg-secondary)',
                      padding: '1.5rem',
                      borderRadius: '12px',
                      border: '1px solid var(--border)'
                    }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.5rem'
                      }}>
                        <h4 style={{
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)'
                        }}>
                          {item.title}
                        </h4>
                        <span style={{
                          fontSize: '0.9rem',
                          color: item.color,
                          fontWeight: 600,
                          padding: '0.25rem 0.75rem',
                          background: `${item.color}20`,
                          borderRadius: '12px'
                        }}>
                          {item.year}
                        </span>
                      </div>
                      <div style={{
                        fontSize: '0.9rem',
                        color: 'var(--accent)',
                        fontWeight: 500,
                        marginBottom: '0.75rem'
                      }}>
                        {item.company}
                      </div>
                      <p style={{
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        fontSize: '0.9rem'
                      }}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
