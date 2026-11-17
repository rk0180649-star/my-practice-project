import React from 'react';
import './Projectlink.css';

const Projectlink = () => {
  return (
    <div className="project-link-section">
      <div className="project-link-container">
        <h2 className="project-link-title">Explore My Full-Stack Work</h2>
        <p className="project-link-text">
          Check out the live InternArea Job & Internship Portal built with Next.js, Express, and MongoDB.
        </p>
        <a 
          href="https://full-stack-website-brown.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-btn"
        >
          Visit My Full Stack Website
        </a>
      </div>
    </div>
  );
};

export default Projectlink;