import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';

const Projects = () => {
  return (
    <Layout>
      <div className="container projects-page">
        <h1>Our Work</h1>
        <p className="lead">Explore our recent projects and see the Kings Electrical difference firsthand.</p>
        
        <div className="project-filters">
          <button className="filter-btn active">All Projects</button>
          <button className="filter-btn">Residential</button>
          <button className="filter-btn">Commercial</button>
          <button className="filter-btn">Industrial</button>
          <button className="filter-btn">Renewable Energy</button>
        </div>
        
        <div className="projects-grid">
          {/* Project cards would go here with before/after images */}
          <div className="project-card">
            <div className="project-image">
              <Image src="/images/projects/project1.jpg" alt="Commercial Rewiring Project" width={400} height={300} />
            </div>
            <div className="project-details">
              <h3>Commercial Office Rewiring</h3>
              <p className="project-location">Downtown Business District</p>
              <p className="project-description">Complete electrical system overhaul for a 10,000 sq ft office building, including LED lighting upgrades and smart control systems.</p>
              <Link href="/projects/commercial-office-rewiring" className="btn btn-sm">View Case Study</Link>
            </div>
          </div>
          
          {/* Additional project cards would go here */}
        </div>
      </div>
    </Layout>
  );
};

export default Projects; 