import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-16 md:py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/hero-bg.svg"
            alt="Kings Electrical Team"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Kings Electrical
            </h1>
            <p className="text-lg md:text-xl mb-8">
              From humble beginnings to becoming Christchurch's most trusted electrical team – discover the Kings Electrical difference.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-color mb-6">
                Founded in 2009 in Christchurch, Kings Electrical began with just three dedicated electricians who shared a vision: to provide electrical services that went beyond the standard, delivering exceptional quality and genuine care for every client.
              </p>
              <p className="text-lg text-gray-color mb-6">
                Today, we've grown into a nationwide contracting business with over 50 skilled professionals serving Auckland, Hamilton, and Christchurch. Despite our growth, we've maintained our local focus – each branch is locally owned and managed by professional registered electricians who truly understand their community and its unique needs.
              </p>
              <p className="text-lg text-gray-color">
                What sets us apart isn't just our technical expertise – it's our unwavering commitment to exceeding expectations on every job, whether it's a simple residential repair or a complex commercial installation.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/electrician-team.svg"
                alt="Kings Electrical Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Values</h2>
            <p className="text-lg text-gray-color max-w-3xl mx-auto">
              At Kings Electrical, we're driven by a set of core principles that guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Excellence in Everything</h3>
              <p className="text-gray-color">
                We don't just aim to meet industry standards – we strive to exceed them. Every connection, every installation, and every repair is performed with meticulous attention to detail and a commitment to excellence that's unmatched in the industry.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Customer-First Approach</h3>
              <p className="text-gray-color">
                Your needs and satisfaction are our top priority. We take the time to listen, understand your specific requirements, and deliver solutions that are tailored to your unique situation. We're not just service providers – we're partners in ensuring your electrical systems work perfectly for you.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation & Expertise</h3>
              <p className="text-gray-color">
                The electrical industry is constantly evolving, and so are we. Our team stays at the forefront of industry developments, bringing innovative solutions and cutting-edge techniques to every project. With Kings Electrical, you're not just getting today's standards – you're getting tomorrow's innovations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/electrician-team.svg"
                alt="Kings Electrical Technicians"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Kings Electrical Difference</h2>
              <p className="text-lg text-gray-color mb-6">
                In a market filled with options, why do homeowners and businesses throughout New Zealand consistently choose Kings Electrical? The answer lies in our unique approach to electrical services:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-2 mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Guaranteed Workmanship</h3>
                    <p className="text-gray-color">
                      We stand firmly behind every job we complete with our comprehensive workmanship guarantee. When we leave your property, you can rest assured that the work has been done right – or we'll come back and fix it at no additional cost.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-2 mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Local Expertise, National Standards</h3>
                    <p className="text-gray-color">
                      Each of our branches combines the personal touch and community knowledge of a local business with the resources, training, and capabilities of a national organization. This unique blend ensures you receive service that's both personalized and professional.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-2 mr-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">24/7 Emergency Support</h3>
                    <p className="text-gray-color">
                      Electrical emergencies don't wait for business hours, and neither do we. Our round-the-clock emergency service ensures that help is always just a phone call away, providing peace of mind for our clients day and night.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Expert Team</h2>
            <p className="text-lg text-gray-color max-w-3xl mx-auto">
              Behind every successful project is our team of dedicated professionals who bring expertise, passion, and commitment to every job.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/electrician-team.svg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">John Smith</h3>
                <p className="text-primary font-medium mb-4">Master Electrician, Christchurch Branch</p>
                <p className="text-gray-color">
                  With over 15 years of experience in both residential and commercial electrical work, John leads our Christchurch team with expertise and dedication.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/electrician-team.svg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
                <p className="text-primary font-medium mb-4">Heat Pump Specialist, Auckland Branch</p>
                <p className="text-gray-color">
                  Sarah's specialized knowledge in heat pump systems has helped countless Auckland homes achieve optimal comfort and energy efficiency.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 relative">
                <Image
                  src="/images/electrician-team.svg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">David Williams</h3>
                <p className="text-primary font-medium mb-4">Commercial Project Manager, Hamilton Branch</p>
                <p className="text-gray-color">
                  David's strategic approach to large-scale commercial projects ensures efficient execution and exceptional results for our business clients.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-color mb-6">
              Our team consists of over 50 skilled professionals across New Zealand, each bringing unique expertise and the same commitment to quality that defines Kings Electrical.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Service CTA */}
      <section className="py-12 md:py-16 bg-secondary text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold">24/7 Emergency Electrical Service</h2>
              <p className="text-lg mt-2">
                Electrical problems don't wait for business hours, and neither do we.
              </p>
            </div>
            <a 
              href="tel:+6408008084448" 
              className="btn btn-white text-primary text-lg px-8 py-4 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 0800 808 448
            </a>
          </div>
        </div>
      </section>

      {/* Get a Quote CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-light p-8 md:p-12 rounded-lg shadow-md">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Kings Electrical Difference?</h2>
              <p className="text-lg text-gray-color mb-8">
                Whether you need a simple repair or a complete electrical solution for your home or business, our team is ready to deliver the quality service you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact#quote-form" className="btn btn-primary text-lg px-8 py-4">
                  Get a Free Quote
                </Link>
                <Link href="/services" className="btn btn-outline text-lg px-8 py-4">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 