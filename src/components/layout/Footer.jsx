import React from 'react';
import { Github, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-text">
          © {currentYear} Divyansh Singh. Designed & Built for Scalable Systems.
        </div>

        <div className="footer-socials">
          <a href="https://github.com/DivyaanshSingh843" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="#home" className="social-link" aria-label="Back to top">
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
