import React from 'react';
import Layout from '../components/Layout';

const FAQs = () => {
  return (
    <Layout>
      <div className="container faqs-page">
        <h1>Frequently Asked Questions</h1>
        <p className="lead">Find answers to common questions about electrical services, hiring contractors, and maintaining your electrical systems.</p>
        
        <div className="faq-categories">
          <button className="category-btn active">General</button>
          <button className="category-btn">Residential Services</button>
          <button className="category-btn">Commercial Services</button>
          <button className="category-btn">Emergency Services</button>
          <button className="category-btn">Pricing & Payments</button>
        </div>
        
        <div className="faq-accordion">
          <div className="faq-item">
            <div className="faq-question">
              <h3>How do I know if I need to upgrade my electrical panel?</h3>
              <span className="toggle-icon">+</span>
            </div>
            <div className="faq-answer">
              <p>Signs that indicate you might need an electrical panel upgrade include frequent circuit breaker trips, flickering lights, buzzing sounds from outlets or switches, or if your home is over 20 years old with the original panel. If you're adding major appliances or renovating, an upgrade may also be necessary to handle the increased load.</p>
            </div>
          </div>
          
          {/* Additional FAQ items would go here */}
        </div>
        
        <div className="still-have-questions">
          <h2>Still Have Questions?</h2>
          <p>Our team is ready to help you with any specific concerns.</p>
          <Link href="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </div>
    </Layout>
  );
};

export default FAQs; 