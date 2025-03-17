import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

// This is a sample data function - in a real app, this would fetch from an API or database
const getProjectData = (id: string) => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Commercial Office Rewiring",
      category: "Commercial Electrical",
      description: "Complete electrical rewiring for a 3-story office building in central Christchurch, including new lighting systems and power distribution.",
      fullDescription: `
        <p>Kings Electrical was contracted to perform a complete electrical rewiring for this 3-story commercial office building in central Christchurch. The project involved:</p>
        <ul>
          <li>Removal of outdated electrical systems</li>
          <li>Installation of new power distribution boards</li>
          <li>Complete rewiring of all three floors</li>
          <li>Installation of energy-efficient LED lighting throughout</li>
          <li>Implementation of smart lighting controls</li>
          <li>Upgrading of safety systems including emergency lighting</li>
        </ul>
        <p>The project was completed over a 3-week period with minimal disruption to the daily operations of the businesses in the building. Our team worked after hours and on weekends to ensure business continuity.</p>
        <p>The new electrical system has significantly improved energy efficiency, reducing power consumption by approximately 30% while providing better lighting and more reliable power throughout the building.</p>
      `,
      image: "/images/projects/commercial-office.jpg",
      gallery: [
        "/images/projects/commercial-office-1.jpg",
        "/images/projects/commercial-office-2.jpg",
        "/images/projects/commercial-office-3.jpg",
      ],
      client: "Christchurch Business Center",
      location: "Central Christchurch",
      completionDate: "March 2023",
      duration: "3 weeks",
      services: ["Electrical Rewiring", "Lighting Installation", "Power Distribution"]
    },
    {
      id: 2,
      title: "Residential Heat Pump Installation",
      category: "Heat Pump Solutions",
      description: "Installation of multiple heat pumps for a large family home, providing efficient heating and cooling throughout all living areas.",
      fullDescription: `
        <p>This project involved the design and installation of a comprehensive heat pump solution for a large family home in Christchurch. The homeowners were looking for an energy-efficient way to heat and cool their home throughout the year.</p>
        <ul>
          <li>Conducted a thorough assessment of the home's heating and cooling requirements</li>
          <li>Designed a multi-unit heat pump system to cover all living areas</li>
          <li>Installed 3 high-efficiency Mitsubishi heat pumps</li>
          <li>Completed all necessary electrical work</li>
          <li>Configured the system for optimal performance</li>
          <li>Provided comprehensive training for the homeowners on system operation</li>
        </ul>
        <p>The installation was completed in just 2 days with minimal disruption to the family. The new system provides consistent temperature control throughout the home, with individual units that can be controlled separately for different zones.</p>
        <p>The homeowners have reported significant energy savings compared to their previous heating solution, with improved comfort throughout both winter and summer months.</p>
      `,
      image: "/images/projects/residential-heat-pump.jpg",
      gallery: [
        "/images/projects/residential-heat-pump-1.jpg",
        "/images/projects/residential-heat-pump-2.jpg",
        "/images/projects/residential-heat-pump-3.jpg",
      ],
      client: "Johnson Family Residence",
      location: "Merivale, Christchurch",
      completionDate: "January 2023",
      duration: "2 days",
      services: ["Heat Pump Installation", "Electrical Wiring", "System Configuration"]
    },
    // Additional projects would be defined here
  ];

  // Find the project with the matching ID
  const project = projects.find(p => p.id.toString() === id);
  return project;
};

// Use the correct type for Next.js App Router pages
export default function ProjectDetail({
  params,
}: {
  params: { id: string };
}) {
  const project = getProjectData(params.id);

  // If project not found
  if (!project) {
    return (
      <MainLayout>
        <div className="container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-8">The project you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link href="/projects" className="btn btn-primary">
            Back to Projects
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Project Header */}
      <section className="bg-secondary text-white py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <Link href="/projects" className="inline-flex items-center text-light hover:text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Projects
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
            </div>
            <span className="inline-block px-4 py-2 bg-primary text-white rounded-full mt-4 md:mt-0">
              {project.category}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <p className="text-lg">{project.description}</p>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-light">Client:</h3>
                <p>{project.client}</p>
              </div>
              <div>
                <h3 className="font-semibold text-light">Location:</h3>
                <p>{project.location}</p>
              </div>
              <div>
                <h3 className="font-semibold text-light">Completed:</h3>
                <p>{project.completionDate}</p>
              </div>
              <div>
                <h3 className="font-semibold text-light">Duration:</h3>
                <p>{project.duration}</p>
              </div>
              <div>
                <h3 className="font-semibold text-light">Services:</h3>
                <ul className="list-disc list-inside">
                  {project.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-light">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Project Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Main Project Image */}
            <div className="relative h-64 md:h-80 col-span-full mb-6 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Main Image Placeholder</span>
              {/* Uncomment when images are available */}
              {/* <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-lg"
              /> */}
            </div>
            
            {/* Gallery Images */}
            {project.gallery.map((image, index) => (
              <div key={index} className="relative h-48 md:h-64 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500">Gallery Image Placeholder</span>
                {/* Uncomment when images are available */}
                {/* <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                /> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Project Details</h2>
          
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-light">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Similar Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* We would normally filter projects by category and exclude current project */}
            {/* For demo purposes, just showing 3 placeholder cards */}
            {[1, 2, 3].map((num) => (
              <div key={num} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Image Placeholder</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Related Project {num}</h3>
                  <p className="text-gray-color mb-4">Brief description of a similar project in the same category.</p>
                  <Link href={`/projects/${num}`} className="text-primary font-medium flex items-center">
                    View Details
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

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
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