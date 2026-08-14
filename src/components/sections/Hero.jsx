import React, { useState, useEffect } from 'react';
import { Download, Code, Server, Cpu } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Python & AI Developer',
    'FastAPI & Microservices Specialist',
    'AI Model Trainer & Dataset Specialist',
    'AI-Augmented Engineer (Antigravity & Copilot)',
    'Django & ERPNext Engineer',
    'Azure & GitHub DevOps Specialist'
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, text.length + 1));
      }, 90);
    }

    if (!isDeleting && text === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          
          <div className="hero-content">
            <div className="badge">
              <span className="badge-dot"></span> 1+ Year Industry Experience
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="name-highlight">Divyansh Singh</span>
            </h1>

            <div className="hero-subtitle">
              <span>{text}</span>
              <span className="typing-cursor"></span>
            </div>

            <p className="hero-description">
              Python Developer specializing in building high-performance <strong>FastAPI microservices</strong>, <strong>AI dataset curation & model training</strong>, <strong>Django & ERPNext solutions</strong>, and end-to-end <strong>Azure server deployment</strong>.
            </p>

            <div className="hero-actions">
              <a href="/assets/Divyansh_Singh_Resume.pdf" download="Divyansh_Singh_Resume.pdf" className="btn btn-primary">
                <Download size={18} /> Download Resume
              </a>
              <a href="#projects" className="btn btn-secondary">
                <Code size={18} /> Explore Work
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-number">1<span>+</span></div>
                <div className="stat-label">Years Professional Exp.</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">20<span>+</span></div>
                <div className="stat-label">REST APIs & AI Services</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">99<span>.9%</span></div>
                <div className="stat-label">Server & Pipeline Uptime</div>
              </div>
            </div>
          </div>

          <div className="hero-avatar-container">
            <div className="avatar-glow"></div>
            <div className="avatar-wrapper">
              <img src="/assets/image1.png" alt="Divyansh Singh Profile Picture" />
            </div>
            
            <div className="floating-badge badge-top-right">
              <Cpu size={20} className="text-cyan" />
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Specialty</div>
                <div>Python & FastAPI</div>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left">
              <Server size={20} className="text-cyan" />
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>DevOps & AI</div>
                <div>Azure & AI Models</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
