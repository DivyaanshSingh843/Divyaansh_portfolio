import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="navbar" id="navbar">
      <div className="container">
        <a href="#home" className="logo" id="navLogo">
          <div className="logo-img-wrapper">
            <img src="/assets/image3.png" alt="Divyansh Singh Logo" />
          </div>
          <div className="logo-text">Divyansh<span>.</span></div>
        </a>

        <button 
          className="menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={activeSection === link.href.replace('#', '') ? 'active' : ''}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href="/assets/Divyansh_Singh_Resume.pdf" download="Divyansh_Singh_Resume.pdf" className="nav-cta" onClick={() => setMobileMenuOpen(false)}>
                <Download size={16} style={{ display: 'inline', marginRight: '6px' }} /> CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
