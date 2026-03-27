import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          Portfolio
        </Link>
        <button 
          className={`nav-toggle ${isOpen ? 'active' : ''}`} 
          id="nav-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`} id="nav-menu">
          <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/education" className="nav-link" onClick={closeMenu}>Education</Link></li>
          <li><Link to="/skills" className="nav-link" onClick={closeMenu}>Skills</Link></li>
          <li><Link to="/projects" className="nav-link" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/achievements" className="nav-link" onClick={closeMenu}>Achievements</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
