import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from "@/components/layout/MainLayout";

export default function Resources() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-16 md:py-20">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Electrical Knowledge Center
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Empowering you with the information you need to make informed decisions about your electrical needs.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Category 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image
                  src="/images/resource-electrical-systems.jpg"
                  alt="Understanding Electrical Systems"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-6">Electrical Systems</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-color mb-4">
                  Learn the basics of residential and commercial electrical systems, including wiring, panels, and safety devices.
                </p>
                <Link href="/resources/electrical-systems" className="text-primary font-medium flex items-center">
                  Explore Topics
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Category 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image
                  src="/images/resource-energy-efficiency.jpg"
                  alt="Energy Efficiency"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-6">Energy Efficiency</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-color mb-4">
                  Discover how to reduce your energy consumption, lower your bills, and minimize your environmental impact.
                </p>
                <Link href="/resources/energy-efficiency" className="text-primary font-medium flex items-center">
                  Explore Topics
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Category 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image
                  src="/images/resource-safety.jpg"
                  alt="Safety Guidelines"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-6">Safety Guidelines</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-color mb-4">
                  Essential safety information every property owner should know to prevent electrical hazards.
                </p>
                <Link href="/resources/safety-guidelines" className="text-primary font-medium flex items-center">
                  Explore Topics
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Category 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image
                  src="/images/resource-product-guides.jpg"
                  alt="Product Guides"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-6">Product Guides</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-color mb-4">
                  Guides to help you select the right electrical products and heat pumps for your specific needs.
                </p>
                <Link href="/resources/product-guides" className="text-primary font-medium flex items-center">
                  Explore Topics
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Articles</h2>
            <p className="text-lg text-gray-color max-w-3xl mx-auto">
              Our most popular guides and articles to help you understand electrical systems and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/images/article-panel-upgrade.jpg"
                  alt="Signs You Need an Electrical Panel Upgrade"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-medium">Electrical Systems</span>
                <h3 className="text-xl font-bold my-2">Signs You Need an Electrical Panel Upgrade</h3>
                <p className="text-gray-color mb-4">
                  Learn the warning signs that indicate your electrical panel may need to be upgraded for safety and efficiency.
                </p>
                <Link href="/resources/electrical-systems/panel-upgrade-signs" className="text-primary font-medium flex items-center">
                  Read Article
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/images/article-heat-pump.jpg"
                  alt="Choosing the Right Heat Pump"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-medium">Product Guides</span>
                <h3 className="text-xl font-bold my-2">Choosing the Right Heat Pump for Your Home</h3>
                <p className="text-gray-color mb-4">
                  A comprehensive guide to selecting the perfect heat pump based on your home size, climate, and heating needs.
                </p>
                <Link href="/resources/product-guides/heat-pump-selection" className="text-primary font-medium flex items-center">
                  Read Article
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/images/article-energy-saving.jpg"
                  alt="10 Ways to Reduce Your Electricity Bill"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-medium">Energy Efficiency</span>
                <h3 className="text-xl font-bold my-2">10 Ways to Reduce Your Electricity Bill</h3>
                <p className="text-gray-color mb-4">
                  Practical tips and strategies to lower your energy consumption and save money on your monthly electricity bills.
                </p>
                <Link href="/resources/energy-efficiency/reduce-electricity-bill" className="text-primary font-medium flex items-center">
                  Read Article
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/resources/all-articles" className="btn btn-primary px-8 py-4">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Video Resources */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Resources</h2>
            <p className="text-lg text-gray-color max-w-3xl mx-auto">
              Watch our educational videos to learn more about electrical systems, maintenance, and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative bg-gray-800 flex items-center justify-center">
                <div className="absolute inset-0 opacity-60 bg-center bg-cover" style={{ backgroundImage: "url('/images/video-thumbnail-1.jpg')" }}></div>
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">How to Check Your Electrical Panel</h3>
                <p className="text-gray-color mb-4">
                  A step-by-step guide to safely inspecting your electrical panel and identifying potential issues.
                </p>
                <Link href="/resources/videos/check-electrical-panel" className="text-primary font-medium flex items-center">
                  Watch Video
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative bg-gray-800 flex items-center justify-center">
                <div className="absolute inset-0 opacity-60 bg-center bg-cover" style={{ backgroundImage: "url('/images/video-thumbnail-2.jpg')" }}></div>
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Heat Pump Maintenance Tips</h3>
                <p className="text-gray-color mb-4">
                  Learn how to properly maintain your heat pump to ensure optimal performance and longevity.
                </p>
                <Link href="/resources/videos/heat-pump-maintenance" className="text-primary font-medium flex items-center">
                  Watch Video
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Video 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative bg-gray-800 flex items-center justify-center">
                <div className="absolute inset-0 opacity-60 bg-center bg-cover" style={{ backgroundImage: "url('/images/video-thumbnail-3.jpg')" }}></div>
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Electrical Safety in Your Home</h3>
                <p className="text-gray-color mb-4">
                  Essential safety tips to protect your family from common electrical hazards in your home.
                </p>
                <Link href="/resources/videos/home-electrical-safety" className="text-primary font-medium flex items-center">
                  Watch Video
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
                <p className="text-lg text-gray-color mb-8">
                  Subscribe to our newsletter to receive the latest electrical tips, guides, and industry updates directly to your inbox.
                </p>
                <form className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                    <button
                      type="submit"
                      className="btn btn-primary px-8 py-3 whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </div>
                  <div className="text-sm text-gray-color">
                    We respect your privacy. Unsubscribe at any time.
                  </div>
                </form>
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="/images/newsletter-image.jpg"
                  alt="Stay updated with electrical tips"
                  fill
                  className="object-cover rounded-lg"
                />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Professional Advice?</h2>
              <p className="text-lg md:text-xl">
                Our team of certified electricians is ready to answer your questions and provide personalized solutions.
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
    </MainLayout>
  );
} 