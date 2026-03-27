import React from 'react';
import { portfolioData } from '../data/portfolioData.jsx';
import '../styles/pages.css';

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <div className="page-container">
      <section className="section">
        <div className="container">
          <h2 className="section-title">Achievements & Certifications</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">
                  <i className={achievement.icon}></i>
                </div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
