import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const ElectricalResources = () => {
  return (
    <Layout>
      <div className="container resources-hub">
        <h1>Electrical Knowledge Center</h1>
        <p className="lead">Empowering you with the information you need to make informed decisions about your electrical needs.</p>
        
        <div className="resources-grid">
          <div className="resource-card">
            <h3>Understanding Electrical Systems</h3>
            <p>Learn the basics of residential and commercial electrical systems.</p>
            <Link href="/resources/electrical-systems">Read More</Link>
          </div>
          
          <div className="resource-card">
            <h3>Energy Efficiency Tips</h3>
            <p>Discover how to reduce your energy consumption and save on bills.</p>
            <Link href="/resources/energy-efficiency">Read More</Link>
          </div>
          
          <div className="resource-card">
            <h3>Safety Guidelines</h3>
            <p>Essential safety information every property owner should know.</p>
            <Link href="/resources/safety-guidelines">Read More</Link>
          </div>
          
          <div className="resource-card">
            <h3>Comparing Electrical Products</h3>
            <p>Guides to help you select the right products for your needs.</p>
            <Link href="/resources/product-guides">Read More</Link>
          </div>
        </div>
        
        <div className="latest-articles">
          <h2>Latest Articles</h2>
          {/* Article previews would go here */}
        </div>
      </div>
    </Layout>
  );
};

export default ElectricalResources; 