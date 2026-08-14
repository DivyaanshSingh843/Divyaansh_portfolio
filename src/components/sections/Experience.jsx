import React from 'react';
import { experienceData } from '../../data/experienceData';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Work <span>Experience</span></h2>
        <p className="section-subtitle">My practical software engineering achievements and technical contributions.</p>

        <div className="timeline">
          {experienceData.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div>
                      <h3 className="role-title">{exp.title}</h3>
                      <div className="company-name">
                        <Icon size={16} /> {exp.company}
                      </div>
                    </div>
                    <span className="date-badge">{exp.badge}</span>
                  </div>
                  <div className="timeline-body">
                    <ul>
                      {exp.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
