import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Kings Electrical</h1>
        <p>Professional electrical services for residential and commercial clients</p>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>Trusted Electrical Services <span className={styles.accent}>Since 2005</span></h2>
          <p className={styles.heroSubtitle}>Licensed professionals serving Christchurch with quality electrical solutions</p>
          
          <div className={styles.trustBadges}>
            <div className={styles.badge}>
              <span className={styles.number}>500+</span>
              <span className={styles.label}>Happy Customers</span>
            </div>
            <div className={styles.badge}>
              <span className={styles.number}>15+</span>
              <span className={styles.label}>Years Experience</span>
            </div>
            <div className={styles.badge}>
              <span className={styles.number}>100%</span>
              <span className={styles.label}>Satisfaction</span>
            </div>
          </div>
          
          <div className={styles.ctaGroup}>
            <Link href="/contact" className={styles.buttonPrimary}>
              Get a Free Quote
            </Link>
            <Link href="tel:+6433771546" className={styles.buttonSecondary}>
              Call Us: 03 377 1546
            </Link>
          </div>
          
          <div className={styles.urgentBanner}>
            <p>⚡ <strong>Emergency Service Available</strong> - 24/7 Response</p>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h3>Residential Electrical</h3>
            <p>Complete electrical services for homes and apartments</p>
            <Link href="/contact?service=residential" className={styles.serviceLink}>
              Learn More →
            </Link>
          </div>
          <div className={styles.serviceCard}>
            <h3>Commercial Electrical</h3>
            <p>Solutions for offices, retail, and industrial spaces</p>
            <Link href="/contact?service=commercial" className={styles.serviceLink}>
              Learn More →
            </Link>
          </div>
          <div className={styles.serviceCard}>
            <h3>Emergency Repairs</h3>
            <p>24/7 emergency electrical repair services</p>
            <Link href="/contact?service=emergency" className={styles.serviceLink}>
              Learn More →
            </Link>
          </div>
          <div className={styles.serviceCard}>
            <h3>Smart Home Integration</h3>
            <p>Installation of smart home electrical systems</p>
            <Link href="/contact?service=smarthome" className={styles.serviceLink}>
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2>What Our Customers Say</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>"Kings Electrical responded quickly to our emergency call. The electrician was professional, knowledgeable, and fixed the issue on the first visit. Highly recommended!"</p>
            <div className={styles.author}>
              <div className={styles.avatar}>JD</div>
              <div>
                <p className={styles.name}>John Davidson</p>
                <p className={styles.location}>Merivale, Christchurch</p>
              </div>
            </div>
          </div>
          
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>"We had Kings Electrical install our heat pump system. They provided expert advice on the best unit for our space and completed the installation efficiently. Our home is now comfortable year-round."</p>
            <div className={styles.author}>
              <div className={styles.avatar}>SW</div>
              <div>
                <p className={styles.name}>Sarah Wilson</p>
                <p className={styles.location}>Riccarton, Christchurch</p>
              </div>
            </div>
          </div>
          
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>"As a business owner, I need reliable electrical contractors. Kings Electrical has maintained our office systems for years with exceptional service and fair pricing. They're our go-to electricians."</p>
            <div className={styles.author}>
              <div className={styles.avatar}>MT</div>
              <div>
                <p className={styles.name}>Mike Thompson</p>
                <p className={styles.location}>CBD, Christchurch</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimonialCta}>
          <Link href="/contact" className={styles.buttonPrimary}>
            Get Your Free Quote Today
          </Link>
        </div>
      </section>

      <section className={styles.processSection}>
        <h2>How It Works</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <h3>Contact Us</h3>
            <p>Reach out via phone or our contact form for a free consultation</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3>Get a Quote</h3>
            <p>Receive a detailed, no-obligation quote for your electrical needs</p>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3>Expert Service</h3>
            <p>Our licensed electricians complete your project with precision</p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Kings Electrical. All rights reserved.</p>
        <nav>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faqs">FAQs</Link>
        </nav>
      </footer>
    </div>
  );
} 