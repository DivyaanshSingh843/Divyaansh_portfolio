import React, { useState } from 'react';
import { Mail, Github, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', msg: 'Please fill out all fields.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', msg: 'Please enter a valid email address.' });
      return;
    }

    // Instant direct email client trigger addressed to divyanshsingh843@gmail.com
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Divyansh,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
    );

    const mailtoUrl = `mailto:divyanshsingh843@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setStatus({
      type: 'success',
      msg: 'Opening your email app to send the message directly to divyanshsingh843@gmail.com!'
    });

    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setStatus({ type: '', msg: '' });
    }, 6000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-card">
          
          <div className="contact-info">
            <h3>Let's Build Something Great Together</h3>
            <p>
              I'm open to discussing Python backend engineering, AI dataset & model training integrations, FastAPI microservices, and server deployment opportunities. Feel free to reach out!
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-text">
                  <label>Email Me</label>
                  <a href="mailto:divyanshsingh843@gmail.com">divyanshsingh843@gmail.com</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <Github size={20} />
                </div>
                <div className="contact-text">
                  <label>GitHub Profile</label>
                  <a href="https://github.com/DivyaanshSingh843" target="_blank" rel="noopener noreferrer">github.com/DivyaanshSingh843</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-text">
                  <label>Location</label>
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                className="form-input" 
                placeholder="Divyansh Singh"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                className="form-input" 
                placeholder="divyanshsingh843@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                className="form-input" 
                placeholder="Tell me about your project, job opportunity, or inquiry..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%', border: 'none' }}
            >
              <Send size={18} /> Send Message
            </button>

            {status.msg && (
              <div className={`form-status ${status.type}`}>
                {status.msg}
              </div>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
