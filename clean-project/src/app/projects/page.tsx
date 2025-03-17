import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

export default function Projects() {
  // Sample project data - in a real application, this would come from a database or API
  const projects = [
    {
      id: 1,
      title: "Commercial Office Rewiring",
      category: "Commercial Electrical",
      description: "Complete electrical rewiring for a 3-story office building in central Christchurch, including new lighting systems and power distribution.",
      image: "/images/projects/commercial-office.jpg",
      client: "Christchurch Business Center",
      completionDate: "March 2023",
      services: ["Electrical Rewiring", "Lighting Installation", "Power Distribution"]
    },
    {
      id: 2,
      title: "Residential Heat Pump Installation",
      category: "Heat Pump Solutions",
      description: "Installation of multiple heat pumps for a large family home, providing efficient heating and cooling throughout all living areas.",
      image: "/images/projects/residential-heat-pump.jpg",
      client: "Johnson Family Residence",
      completionDate: "January 2023",
      services: ["Heat Pump Installation", "Electrical Wiring", "System Configuration"]
    },
    {
      id: 3,
      title: "Retail Store Lighting Upgrade",
      category: "Commercial Electrical",
      description: "Energy-efficient lighting upgrade for a retail chain store, reducing power consumption while improving customer experience.",
      image: "/images/projects/retail-lighting.jpg",
      client: "Fashion Outlet NZ",
      completionDate: "November 2022",
      services: ["LED Lighting", "Energy Efficiency Audit", "Electrical Installation"]
    },
    {
      id: 4,
      title: "New Home Electrical Installation",
      category: "Residential Electrical",
      description: "Complete electrical installation for a newly built 4-bedroom home, including smart home integration and security systems.",
      image: "/images/projects/new-home-electrical.jpg",
      client: "Williams New Build",
      completionDate: "February 2023",
      services: ["New Construction Wiring", "Smart Home Integration", "Security System Installation"]
    },
    {
      id: 5,
      title: "Restaurant Kitchen Upgrade",
      category: "Commercial Electrical",
      description: "Electrical upgrade for a commercial kitchen, including power distribution for new appliances and safety improvements.",
      image: "/images/projects/restaurant-kitchen.jpg",
      client: "Harbor View Restaurant",
      completionDate: "December 2022",
      services: ["Commercial Kitchen Wiring", "Safety Compliance", "Power Distribution"]
    },
    {
      id: 6,
      title: "Multi-Unit Heat Pump System",
      category: "Heat Pump Solutions",
      description: "Design and installation of a multi-unit heat pump system for an apartment complex, providing efficient climate control for all residents.",
      image: "/images/projects/multi-unit-heat-pump.jpg",
      client: "Riverside Apartments",
      completionDate: "April 2023",
      services: ["Multi-Unit Heat Pump Design", "System Installation", "Efficiency Optimization"]
    }
  ];

  // Filter functions for project categories
  const categories = ["All", "Commercial Electrical", "Residential Electrical", "Heat Pump Solutions"];

  return (
    <MainLayout>
      {/* Page Header */}
      <section className="bg-secondary text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-3xl">
            Explore our portfolio of completed electrical and heat pump projects across Christchurch. 
            From commercial installations to residential solutions, we deliver quality workmanship on every job.
          </p>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="py-12 bg-light">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-white hover:bg-primary hover:text-white transition-colors border border-gray-200"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Image Placeholder</span>
                  </div>
                  {/* Uncomment when images are available */}
                  {/* <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  /> */}
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm bg-light text-primary rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-color mb-4">{project.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <span className="font-semibold mr-2">Client:</span>
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold mr-2">Completed:</span>
                      <span>{project.completionDate}</span>
                    </div>
                  </div>
                  <Link 
                    href={`/projects/${project.id}`} 
                    className="text-primary font-medium flex items-center hover:underline"
                  >
                    View Project Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-color max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-light p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="mb-4 italic">
                &quot;Kings Electrical did an outstanding job on our office rewiring project. Their team was professional, efficient, and completed the work with minimal disruption to our business operations.&quot;
              </p>
              <div>
                <p className="font-bold">Michael Thompson</p>
                <p className="text-sm text-gray-color">Operations Manager, Christchurch Business Center</p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-light p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="mb-4 italic">
                &quot;We couldn&apos;t be happier with our new heat pump system. The team at Kings Electrical provided expert advice on the best solution for our home and the installation was quick and tidy.&quot;
              </p>
              <div>
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-sm text-gray-color">Homeowner, Christchurch</p>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-light p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-primary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="mb-4 italic">
                &quot;The lighting upgrade Kings Electrical completed for our store has made a huge difference. Our products look better, customers stay longer, and we&apos;ve seen a reduction in our power bills.&quot;
              </p>
              <div>
                <p className="font-bold">David Wilson</p>
                <p className="text-sm text-gray-color">Store Manager, Fashion Outlet NZ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and quote on your electrical or heat pump project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-primary hover:bg-light">
              Contact Us
            </Link>
            <a href="tel:+6408008084448" className="btn bg-transparent border-2 border-white hover:bg-white hover:text-primary">
              Call 0800 808 448
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 