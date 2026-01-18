'use client';

export default function Projects() {
  const featuredProjects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: '👁️'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['Next.js', 'Socket.io', 'PostgreSQL', 'Tailwind'],
      icon: '👁️'
    }
  ];

  const otherProjects = [
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather information.',
      technologies: ['React', 'Weather API', 'Chart.js']
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization and reporting features.',
      technologies: ['Next.js', 'D3.js', 'Node.js']
    },
    {
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support, SEO optimization, and content management system.',
      technologies: ['Next.js', 'MDX', 'Prisma']
    }
  ];

  return (
    <section id="projects" className="section" style={{
      background: 'var(--bg-primary)'
    }}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A showcase of my recent work and personal projects</p>

        {/* Featured Work */}
        <h3 style={{
          fontSize: '1.875rem',
          marginBottom: '2rem',
          color: 'var(--text-primary)'
        }}>Featured Work</h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {featuredProjects.map((project, index) => (
            <div key={index} className="card" style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <div style={{
                width: '100%',
                height: '200px',
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                fontSize: '4rem'
              }}>
                {project.icon}
              </div>

              <h4 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}>{project.title}</h4>

              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                lineHeight: '1.6',
                flex: 1
              }}>{project.description}</p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div style={{
                display: 'flex',
                gap: '1rem'
              }}>
                <button style={{
                  background: 'transparent',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Code
                </button>
                <button style={{
                  background: 'transparent',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 style={{
          fontSize: '1.875rem',
          marginBottom: '2rem',
          color: 'var(--text-primary)'
        }}>Other Projects</h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {otherProjects.map((project, index) => (
            <div key={index} className="card">
              <h4 style={{
                fontSize: '1.25rem',
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}>{project.title}</h4>

              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: '1.5rem',
                fontSize: '0.9375rem',
                lineHeight: '1.6'
              }}>{project.description}</p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {project.technologies.map((tech, i) => (
                  <span key={i} style={{
                    background: 'rgba(0, 217, 255, 0.1)',
                    color: 'var(--accent-cyan)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.75rem',
                    border: '1px solid rgba(0, 217, 255, 0.3)'
                  }}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
