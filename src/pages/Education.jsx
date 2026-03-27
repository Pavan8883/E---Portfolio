import React from 'react';
import { portfolioData } from '../data/portfolioData.jsx';
import '../styles/pages.css';

export default function Education() {
  const { education } = portfolioData;

  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <h2 className="section-title">Academic Qualifications</h2>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-icon">
                  <i className={index === 0 ? 'fas fa-graduation-cap' : 'fas fa-school'}></i>
                </div>
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <span className="date">{edu.year}</span>
                <p>{edu.description}</p>
                {edu.gpa && (
                  <div className="gpa">
                    <strong>CGPA/Percentage: {edu.gpa}</strong>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
