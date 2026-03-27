import React from 'react';
import { portfolioData } from '../data/portfolioData.jsx';
import '../styles/pages.css';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-container">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-duration"><i className="fas fa-calendar"></i> {project.duration}</span>
                </div>
                <p className="project-description">{project.description}</p>
                
                <div className="project-details">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {project.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
