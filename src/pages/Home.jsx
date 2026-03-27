import React from 'react';
import { portfolioData } from '../data/portfolioData.jsx';
import '../styles/pages.css';

export default function Home() {
  const { personalInfo } = portfolioData;

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="section hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="profile-image">
              <img src={personalInfo.profileImage} alt="Profile" />
            </div>
            <div className="hero-text">
              <h1>{personalInfo.name}</h1>
              <h2>{personalInfo.title}</h2>
              <p>{personalInfo.bio}</p>
              <div className="contact-info">
                <span><i className="fas fa-envelope"></i> {personalInfo.email}</span>
                <span><i className="fas fa-phone"></i> {personalInfo.phone}</span>
                <span><i className="fas fa-map-marker-alt"></i> {personalInfo.location}</span>
              </div>
              <div className="social-links">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-btn">
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-detailed">
            <div className="about-text-large">
              <h1>Welcome to My Portfolio</h1>
              <p>I'm a passionate Computer Science and Engineering Student driven to innovate through full-stack development, AI, and data science with a goal to create impactful scalable technology solutions.</p>
              
              <p>I am currently pursuing my Bachelor of Technology in Computer Science and Engineering in my third year, actively honing my skills through academic projects, internships, and competitive programming.</p>
              
              <div className="info-grid">
                <div className="info-item">
                  <strong>Name:</strong> {personalInfo.name}
                </div>
                <div className="info-item">
                  <strong>Age:</strong> {personalInfo.age}
                </div>
                <div className="info-item">
                  <strong>Email:</strong> {personalInfo.email}
                </div>
                <div className="info-item">
                  <strong>Phone:</strong> {personalInfo.phone}
                </div>
                <div className="info-item">
                  <strong>Location:</strong> {personalInfo.location}
                </div>
                <div className="info-item">
                  <strong>Education:</strong> {personalInfo.education}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
