import React from 'react';
import { Cpu, BrainCircuit, Layers, Server } from 'lucide-react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        <p className="section-subtitle">Delivering high-performance Python microservices, AI dataset pipeline solutions, and robust server deployments.</p>

        <div className="about-grid">
          <div className="about-card-main">
            <p>
              I am a dedicated <strong>Python Developer</strong> with industry experience building scalable backend architectures, custom <strong>AI dataset pipelines & model training routines</strong>, and enterprise web solutions using <strong>FastAPI, Django, and ERPNext</strong>.
            </p>
            <p>
              My workflow spans the entire software engineering lifecycle—from engineering async RESTful microservices and preparing custom datasets for AI models to managing task assignments in <strong>Azure DevOps</strong>, pushing code to <strong>Azure Repos</strong>, and maintaining production Linux servers.
            </p>
          </div>

          <div className="highlights-grid">
            <div className="highlight-box">
              <div className="highlight-icon">
                <Cpu size={24} />
              </div>
              <div className="highlight-text">
                <h4>FastAPI & Async Microservices</h4>
                <p>Building high-speed RESTful microservices, async APIs, and backend architectures using FastAPI and Pydantic.</p>
              </div>
            </div>

            <div className="highlight-box">
              <div className="highlight-icon">
                <BrainCircuit size={24} />
              </div>
              <div className="highlight-text">
                <h4>AI Model Training & Datasets</h4>
                <p>Curating custom datasets, data preprocessing, and training & deploying AI models behind production API endpoints.</p>
              </div>
            </div>

            <div className="highlight-box">
              <div className="highlight-icon">
                <Layers size={24} />
              </div>
              <div className="highlight-text">
                <h4>Django & ERPNext Customization</h4>
                <p>Developing enterprise web applications with Django and customizing business logic within the ERPNext ecosystem.</p>
              </div>
            </div>

            <div className="highlight-box">
              <div className="highlight-icon">
                <Server size={24} />
              </div>
              <div className="highlight-text">
                <h4>Azure & Server Management</h4>
                <p>Managing Azure DevOps tasks, version control via Azure Repos, and administering production Linux server deployments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
