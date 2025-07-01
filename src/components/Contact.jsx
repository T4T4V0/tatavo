import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, X } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gustavo.hsf03@gmail.com',
      href: 'mailto:ednaldobritojr004@gmail.com',
      color: '#3b82f6'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(86) 98119-2003',
      href: 'tel:+5586981192003',
      color: '#22c55e'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Teresina, PI, Brazil',
      href: '#',
      color: '#f59e0b'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/T4T4V0',
      color: '#333333'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHK3Tw2wcjl_wAAAZfEmesYXrrFjrScsihaJCnOmWWOXgFcV0Ma3AqVPWS6OiK1XBXfV1Ylk-5MA8LzgEEpqL4VohEPIFwMt6OR0B-MB4xQPdiaBeFxoy5XsrZ5M6gXQwokOO0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fgustavo-henrique-soares-feitosa-91787b234%2F',
      color: '#0077b5'
    },
    {
      icon: X,
      label: 'X',
      href: 'https://x.com/tatavo19?s=11&t=hC6p79YBg6_9uWvkMsizJw',
      color: '#000000'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Formspree endpoint
      const response = await fetch('https://formspree.io/f/xeoknpdg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" style={{
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
          Let's Work Together
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
          Have a project in mind? Let's discuss how we can bring your ideas to life
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(2rem, 5vw, 3rem)',
          alignItems: 'start'
        }}>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '2rem',
              color: 'var(--text-primary)'
            }}>
              Get in Touch
            </h3>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="inset-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.5rem',
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: `linear-gradient(135deg, ${info.color}, ${info.color}dd)`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 4px 20px ${info.color}30`
                  }}>
                    <info.icon size={20} color="white" />
                  </div>
                  <div>
                    <div style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.25rem'
                    }}>
                      {info.label}
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)'
                    }}>
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}>
                Follow Me
              </h4>
              <div style={{
                display: 'flex',
                gap: '1rem'
              }}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-3d"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: '48px',
                      height: '48px',
                      padding: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = social.color;
                      e.target.style.borderColor = social.color;
                      e.target.style.boxShadow = `0 8px 25px ${social.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'var(--bg-secondary)';
                      e.target.style.borderColor = 'var(--border)';
                      e.target.style.boxShadow = '0 4px 8px var(--shadow)';
                    }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inset-card"
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '2rem',
              color: 'var(--text-primary)'
            }}>
              Send Message
            </h3>

            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem'
              }}>
                <div className="form-group">
                  <motion.input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="form-input"
                    animate={{
                      boxShadow: focusedField === 'name' 
                        ? '0 0 20px var(--glow), inset 0 2px 8px var(--shadow)'
                        : 'inset 0 2px 8px var(--shadow)'
                    }}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  />
                </div>

                <div className="form-group">
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="form-input"
                    animate={{
                      boxShadow: focusedField === 'email' 
                        ? '0 0 20px var(--glow), inset 0 2px 8px var(--shadow)'
                        : 'inset 0 2px 8px var(--shadow)'
                    }}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <motion.input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="form-input"
                  animate={{
                    boxShadow: focusedField === 'subject' 
                      ? '0 0 20px var(--glow), inset 0 2px 8px var(--shadow)'
                      : 'inset 0 2px 8px var(--shadow)'
                  }}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
              </div>

              <div className="form-group">
                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className="form-input"
                  animate={{
                    boxShadow: focusedField === 'message' 
                      ? '0 0 20px var(--glow), inset 0 2px 8px var(--shadow)'
                      : 'inset 0 2px 8px var(--shadow)'
                  }}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    resize: 'vertical',
                    minHeight: '120px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-3d"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  background: 'var(--accent)',
                  color: 'white',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      style={{
                        width: '16px',
                        height: '16px',
                        border: '2px solid white',
                        borderTop: '2px solid transparent',
                        borderRadius: '50%'
                      }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Message */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    padding: '1rem',
                    borderRadius: '12px',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    background: submitStatus === 'success'
                      ? 'rgba(34, 197, 94, 0.1)'
                      : 'rgba(239, 68, 68, 0.1)',
                    color: submitStatus === 'success'
                      ? '#22c55e'
                      : '#ef4444',
                    border: `1px solid ${submitStatus === 'success' ? '#22c55e30' : '#ef444430'}`
                  }}
                >
                  {submitStatus === 'success'
                    ? '✅ Message sent successfully! I\'ll get back to you soon.'
                    : '❌ Failed to send message. Please try again or contact me directly.'}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
