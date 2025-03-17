import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

export default function AboutUs() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-16 md:py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/about-hero-bg.jpg"
            alt="Kings Electrical Team"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Since 2008, Kings Electrical has been committed to delivering exceptional electrical services with integrity, expertise, and reliability throughout Christchurch and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Values</h2>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-gray-color mb-6">
                  To provide safe, efficient, and innovative electrical solutions that exceed our customers' expectations while maintaining the highest standards of workmanship and customer service.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-2 mr-4 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">Safety</h4>
                      <p className="text-gray-color">
                        We prioritize the well-being of our clients and team in every project we undertake.
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
                      <h4 className="text-xl font-bold mb-1">Quality</h4>
                      <p className="text-gray-color">
                        We deliver excellence without compromise, using only the best materials and techniques.
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
                      <h4 className="text-xl font-bold mb-1">Integrity</h4>
                      <p className="text-gray-color">
                        We operate with honesty and transparency in all our client interactions and business practices.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary rounded-full p-2 mr-4 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">Innovation</h4>
                      <p className="text-gray-color">
                        We embrace cutting-edge technologies and stay current with industry advancements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative h-[400px] md:h-[600px]">
              <Image
                src="/images/about-values.jpg"
                alt="Kings Electrical Values"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-gray-color max-w-3xl mx-auto">
              Our team of certified electricians brings decades of combined experience to every project, ensuring the highest quality workmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-64 relative">
                <Image
                  src="/images/team-member-1.jpg"
                  alt="John King - Founder & Master Electrician"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">John King</h3>
                <p className="text-primary font-medium mb-3">Founder & Master Electrician</p>
                <p className="text-gray-color mb-4">
                  With over 25 years of experience, John founded Kings Electrical with a vision to provide exceptional electrical services to the Christchurch community.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-64 relative">
                <Image
                  src="/images/team-member-2.jpg"
                  alt="Sarah Johnson - Operations Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-primary font-medium mb-3">Operations Manager</p>
                <p className="text-gray-color mb-4">
                  Sarah ensures our day-to-day operations run smoothly, coordinating our team to deliver projects on time and to the highest standards.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-64 relative">
                <Image
                  src="/images/team-member-3.jpg"
                  alt="Mike Thompson - Lead Heat Pump Specialist"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Mike Thompson</h3>
                <p className="text-primary font-medium mb-3">Lead Heat Pump Specialist</p>
                <p className="text-gray-color mb-4">
                  Mike specializes in heat pump installations and maintenance, bringing 15 years of expertise to ensure optimal comfort and efficiency.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Why Choose Kings Electrical?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-primary text-5xl font-bold mb-4">15+</div>
              <p className="text-xl font-semibold">Years of Experience</p>
            </div>
            
            <div className="text-center">
              <div className="text-primary text-5xl font-bold mb-4">1,000+</div>
              <p className="text-xl font-semibold">Satisfied Customers</p>
            </div>
            
            <div className="text-center">
              <div className="text-primary text-5xl font-bold mb-4">5,000+</div>
              <p className="text-xl font-semibold">Projects Completed</p>
            </div>
            
            <div className="text-center">
              <div className="text-primary text-5xl font-bold mb-4">100%</div>
              <p className="text-xl font-semibold">Satisfaction Guarantee</p>
            </div>
          </div>
          
          <div className="bg-light p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Certifications & Affiliations</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="h-24 relative">
                  <Image
                    src="/images/certification-1.png"
                    alt="Master Electricians"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <div className="h-24 relative">
                  <Image
                    src="/images/certification-2.png"
                    alt="Electrical Workers Registration Board"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <div className="h-24 relative">
                  <Image
                    src="/images/certification-3.png"
                    alt="Heat Pump Association"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="text-center">
                <div className="h-24 relative">
                  <Image
                    src="/images/certification-4.png"
                    alt="Site Safe NZ"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Links Section */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Helpful Resources</h2>
              <p className="text-lg text-gray-color mb-8">
                We believe in empowering our customers with knowledge. Explore our resources to learn more about electrical systems, safety, and making informed decisions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-2 mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Frequently Asked Questions</h3>
                    <p className="text-gray-color mb-3">
                      Find answers to common questions about electrical services, hiring contractors, and maintaining your electrical systems.
                    </p>
                    <Link href="/faqs" className="text-primary font-medium flex items-center">
                      View FAQs
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-2 mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Electrical Knowledge Center</h3>
                    <p className="text-gray-color mb-3">
                      Explore our comprehensive guides on electrical systems, energy efficiency, safety, and product comparisons.
                    </p>
                    <Link href="/resources" className="text-primary font-medium flex items-center">
                      Browse Resources
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-2 mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Project Showcase</h3>
                    <p className="text-gray-color mb-3">
                      View our portfolio of completed projects to see the quality of our work and get inspiration for your own electrical needs.
                    </p>
                    <Link href="/projects" className="text-primary font-medium flex items-center">
                      View Projects
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images/resources-image.jpg"
                alt="Electrical Resources"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-8 lg:mb-0 lg:mr-8 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
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
    </MainLayout>
  );
} 