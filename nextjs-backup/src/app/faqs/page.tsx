import React from 'react';
import Link from 'next/link';
import MainLayout from "@/components/layout/MainLayout";
import FAQAccordion from "@/components/FAQAccordion";

export default function FAQs() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-16 md:py-20">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Find answers to common questions about electrical services, hiring contractors, and maintaining your electrical systems.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="faq-categories flex flex-wrap gap-3 mb-12 justify-center">
            <button className="category-btn bg-primary text-white px-6 py-3 rounded-full font-medium">General</button>
            <button className="category-btn bg-light text-dark hover:bg-primary hover:text-white px-6 py-3 rounded-full font-medium transition-colors">Residential Services</button>
            <button className="category-btn bg-light text-dark hover:bg-primary hover:text-white px-6 py-3 rounded-full font-medium transition-colors">Commercial Services</button>
            <button className="category-btn bg-light text-dark hover:bg-primary hover:text-white px-6 py-3 rounded-full font-medium transition-colors">Heat Pumps</button>
            <button className="category-btn bg-light text-dark hover:bg-primary hover:text-white px-6 py-3 rounded-full font-medium transition-colors">Pricing & Payments</button>
          </div>
          
          <div className="faq-accordion space-y-6 max-w-4xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="faq-item bg-white rounded-lg shadow-md overflow-hidden">
              <div className="faq-question p-6 cursor-pointer flex justify-between items-center">
                <h3 className="text-xl font-bold">How do I know if I need to upgrade my electrical panel?</h3>
                <span className="toggle-icon text-primary text-2xl font-bold">+</span>
              </div>
              <div className="faq-answer p-6 pt-0 border-t border-gray-200">
                <p className="text-gray-color">
                  Signs that indicate you might need an electrical panel upgrade include frequent circuit breaker trips, flickering lights, buzzing sounds from outlets or switches, or if your home is over 20 years old with the original panel. If you're adding major appliances or renovating, an upgrade may also be necessary to handle the increased load. Our technicians can perform a thorough assessment to determine if an upgrade is needed.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="faq-item bg-white rounded-lg shadow-md overflow-hidden">
              <div className="faq-question p-6 cursor-pointer flex justify-between items-center">
                <h3 className="text-xl font-bold">How often should I have my electrical system inspected?</h3>
                <span className="toggle-icon text-primary text-2xl font-bold">+</span>
              </div>
              <div className="faq-answer p-6 pt-0 border-t border-gray-200">
                <p className="text-gray-color">
                  We recommend having your electrical system inspected every 3-5 years for residential properties and annually for commercial properties. However, if your home is older (25+ years), more frequent inspections may be beneficial. Regular inspections help identify potential issues before they become serious problems, ensuring the safety and efficiency of your electrical system.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="faq-item bg-white rounded-lg shadow-md overflow-hidden">
              <div className="faq-question p-6 cursor-pointer flex justify-between items-center">
                <h3 className="text-xl font-bold">What size heat pump do I need for my home?</h3>
                <span className="toggle-icon text-primary text-2xl font-bold">+</span>
              </div>
              <div className="faq-answer p-6 pt-0 border-t border-gray-200">
                <p className="text-gray-color">
                  The size of heat pump you need depends on several factors, including the square footage of your home, ceiling height, insulation quality, number of windows, local climate, and your specific heating and cooling needs. As a general rule, you need approximately 1kW of heating capacity per 10 square meters of living space in a well-insulated home. Our heat pump specialists can conduct a proper assessment of your home to recommend the most appropriate size and model for optimal efficiency and comfort.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="faq-item bg-white rounded-lg shadow-md overflow-hidden">
              <div className="faq-question p-6 cursor-pointer flex justify-between items-center">
                <h3 className="text-xl font-bold">How much does it cost to rewire a house?</h3>
                <span className="toggle-icon text-primary text-2xl font-bold">+</span>
              </div>
              <div className="faq-answer p-6 pt-0 border-t border-gray-200">
                <p className="text-gray-color">
                  The cost of rewiring a house varies significantly depending on the size of your home, the accessibility of wiring, the age of the property, and the complexity of the job. For a standard 3-bedroom home in Christchurch, rewiring costs typically range from $8,000 to $15,000. However, each property is unique, and we provide detailed, no-obligation quotes after assessing your specific requirements. Our transparent pricing ensures you know exactly what you're paying for with no hidden costs.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="faq-item bg-white rounded-lg shadow-md overflow-hidden">
              <div className="faq-question p-6 cursor-pointer flex justify-between items-center">
                <h3 className="text-xl font-bold">Do you offer emergency electrical services?</h3>
                <span className="toggle-icon text-primary text-2xl font-bold">+</span>
              </div>
              <div className="faq-answer p-6 pt-0 border-t border-gray-200">
                <p className="text-gray-color">
                  Yes, we provide 24/7 emergency electrical services throughout Christchurch and surrounding areas. Our team of licensed electricians is ready to respond quickly to any electrical emergency, including power outages, electrical fires, exposed wiring, or any situation that poses a safety risk. Simply call our emergency hotline at 0800 808 448, and we'll dispatch a technician to your location as soon as possible.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 6 */}
            <div className="faq-item bg-white rounded-lg shadow-md overflow-hidden">
              <div className="faq-question p-6 cursor-pointer flex justify-between items-center">
                <h3 className="text-xl font-bold">What payment methods do you accept?</h3>
                <span className="toggle-icon text-primary text-2xl font-bold">+</span>
              </div>
              <div className="faq-answer p-6 pt-0 border-t border-gray-200">
                <p className="text-gray-color">
                  We accept various payment methods for your convenience, including credit/debit cards (Visa, Mastercard), bank transfers, cash, and cheques. For larger projects, we also offer flexible payment plans. All payment details will be clearly outlined in your quote and invoice. If you have specific payment requirements, please discuss them with our team, and we'll do our best to accommodate your needs.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg mb-6">Don't see your question here? We're happy to help!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary px-8 py-4">
                Contact Us
              </Link>
              <Link href="/resources" className="btn btn-outline px-8 py-4">
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Helpful Resources</h2>
            <p className="text-lg text-gray-color max-w-3xl mx-auto">
              Explore our knowledge center for in-depth guides and articles about electrical systems and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Resource Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Understanding Electrical Safety</h3>
                <p className="text-gray-color mb-4">
                  Learn essential electrical safety tips to protect your home and family from potential hazards.
                </p>
                <Link href="/resources/electrical-safety" className="text-primary font-medium flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Resource Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Heat Pump Buying Guide</h3>
                <p className="text-gray-color mb-4">
                  Everything you need to know about selecting the right heat pump for your home or business.
                </p>
                <Link href="/resources/heat-pump-guide" className="text-primary font-medium flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Resource Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Energy Efficiency Tips</h3>
                <p className="text-gray-color mb-4">
                  Practical ways to reduce your energy consumption and lower your electricity bills.
                </p>
                <Link href="/resources/energy-efficiency" className="text-primary font-medium flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-8 lg:mb-0 lg:mr-8 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-lg md:text-xl">
                Our team is ready to provide personalized answers to your specific electrical questions and concerns.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-white text-primary text-lg px-8 py-4">
                Contact Us
              </Link>
              <a href="tel:+6408008084448" className="btn btn-outline-white text-lg px-8 py-4">
                Call 0800 808 448
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Add the FAQ Accordion component */}
      <FAQAccordion />
    </MainLayout>
  );
} 