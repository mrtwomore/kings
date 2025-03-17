'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQsPage() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeCategory, setActiveCategory] = useState('General');

  // Simple FAQ data structure
  const categories = [
    'General',
    'Residential Services',
    'Heat Pumps',
    'Commercial Services',
    'Pricing'
  ];

  const faqs = {
    'General': [
      {
        question: 'How do I know if I need to upgrade my electrical panel?',
        answer: 'Signs that indicate you might need an electrical panel upgrade include frequent circuit breaker trips, flickering lights, buzzing sounds from outlets or switches, or if your home is over 20 years old with the original panel. If you\'re adding major appliances or renovating, an upgrade may also be necessary to handle the increased load.'
      },
      {
        question: 'How quickly can you respond to service calls?',
        answer: 'We typically respond to service calls within 24-48 hours for non-emergency situations. For emergency services, we aim to have a technician on-site as quickly as possible, often within hours.'
      }
    ],
    'Residential Services': [
      {
        question: 'Do you offer electrical safety inspections for homes?',
        answer: 'Yes, we provide comprehensive electrical safety inspections for homes of all ages. Our inspections include checking wiring, outlets, panels, and identifying potential hazards to ensure your home\'s electrical system is safe and up to code.'
      },
      {
        question: 'Can you install EV charging stations at residential properties?',
        answer: 'Absolutely! We specialize in installing EV charging stations for residential properties. We'll assess your electrical system to ensure it can handle the additional load and recommend the best charging solution for your needs.'
      }
    ],
    'Heat Pumps': [
      {
        question: 'What types of heat pumps do you install?',
        answer: 'We install air-source heat pumps, ground-source (geothermal) heat pumps, and ductless mini-split heat pumps. We'll help you choose the right system based on your home's layout, your heating and cooling needs, and your budget.'
      },
      {
        question: 'How efficient are heat pumps compared to traditional heating systems?',
        answer: 'Heat pumps are significantly more efficient than traditional heating systems. They can provide 3-4 times more energy than they consume, resulting in lower energy bills and reduced carbon emissions. Modern heat pumps work effectively even in colder climates.'
      }
    ],
    'Commercial Services': [
      {
        question: 'Do you handle commercial electrical maintenance contracts?',
        answer: 'Yes, we offer customized maintenance contracts for commercial properties. These include regular inspections, preventative maintenance, priority emergency service, and compliance checks to minimize downtime and ensure your business operations run smoothly.'
      },
      {
        question: 'Can you upgrade lighting systems in commercial buildings?',
        answer: 'We specialize in commercial lighting upgrades, including LED conversions, smart lighting systems, and energy-efficient solutions that reduce operating costs while improving light quality and worker productivity.'
      }
    ],
    'Pricing': [
      {
        question: 'Do you offer free estimates?',
        answer: 'Yes, we provide free estimates for most electrical projects. One of our qualified electricians will assess your needs and provide a detailed quote before any work begins.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept credit/debit cards, bank transfers, and checks. For larger projects, we can discuss payment plans to accommodate your budget needs.'
      }
    ]
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <p className="text-lg mb-8">Find answers to common questions about our electrical and heat pump services.</p>
      
      {/* Category buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeCategory === category 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'
            }`}
            onClick={() => {
              setActiveCategory(category);
              setActiveIndex(-1);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* FAQ accordions */}
      <div className="mb-8">
        {faqs[activeCategory]?.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 mb-4">
            <button
              className="flex justify-between items-center w-full text-left py-4 px-2 focus:outline-none"
              onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="text-2xl">
                {index === activeIndex ? '−' : '+'}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                index === activeIndex ? 'max-h-96 py-4' : 'max-h-0'
              }`}
            >
              <p className="px-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Call to action */}
      <div className="bg-gray-100 p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-2">Still Have Questions?</h2>
        <p className="mb-4">Our team is ready to help you with any specific concerns.</p>
        <Link href="/contact" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Contact Us
        </Link>
      </div>
    </main>
  );
} 