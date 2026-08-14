import React from 'react';
import { Cpu, BrainCircuit, Server, Code, Bot, GitBranch } from 'lucide-react';
import { pythonSkills, aiSkills, aiDevToolsPills, devopsPills, enterprisePills } from '../../data/skillsData';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Technical <span>Skills & AI Tools</span></h2>
        <p className="section-subtitle">Technologies, OOP foundations, AI coding tools, and cloud DevOps workflows I leverage for high-velocity software engineering.</p>

        <div className="skills-grid">
          
          {/* Category 1: Programming Languages & Backend */}
          <div className="skill-category">
            <h3 className="category-title">
              <Cpu size={20} /> Programming & Backend Frameworks
            </h3>
            <div className="skill-items">
              {pythonSkills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-item-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.percent}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${skill.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2: AI & Datasets */}
          <div className="skill-category">
            <h3 className="category-title">
              <BrainCircuit size={20} /> AI & Data Engineering
            </h3>
            <div className="skill-items">
              {aiSkills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-item-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.percent}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${skill.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category 3: AI Developer Tools & Coding Assistants */}
          <div className="skill-category">
            <h3 className="category-title">
              <Bot size={20} /> AI Developer Tools & Acceleration
            </h3>
            <div className="tech-pills">
              {aiDevToolsPills.map((pill) => (
                <span className="tech-pill" key={pill}>{pill}</span>
              ))}
            </div>
          </div>

          {/* Category 4: GitHub, Azure & DevOps */}
          <div className="skill-category">
            <h3 className="category-title">
              <GitBranch size={20} /> GitHub, Azure & Version Control
            </h3>
            <div className="tech-pills">
              {devopsPills.map((pill) => (
                <span className="tech-pill" key={pill}>{pill}</span>
              ))}
            </div>
          </div>

          {/* Category 5: Enterprise Systems & Web Tech */}
          <div className="skill-category" style={{ gridColumn: '1 / -1' }}>
            <h3 className="category-title">
              <Code size={20} /> Enterprise Systems & Web Tech
            </h3>
            <div className="tech-pills">
              {enterprisePills.map((pill) => (
                <span className="tech-pill" key={pill}>{pill}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
