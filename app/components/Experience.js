'use client';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      type: 'Full-time',
      location: 'Ahmedabad, India',
      period: '2023 - Present',
      description: 'Leading development of scalable web applications using MERN stack. Mentoring junior developers and implementing best practices for code quality and performance optimization.',
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines',
        'Reduced bug reports by 60%'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      type: 'Full-time',
      location: 'Ahmedabad, India',
      period: '2022 - 2023',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create responsive and user-friendly interfaces.',
      achievements: [
        'Delivered 15+ successful projects',
        'Reduced development time by 30%',
        'Implemented responsive designs',
        'Integrated third-party APIs'
      ],
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Tailwind CSS']
    }
  ];

  return (
    <section id="experience" className="section" style={{
      background: 'var(--bg-primary)',
      position: 'relative'
    }}>
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey and career milestones</p>

        <div style={{
          position: 'relative',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {/* Timeline Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'linear-gradient(180deg, var(--accent-cyan), var(--accent-green))',
            transform: 'translateX(-50%)'
          }}></div>

          {experiences.map((exp, index) => (
            <div key={index} style={{
              position: 'relative',
              marginBottom: '4rem'
            }}>
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '2rem',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-green))',
                transform: 'translateX(-50%)',
                zIndex: 1,
                boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)'
              }}></div>

              {/* Content Card */}
              <div style={{
                width: 'calc(50% - 3rem)',
                marginLeft: index % 2 === 0 ? '0' : 'auto',
                marginRight: index % 2 === 0 ? 'auto' : '0'
              }}>
                <div className="card">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      background: 'rgba(0, 217, 255, 0.1)',
                      border: '1px solid var(--accent-cyan)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.5rem 1rem',
                      fontSize: '0.875rem',
                      color: 'var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                      </svg>
                      {exp.type}
                    </div>
                  </div>

                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)'
                  }}>{exp.title}</h3>

                  <h4 style={{
                    fontSize: '1.125rem',
                    color: 'var(--accent-green)',
                    marginBottom: '0.75rem'
                  }}>{exp.company}</h4>

                  <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                    marginBottom: '1rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {exp.period}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      {exp.location}
                    </div>
                  </div>

                  <p style={{
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6'
                  }}>{exp.description}</p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem',
                      fontSize: '1rem'
                    }}>Key Achievements:</h5>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} style={{
                          color: 'var(--text-secondary)',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.9375rem'
                        }}>
                          <span style={{
                            color: 'var(--accent-green)',
                            marginTop: '0.25rem'
                          }}>●</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 style={{
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem',
                      fontSize: '1rem'
                    }}>Technologies Used:</h5>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      {exp.technologies.map((tech, i) => (
                        <span key={i} style={{
                          background: 'rgba(0, 229, 204, 0.1)',
                          color: 'var(--accent-green)',
                          padding: '0.375rem 0.875rem',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.875rem',
                          border: '1px solid rgba(0, 229, 204, 0.3)'
                        }}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '3rem'
        }}>
          <button className="btn-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download Full Resume
          </button>
        </div>
      </div>
    </section>
  );
}
