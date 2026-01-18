'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section" style={{
      background: 'var(--bg-primary)',
      position: 'relative'
    }}>
      {/* Floating Shape */}
      <div className="floating-shape" style={{
        width: '100px',
        height: '100px',
        borderRadius: '0',
        bottom: '10%',
        left: '20%',
        animationDelay: '2s',
        transform: 'rotate(45deg)'
      }}></div>

      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a project in mind? Let's work together to create something amazing</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Left Side - Contact Info */}
          <div>
            <h3 style={{
              fontSize: '2rem',
              marginBottom: '1rem',
              color: 'var(--text-primary)'
            }}>Let's Connect</h3>

            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              lineHeight: '1.8'
            }}>
              I'm always interested in hearing about new opportunities, creative projects, or just having a chat about technology and development. Feel free to reach out!
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div className="icon-circle" style={{
                  width: '50px',
                  height: '50px',
                  fontSize: '1.25rem'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    marginBottom: '0.25rem'
                  }}>Email</div>
                  <div style={{
                    color: 'var(--text-primary)',
                    fontSize: '1.125rem'
                  }}>harshitpatel3703@gmail.com</div>
                </div>
              </div>

              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div className="icon-circle" style={{
                  width: '50px',
                  height: '50px',
                  fontSize: '1.25rem'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    marginBottom: '0.25rem'
                  }}>Phone</div>
                  <div style={{
                    color: 'var(--text-primary)',
                    fontSize: '1.125rem'
                  }}>+91 63514 93094</div>
                </div>
              </div>

              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div className="icon-circle" style={{
                  width: '50px',
                  height: '50px',
                  fontSize: '1.25rem'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <div style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    marginBottom: '0.25rem'
                  }}>Location</div>
                  <div style={{
                    color: 'var(--text-primary)',
                    fontSize: '1.125rem'
                  }}>Ahmedabad, Gujarat, India</div>
                </div>
              </div>
            </div>

            <div>
              <h4 style={{
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                fontSize: '1.125rem'
              }}>Follow Me</h4>
              <div style={{
                display: 'flex',
                gap: '1rem'
              }}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '2rem',
              color: 'var(--text-primary)'
            }}>Send Message</h3>

            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                    fontSize: '0.875rem'
                  }}>Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                    fontSize: '0.875rem'
                  }}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--text-primary)',
                  fontSize: '0.875rem'
                }}>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Hiring Opportunity / Project Inquiry / General Question"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: 'var(--text-primary)',
                  fontSize: '0.875rem'
                }}>Message *</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
