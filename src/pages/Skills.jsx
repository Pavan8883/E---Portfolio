import React from 'react';
import { portfolioData } from '../data/portfolioData.jsx';
import '../styles/pages.css';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          
          <div className="skills-showcase">
            {/* Programming Languages */}
            <div className="skill-category">
              <h3><i className="fas fa-code"></i> Programming Languages</h3>
              <div className="skills-grid">
                {skills.programming.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-icon">
                      <i className="fas fa-code"></i>
                    </div>
                    <h4>{skill}</h4>
                    <div className="skill-level">
                      <div className="skill-bar">
                        <div className="skill-progress" style={{width: `${85 + Math.random() * 15}%`}}></div>
                      </div>
                      <span>Proficient</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks & Tools */}
            <div className="skill-category">
              <h3><i className="fas fa-tools"></i> Frameworks & Tools</h3>
              <div className="skills-grid">
                {skills.frameworks.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-icon">
                      <i className="fas fa-wrench"></i>
                    </div>
                    <h4>{skill}</h4>
                    <div className="skill-level">
                      <div className="skill-bar">
                        <div className="skill-progress" style={{width: `${80 + Math.random() * 20}%`}}></div>
                      </div>
                      <span>Experienced</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="skill-category">
              <h3><i className="fas fa-database"></i> Databases</h3>
              <div className="skills-grid">
                {skills.databases.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-icon">
                      <i className="fas fa-database"></i>
                    </div>
                    <h4>{skill}</h4>
                    <div className="skill-level">
                      <div className="skill-bar">
                        <div className="skill-progress" style={{width: `${80 + Math.random() * 20}%`}}></div>
                      </div>
                      <span>Intermediate</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Operating Systems */}
            <div className="skill-category">
              <h3><i className="fas fa-laptop"></i> Operating Systems</h3>
              <div className="skills-grid">
                {skills.os.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-icon">
                      <i className="fas fa-laptop"></i>
                    </div>
                    <h4>{skill}</h4>
                    <div className="skill-level">
                      <div className="skill-bar">
                        <div className="skill-progress" style={{width: `${85 + Math.random() * 15}%`}}></div>
                      </div>
                      <span>Proficient</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coursework */}
          <div className="coursework-section">
            <h2 className="section-title">Relevant Coursework</h2>
            <div className="coursework-list">
              {skills.coursework.map((course, index) => (
                <div key={index} className="coursework-item">
                  <i className="fas fa-check-circle"></i>
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
