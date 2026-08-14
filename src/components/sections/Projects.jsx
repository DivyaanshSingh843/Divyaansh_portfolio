import React from 'react';
import { Github } from 'lucide-react';
import { projectsData } from '../../data/projectsData';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <p className="section-subtitle">Real-world applications engineered for speed, AI intelligence, and server stability.</p>

        <div className="projects-grid">
          {projectsData.map((project, index) => {
            const Icon = project.icon;
            return (
              <div className="project-card" key={index}>
                <div className="project-banner">
                  <Icon size={48} />
                  <span className="project-badge-type">{project.type}</span>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="project-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn project-btn-outline">
                      <Github size={16} /> Repository
                    </a>
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

export default Projects;
