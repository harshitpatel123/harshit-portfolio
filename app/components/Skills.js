'use client';
import { useEffect, useState } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const skills = {
    frontend: [
      { name: 'React.js', level: 'Advanced', percentage: 90 },
      { name: 'Next.js', level: 'Proficient', percentage: 85 },
      { name: 'JavaScript', level: 'Advanced', percentage: 90 },
      { name: 'TypeScript', level: 'Proficient', percentage: 80 },
      { name: 'HTML/CSS', level: 'Advanced', percentage: 90 },
      { name: 'Tailwind CSS', level: 'Proficient', percentage: 85 },
      { name: 'Material UI', level: 'Proficient', percentage: 80 }
    ],
    backend: [
      { name: 'Node.js', level: 'Advanced', percentage: 90 },
      { name: 'Express.js', level: 'Proficient', percentage: 85 },
      { name: 'NestJS', level: 'Proficient', percentage: 80 },
      { name: 'REST APIs', level: 'Advanced', percentage: 90 },
      { name: 'GraphQL', level: 'Proficient', percentage: 80 },
      { name: 'PostgreSQL', level: 'Proficient', percentage: 85 },
      { name: 'MySQL', level: 'Proficient', percentage: 80 }
    ],
    tools: [
      { name: 'Git & GitHub', level: 'Advanced', percentage: 90 },
      { name: 'Docker', level: 'Proficient', percentage: 80 },
      { name: 'AWS', level: 'Working Knowledge', percentage: 70 },
      { name: 'CI/CD (GitHub Actions)', level: 'Proficient', percentage: 80 },
      { name: 'NGINX', level: 'Proficient', percentage: 75 },
      { name: 'Netlify', level: 'Working Knowledge', percentage: 70 },
      { name: 'Firebase', level: 'Working Knowledge', percentage: 70 }
    ]
  };

  const technologies = [
    'React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'JavaScript', 
    'TypeScript', 'Tailwind', 'Git', 'Docker', 'AWS', 'Firebase'
  ];

  return (
    <section id="skills" className="section" style={{
      background: 'var(--bg-primary)',
      position: 'relative'
    }}>
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">Technologies I work with to bring ideas to life</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {/* Frontend */}
          <div className="card">
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '2rem',
              textAlign: 'center',
              color: 'var(--text-primary)'
            }}>Frontend</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {skills.frontend.map((skill, index) => (
                <div key={index}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem'
                  }}>
                    <span style={{ color: 'var(--text-primary)' }}>{skill.name}</span>
                    <span style={{ color: 'var(--accent-cyan)', fontSize: '0.875rem' }}>{skill.level}</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{
                        width: isVisible ? `${skill.percentage}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="card">
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '2rem',
              textAlign: 'center',
              color: 'var(--text-primary)'
            }}>Backend</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {skills.backend.map((skill, index) => (
                <div key={index}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem'
                  }}>
                    <span style={{ color: 'var(--text-primary)' }}>{skill.name}</span>
                    <span style={{ color: 'var(--accent-cyan)', fontSize: '0.875rem' }}>{skill.level}</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{
                        width: isVisible ? `${skill.percentage}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="card">
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '2rem',
              textAlign: 'center',
              color: 'var(--text-primary)'
            }}>Tools & Platforms</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {skills.tools.map((skill, index) => (
                <div key={index}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem'
                  }}>
                    <span style={{ color: 'var(--text-primary)' }}>{skill.name}</span>
                    <span style={{ color: 'var(--accent-cyan)', fontSize: '0.875rem' }}>{skill.level}</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{
                        width: isVisible ? `${skill.percentage}%` : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies I Love Working With */}
        <div style={{
          textAlign: 'center',
          position: 'relative'
        }}>
          <h3 style={{
            fontSize: '2rem',
            marginBottom: '2rem',
            color: 'var(--text-primary)'
          }}>Technologies I Love Working With</h3>
          
          <div style={{
            position: 'absolute',
            top: '50%',
            right: '10%',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 229, 204, 0.2), transparent)',
            filter: 'blur(40px)'
          }}></div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {technologies.map((tech, index) => (
              <div key={index} style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-full)',
                padding: '0.75rem 1.5rem',
                color: 'var(--accent-cyan)',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 217, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
