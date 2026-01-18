'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(10, 14, 39, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
      transition: 'all 0.3s ease',
      padding: '1.25rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-green))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          &lt;HP/&gt;
        </div>

        <nav style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <a href="#home" style={{ color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.3s' }}>Home</a>
          <a href="#about" style={{ color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.3s' }}>About</a>
          <a href="#skills" style={{ color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.3s' }}>Skills</a>
          <a href="#projects" style={{ color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.3s' }}>Projects</a>
          <a href="#experience" style={{ color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.3s' }}>Experience</a>
          <a href="#contact" style={{ color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.3s' }}>Contact</a>
          <button className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Get in Touch
          </button>
        </nav>
      </div>
    </header>
  );
}
