'use client';

export default function About() {
  return (
    <section id="about" className="section" style={{
      background: 'var(--bg-primary)',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 217, 255, 0.1), transparent)',
        filter: 'blur(60px)'
      }}></div>

      <div className="container">
        <div style={{
          textAlign: 'center',
          marginBottom: '1rem'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-green))',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        </div>

        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Full Stack Software Engineer with experience building production-ready web applications</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div>
            <h3 style={{
              fontSize: '1.875rem',
              marginBottom: '1.5rem',
              color: 'var(--text-primary)'
            }}>Professional Summary</h3>
            
            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              lineHeight: '1.8'
            }}>
              I'm a Full Stack Software Engineer with hands-on experience building scalable and reliable web applications. I focus on writing clean, maintainable code and designing systems that perform well and scale effectively over time.
            </p>

            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              lineHeight: '1.8'
            }}>
              Comfortable working across frontend, backend, and cloud environments, I enjoy owning features end-to-end — from shaping user experiences to implementing robust backend logic and deployment workflows. I'm driven by solving real-world problems and building software that delivers long-term value.
            </p>

            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              lineHeight: '1.8'
            }}>
              I value clear communication, thoughtful problem-solving, and continuous learning, and I enjoy collaborating with teams to turn ideas into well-executed solutions. Whether working independently or as part of a team, I take ownership of my work and strive to build software that is both technically sound and user-focused.
            </p>

            <button className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem'
          }}>
            <div className="card" style={{
              textAlign: 'center'
            }}>
              <div className="icon-circle" style={{
                margin: '0 auto 1rem'
              }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h4 style={{
                fontSize: '1.125rem',
                marginBottom: '0.5rem',
                color: 'var(--text-primary)'
              }}>2+ Years Experience</h4>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.875rem'
              }}>Professional Development</p>
            </div>

            <div className="card" style={{
              textAlign: 'center'
            }}>
              <div className="icon-circle" style={{
                margin: '0 auto 1rem'
              }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h4 style={{
                fontSize: '1.125rem',
                marginBottom: '0.5rem',
                color: 'var(--text-primary)'
              }}>Production-Ready Applications</h4>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.875rem'
              }}>Scalable Solutions</p>
            </div>

            <div className="card" style={{
              textAlign: 'center'
            }}>
              <div className="icon-circle" style={{
                margin: '0 auto 1rem'
              }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                </svg>
              </div>
              <h4 style={{
                fontSize: '1.125rem',
                marginBottom: '0.5rem',
                color: 'var(--text-primary)'
              }}>Cloud & Deployment Experience</h4>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.875rem'
              }}>AWS, Docker, CI/CD</p>
            </div>

            <div className="card" style={{
              textAlign: 'center'
            }}>
              <div className="icon-circle" style={{
                margin: '0 auto 1rem'
              }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h4 style={{
                fontSize: '1.125rem',
                marginBottom: '0.5rem',
                color: 'var(--text-primary)'
              }}>Team Collaboration & Mentorship</h4>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.875rem'
              }}>Leadership & Teamwork</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
