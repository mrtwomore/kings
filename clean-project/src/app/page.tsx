import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-20 md:py-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/hero-bg.svg"
            alt="Electrician working"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional Electrical Services in Christchurch
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Trusted commercial & domestic electrical solutions with guaranteed workmanship. Certified electricians and heat pump specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#quote-form" className="btn btn-primary text-lg px-8 py-4">
                Get a Free Quote
              </Link>
              <Link href="/services" className="btn btn-outline">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-color max-w-3xl mx-auto">
              We provide a comprehensive range of electrical services for both commercial and residential properties in Christchurch.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image
                  src="/images/commercial-electrical.svg"
                  alt="Commercial Electrical"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Commercial Electrical</h3>
                <p className="text-gray-color mb-4">
                  Complete electrical solutions for businesses, offices, retail spaces, and industrial facilities.
                </p>
                <Link href="/services/commercial-electrical" className="text-primary font-medium flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image
                  src="/images/residential-electrical.svg"
                  alt="Residential Electrical"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Residential Electrical</h3>
                <p className="text-gray-color mb-4">
                  Reliable electrical services for homes, from repairs and installations to complete rewiring.
                </p>
                <Link href="/services/residential-electrical" className="text-primary font-medium flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image
                  src="/images/heat-pump-solutions.svg"
                  alt="Heat Pump Solutions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Heat Pump Solutions</h3>
                <p className="text-gray-color mb-4">
                  Expert heat pump installation, servicing, and repairs for optimal comfort and energy efficiency.
                </p>
                <Link href="/services/heat-pump-solutions" className="text-primary font-medium flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Kings Electrical?</h2>
              <p className="text-lg text-gray-color mb-8">
                With over 15 years of experience serving Christchurch, we pride ourselves on delivering exceptional electrical services with a focus on quality, reliability, and customer satisfaction.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-2 mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Licensed & Certified</h3>
                    <p className="text-gray-color">
                      Our team consists of fully licensed and certified electricians with extensive training and experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-2 mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Prompt & Reliable</h3>
                    <p className="text-gray-color">
                      We value your time and always strive to provide prompt service with clear communication.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-2 mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Workmanship</h3>
                    <p className="text-gray-color">
                      We stand behind our work with guarantees and use only high-quality materials and equipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images/electrician-team.svg"
                alt="Kings Electrical Team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - NEW */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-8 lg:mb-0 lg:mr-8 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg md:text-xl">
                Contact our team today for a free, no-obligation quote on your electrical project. We'll respond within 24 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#quote-form" className="btn btn-white text-primary text-lg px-8 py-4">
                Get a Free Quote
              </Link>
              <a href="tel:+6408008084448" className="btn btn-outline-white text-lg px-8 py-4">
                Call 0800 808 448
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* ... existing code ... */}

      {/* Quick Contact Form - NEW */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us Today</h2>
              <p className="text-lg text-gray-color mb-8">
                Have a question or need a quote? Fill out this quick form and we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary text-white p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Phone</h3>
                    <p className="text-lg">
                      <a href="tel:+6408008084448" className="text-dark hover:text-primary">
                        0800 808 448
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary text-white p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                    <p className="text-lg">
                      <a href="mailto:info@kingselectrical.co.nz" className="text-dark hover:text-primary">
                        info@kingselectrical.co.nz
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="quickEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="quickEmail"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="quickService" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Required*
                  </label>
                  <select
                    id="quickService"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="commercial">Commercial Electrical</option>
                    <option value="residential">Residential Electrical</option>
                    <option value="heatpump">Heat Pump Solutions</option>
                    <option value="emergency">Emergency Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="quickMessage" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="quickMessage"
                    name="message"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn btn-primary py-3 px-6 text-lg font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {/* ... existing code ... */}
    </MainLayout>
  );
}
